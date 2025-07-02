"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CheckCircle,
  Edit,
  Users,
  Copyright,
  AlertTriangle,
  XCircle,
  Gavel,
  Mail,
} from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      icon: CheckCircle,
    },
    {
      id: "modifications-to-terms",
      title: "Modifications to Terms",
      icon: Edit,
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      icon: Users,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: Copyright,
    },
    {
      id: "disclaimer-of-warranties",
      title: "Disclaimer of Warranties",
      icon: AlertTriangle,
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      icon: XCircle,
    },
    {
      id: "termination",
      title: "Termination",
      icon: XCircle,
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Gavel,
    },
    {
      id: "contact-information",
      title: "Contact Information",
      icon: Mail,
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              TechDaily
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground"
              >
                Privacy
              </Link>
              <Link href="/terms" className="text-foreground font-medium">
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="text-center mb-12 py-8 bg-muted/30 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Please read these terms carefully before using our website.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 29, 2024 | Effective Date: January 1, 2025
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Table of Contents - Desktop Sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-8">
                <Card className="p-4">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg">Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-96">
                      <nav className="space-y-2">
                        {sections.map((section, index) => (
                          <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="flex items-center gap-2 w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted"
                          >
                            <section.icon className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{section.title}</span>
                          </button>
                        ))}
                      </nav>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Introduction */}
                <Card className="p-6">
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed">
                      Welcome to TechDaily. These Terms and Conditions ("Terms",
                      "Terms and Conditions") govern your relationship with
                      TechDaily website (the "Service") operated by TechDaily
                      ("us", "we", or "our").
                    </p>
                    <p>
                      Your access to and use of the Service is conditioned on
                      your acceptance of and compliance with these Terms. These
                      Terms apply to all visitors, users and others who access
                      or use the Service.
                    </p>
                    <p>
                      By accessing or using our Service you agree to be bound by
                      these Terms. If you disagree with any part of the terms
                      then you may not access the Service.
                    </p>
                  </CardContent>
                </Card>

                {/* Acceptance of Terms */}
                <section id="acceptance-of-terms">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Acceptance of Terms
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        By accessing and using TechDaily, you accept and agree
                        to be bound by the terms and provision of this
                        agreement. Additionally, when using TechDaily's specific
                        services, you shall be subject to any posted guidelines
                        or rules applicable to such services.
                      </p>
                      <p>
                        If you do not agree to abide by the above, please do not
                        use this service. We reserve the right to change these
                        terms and conditions at any time. Your continued use of
                        TechDaily means you accept those changes.
                      </p>
                      <h3>Age Requirements</h3>
                      <p>
                        You must be at least 13 years old to use our Service. If
                        you are under 18, you represent that you have your
                        parent or guardian's permission to use the Service and
                        that they have read and agreed to these Terms.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Modifications to Terms */}
                <section id="modifications-to-terms">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Edit className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Modifications to Terms
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        TechDaily reserves the right, at our sole discretion, to
                        modify or replace these Terms at any time. If a revision
                        is material, we will try to provide at least 30 days
                        notice prior to any new terms taking effect.
                      </p>
                      <p>
                        What constitutes a material change will be determined at
                        our sole discretion.
                      </p>
                      <h3>Notification of Changes</h3>
                      <p>We will notify you of changes through:</p>
                      <ul>
                        <li>A prominent notice on our website</li>
                        <li>Email notification to registered users</li>
                        <li>
                          Updates to the "Last Updated" date at the top of these
                          Terms
                        </li>
                      </ul>
                      <p>
                        By continuing to access or use our Service after those
                        revisions become effective, you agree to be bound by the
                        revised terms.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* User Responsibilities */}
                <section id="user-responsibilities">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          User Responsibilities
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>As a user of TechDaily, you agree to:</p>

                      <h3>Acceptable Use</h3>
                      <ul>
                        <li>
                          Use the Service only for lawful purposes and in
                          accordance with these Terms
                        </li>
                        <li>
                          Not use the Service in any way that violates any
                          applicable laws or regulations
                        </li>
                        <li>
                          Respect the intellectual property rights of others
                        </li>
                        <li>
                          Not attempt to gain unauthorized access to any part of
                          the Service
                        </li>
                        <li>
                          Not interfere with or disrupt the Service or servers
                          connected to the Service
                        </li>
                      </ul>

                      <h3>Prohibited Activities</h3>
                      <p>You may not:</p>
                      <ul>
                        <li>
                          Post or transmit any content that is illegal, harmful,
                          threatening, or offensive
                        </li>
                        <li>
                          Impersonate any person or entity or misrepresent your
                          affiliation
                        </li>
                        <li>
                          Engage in any form of harassment, abuse, or spam
                        </li>
                        <li>
                          Distribute malware, viruses, or other harmful code
                        </li>
                        <li>
                          Attempt to scrape, crawl, or harvest data from the
                          Service
                        </li>
                        <li>
                          Use automated systems to access the Service without
                          permission
                        </li>
                      </ul>

                      <h3>Account Security</h3>
                      <p>
                        If you create an account, you are responsible for
                        maintaining the security of your account and password.
                        You agree to accept responsibility for all activities
                        that occur under your account.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Intellectual Property Rights */}
                <section id="intellectual-property">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Copyright className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Intellectual Property Rights
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <h3>Our Content</h3>
                      <p>
                        The Service and its original content, features, and
                        functionality are and will remain the exclusive property
                        of TechDaily and its licensors. The Service is protected
                        by copyright, trademark, and other laws.
                      </p>

                      <h3>Your License to Use</h3>
                      <p>
                        Subject to these Terms, we grant you a limited,
                        non-exclusive, non-transferable license to access and
                        use the Service for your personal, non-commercial use.
                      </p>

                      <h3>User-Generated Content</h3>
                      <p>
                        By posting content to TechDaily (such as comments,
                        feedback, or suggestions), you grant us a worldwide,
                        non-exclusive, royalty-free license to use, reproduce,
                        modify, and distribute such content in connection with
                        the Service.
                      </p>

                      <h3>Trademarks</h3>
                      <p>
                        TechDaily, our logo, and any other product or service
                        names are trademarks of TechDaily. You may not use these
                        trademarks without our prior written consent.
                      </p>

                      <h3>Copyright Infringement</h3>
                      <p>
                        We respect the intellectual property rights of others.
                        If you believe that any content on our Service infringes
                        your copyright, please contact us with details of the
                        alleged infringement.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Disclaimer of Warranties */}
                <section id="disclaimer-of-warranties">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Disclaimer of Warranties
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        <strong>
                          THE INFORMATION ON THIS WEBSITE IS PROVIDED ON AN "AS
                          IS" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW,
                          THIS COMPANY:
                        </strong>
                      </p>

                      <ul>
                        <li>
                          EXCLUDES ALL REPRESENTATIONS AND WARRANTIES RELATING
                          TO THIS WEBSITE AND ITS CONTENTS
                        </li>
                        <li>
                          EXCLUDES ALL LIABILITY FOR DAMAGES ARISING OUT OF OR
                          IN CONNECTION WITH YOUR USE OF THIS WEBSITE
                        </li>
                      </ul>

                      <h3>No Warranty of Accuracy</h3>
                      <p>
                        While we strive to provide accurate and up-to-date
                        information, we make no representations or warranties of
                        any kind, express or implied, about the completeness,
                        accuracy, reliability, or availability of the
                        information, products, services, or related graphics
                        contained on the Service.
                      </p>

                      <h3>Service Availability</h3>
                      <p>
                        We do not warrant that the Service will be
                        uninterrupted, timely, secure, or error-free. We reserve
                        the right to modify, suspend, or discontinue the Service
                        at any time without notice.
                      </p>

                      <h3>Third-Party Content</h3>
                      <p>
                        Our Service may contain links to third-party websites or
                        services that are not owned or controlled by TechDaily.
                        We have no control over and assume no responsibility for
                        the content, privacy policies, or practices of any
                        third-party websites or services.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Limitation of Liability */}
                <section id="limitation-of-liability">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <XCircle className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Limitation of Liability
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        <strong>
                          IN NO EVENT SHALL TECHDAILY, NOR ITS DIRECTORS,
                          EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES,
                          BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                          CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT
                          LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR
                          OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF
                          THE SERVICE.
                        </strong>
                      </p>

                      <h3>Maximum Liability</h3>
                      <p>
                        In no event will our total liability to you for all
                        damages, losses, or causes of action exceed the amount
                        you have paid TechDaily in the last six (6) months, or
                        one hundred dollars ($100), whichever is greater.
                      </p>

                      <h3>Exceptions</h3>
                      <p>
                        Some jurisdictions do not allow the exclusion of certain
                        warranties or the limitation or exclusion of liability
                        for incidental or consequential damages. Accordingly,
                        some of the above limitations may not apply to you.
                      </p>

                      <h3>Indemnification</h3>
                      <p>
                        You agree to defend, indemnify, and hold harmless
                        TechDaily and its licensee and licensors, and their
                        employees, contractors, agents, officers and directors,
                        from and against any and all claims, damages,
                        obligations, losses, liabilities, costs or debt, and
                        expenses (including but not limited to attorney's fees).
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Termination */}
                <section id="termination">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <XCircle className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">Termination</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <h3>Termination by You</h3>
                      <p>
                        You may terminate your account and stop using our
                        Service at any time. If you have an account, you may
                        delete it through your account settings or by contacting
                        us.
                      </p>

                      <h3>Termination by Us</h3>
                      <p>
                        We may terminate or suspend your account and bar access
                        to the Service immediately, without prior notice or
                        liability, under our sole discretion, for any reason
                        whatsoever, including but not limited to a breach of the
                        Terms.
                      </p>

                      <h3>Effect of Termination</h3>
                      <p>Upon termination:</p>
                      <ul>
                        <li>
                          Your right to use the Service will cease immediately
                        </li>
                        <li>
                          Any data associated with your account may be deleted
                        </li>
                        <li>
                          All provisions of the Terms which by their nature
                          should survive termination shall survive
                        </li>
                      </ul>

                      <h3>Survival</h3>
                      <p>
                        The following sections shall survive termination:
                        Intellectual Property Rights, Disclaimer of Warranties,
                        Limitation of Liability, Indemnification, and Governing
                        Law.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Governing Law */}
                <section id="governing-law">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Gavel className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Governing Law
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <h3>Applicable Law</h3>
                      <p>
                        These Terms shall be interpreted and governed by the
                        laws of the State of California, United States, without
                        regard to its conflict of law provisions.
                      </p>

                      <h3>Jurisdiction</h3>
                      <p>
                        Our failure to enforce any right or provision of these
                        Terms will not be considered a waiver of those rights.
                        If any provision of these Terms is held to be invalid or
                        unenforceable by a court, the remaining provisions of
                        these Terms will remain in effect.
                      </p>

                      <h3>Dispute Resolution</h3>
                      <p>
                        Any disputes arising out of or relating to these Terms
                        or the Service shall be resolved through binding
                        arbitration in accordance with the rules of the American
                        Arbitration Association, except that either party may
                        seek injunctive relief in court to protect intellectual
                        property rights.
                      </p>

                      <h3>Class Action Waiver</h3>
                      <p>
                        You agree that any arbitration or proceeding shall be
                        limited to the dispute between us and you individually.
                        You waive any right to participate in a class action
                        lawsuit or class-wide arbitration.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Contact Information */}
                <section id="contact-information">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Contact Information
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        If you have any questions about these Terms and
                        Conditions, please contact us:
                      </p>

                      <div className="not-prose bg-muted/50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">
                          TechDaily Legal Team
                        </h3>
                        <p className="text-sm space-y-1">
                          <span className="block">
                            Email: legal@techdaily.com
                          </span>
                          <span className="block">
                            Phone: +1 (555) 123-4567
                          </span>
                          <span className="block">
                            Address: 123 Tech Street, Innovation District, San
                            Francisco, CA 94105
                          </span>
                        </p>
                      </div>

                      <p>
                        For general inquiries, you can also visit our{" "}
                        <Link
                          href="/contact"
                          className="text-primary hover:underline"
                        >
                          Contact Us page
                        </Link>
                        .
                      </p>

                      <p>
                        We will respond to your legal inquiries within 5
                        business days of receipt. For urgent matters, please
                        call our legal hotline.
                      </p>

                      <h3>Additional Resources</h3>
                      <p>You may also be interested in:</p>
                      <ul>
                        <li>
                          <Link
                            href="/privacy"
                            className="text-primary hover:underline"
                          >
                            Privacy Policy
                          </Link>{" "}
                          - How we handle your personal information
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="text-primary hover:underline"
                          >
                            Contact Us
                          </Link>{" "}
                          - General inquiries and support
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Back to Top */}
                <div className="text-center pt-8">
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Back to Top
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 TechDaily. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
