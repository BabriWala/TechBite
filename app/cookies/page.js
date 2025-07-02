"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Cookie,
  Info,
  Settings,
  BarChart3,
  Zap,
  Target,
  Users,
  Shield,
  Edit,
  Mail,
  ExternalLink,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function CookiesPolicyPage() {
  const sections = [
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      icon: Info,
    },
    {
      id: "how-we-use-cookies",
      title: "How We Use Cookies",
      icon: Settings,
    },
    {
      id: "types-of-cookies",
      title: "Types of Cookies We Use",
      icon: Cookie,
    },
    {
      id: "managing-cookies",
      title: "Managing Cookies",
      icon: Settings,
    },
    {
      id: "third-party-cookies",
      title: "Third-Party Cookies",
      icon: Users,
    },
    {
      id: "consent-withdrawal",
      title: "Consent and Withdrawal",
      icon: Shield,
    },
    {
      id: "policy-changes",
      title: "Changes to This Policy",
      icon: Edit,
    },
    {
      id: "contact-information",
      title: "Contact Information",
      icon: Mail,
    },
  ];

  const cookieTypes = [
    {
      name: "Strictly Necessary",
      description: "Essential for the website to function properly",
      examples: ["Session management", "Security features", "Load balancing"],
      canDisable: false,
      icon: Zap,
      color: "bg-red-500",
    },
    {
      name: "Performance",
      description: "Help us understand how visitors interact with our website",
      examples: ["Google Analytics", "Page load times", "Error tracking"],
      canDisable: true,
      icon: BarChart3,
      color: "bg-blue-500",
    },
    {
      name: "Functional",
      description: "Remember your preferences and enhance functionality",
      examples: ["Language preferences", "Theme settings", "Login status"],
      canDisable: true,
      icon: Settings,
      color: "bg-green-500",
    },
    {
      name: "Targeting",
      description: "Used to deliver relevant advertisements and content",
      examples: [
        "Ad personalization",
        "Social media integration",
        "Marketing campaigns",
      ],
      canDisable: true,
      icon: Target,
      color: "bg-purple-500",
    },
  ];

  const browserInstructions = [
    {
      browser: "Google Chrome",
      steps: [
        "Click the three dots menu in the top right corner",
        "Select 'Settings'",
        "Click 'Privacy and security' in the left sidebar",
        "Click 'Cookies and other site data'",
        "Choose your preferred cookie settings",
      ],
    },
    {
      browser: "Mozilla Firefox",
      steps: [
        "Click the menu button in the top right corner",
        "Select 'Settings'",
        "Click 'Privacy & Security' in the left panel",
        "Scroll to 'Cookies and Site Data'",
        "Adjust your cookie preferences",
      ],
    },
    {
      browser: "Safari",
      steps: [
        "Click 'Safari' in the menu bar",
        "Select 'Preferences'",
        "Click the 'Privacy' tab",
        "Choose your cookie and tracking settings",
      ],
    },
    {
      browser: "Microsoft Edge",
      steps: [
        "Click the three dots menu in the top right corner",
        "Select 'Settings'",
        "Click 'Cookies and site permissions'",
        "Click 'Cookies and site data'",
        "Configure your cookie settings",
      ],
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
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms
              </Link>
              <Link href="/cookies" className="text-foreground font-medium">
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="text-center mb-12 py-8 bg-muted/30 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cookie className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Cookies Policy</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              Understand how we use cookies to enhance your browsing experience.
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
                      This Cookies Policy explains how TechDaily ("we", "us", or
                      "our") uses cookies and similar technologies when you
                      visit our website. It explains what these technologies
                      are, why we use them, and your rights to control our use
                      of them.
                    </p>
                    <p>
                      By continuing to use our website, you consent to our use
                      of cookies in accordance with this policy. If you do not
                      agree to our use of cookies, you should set your browser
                      settings accordingly or stop using our website.
                    </p>
                  </CardContent>
                </Card>

                {/* What Are Cookies? */}
                <section id="what-are-cookies">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Info className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          What Are Cookies?
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        Cookies are small text files that are placed on your
                        computer or mobile device when you visit a website. They
                        are widely used to make websites work more efficiently
                        and to provide information to website owners.
                      </p>

                      <h3>How Cookies Work</h3>
                      <p>Cookies allow websites to:</p>
                      <ul>
                        <li>Remember your login status and preferences</li>
                        <li>Understand how you use the website</li>
                        <li>Provide personalized content and advertisements</li>
                        <li>Improve website performance and functionality</li>
                      </ul>

                      <h3>Types of Cookie Storage</h3>
                      <p>Cookies can be stored for different durations:</p>
                      <ul>
                        <li>
                          <strong>Session Cookies:</strong> Temporary cookies
                          that are deleted when you close your browser
                        </li>
                        <li>
                          <strong>Persistent Cookies:</strong> Remain on your
                          device for a set period or until manually deleted
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* How We Use Cookies */}
                <section id="how-we-use-cookies">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Settings className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          How We Use Cookies
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        We use cookies for several purposes to enhance your
                        experience on TechDaily:
                      </p>

                      <h3>Essential Website Functions</h3>
                      <ul>
                        <li>Maintaining your session while browsing</li>
                        <li>Remembering your login status</li>
                        <li>Ensuring website security</li>
                        <li>Load balancing and performance optimization</li>
                      </ul>

                      <h3>Improving User Experience</h3>
                      <ul>
                        <li>
                          Remembering your preferences (theme, language, etc.)
                        </li>
                        <li>Personalizing content recommendations</li>
                        <li>Saving your reading progress</li>
                        <li>Customizing the layout based on your device</li>
                      </ul>

                      <h3>Analytics and Performance</h3>
                      <ul>
                        <li>Understanding how visitors use our website</li>
                        <li>Identifying popular content and features</li>
                        <li>Monitoring website performance and errors</li>
                        <li>Improving our services based on usage patterns</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Types of Cookies We Use */}
                <section id="types-of-cookies">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Cookie className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Types of Cookies We Use
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0">
                      <p className="text-muted-foreground mb-6">
                        We categorize our cookies into four main types based on
                        their purpose and functionality:
                      </p>

                      <div className="grid gap-6">
                        {cookieTypes.map((type, index) => (
                          <Card
                            key={index}
                            className="p-4 border-l-4"
                            style={{
                              borderLeftColor: type.color.replace("bg-", "#"),
                            }}
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className={`p-2 rounded-full ${type.color} text-white`}
                              >
                                <type.icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="text-lg font-semibold">
                                    {type.name}
                                  </h3>
                                  {type.canDisable ? (
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      <XCircle className="w-3 h-3 mr-1" />
                                      Optional
                                    </Badge>
                                  ) : (
                                    <Badge
                                      variant="destructive"
                                      className="text-xs"
                                    >
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      Required
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-muted-foreground mb-3">
                                  {type.description}
                                </p>
                                <div>
                                  <h4 className="text-sm font-medium mb-2">
                                    Examples:
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {type.examples.map(
                                      (example, exampleIndex) => (
                                        <Badge
                                          key={exampleIndex}
                                          variant="secondary"
                                          className="text-xs"
                                        >
                                          {example}
                                        </Badge>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Managing Cookies */}
                <section id="managing-cookies">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Settings className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Managing Cookies
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        You have several options for managing cookies on our
                        website and in your browser. Here's how you can control
                        your cookie preferences:
                      </p>

                      <h3>Browser Settings</h3>
                      <p>
                        Most web browsers allow you to control cookies through
                        their settings. You can usually find these options in
                        the 'Settings' or 'Preferences' menu of your browser.
                      </p>

                      <div className="not-prose space-y-4 my-6">
                        {browserInstructions.map((browser, index) => (
                          <Card key={index} className="p-4">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              {browser.browser}
                            </h4>
                            <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                              {browser.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                              ))}
                            </ol>
                          </Card>
                        ))}
                      </div>

                      <h3>Cookie Management Options</h3>
                      <p>You can choose to:</p>
                      <ul>
                        <li>
                          <strong>Accept all cookies:</strong> Allow all cookies
                          for the best user experience
                        </li>
                        <li>
                          <strong>Block all cookies:</strong> Prevent all
                          cookies (may affect website functionality)
                        </li>
                        <li>
                          <strong>Block third-party cookies:</strong> Allow only
                          first-party cookies from our website
                        </li>
                        <li>
                          <strong>Selective blocking:</strong> Choose which
                          types of cookies to allow or block
                        </li>
                      </ul>

                      <h3>Important Note</h3>
                      <p>
                        Please note that blocking certain cookies may impact
                        your experience on our website. Some features may not
                        work properly if essential cookies are disabled.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Third-Party Cookies */}
                <section id="third-party-cookies">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Third-Party Cookies
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        In addition to our own cookies, we may also use various
                        third-party cookies to report usage statistics, deliver
                        advertisements, and provide enhanced functionality.
                      </p>

                      <h3>Third-Party Services We Use</h3>
                      <div className="not-prose grid gap-4 my-6">
                        <Card className="p-4">
                          <h4 className="font-semibold mb-2">
                            Google Analytics
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Helps us understand how visitors interact with our
                            website
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              Performance
                            </Badge>
                            <Link
                              href="https://policies.google.com/privacy"
                              className="text-xs text-primary hover:underline flex items-center gap-1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Privacy Policy{" "}
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          </div>
                        </Card>

                        <Card className="p-4">
                          <h4 className="font-semibold mb-2">
                            Social Media Platforms
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Enable social sharing and embedded content
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              Functional
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Twitter, Facebook, LinkedIn
                            </span>
                          </div>
                        </Card>

                        <Card className="p-4">
                          <h4 className="font-semibold mb-2">
                            Advertising Partners
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Deliver relevant advertisements and measure campaign
                            effectiveness
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              Targeting
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Google Ads, Facebook Ads
                            </span>
                          </div>
                        </Card>
                      </div>

                      <h3>Managing Third-Party Cookies</h3>
                      <p>
                        Third-party cookies are controlled by external
                        companies. To manage these cookies, you can:
                      </p>
                      <ul>
                        <li>
                          Visit the privacy policies of these third-party
                          services
                        </li>
                        <li>
                          Use browser settings to block third-party cookies
                        </li>
                        <li>
                          Opt out through industry initiatives like the Digital
                          Advertising Alliance
                        </li>
                        <li>
                          Use browser extensions that block tracking cookies
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* Consent and Withdrawal */}
                <section id="consent-withdrawal">
                  <Card className="p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Consent and Withdrawal
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <h3>Your Consent</h3>
                      <p>
                        By continuing to use our website, you consent to our use
                        of cookies as described in this policy. When you first
                        visit our website, you may see a cookie banner that
                        allows you to accept or customize your cookie
                        preferences.
                      </p>

                      <h3>Withdrawing Consent</h3>
                      <p>
                        You can withdraw your consent to our use of cookies at
                        any time by:
                      </p>
                      <ul>
                        <li>
                          Changing your browser settings to block or delete
                          cookies
                        </li>
                        <li>
                          Using our cookie preference center (if available)
                        </li>
                        <li>
                          Contacting us directly to request cookie removal
                        </li>
                        <li>Clearing your browser's cookie storage</li>
                      </ul>

                      <h3>Impact of Withdrawing Consent</h3>
                      <p>
                        Please note that if you withdraw consent or disable
                        cookies, you may not be able to access certain features
                        of our website, and your user experience may be
                        affected.
                      </p>

                      <h3>Cookie Preferences</h3>
                      <p>
                        We respect your privacy choices. You can manage your
                        cookie preferences at any time through your browser
                        settings or by contacting us directly.
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
                        <Edit className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">
                          Changes to This Policy
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        We may update this Cookies Policy from time to time to
                        reflect changes in our practices, technology, legal
                        requirements, or other factors.
                      </p>

                      <h3>Notification of Changes</h3>
                      <p>When we make changes to this policy, we will:</p>
                      <ul>
                        <li>
                          Update the "Last Updated" date at the top of this page
                        </li>
                        <li>
                          Post a notice on our website highlighting the changes
                        </li>
                        <li>
                          Send email notifications to registered users (for
                          significant changes)
                        </li>
                        <li>Update our cookie banner if necessary</li>
                      </ul>

                      <h3>Your Continued Use</h3>
                      <p>
                        Your continued use of our website after any changes to
                        this Cookies Policy will constitute your acceptance of
                        such changes. We encourage you to review this policy
                        periodically.
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
                        If you have any questions about this Cookies Policy or
                        our use of cookies, please contact us:
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

                      <h3>Additional Resources</h3>
                      <p>You may also find these resources helpful:</p>
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
                            href="/terms"
                            className="text-primary hover:underline"
                          >
                            Terms & Conditions
                          </Link>{" "}
                          - Our website terms of use
                        </li>
                        <li>
                          <Link
                            href="https://www.allaboutcookies.org/"
                            className="text-primary hover:underline flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            All About Cookies{" "}
                            <ExternalLink className="w-3 h-3" />
                          </Link>{" "}
                          - Independent information about cookies
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
