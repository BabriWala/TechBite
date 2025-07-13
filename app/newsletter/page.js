"use client";

import React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Mail,
  CheckCircle,
  Zap,
  Globe,
  Smartphone,
  Cpu,
  Shield,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const topics = [
    {
      id: "ai",
      name: "Artificial Intelligence",
      icon: Cpu,
      color: "bg-purple-500",
    },
    {
      id: "mobile",
      name: "Mobile Technology",
      icon: Smartphone,
      color: "bg-blue-500",
    },
    { id: "web", name: "Web Development", icon: Globe, color: "bg-green-500" },
    {
      id: "security",
      name: "Cybersecurity",
      icon: Shield,
      color: "bg-red-500",
    },
    {
      id: "startups",
      name: "Startups & Business",
      icon: TrendingUp,
      color: "bg-orange-500",
    },
    {
      id: "gadgets",
      name: "Gadgets & Hardware",
      icon: Zap,
      color: "bg-yellow-500",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubscribed(true);
    console.log("Newsletter subscription:", {
      email,
      name,
      topics: selectedTopics,
    });
  };

  const toggleTopic = (topicId) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center shadow-xl">
          <CardContent className="pt-8 pb-8">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Welcome to TechNews!
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Thank you for subscribing to our newsletter. You'll receive your
              first digest within the next 24 hours.
            </p>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Weekly digest every Tuesday</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Breaking news alerts</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="h-4 w-4" />
                <span>Exclusive community content</span>
              </div>
            </div>
            <Button
              className="mt-6 w-full"
              onClick={() => (window.location.href = "/")}
            >
              Continue Reading
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
            <Mail className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Join Our Newsletter
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get the latest tech news, insights, and exclusive content delivered
            straight to your inbox. Join over 50,000 tech enthusiasts who trust
            us for their daily dose of innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Newsletter Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Subscribe Now</CardTitle>
              <CardDescription>
                Choose your interests and get personalized content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name (Optional)</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Topic Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    What topics interest you? (Optional)
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topics.map((topic) => {
                      const Icon = topic.icon;
                      const isSelected = selectedTopics.includes(topic.id);

                      return (
                        <div
                          key={topic.id}
                          className={`
                            flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all
                            ${
                              isSelected
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                            }
                          `}
                          onClick={() => toggleTopic(topic.id)}
                        >
                          <div className={`p-2 rounded-md ${topic.color}`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium text-slate-900 dark:text-slate-100">
                            {topic.name}
                          </span>
                          <Checkbox
                            checked={isSelected}
                            onChange={() => toggleTopic(topic.id)}
                            className="ml-auto"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="privacy" required />
                  <Label htmlFor="privacy" className="text-sm">
                    I agree to receive marketing emails and accept the{" "}
                    <a
                      href="/privacy"
                      className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
                    >
                      Privacy Policy
                    </a>
                  </Label>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Newsletter Preview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  What You'll Get
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Weekly Tech Digest
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Curated selection of the week's most important tech
                      stories
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Breaking News Alerts
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Instant notifications for major tech developments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Exclusive Content
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Subscriber-only articles, interviews, and insights
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Product Reviews
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      In-depth reviews of the latest gadgets and software
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Newsletter Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      50K+
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Subscribers
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      98%
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      Weekly
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Delivery
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      Free
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Forever
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-slate-600 dark:text-slate-400">
              <p>
                Join thousands of tech professionals who start their day with
                TechNews. Unsubscribe anytime with one click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
