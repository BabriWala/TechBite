import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Eye,
  Search,
  FileCheck,
  Send,
  MessageCircle,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Users,
  Award,
  Clock,
  Shield,
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Editor-in-Chief",
      bio: "Former tech journalist at TechCrunch with 8+ years covering AI and emerging technologies.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "sarah@techdaily.com",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Tech Writer",
      bio: "Specializes in mobile technology and consumer electronics. Previously at The Verge.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Dr. Emily Watson",
      role: "AI & Research Editor",
      bio: "PhD in Computer Science, focuses on AI developments and their real-world applications.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        email: "emily@techdaily.com",
      },
    },
    {
      name: "James Park",
      role: "Product Review Lead",
      bio: "Hardware enthusiast with expertise in testing and reviewing the latest tech products.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        github: "#",
        email: "james@techdaily.com",
      },
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Curate Reliable Sources",
      description:
        "We monitor hundreds of trusted tech sources, from industry leaders to emerging startups, ensuring comprehensive coverage.",
      icon: Search,
      color: "text-blue-500",
    },
    {
      step: 2,
      title: "Editorial Review",
      description:
        "Our experienced editorial team fact-checks, verifies sources, and ensures accuracy before any story goes live.",
      icon: FileCheck,
      color: "text-green-500",
    },
    {
      step: 3,
      title: "Publish & Notify",
      description:
        "Stories are published with SEO optimization and our subscribers are notified through multiple channels.",
      icon: Send,
      color: "text-purple-500",
    },
    {
      step: 4,
      title: "Community Engagement",
      description:
        "We foster discussion through comments, social media, and direct feedback to build a vibrant tech community.",
      icon: MessageCircle,
      color: "text-orange-500",
    },
  ];

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
              <Link href="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header> */}

      <main>
        {/* Intro Header */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're passionate about making technology accessible and
              understandable for everyone. Our mission is to deliver the latest
              tech news, reviews, and insights that matter to you.
            </p>
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>50K+ Readers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Est. 2020</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize technology knowledge by providing accurate,
                    timely, and accessible tech news that empowers our readers
                    to make informed decisions in an increasingly digital world.
                    We believe everyone deserves to understand the technology
                    that shapes our future.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted source for technology news and
                    insights, fostering a global community where innovation is
                    celebrated, understood, and accessible to all. We envision a
                    world where technology literacy bridges divides and creates
                    opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Editorial Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Editorial Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our diverse team of tech experts, journalists, and researchers
                work tirelessly to bring you the most accurate and insightful
                technology coverage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-background shadow-lg group-hover:ring-primary/20 transition-all"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>

                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="flex justify-center gap-2">
                      {member.social.twitter && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-8 h-8 p-0"
                        >
                          <Twitter className="w-4 h-4" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                      )}
                      {member.social.linkedin && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-8 h-8 p-0"
                        >
                          <Linkedin className="w-4 h-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      )}
                      {member.social.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-8 h-8 p-0"
                        >
                          <Github className="w-4 h-4" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      )}
                      {member.social.email && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-8 h-8 p-0"
                        >
                          <Mail className="w-4 h-4" />
                          <span className="sr-only">Email</span>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How the Site Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Work
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our rigorous editorial process ensures you receive only the most
                accurate, relevant, and timely technology news and insights.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    {/* Timeline Line */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full bg-background border-4 border-muted flex items-center justify-center group-hover:border-primary/50 transition-colors ${step.color}`}
                      >
                        <step.icon className="w-6 h-6" />
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-4"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <Card className="p-6 hover:shadow-lg transition-shadow group-hover:border-primary/20">
                        <div className="flex items-start gap-4">
                          <Badge
                            variant="outline"
                            className="text-xs font-bold"
                          >
                            Step {step.step}
                          </Badge>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Transparency */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-8 text-center bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Trust & Transparency
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We maintain the highest standards of journalistic integrity. Our
                editorial independence, fact-checking processes, and transparent
                correction policies ensure you can trust the information we
                provide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2">
                  Editorial Independence
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  Fact-Checked Content
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  Transparent Corrections
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  Source Attribution
                </Badge>
              </div>
            </Card>
          </div>
        </section>
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
