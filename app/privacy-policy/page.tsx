"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "info-collection", title: "Information Collection and Use" },
  { id: "info-disclosure", title: "Information Disclosure" },
  { id: "info-transfer", title: "Transfer and Storage of Information" },
  { id: "email-marketing", title: "Email Marketing" },
  { id: "cookies-analytics", title: "Cookies, Analytics, & Advertising" },
  { id: "security", title: "Security" },
  { id: "user-content", title: "User Generated Content" },
  { id: "third-party-links", title: "Third-Party Links & Platforms" },
  { id: "state-rights", title: "U.S. State Privacy Rights" },
  { id: "eu-rights", title: "EU, UK, & Switzerland Privacy Rights" },
  { id: "submitting-requests", title: "Submitting Rights Requests" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const observer = useRef<IntersectionObserver | null>(null);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
          ?.target.id;
        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <div className="container mx-auto py-8 px-4 md:py-12 md:px-6">
        <div className="mb-10">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-16">
          <nav className="hidden lg:block sticky top-24 self-start">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
              On this page
            </h3>
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleLinkClick(e, section.id)}
                    className={cn(
                      "text-sm font-medium transition-colors block cursor-pointer",
                      activeSection === section.id
                        ? "text-primary font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-slate-500 text-lg">
                Effective Date: 31 Jul 2025
              </p>
            </div>

            <article className="prose max-w-none">
              <section id="introduction" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">Introduction</h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    Resilient Brands LLC, a Delaware limited liability company
                    (hereinafter known as &ldquo;Resilient Brands&rdquo;, &ldquo;us&rdquo;, &ldquo;we&rdquo; or &ldquo;our&rdquo;)
                    is the sole owner of the information collected on this site.
                    This Privacy Policy applies to all our interactions with
                    you, including when you visit our website at
                    https://www.resilientbrands.com, use our brand management platform,
                    access our provider comparison tools, utilize our AI-powered search features,
                    request professional services, participate in our educational programs,
                    or when you otherwise provide information to us. Our Privacy Policy describes our
                    collection of information during your interactions with our
                    services, and the rights and choices you have regarding your
                    information.
                  </p>
                  <p>
                    At Resilient Brands, we are committed to protecting your privacy
                    while helping you manage your brand and digital presence effectively.
                    We understand that as startup founders and business leaders, 
                    your data security and privacy are paramount to your success.
                  </p>
                  <p>
                    This Privacy Policy applies to information gathered through
                    our website, our brand management platform, our AI-powered search tools,
                    and any related services we provide to help you build and protect
                    your digital presence.
                  </p>
                  <p>
                    We may update or change this Privacy Policy from time to
                    time. We will provide notice and post the changes on our
                    website and will indicate the effective date. Your continued
                    use of our website or our services after the changes are
                    effective constitutes your acceptance of the Privacy Policy.
                  </p>
                  <p>
                    By using our website, platform, or any of our services, you agree with
                    the terms of this Privacy Policy and our Terms of Service.
                  </p>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="info-collection" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  Information Collection and Use
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    We collect and use personal information to provide you with
                    the best brand management and provider comparison experience.
                    We specifically use information collected to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Provide you with our brand management platform services,
                      including AI-powered provider searches, comparison tools,
                      and personalized recommendations for your tech stack;
                    </li>
                    <li>
                      Match you with trusted service providers in areas such as
                      Brand Performance (SEO, marketing, design), Security & IT
                      (penetration testing, managed services), and Compliance
                      (audits, policy generation, controls);
                    </li>
                    <li>
                      Generate brand maturity assessments and identify outcomes
                      tailored to your business needs and growth stage;
                    </li>
                    <li>
                      Improve our AI algorithms, develop new features, and enhance
                      our provider matching capabilities based on user feedback
                      and usage patterns;
                    </li>
                    <li>
                      Communicate with you about relevant service providers,
                      industry insights, platform updates, and educational content
                      to help you build a resilient brand;
                    </li>
                    <li>
                      Process job applications for positions at Resilient Brands,
                      verifying qualifications as permitted by applicable law;
                    </li>
                    <li>
                      Ensure platform security, prevent fraud, and comply with
                      legal obligations while protecting your business data
                      and maintaining the integrity of our services.
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="info-disclosure" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  Information Disclosure
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    We never sell or rent your personal information. We will
                    only disclose personal Information to third parties where
                    required by law or to our personnel, or third-party service
                    providers who require such information to assist us with
                    providing our services.
                  </p>
                  <p>
                    We may also disclose personal information for the following
                    additional purposes where permitted or required by
                    applicable law. We may disclose personal information to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Our service providers who help us deliver our products and
                      services to you and for the purposes described in this
                      Privacy Policy. These service providers are required by
                      contract or law to only use or disclose the information as
                      necessary to perform services on our behalf or as
                      otherwise required by law. Although We require these third
                      parties meet our privacy and security requirements, we do
                      not control the privacy or security policies of such third
                      parties;
                    </li>
                    <li>
                      A third party in the event of a merger, transfer of
                      ownership or assets, bankruptcy, or other corporate
                      reorganization; and/or
                    </li>
                    <li>
                      Other, subsidiaries, and related affiliates acting on our
                      behalf for the purposes described in this Privacy Policy.
                    </li>
                  </ul>
                  <p>
                    We may disclose without your prior consent any personal
                    information about you or your use of our website if we
                    believe disclosure is necessary, including to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Protect and defend the rights, property, or safety of us,
                      our employees, other users of the website, or the public;
                    </li>
                    <li>Enforce our terms and conditions or other policies;</li>
                    <li>
                      Respond to a legally valid request from a competent
                      governmental authority;
                    </li>
                    <li>
                      Respond to claims that any content violates the rights of
                      third parties;
                    </li>
                    <li>
                      Correspond with law enforcement agencies, if we are
                      required to do so; and/or
                    </li>
                    <li>
                      Satisfy any applicable law, regulation, legal process, or
                      governmental request.
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="info-transfer" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  Transfer and Storage of Information
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    Information we collect about you may be transferred,
                    processed, and/or accessed by us in the United States, or
                    another country where we or our service providers operate.
                    Please be aware your personal information may be transferred
                    to, and maintained on, computers located outside of your
                    state or country where privacy laws may differ from and may
                    not be as protective as those where you live.
                  </p>
                  <p>
                    If you are located outside the United States and choose to
                    allow us to collect information about you, please be aware
                    that we may transfer your personal information to the United
                    States and process and store it there.
                  </p>
                  <p>
                    If you are located in the European Economic Area (“EEA”) or
                    other regions with laws governing data collection and use
                    that may differ from U.S. law, please note that we may
                    transfer information to a country or jurisdiction that does
                    not have the same data protection laws as your jurisdiction,
                    as disclosed in this Privacy Policy.
                  </p>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="email-marketing" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  Email Marketing
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    Resilient Brands uses Resend as our email service provider to
                    deliver important updates, educational content, and platform notifications.
                  </p>
                  <p>
                    If you have opted to receive email updates, we may contact
                    you about new provider matches, brand management insights,
                    platform features, industry trends, and updates to our
                    privacy policy or terms of service.
                  </p>
                  <p>
                    You may opt out of marketing communications at any time.
                    To do this, simply click the unsubscribe button at the
                    bottom of any email. You can also unsubscribe by sending
                    us a note at support@resilientbrands.com.
                  </p>
                  <p>
                    Please note that some messages are required service communications,
                    including provider match confirmations, platform security alerts,
                    account notifications, and legal updates. These cannot be unsubscribed from
                    while you maintain an active account.
                  </p>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="cookies-analytics" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  Cookies, Analytics, & Targeted Advertising
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    We and our third-party providers use cookies, clear
                    GIFs/pixel tags, JavaScript, local storage, log files, and
                    other mechanisms in connection with our Websites, Apps, and
                    other platforms, in order to, for example, understand how to
                    improve the customer experience, track bugs and errors,
                    provide operate, enable and improve our products, verify
                    account credentials, enable logins, track sessions,
                    personalize content, prevent fraud, and protect and secure
                    our Services, as well as for targeted marketing,
                    advertising, and analytics purposes.
                  </p>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="security" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">Security</h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    When handling your personal information, we use
                    administrative, technical, and physical safeguards designed
                    to protect your personal information from unauthorized
                    access, disclosure, alteration, or loss. However, no
                    internet transmission is ever fully secure, and we cannot
                    guarantee that information transmitted via our website will
                    remain confidential at all times.
                  </p>
                  <p>
                    We only collect information considered sensitive with your
                    consent. If any sensitive information is submitted to
                    Founder Tool via phone, we have security policies in place
                    and take steps to protect that information from unauthorized
                    disclosure.
                  </p>
                  <p>
                    Wherever we collect sensitive information online (such as
                    credit card data), that information is encrypted and
                    transmitted to us securely. You can verify this by looking
                    for a closed lock icon at the bottom of your web browser, or
                    look for &ldquo;https&rdquo; at the beginning of the address
                    of the web page.
                  </p>
                  <p>
                    While we use encryption to protect sensitive information
                    transmitted online, we also protect your information
                    offline. Only employees who need the information to perform
                    a specific job (for example, billing or customer service)
                    are granted access to personal information. The
                    computers/servers in which we store personal information are
                    kept in a secure environment.
                  </p>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="user-content" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  User Generated Content, Submissions & Photo Sharing
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    You may submit content including provider reviews, platform feedback,
                    success stories, and brand management insights
                    (collectively, &ldquo;User Submissions&rdquo;) through https://www.resilientbrands.com,
                    our platform, or directly via email. By posting or sharing User
                    Submissions that you have tagged with @resilientbrands,
                    #resilientbrands or other Resilient Brands hashtags,
                    you grant Resilient Brands and our third-party
                    service providers the perpetual,
                    irrevocable, royalty-free, fully-paid, non-exclusive,
                    transferable right to use your User
                    Submissions for educational content, case studies, and platform improvements. In
                    making a User Submission, you also agree to hold Resilient
                    Brands and any person acting on our behalf harmless from any
                    liability related to the use of your User
                    Submissions.
                  </p>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="third-party-links" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  Third-Party Links & Platforms
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    This website contains links to other sites. Please be aware
                    that we are not responsible for the content or privacy
                    practices of such other sites. We encourage our users to be
                    aware when they leave our site and to read the privacy
                    statements of any other site that collects personally
                    identifiable information.
                  </p>
                  <p>
                    Our website is built on AWS platform. To view their Privacy
                    Terms, you can visit the following link:{" "}
                    <a
                      href="https://aws.amazon.com/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://aws.amazon.com/privacy/
                    </a>
                  </p>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="state-rights" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  U.S. State Privacy Rights
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    In this section, we provide additional information to
                    certain state residents, including residents in California,
                    Colorado, Connecticut, Virginia, Utah, and other states with
                    comprehensive privacy rights about how we handle their
                    personal information, as required under certain state
                    privacy laws. This section does not address or apply to our
                    handling of publicly available information or other personal
                    information that is exempt under state data protection laws.
                  </p>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="eu-rights" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  European Union, UK, and Switzerland Privacy Rights
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    Certain laws, including but not limited to, the General Data
                    Protection Regulation (GDPR) grant you rights to control
                    your personal information. Although some of these rights
                    apply generally, certain rights will only apply to limited
                    individuals or circumstances.
                  </p>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="submitting-requests" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  Submitting Rights Requests
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    U.S. residents may submit requests regarding their personal
                    information maintained by us through one of the following
                    methods:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Online through our contact form</li>
                    <li>Through our Privacy Rights Request Form</li>
                    <li>By phone at XXX-XXX-XXXX</li>
                  </ul>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="childrens-privacy" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">
                  Children&apos;s Privacy
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    Protecting the privacy of the very young is especially
                    important. For that reason, we never collect or maintain
                    information through our Website from those we actually know
                    are under thirteen (13), and no part of Our Service is
                    structured to attract anyone under thirteen (13).
                  </p>
                </div>
              </section>

              <hr className="my-10 md:my-12" />

              <section id="contact" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold !mb-4">Contact Us</h2>
                <div className="text-slate-600 space-y-4">
                  <address className="not-italic">
                    Resilient Brands LLC
                    <br />8 The Green, STE A
                    <br />
                    Dover, DE 19901
                    <br />
                    United States
                    <br />
                    <br />
                    Email: <a
                      href="mailto:support@resilientbrands.com"
                      className="text-primary hover:underline"
                    >
                      support@resilientbrands.com
                    </a>
                    <br />
                    Privacy Inquiries: <a
                      href="mailto:privacy@resilientbrands.com"
                      className="text-primary hover:underline"
                    >
                      privacy@resilientbrands.com
                    </a>
                  </address>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
