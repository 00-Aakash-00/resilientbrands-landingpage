#!/usr/bin/env node

// Mobile Responsiveness Test using Puppeteer for Resilient Brands Landing Page
const fs = require('fs').promises;
const path = require('path');

// Device configurations for testing
const devices = {
  'iPhone 12': { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true },
  'iPhone SE': { width: 375, height: 667, deviceScaleFactor: 2, isMobile: true },
  'Samsung Galaxy S20': { width: 360, height: 800, deviceScaleFactor: 3, isMobile: true },
  'iPad': { width: 768, height: 1024, deviceScaleFactor: 2, isMobile: false },
  'Pixel 5': { width: 393, height: 851, deviceScaleFactor: 2.75, isMobile: true },
};

class ResponsivenessTestPuppeteer {
  constructor() {
    this.results = {
      summary: {},
      issues: [],
      screenshots: []
    };
    this.baseUrl = 'http://localhost:3001';
    this.screenshotDir = './screenshots';
  }

  async init() {
    // Create screenshots directory
    try {
      await fs.mkdir(this.screenshotDir, { recursive: true });
      console.log(`📁 Created screenshots directory: ${this.screenshotDir}`);
    } catch (error) {
      console.log(`📁 Screenshots directory already exists: ${this.screenshotDir}`);
    }
  }

