"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        {" "}
        <p>
          {" "}
          At Resilient Brands, we empower startup founders and business leaders
          to manage their brand before others define it. To ensure the best experience
          with our platform and services, please read the following terms and conditions.{" "}
        </p>{" "}
        <p>
          {" "}
          These are the Terms of Service for Resilient Brands LLC, a Delaware
          limited liability company (&ldquo;Resilient Brands&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). These Terms apply when
          you visit our website at resilientbrands.com (our &ldquo;Website&rdquo;), use our brand management platform,
          access our AI-powered provider search tools, utilize our comparison services,
          participate in our educational programs, or otherwise interact with us (the
          &ldquo;Services&rdquo;).{" "}
        </p>{" "}
        <p>
          {" "}
          Please be aware that these Terms constitute a binding legal agreement
          between you and Resilient Brands. You agree you are responsible for
          your use of our platform, including provider searches, brand assessments,
          and any recommendations or matches we provide. You may use our platform and
          services only in compliance with these Terms and all
          applicable laws. Your use of our Services constitutes your acceptance
          of these Terms and our Privacy Policy. If you do not agree to all of
          these Terms of Service, you may not use our Services in any way.{" "}
        </p>{" "}
        <p>
          {" "}
          When using specific Resilient Brands features such as provider matching,
          brand maturity assessments, or connecting with third-party service providers,
          you may be subject to additional terms that are made available at the time
          of use.{" "}
        </p>{" "}
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to the Terms",
    content: (
      <p>
        {" "}
        Resilient Brands reserves the right to update these Terms at any time.
        When we make changes, we will provide you with notice through our
        website or other reasonable means. Your continued use of our website or
        services following any changes serves as your agreement to the updated
        Terms.{" "}
      </p>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance",
    content: (
      <p>
        {" "}
        By interacting with us, accessing or using the website and services,
        creating an account, or using our platform features, you acknowledge, represent, and warrant that you
        have read, understood, and accept these Terms in their entirety,
        including our Privacy Policy, Platform Usage Guidelines, Provider Matching Terms,
        and any subscription or payment terms. You also
        agree to comply with all applicable laws and regulations, including
        local laws of your jurisdiction.{" "}
      </p>
    ),
  },
  {
    id: "eligibility",
    title: "User Eligibility",
    content: (
      <p>
        {" "}
        By accepting these Terms through your use of our website or interacting
        with us, you certify that you are at least 18 years of age or are at
        least 13 years of age and are under the supervision of a parent or legal
        guardian that will be bound to these Terms on your behalf. If you are
        under the age of 13, you are not permitted to use our website. If you
        are a parent or legal guardian who has agreed to be bound by these Terms
        on behalf of a child between the ages of 13 and 18, you agree to be
        fully responsible for such child’s use of the website or their
        interactions with Resilient Brands, including all financial charges and
        legal liability that such child may incur.{" "}
      </p>
    ),
  },
  {
    id: "representations",
    title: "Your Representations & Warranties",
    content: (
      <>
        {" "}
        <p>
          {" "}
          You agree to use the website and services in a manner consistent with
          all applicable laws and regulations. You represent, warrant, and
          agree:{" "}
        </p>{" "}
        <ol>
          {" "}
          <li>
            You meet all age and eligibility requirements expressed in these
            Terms and Conditions;
          </li>{" "}
          <li>
            {" "}
            You will only use our website for lawful purposes, and will not use
            our website for sending, storing, or distributing any unlawful
            material, or for fraudulent purposes;{" "}
          </li>{" "}
          <li>
            You will not use our services to cause nuisance, annoyance, or
            inconvenience;
          </li>{" "}
          <li>
            You will not impair or harm the proper operation of our website and
            services;
          </li>{" "}
          <li>
            {" "}
            You will not copy, or distribute any content contained within our
            website without written permission from us;{" "}
          </li>{" "}
          <li>
            {" "}
            You will only use our website and services for your own use and will
            not resell any aspect of our website and services to a third
            party;{" "}
          </li>{" "}
          <li>
            You own or control all rights in and to any information or property
            shared with us;
          </li>{" "}
          <li>
            You will provide us with whatever proof of identity we may
            reasonably request;
          </li>{" "}
          <li>
            You have not previously been suspended or removed from our website;
            and
          </li>{" "}
          <li>
            Your use of our website and services complies with applicable laws
            and regulations.
          </li>{" "}
        </ol>{" "}
      </>
    ),
  },
  {
    id: "access",
    title: "Access and Conditions of Use",
    content: (
      <>
        {" "}
        <p>
          {" "}
          You may use our website and interact with us only for lawful purposes
          and in accordance with these Terms and Conditions. You agree:{" "}
        </p>{" "}
        <ol>
          {" "}
          <li>You will not exploit or harm minors;</li>{" "}
          <li>You will not transmit any advertising or spam material;</li>{" "}
          <li>
            You will not impersonate Resilient Brands or any person or entity
            associated with us;
          </li>{" "}
          <li>
            {" "}
            You will not engage in any conduct that challenges anyone&apos;s use
            or enjoyment of the website or services.{" "}
          </li>{" "}
          <li>
            {" "}
            You will not use the website for any illegal, harmful or otherwise
            inappropriate purpose, as is determined by us in our sole
            discretion, and such behavior is a material breach of our agreement
            with you and shall result in the immediate termination of your
            membership with and authorization to use Our Service{" "}
          </li>{" "}
        </ol>{" "}
        <p>
          {" "}
          We reserve the right to temporarily or permanently modify or
          discontinue our website or services with or without notice. We reserve
          the right to investigate and take appropriate legal action against
          anyone who violates these Terms.{" "}
        </p>{" "}
      </>
    ),
  },
  {
    id: "content-trademarks",
    title: "Service Content, Software, and Trademarks",
    content: (
      <>
        {" "}
        <p>
          {" "}
          You acknowledge and agree that our website and services may contain
          content or features (“website content”) that are protected by
          copyright, patent, trademark, trade secret, or other proprietary
          rights and laws. Except as expressly authorized by Resilient Brands,
          you agree not to modify, copy, frame, scrape, rent, lease, loan, sell,
          distribute, or create derivative works based on our website or website
          content, in whole or in part, except that the foregoing does not apply
          to your own feedback that you legally upload to our website. You may
          not access our website through robots, scraping tools, or similar
          data-gathering or extraction methods.{" "}
        </p>{" "}
        <p>
          {" "}
          The Resilient Brands name and logos are pending trademarks and service
          marks of Resilient Brands (collectively the “Resilient Brands
          Trademarks”). Other company, product, and service names and logos used
          and displayed via our website may be trademarks or service marks of
          their respective owners who may or may not endorse or be affiliated
          with or connected to Resilient Brands. Nothing in these Terms or in
          our website should be construed as granting, by implication, estoppel,
          or otherwise, any license or right to use any of Resilient Brands
          Pending Trademarks displayed through our website, without our prior
          written permission in each instance. All goodwill generated from the
          use of Resilient Brands Pending Trademarks will inure to our exclusive
          benefit. You are prohibited from modifying, copying, distributing,
          transmitting, displaying, publishing, selling, licensing, creating
          derivative works or using any content available on or through our
          Website for commercial or public purposes. Unauthorized use of our
          Website may give rise to a claim for damages and/or may constitute a
          criminal offense.{" "}
        </p>{" "}
      </>
    ),
  },
  {
    id: "third-party-material",
    title: "Third-Party Material",
    content: (
      <p>
        {" "}
        Under no circumstances will Resilient Brands be liable in any way for
        any content or materials of any third parties (including users),
        including, but not limited to, for any errors or omissions in any
        content, or for any loss or damage of any kind incurred as a result of
        the use of any such content or information. You acknowledge that
        Resilient Brands does not have a duty to pre-screen content, but that
        Resilient Brands and its designees will have the right in their sole
        discretion to refuse or remove any content that is available via our
        website. This includes the right to remove any content that violates
        these Terms or is deemed by Resilient Brands to be objectionable. You
        agree that you must evaluate and bear all risks associated with the use
        of any content, including any reliance on the accuracy, completeness, or
        usefulness of such content.{" "}
      </p>
    ),
  },
  {
    id: "feedback",
    title: "Feedback Transmitted Through Our Services",
    content: (
      <>
        {" "}
        <p>
          {" "}
          You acknowledge and agree that any questions, comments, suggestions,
          ideas, feedback, and other information about our Services
          (“feedback”), provided by you to Resilient Brands is non-confidential,
          and Resilient Brands will be entitled to the unrestricted use and
          dissemination of this feedback for any purpose, commercial or
          otherwise, without acknowledgment or compensation to you.{" "}
        </p>{" "}
        <p>
          {" "}
          You acknowledge and agree that Resilient Brands may preserve content
          and may also disclose feedback or content if required to do so by law
          or in the good faith belief that such preservation or disclosure is
          reasonably necessary to: (a) comply with legal process, applicable
          laws, or government requests; (b) enforce these Terms; (c) respond to
          claims that any content violates the rights of third parties; or (d)
          protect the rights, property, or personal safety of Resilient Brands,
          its users, and the public. You understand that the technical
          processing and transmission of our website, including your content,
          may involve (i) transmissions over various networks; and (ii) changes
          to conform and adapt to technical requirements of connecting networks
          or devices.{" "}
        </p>{" "}
      </>
    ),
  },
  {
    id: "third-party-websites",
    title: "Third-Party Websites",
    content: (
      <p>
        {" "}
        Our website may provide links or other access to other third party sites
        and resources on the Internet. Resilient Brands has no control over such
        sites and resources and Resilient Brands is not responsible for and does
        not endorse such sites and resources.{" "}
      </p>
    ),
  },
  {
    id: "third-party-advertising",
    title: "Third-Party Advertising & Marketing",
    content: (
      <>
        {" "}
        <p>
          {" "}
          Resilient Brands may employ third-party advertising and marketing to
          deliver ads, information, and other promotions to you, both through
          our website and other mechanisms. By agreeing to our Terms, you agree
          to receive such advertising and marketing from Resilient Brands and
          our partners. If you do not wish to receive such advertising, you may
          notify us at the contact information provided below. Resilient Brands
          may compile and release information regarding you and your use of our
          website on an anonymous basis as part of a customer profile or similar
          report or analysis. It is your responsibility to take reasonable
          precautions in all actions and interactions with any third party you
          interact with through our website.{" "}
        </p>{" "}
      </>
    ),
  },
  {
    id: "as-is",
    title: "As-Is-Basis",
    content: (
      <>
        {" "}
        <p className="font-bold uppercase">
          {" "}
          Your use of our website and services and your interactions with us is
          at your sole risk for which we shall not be liable. Our website and
          services are provided on an “as is” and “as available” basis.
          Resilient Brands expressly disclaims all warranties of any kind,
          whether express, implied, or statutory, including, but not limited to,
          the implied warranties of merchantability, fitness for a particular
          purpose, title, and non-infringement.{" "}
        </p>{" "}
        <p>
          {" "}
          Resilient Brands makes no warranty that (i) our website or other
          services will meet your requirements, (ii) our website and services
          will be uninterrupted, timely, secure, or error-free, (iii) the
          results that may be obtained from the use of our website and services
          will be accurate or reliable, or (iv) the quality of any products,
          services, information, or other material purchased or obtained by you
          through our website will meet your expectations. It shall be your own
          responsibility to ensure that any products, services or information
          available through our service meet your specific requirements. You
          agree to assume all risks and liability related to the Resilient
          Brands products, whether used individually or in combination with
          other products.{" "}
        </p>{" "}
      </>
    ),
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    content: (
      <p>
        {" "}
        You expressly understand and agree that Resilient Brands will not be
        liable for any indirect, incidental, special, consequential, exemplary
        damages, or damages for loss of profits including but not limited to,
        damages for loss of goodwill, use, data, or other intangible losses
        (even if Resilient Brands has been advised of the possibility of such
        damages), whether based on contract, tort, negligence, strict liability,
        or otherwise, resulting from: (i) the use or the inability to use our
        services or any content; (ii) the cost of procurement of substitute
        goods and services, or resulting from any goods, data, information, or
        services purchased or obtained, messages received, or transactions
        entered into through or from our services; (iii) unauthorized access to
        or alteration of your content, transmissions, or data; (iv) statements
        or conduct of any third party on our services; or (v) any other matter
        relating to our services or content. In no event will Resilient Brands’s
        total liability to you for all damages, losses, or causes of action
        exceed the amount you have paid Resilient Brands in the last six (6)
        months, or, if greater, one hundred U.S. dollars (US $100). Some
        jurisdictions do not allow the exclusion of certain warranties or the
        limitation or exclusion of liability for incidental or consequential
        damages. Accordingly, some of the above limitations set forth above may
        not apply to you. If you are dissatisfied with any portion of our
        services or with these terms, your sole and exclusive remedy is to
        discontinue use of our services.{" "}
      </p>
    ),
  },
  {
    id: "exclusion-damages",
    title: "Exclusion of Damages",
    content: (
      <>
        {" "}
        <p>
          {" "}
          To the extent permitted by applicable law, in no event shall the
          company, its employees, directors, agents, or affiliates be liable for
          any indirect incidental, special, consequential, or punitive damages,
          or any loss of profits or revenues whether incurred directly or
          indirectly, or any loss of data, use, goodwill, or other intangible
          losses resulting from:{" "}
        </p>{" "}
        <ul>
          {" "}
          <li>Your access to or use of the website.</li>{" "}
          <li>
            Any interruption or cessation of transmission to or from the
            website.
          </li>{" "}
          <li>
            {" "}
            Any bugs, viruses, trojan horses, or the like that may be
            transmitted to or through the website by any third party.{" "}
          </li>{" "}
          <li>
            {" "}
            Any errors or omissions in any content for any loss or damage
            incurred as a result of the use of any content posted, emailed
            transmissions, or otherwise made available via the website.{" "}
          </li>{" "}
        </ul>{" "}
      </>
    ),
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    content: (
      <p>
        {" "}
        We shall not be liable for any failure or delay in the performance of
        our obligations under these terms due to causes beyond our reasonable
        control, including, but not limited to, acts of God, terrorism, war,
        riots, embargoes, acts of civil or military authorities, fire, floods,
        accidents, strikes, or shortages of transportation facilities, fuel,
        energy, labor, or materials.{" "}
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: (
      <p>
        {" "}
        You agree to indemnify, defend, and hold harmless Resilient Brands, its
        directors, employees, agents, and affiliates from and against any and
        all claims, liabilities, damages, losses, costs, expenses, or fees
        (including reasonable attorneys’ fees) arising out of or relating to
        your violation of these terms or your use of the website and
        interactions with us, your violation of these Terms, or your violation
        of any rights of another.{" "}
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    content: (
      <p>
        {" "}
        Your use of the website and services is also governed by our Privacy
        Policy. By using our website and services, you consent to the collection
        and use of your information in accordance with our Privacy Policy.{" "}
      </p>
    ),
  },
  {
    id: "termination",
    title: "Right to Terminate",
    content: (
      <p>
        {" "}
        We reserve the right to terminate or suspend your access to the website
        and services at our sole discretion, without prior notice, for any
        violation of these terms and conditions or for any other reason.{" "}
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>
        {" "}
        Terms will be governed by the laws of Delaware without regard to
        conflict of law provisions. With respect to any disputes not subject to
        the dispute resolution procedures set forth above, you agree to submit
        to the personal and exclusive jurisdiction of the local courts located
        in New Castle County, Delaware and the federal courts located in the
        United States District Court for the State of Delaware. Resilient Brands
        may assign or transfer these Terms, in whole or in part, without
        restriction.{" "}
      </p>
    ),
  },
  {
    id: "waiver-severability",
    title: "No Waiver & Severability",
    content: (
      <p>
        {" "}
        The failure of Resilient Brands to exercise or enforce any right or
        provision of these Terms will not constitute a waiver of such right or
        provision. In case any provision of these Terms is found by a court of
        competent jurisdiction to be invalid, the validity, legality, and
        enforceability of the remaining provisions will not be affected and
        remain in full effect. The parties agree that the court should endeavor
        to give effect to the parties’ intentions as reflected in the
        provision.{" "}
      </p>
    ),
  },
  {
    id: "claim-limitations",
    title: "Claim Limitations",
    content: (
      <p>
        {" "}
        You agree that regardless of any statute or law to the contrary, any
        claim or cause of action arising out of the use of our Services or these
        Terms must be filed within one (1) year after such claim or cause of
        action arose or be forever barred.{" "}
      </p>
    ),
  },
  {
    id: "platform-usage",
    title: "Platform Usage and Provider Matching",
    content: (
      <>
        <p>
          {" "}
          When using our platform to search for and compare service providers,
          you understand that:{" "}
        </p>
        <ol>
          <li>
            Resilient Brands provides information and matching services but does not
            endorse any specific provider;
          </li>
          <li>
            You are responsible for conducting your own due diligence before engaging
            with any matched providers;
          </li>
          <li>
            Any agreements you enter into with third-party providers are solely between
            you and those providers;
          </li>
          <li>
            Our AI-powered recommendations are based on available data and algorithms
            that may not capture all relevant factors for your specific needs;
          </li>
          <li>
            Provider availability, pricing, and services may change without notice.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "ai-content",
    title: "AI-Generated Content and Recommendations",
    content: (
      <>
        <p>
          {" "}
          Our platform uses artificial intelligence to generate provider matches,
          brand assessments, and recommendations. You acknowledge that:{" "}
        </p>
        <ol>
          <li>
            AI-generated content is provided for informational purposes only and
            should not be relied upon as professional advice;
          </li>
          <li>
            Results may contain inaccuracies or may not be suitable for your
            specific circumstances;
          </li>
          <li>
            You should independently verify all AI-generated recommendations
            before making business decisions;
          </li>
          <li>
            Resilient Brands is not liable for decisions made based on
            AI-generated content or recommendations.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "subscription",
    title: "Subscription and Payment Terms",
    content: (
      <>
        <p>
          {" "}
          If you subscribe to our platform services:{" "}
        </p>
        <ol>
          <li>
            You agree to pay all applicable fees as described at the time
            of purchase;
          </li>
          <li>
            Subscriptions automatically renew unless cancelled before the
            renewal date;
          </li>
          <li>
            You may cancel your subscription at any time through your
            account settings;
          </li>
          <li>
            Refunds are provided only as required by law or at our sole
            discretion;
          </li>
          <li>
            We reserve the right to change pricing with reasonable notice.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <address className="not-italic">
        {" "}
        Resilient Brands LLC <br />8 The Green, STE A<br /> Dover, DE 19901{" "}
        <br />
        United States
        <br /><br />
        <a
          href="mailto:support@resilientbrands.com"
          className="text-primary hover:underline"
        >
          {" "}
          support@resilientbrands.com{" "}
        </a>
        <br />
        <a
          href="mailto:legal@resilientbrands.com"
          className="text-primary hover:underline"
        >
          {" "}
          legal@resilientbrands.com{" "}
        </a>{" "}
      </address>
    ),
  },
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const observer = useRef<IntersectionObserver | null>(null);

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
      observer.current?.disconnect();
      observer.current = null;
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
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
                    className={cn(
                      "text-sm font-medium transition-colors block",
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
                Terms of Use
              </h1>
              <p className="text-slate-500 text-lg">Effective 31 Jul 2025</p>
            </div>

            <article className="prose max-w-none">
              {sections.map((section, index) => (
                <div key={section.id}>
                  <section id={section.id} className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold !mb-4">
                      {section.title}
                    </h2>
                    <div className="text-slate-600">{section.content}</div>
                  </section>
                  {index < sections.length - 1 && (
                    <hr className="my-10 md:my-12" />
                  )}
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
