"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Shield,
  Eye,
  Cookie,
  Share,
  UserCheck,
  Lock,
  ExternalLink,
  Baby,
  FileText,
  Mail,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: Eye,
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      icon: UserCheck,
    },
    {
      id: "cookies-tracking",
      title: "Cookies & Tracking Technologies",
      icon: Cookie,
    },
    {
      id: "data-sharing",
      title: "Data Sharing and Disclosure",
      icon: Share,
    },
    {
      id: "your-data-rights",
      title: "Your Data Rights",
      icon: Shield,
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
    },
    {
      id: "third-party-links",
      title: "Third-Party Links",
      icon: ExternalLink,
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      icon: Baby,
    },
    {
      id: "policy-changes",
      title: "Changes to This Policy",
      icon: FileText,
    },
    {
      id: "contact-us",
      title: "Contact Us",
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
              <Link href="/privacy" className="text-foreground font-medium">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="text-center mb-12 py-8 bg-muted/30 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Your privacy is important to us.
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
              <div className="sticky top-20">
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
                      At TechDaily, we are committed to protecting your privacy
                      and ensuring the security of your personal information.
                      This Privacy Policy explains how we collect, use,
                      disclose, and safeguard your information when you visit
                      our website and use our services.
                    </p>
                    <p>
                      By accessing or using our website, you agree to the
                      collection and use of information in accordance with this
                      policy. If you do not agree with our policies and
                      practices, please do not use our services.
                    </p>
                  </CardContent>
                </Card>

                {/* Information We Collect */}
                <section id="information-we-collect">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Eye className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Information We Collect
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <h3>Personal Information</h3>
                      <p>
                        We may collect personal information that you voluntarily
                        provide to us, including:
                      </p>
                      <ul>
                        <li>
                          Name and contact information (email address, phone
                          number)
                        </li>
                        <li>Account credentials (username, password)</li>
                        <li>Profile information and preferences</li>
                        <li>
                          Communication data (messages, comments, feedback)
                        </li>
                        <li>Newsletter subscription information</li>
                      </ul>

                      <h3>Automatically Collected Information</h3>
                      <p>
                        When you visit our website, we automatically collect
                        certain information:
                      </p>
                      <ul>
                        <li>IP address and location data</li>
                        <li>Browser type and version</li>
                        <li>Device information and operating system</li>
                        <li>Pages visited and time spent on our site</li>
                        <li>Referral sources and search terms</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* How We Use Your Information */}
                <section id="how-we-use-information">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <UserCheck className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          How We Use Your Information
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        We use the information we collect for various purposes,
                        including:
                      </p>
                      <ul>
                        <li>Providing and maintaining our services</li>
                        <li>
                          Personalizing your experience and content
                          recommendations
                        </li>
                        <li>
                          Sending newsletters and promotional communications
                          (with your consent)
                        </li>
                        <li>
                          Responding to your inquiries and providing customer
                          support
                        </li>
                        <li>
                          Analyzing website usage and improving our services
                        </li>
                        <li>
                          Detecting and preventing fraud or security issues
                        </li>
                        <li>Complying with legal obligations</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Cookies & Tracking Technologies */}
                <section id="cookies-tracking">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Cookie className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Cookies & Tracking Technologies
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        We use cookies and similar tracking technologies to
                        enhance your browsing experience and analyze website
                        traffic.
                      </p>

                      <h3>Types of Cookies We Use</h3>
                      <ul>
                        <li>
                          <strong>Essential Cookies:</strong> Required for basic
                          website functionality
                        </li>
                        <li>
                          <strong>Analytics Cookies:</strong> Help us understand
                          how visitors interact with our website
                        </li>
                        <li>
                          <strong>Preference Cookies:</strong> Remember your
                          settings and preferences
                        </li>
                        <li>
                          <strong>Marketing Cookies:</strong> Used to deliver
                          relevant advertisements
                        </li>
                      </ul>

                      <p>
                        You can control cookie settings through your browser
                        preferences. However, disabling certain cookies may
                        affect website functionality.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Data Sharing and Disclosure */}
                <section id="data-sharing">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Share className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Data Sharing and Disclosure
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        We do not sell, trade, or rent your personal information
                        to third parties. We may share your information in the
                        following circumstances:
                      </p>

                      <h3>Service Providers</h3>
                      <p>
                        We may share information with trusted third-party
                        service providers who assist us in:
                      </p>
                      <ul>
                        <li>Website hosting and maintenance</li>
                        <li>Email delivery and marketing services</li>
                        <li>Analytics and performance monitoring</li>
                        <li>Payment processing (if applicable)</li>
                      </ul>

                      <h3>Legal Requirements</h3>
                      <p>
                        We may disclose your information if required by law or
                        in response to:
                      </p>
                      <ul>
                        <li>Court orders or legal processes</li>
                        <li>Government investigations</li>
                        <li>Protection of our rights and safety</li>
                        <li>Prevention of fraud or illegal activities</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Your Data Rights */}
                <section id="your-data-rights">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Your Data Rights
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        Depending on your location, you may have the following
                        rights regarding your personal data:
                      </p>
                      <ul>
                        <li>
                          <strong>Access:</strong> Request a copy of the
                          personal information we hold about you
                        </li>
                        <li>
                          <strong>Correction:</strong> Request correction of
                          inaccurate or incomplete information
                        </li>
                        <li>
                          <strong>Deletion:</strong> Request deletion of your
                          personal information
                        </li>
                        <li>
                          <strong>Portability:</strong> Request transfer of your
                          data to another service
                        </li>
                        <li>
                          <strong>Objection:</strong> Object to certain
                          processing of your information
                        </li>
                        <li>
                          <strong>Restriction:</strong> Request limitation of
                          processing in certain circumstances
                        </li>
                      </ul>
                      <p>
                        To exercise these rights, please contact us using the
                        information provided in the "Contact Us" section below.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Data Security */}
                <section id="data-security">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Lock className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Data Security
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        We implement appropriate technical and organizational
                        security measures to protect your personal information
                        against unauthorized access, alteration, disclosure, or
                        destruction.
                      </p>

                      <h3>Security Measures Include</h3>
                      <ul>
                        <li>SSL/TLS encryption for data transmission</li>
                        <li>Secure server infrastructure and hosting</li>
                        <li>Regular security audits and updates</li>
                        <li>Access controls and authentication systems</li>
                        <li>Employee training on data protection</li>
                      </ul>

                      <p>
                        While we strive to protect your information, no method
                        of transmission over the internet or electronic storage
                        is 100% secure. We cannot guarantee absolute security.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Third-Party Links */}
                <section id="third-party-links">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <ExternalLink className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Third-Party Links
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        Our website may contain links to third-party websites,
                        services, or applications. We are not responsible for
                        the privacy practices or content of these external
                        sites.
                      </p>
                      <p>
                        We encourage you to review the privacy policies of any
                        third-party sites you visit. This Privacy Policy applies
                        only to information collected by our website.
                      </p>

                      <h3>Third-Party Services We May Use</h3>
                      <ul>
                        <li>Google Analytics for website analytics</li>
                        <li>Social media platforms for content sharing</li>
                        <li>Email marketing services</li>
                        <li>Content delivery networks (CDNs)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Children's Privacy */}
                <section id="childrens-privacy">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Baby className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Children's Privacy
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        Our services are not intended for children under the age
                        of 13. We do not knowingly collect personal information
                        from children under 13 years of age.
                      </p>
                      <p>
                        If we become aware that we have collected personal
                        information from a child under 13 without parental
                        consent, we will take steps to delete such information
                        from our records.
                      </p>
                      <p>
                        If you are a parent or guardian and believe your child
                        has provided us with personal information, please
                        contact us immediately.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Changes to This Policy */}
                <section id="policy-changes">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <FileText className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Changes to This Policy
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        We may update this Privacy Policy from time to time to
                        reflect changes in our practices or for other
                        operational, legal, or regulatory reasons.
                      </p>
                      <p>
                        When we make changes, we will update the "Last Updated"
                        date at the top of this policy and notify you through:
                      </p>
                      <ul>
                        <li>A prominent notice on our website</li>
                        <li>
                          Email notification (if you have subscribed to our
                          newsletter)
                        </li>
                        <li>In-app notifications (if applicable)</li>
                      </ul>
                      <p>
                        We encourage you to review this Privacy Policy
                        periodically to stay informed about how we protect your
                        information.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Contact Us */}
                <section id="contact-us">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">Contact Us</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        If you have any questions, concerns, or requests
                        regarding this Privacy Policy or our data practices,
                        please contact us:
                      </p>

                      <div className="not-prose bg-muted/50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">
                          TechDaily Privacy Team
                        </h3>
                        <p className="text-sm space-y-1">
                          <span className="block">
                            Email: privacy@techdaily.com
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
                        We will respond to your privacy-related inquiries within
                        30 days of receipt.
                      </p>
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