  async testDevice(deviceName, deviceConfig) {
    console.log(`\n🔍 Testing ${deviceName} (${deviceConfig.width}x${deviceConfig.height})`);
    
    let browser, page;
    const deviceResults = {
      device: deviceName,
      viewport: `${deviceConfig.width}x${deviceConfig.height}`,
      issues: [],
      screenshots: []
    };

    try {
      // Try to launch puppeteer
      let puppeteer;
      try {
        puppeteer = await import('puppeteer');
        puppeteer = puppeteer.default;
      } catch (err) {
        console.log('Installing puppeteer...');
        const { execSync } = require('child_process');
        execSync('npm install puppeteer --no-save', { stdio: 'inherit' });
        puppeteer = require('puppeteer');
      }

      browser = await puppeteer.launch({ 
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      page = await browser.newPage();
      
      await page.setViewport({
        width: deviceConfig.width,
        height: deviceConfig.height,
        deviceScaleFactor: deviceConfig.deviceScaleFactor,
        isMobile: deviceConfig.isMobile
      });

      if (deviceConfig.isMobile) {
        await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1');
      }

      // Navigate to the page
      await page.goto(this.baseUrl, { waitUntil: 'networkidle2', timeout: 60000 });
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for animations

      // Take full page screenshot
      const fullPagePath = `${this.screenshotDir}/${deviceName.replace(/\s+/g, '-')}-fullpage.png`;
      await page.screenshot({ 
        path: fullPagePath, 
        fullPage: true 
      });
      deviceResults.screenshots.push({
        type: 'full-page',
        path: fullPagePath
      });

      // Test sections
      await this.testSections(page, deviceName, deviceResults, deviceConfig);
      
      // Check for common responsive issues
      await this.checkCommonIssues(page, deviceName, deviceResults, deviceConfig);

      console.log(`  ✅ Completed testing ${deviceName} - ${deviceResults.issues.length} issues found`);

    } catch (error) {
      console.error(`❌ Error testing ${deviceName}: ${error.message}`);
      deviceResults.issues.push({
        type: 'navigation-error',
        severity: 'high',
        message: `Failed to test device: ${error.message}`
      });
    } finally {
      if (browser) {
        await browser.close();
      }
    }

    return deviceResults;
  }

  async testSections(page, deviceName, deviceResults, deviceConfig) {
    const sections = [
      { name: 'hero', selector: 'section:first-of-type, [data-section="hero"], .hero', description: 'Hero Section' },
      { name: 'navigation', selector: 'nav, [data-nav], header', description: 'Navigation Bar' },
      { name: 'tech-solutions', selector: '[class*="grid"], [data-section="tech-solutions"]', description: 'Tech Solutions Grid' }
    ];

    for (const section of sections) {
      try {
        console.log(`  📱 Testing ${section.description}...`);
        
        // Check if element exists
        const element = await page.$(section.selector);
        
        if (!element) {
          // Try alternative selectors
          let found = false;
          const alternativeSelectors = [
            'section',
            'div[class*="section"]',
            'main > div',
            'body > div > section'
          ];
          
          for (const altSelector of alternativeSelectors) {
            const elements = await page.$$(altSelector);
            if (elements.length > 0) {
              // Take screenshot of first few sections
              for (let i = 0; i < Math.min(3, elements.length); i++) {
                const screenshotPath = `${this.screenshotDir}/${deviceName.replace(/\s+/g, '-')}-section-${i + 1}.png`;
                await elements[i].screenshot({ path: screenshotPath });
                deviceResults.screenshots.push({
                  type: 'section',
                  section: `section-${i + 1}`,
                  path: screenshotPath
                });
              }
              found = true;
              break;
            }
          }
          
          if (!found) {
            deviceResults.issues.push({
              type: 'element-not-found',
              section: section.name,
              severity: 'medium',
              message: `${section.description} not found with selector: ${section.selector}`
            });
          }
          continue;
        }

        // Scroll to the section
        await element.scrollIntoView();
        await new Promise(resolve => setTimeout(resolve, 500));

        // Take section screenshot
        const screenshotPath = `${this.screenshotDir}/${deviceName.replace(/\s+/g, '-')}-${section.name}.png`;
        await element.screenshot({ path: screenshotPath });
        deviceResults.screenshots.push({
          type: 'section',
          section: section.name,
          path: screenshotPath
        });

        // Get section dimensions
        const boundingBox = await element.boundingBox();
        if (boundingBox) {
          await this.analyzeSection(page, section, deviceName, deviceResults, deviceConfig, boundingBox);
        }

      } catch (error) {
        console.error(`    ❌ Error testing ${section.description}: ${error.message}`);
        deviceResults.issues.push({
          type: 'section-test-error',
          section: section.name,
          severity: 'medium',
          message: `Error testing ${section.description}: ${error.message}`
        });
      }
    }
  }

  async analyzeSection(page, section, deviceName, deviceResults, deviceConfig, boundingBox) {
    const viewportHeight = deviceConfig.height;
    
    switch (section.name) {
      case 'hero':
        if (boundingBox.height > viewportHeight * 0.9) {
          deviceResults.issues.push({
            type: 'hero-height',
            section: section.name,
            severity: 'medium',
            message: `Hero section height (${Math.round(boundingBox.height)}px) is too tall for viewport (${viewportHeight}px)`
          });
        }
        break;

      case 'navigation':
        // Check if navigation is responsive
        if (boundingBox.width > deviceConfig.width) {
          deviceResults.issues.push({
            type: 'navigation-overflow',
            section: section.name,
            severity: 'high',
            message: `Navigation width (${Math.round(boundingBox.width)}px) exceeds viewport width (${deviceConfig.width}px)`
          });
        }
        break;

      case 'tech-solutions':
        // Check grid layout
        if (deviceConfig.isMobile && boundingBox.height > viewportHeight * 2) {
          deviceResults.issues.push({
            type: 'content-too-long',
            section: section.name,
            severity: 'low',
            message: `Tech solutions section is very long on mobile (${Math.round(boundingBox.height)}px). Consider shortening for better UX.`
          });
        }
        break;
    }
  }

  async checkCommonIssues(page, deviceName, deviceResults, deviceConfig) {
    console.log(`  🔍 Checking common responsive issues...`);

    try {
      // Check for horizontal scrolling
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const viewportWidth = deviceConfig.width;
      
      if (scrollWidth > viewportWidth + 10) {
        deviceResults.issues.push({
          type: 'horizontal-scroll',
          severity: 'high',
          message: `Page has horizontal scrolling. Content width (${scrollWidth}px) exceeds viewport width (${viewportWidth}px)`
        });
      }

      // Check button sizes for mobile
      if (deviceConfig.isMobile) {
        const buttonSizes = await page.evaluate(() => {
          const buttons = document.querySelectorAll('button, [role="button"], a[class*="button"], a[class*="btn"]');
          const smallButtons = [];
          buttons.forEach((btn, index) => {
            const rect = btn.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44)) {
              smallButtons.push({
                index: index + 1,
                width: Math.round(rect.width),
                height: Math.round(rect.height)
              });
            }
          });
          return smallButtons.slice(0, 5); // Limit to first 5
        });

        buttonSizes.forEach(button => {
          deviceResults.issues.push({
            type: 'button-size',
            severity: 'medium',
            message: `Button ${button.index} is too small for mobile (${button.width}x${button.height}px). Minimum recommended size is 44x44px`
          });
        });
      }

      // Check for text that might be too small
      const smallTexts = await page.evaluate(() => {
        const elements = document.querySelectorAll('*');
        const issues = [];
        elements.forEach((el) => {
          if (el.children.length === 0 && el.textContent && el.textContent.trim().length > 20) {
            const style = window.getComputedStyle(el);
            const fontSize = parseFloat(style.fontSize);
            if (fontSize < 16) {
              issues.push({
                fontSize,
                text: el.textContent.trim().substring(0, 50)
              });
            }
          }
        });
        return issues.slice(0, 3); // Limit to first 3 issues
      });

      if (deviceConfig.isMobile) {
        smallTexts.forEach((textIssue) => {
          deviceResults.issues.push({
            type: 'small-text',
            severity: 'low',
            message: `Text may be too small on mobile (${textIssue.fontSize}px): "${textIssue.text}..."`
          });
        });
      }

      // Take additional screenshots of problematic areas
      if (deviceResults.issues.length > 0) {
        // Screenshot of buttons
        const buttons = await page.$$('button, [role="button"]');
        if (buttons.length > 0) {
          const buttonsPath = `${this.screenshotDir}/${deviceName.replace(/\s+/g, '-')}-buttons.png`;
          await buttons[0].screenshot({ path: buttonsPath });
          deviceResults.screenshots.push({
            type: 'buttons',
            section: 'ui-elements',
            path: buttonsPath
          });
        }
      }

    } catch (error) {
      console.error(`    ❌ Error checking common issues: ${error.message}`);
    }
  }

