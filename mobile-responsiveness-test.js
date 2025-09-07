#!/usr/bin/env node

// Mobile Responsiveness Test for Resilient Brands Landing Page
const { chromium } = require('playwright');
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

// Sections to test
const sections = [
  { name: 'hero', selector: '[data-testid="hero-section"], .hero-section, section:first-of-type', description: 'Hero Section' },
  { name: 'navigation', selector: 'nav, [data-testid="navigation"], .nav, header', description: 'Navigation Bar' },
  { name: 'tech-solutions', selector: '[data-testid="tech-solutions"], .tech-solutions, [class*="grid"]', description: 'Tech Solutions Grid' }
];

class ResponsivenessTest {
  constructor() {
    this.results = {
      summary: {},
      issues: [],
      screenshots: []
    };
    this.baseUrl = 'http://localhost:3003';
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
    
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: deviceConfig.width, height: deviceConfig.height },
      deviceScaleFactor: deviceConfig.deviceScaleFactor,
      isMobile: deviceConfig.isMobile,
      userAgent: deviceConfig.isMobile 
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
        : 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
    });

    const page = await context.newPage();
    const deviceResults = {
      device: deviceName,
      viewport: `${deviceConfig.width}x${deviceConfig.height}`,
      issues: [],
      screenshots: []
    };

    try {
      // Navigate to the page
      await page.goto(this.baseUrl, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2000); // Wait for animations

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

      // Test each section
      for (const section of sections) {
        await this.testSection(page, deviceName, section, deviceResults, deviceConfig);
      }

      // Check for common responsive issues
      await this.checkCommonIssues(page, deviceName, deviceResults, deviceConfig);

    } catch (error) {
      console.error(`❌ Error testing ${deviceName}: ${error.message}`);
      deviceResults.issues.push({
        type: 'navigation-error',
        severity: 'high',
        message: `Failed to load page: ${error.message}`
      });
    }

    await browser.close();
    return deviceResults;
  }

  async testSection(page, deviceName, section, deviceResults, deviceConfig) {
    try {
      console.log(`  📱 Testing ${section.description}...`);
      
      // Try to find the section element
      const element = await page.locator(section.selector).first();
      const isVisible = await element.isVisible().catch(() => false);
      
      if (!isVisible) {
        deviceResults.issues.push({
          type: 'element-not-found',
          section: section.name,
          severity: 'high',
          message: `${section.description} not found with selector: ${section.selector}`
        });
        return;
      }

      // Scroll to the section
      await element.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);

      // Take section screenshot
      const screenshotPath = `${this.screenshotDir}/${deviceName.replace(/\s+/g, '-')}-${section.name}.png`;
      await element.screenshot({ path: screenshotPath });
      deviceResults.screenshots.push({
        type: 'section',
        section: section.name,
        path: screenshotPath
      });

      // Get section dimensions and properties
      const boundingBox = await element.boundingBox();
      const computedStyle = await element.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return {
          display: style.display,
          overflow: style.overflow,
          overflowX: style.overflowX,
          overflowY: style.overflowY,
          height: style.height,
          width: style.width
        };
      });

      // Check specific issues for each section
      await this.checkSectionSpecificIssues(page, element, section, deviceName, deviceResults, deviceConfig, boundingBox, computedStyle);

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

  async checkSectionSpecificIssues(page, element, section, deviceName, deviceResults, deviceConfig, boundingBox, computedStyle) {
    const viewportHeight = deviceConfig.height;
    
    switch (section.name) {
      case 'hero':
        // Check if hero section is too tall for mobile viewport
        if (boundingBox && boundingBox.height > viewportHeight * 0.9) {
          deviceResults.issues.push({
            type: 'hero-height',
            section: section.name,
            severity: 'medium',
            message: `Hero section height (${Math.round(boundingBox.height)}px) is too tall for viewport (${viewportHeight}px). Consider reducing height for better mobile experience.`
          });
        }

        // Check for text readability
        const heroTexts = await element.locator('h1, h2, .text-4xl, .text-5xl, .text-6xl').allTextContents();
        for (const text of heroTexts) {
          if (text.length > 60 && deviceConfig.isMobile) {
            deviceResults.issues.push({
              type: 'text-length',
              section: section.name,
              severity: 'low',
              message: `Long headline text may be hard to read on mobile: "${text.substring(0, 50)}..."`
            });
          }
        }
        break;

      case 'navigation':
        // Check navigation layout
        const navItems = await element.locator('a, button').count();
        const navWidth = boundingBox ? boundingBox.width : 0;
        
        if (navItems > 5 && deviceConfig.isMobile && navWidth < deviceConfig.width * 0.8) {
          deviceResults.issues.push({
            type: 'navigation-crowded',
            section: section.name,
            severity: 'medium',
            message: `Navigation has ${navItems} items which may be crowded on mobile. Consider using a hamburger menu.`
          });
        }
        break;

      case 'tech-solutions':
        // Check grid layout
        const gridItems = await element.locator('[class*="grid"] > *').count().catch(() => 0);
        if (gridItems > 0) {
          const itemsPerRow = await page.evaluate(() => {
            const grid = document.querySelector('[class*="grid"]');
            if (!grid) return 0;
            const style = window.getComputedStyle(grid);
            const columns = style.gridTemplateColumns;
            return columns ? columns.split(' ').length : 0;
          });

          if (itemsPerRow > 2 && deviceConfig.isMobile) {
            deviceResults.issues.push({
              type: 'grid-layout',
              section: section.name,
              severity: 'medium',
              message: `Grid shows ${itemsPerRow} columns on mobile. Consider reducing to 1-2 columns for better readability.`
            });
          }
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
      
      if (scrollWidth > viewportWidth + 10) { // 10px tolerance
        deviceResults.issues.push({
          type: 'horizontal-scroll',
          severity: 'high',
          message: `Page has horizontal scrolling. Content width (${scrollWidth}px) exceeds viewport width (${viewportWidth}px).`
        });
      }

      // Check button sizes for mobile
      if (deviceConfig.isMobile) {
        const buttons = await page.locator('button, [role="button"], a[class*="button"]').all();
        for (let i = 0; i < Math.min(buttons.length, 10); i++) { // Check first 10 buttons
          const button = buttons[i];
          const boundingBox = await button.boundingBox().catch(() => null);
          if (boundingBox && (boundingBox.width < 44 || boundingBox.height < 44)) {
            deviceResults.issues.push({
              type: 'button-size',
              severity: 'medium',
              message: `Button ${i + 1} is too small for mobile (${Math.round(boundingBox.width)}x${Math.round(boundingBox.height)}px). Minimum recommended size is 44x44px.`
            });
          }
        }
      }

      // Check for text that might be too small
      const smallTexts = await page.locator('*').evaluateAll((elements) => {
        const issues = [];
        elements.forEach((el, index) => {
          if (el.children.length === 0 && el.textContent.trim()) {
            const style = window.getComputedStyle(el);
            const fontSize = parseFloat(style.fontSize);
            if (fontSize < 16 && el.textContent.trim().length > 20) {
              issues.push({
                fontSize,
                text: el.textContent.trim().substring(0, 50),
                tagName: el.tagName
              });
            }
          }
        });
        return issues.slice(0, 5); // Limit to first 5 issues
      });

      smallTexts.forEach((textIssue, index) => {
        if (deviceConfig.isMobile) {
          deviceResults.issues.push({
            type: 'small-text',
            severity: 'low',
            message: `Text may be too small on mobile (${textIssue.fontSize}px): "${textIssue.text}..."`
          });
        }
      });

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

    // Save detailed report to file
    const reportPath = './mobile-responsiveness-report.json';
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n💾 Detailed report saved to: ${reportPath}`);

    return report;
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
        
        // Brief status update
        const issueCount = result.issues.length;
        const status = issueCount === 0 ? '✅ PASS' : issueCount < 3 ? '⚠️ MINOR ISSUES' : '❌ NEEDS ATTENTION';
        console.log(`  ${status} - ${issueCount} issues found`);
        
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
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  const test = new ResponsivenessTest();
  test.run().catch(console.error);
}

module.exports = ResponsivenessTest;