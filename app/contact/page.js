"use client";

import React from "react";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Mail,
  Phone,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState("loading");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      setFormState("error");
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const contactInfo = [
    {
      title: "Address",
      content: "123 Tech Street, Innovation District, San Francisco, CA 94105",
      icon: MapPin,
      color: "text-blue-500",
    },
    {
      title: "Email",
      content: "hello@techdaily.com",
      icon: Mail,
      color: "text-green-500",
    },
    {
      title: "Phone",
      content: "+1 (555) 123-4567",
      icon: Phone,
      color: "text-purple-500",
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
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
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/contact" className="text-foreground font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a question, suggestion, or feedback? We'd love to hear from
            you. Our team is here to help and we typically respond within 24
            hours.
          </p>
        </section>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <section>
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-2">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  {formState === "success" ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Thank you for reaching out. We'll get back to you within
                        24 hours.
                      </p>
                      <Button
                        onClick={() => setFormState("idle")}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className={errors.name ? "border-red-500" : ""}
                            placeholder="Your full name"
                            required
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className={errors.email ? "border-red-500" : ""}
                            placeholder="your.email@example.com"
                            required
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          Subject <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            handleInputChange("subject", e.target.value)
                          }
                          className={errors.subject ? "border-red-500" : ""}
                          placeholder="What's this about?"
                          required
                        />
                        {errors.subject && (
                          <p className="text-sm text-red-500">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          className={`min-h-32 ${
                            errors.message ? "border-red-500" : ""
                          }`}
                          placeholder="Tell us more about your inquiry..."
                          required
                        />
                        {errors.message && (
                          <p className="text-sm text-red-500">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={formState === "loading"}
                      >
                        {formState === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </section>

            {/* Contact Info & Social */}
            <section className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-full bg-muted ${info.color}`}
                        >
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-muted-foreground">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Friday
                    </span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Card>

              {/* Social Media Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <p className="text-muted-foreground mb-6">
                  Stay connected with us on social media for the latest tech
                  news and updates.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-full bg-muted text-muted-foreground transition-colors ${social.color} hover:bg-primary/10`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQ Link */}
              <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
                <h3 className="font-semibold mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Looking for quick answers? Check out our FAQ section for
                  common questions about our content, subscriptions, and more.
                </p>
                <Button variant="outline" size="sm">
                  View FAQ
                </Button>
              </Card>
            </section>
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