  async generateReport(allResults) {
    console.log('\n📊 MOBILE RESPONSIVENESS TEST REPORT');
    console.log('=====================================\n');

    const report = {
      testDate: new Date().toISOString(),
      totalDevices: allResults.length,
      totalIssues: allResults.reduce((sum, result) => sum + result.issues.length, 0),
      devices: allResults
    };

    // Summary by device
    console.log('📱 DEVICE SUMMARY:');
    allResults.forEach(result => {
      const issueCount = result.issues.length;
      const status = issueCount === 0 ? '✅' : issueCount < 3 ? '⚠️' : '❌';
      console.log(`${status} ${result.device} (${result.viewport}): ${issueCount} issues`);
    });

    // Issues by severity
    const issuesBySeverity = {
      high: [],
      medium: [],
      low: []
    };

    allResults.forEach(result => {
      result.issues.forEach(issue => {
        issuesBySeverity[issue.severity].push({
          device: result.device,
          ...issue
        });
      });
    });

    console.log('\n🚨 ISSUES BY SEVERITY:');
    Object.entries(issuesBySeverity).forEach(([severity, issues]) => {
      if (issues.length > 0) {
        const icon = severity === 'high' ? '🔴' : severity === 'medium' ? '🟡' : '🟠';
        console.log(`\n${icon} ${severity.toUpperCase()} (${issues.length} issues):`);
        issues.forEach((issue, index) => {
          console.log(`  ${index + 1}. [${issue.device}] ${issue.message}`);
        });
      }
    });

    // Screenshots summary
    console.log('\n📸 SCREENSHOTS CAPTURED:');
    allResults.forEach(result => {
      console.log(`\n${result.device}:`);
      result.screenshots.forEach(screenshot => {
        console.log(`  - ${screenshot.type === 'section' ? screenshot.section : screenshot.type}: ${screenshot.path}`);
      });
    });

    // Recommendations
    console.log('\n💡 RECOMMENDATIONS:');
    const recommendations = this.generateRecommendations(allResults);
    recommendations.forEach((rec, index) => {
      console.log(`  ${index + 1}. ${rec}`);
    });

    // Save detailed report to file
    const reportPath = './mobile-responsiveness-report.json';
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n💾 Detailed report saved to: ${reportPath}`);

    return report;
  }

  generateRecommendations(allResults) {
    const recommendations = [];
    const allIssues = allResults.flatMap(result => result.issues);
    
    const hasHorizontalScroll = allIssues.some(issue => issue.type === 'horizontal-scroll');
    const hasSmallButtons = allIssues.some(issue => issue.type === 'button-size');
    const hasTallHero = allIssues.some(issue => issue.type === 'hero-height');
    const hasSmallText = allIssues.some(issue => issue.type === 'small-text');

    if (hasHorizontalScroll) {
      recommendations.push("Fix horizontal scrolling issues by ensuring all content fits within the viewport width");
    }
    if (hasSmallButtons) {
      recommendations.push("Increase button sizes to meet minimum touch target size of 44x44px on mobile devices");
    }
    if (hasTallHero) {
      recommendations.push("Consider reducing hero section height on mobile devices for better viewport utilization");
    }
    if (hasSmallText) {
      recommendations.push("Increase font sizes for better readability on mobile devices (minimum 16px recommended)");
    }

    if (recommendations.length === 0) {
      recommendations.push("Great job! No major responsive design issues detected across tested devices");
    }

    return recommendations;
  }

  async run() {
    console.log('🚀 Starting Mobile Responsiveness Test for Resilient Brands Landing Page');
    console.log(`🌐 Testing URL: ${this.baseUrl}`);
    console.log(`📱 Testing ${Object.keys(devices).length} devices\n`);

    await this.init();
    const allResults = [];

    // Test each device
    for (const [deviceName, deviceConfig] of Object.entries(devices)) {
      try {
        const result = await this.testDevice(deviceName, deviceConfig);
        allResults.push(result);
        
      } catch (error) {
        console.error(`❌ Failed to test ${deviceName}: ${error.message}`);
        allResults.push({
          device: deviceName,
          viewport: `${deviceConfig.width}x${deviceConfig.height}`,
          issues: [{
            type: 'test-failure',
            severity: 'high',
            message: `Test failed: ${error.message}`
          }],
          screenshots: []
        });
      }
    }

    // Generate final report
    await this.generateReport(allResults);
    
    console.log('\n✨ Test completed! Check the screenshots and report for detailed results.');
    console.log('🔍 Review the screenshots folder and mobile-responsiveness-report.json for complete analysis.');
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  const test = new ResponsivenessTestPuppeteer();
  test.run().catch(console.error);
}

module.exports = ResponsivenessTestPuppeteer;