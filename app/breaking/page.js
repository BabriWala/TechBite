"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertTriangle,
  Clock,
  Zap,
  Radio,
  Filter,
  RefreshCw,
  TrendingUp,
  Shield,
  Smartphone,
  Brain,
  Car,
  Code,
  Cloud,
  Gamepad2,
  Building,
  DollarSign,
} from "lucide-react";

// Mock breaking news data
const breakingNews = [
  {
    id: 1,
    headline:
      "URGENT: Major Data Breach Affects 100 Million Users Across Multiple Tech Platforms",
    slug: "major-data-breach-100-million-users",
    summary:
      "A coordinated cyberattack has compromised user data from several major technology companies, affecting over 100 million accounts worldwide.",
    category: "Security",
    priority: "critical",
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    author: "Security Team",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    icon: Shield,
    breaking: true,
  },
  {
    id: 2,
    headline:
      "Apple Announces Emergency iOS Update to Fix Critical Security Vulnerability",
    slug: "apple-emergency-ios-update-security",
    summary:
      "Apple has released an urgent iOS 17.3.1 update addressing a zero-day exploit that could allow remote code execution.",
    category: "Mobile",
    priority: "high",
    timestamp: new Date(Date.now() - 12 * 60 * 1000), // 12 minutes ago
    author: "Mobile Team",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    icon: Smartphone,
    breaking: true,
  },
  {
    id: 3,
    headline: "OpenAI Servers Experience Global Outage, ChatGPT Down Worldwide",
    slug: "openai-chatgpt-global-outage",
    summary:
      "ChatGPT and OpenAI API services are currently experiencing a widespread outage affecting millions of users globally.",
    category: "AI",
    priority: "high",
    timestamp: new Date(Date.now() - 18 * 60 * 1000), // 18 minutes ago
    author: "AI Team",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    icon: Brain,
    breaking: true,
  },
  {
    id: 4,
    headline: "Tesla Recalls 2 Million Vehicles Over Autopilot Safety Concerns",
    slug: "tesla-recalls-2-million-autopilot-safety",
    summary:
      "Tesla is recalling nearly 2 million vehicles in the US due to safety concerns with the Autopilot system's driver monitoring.",
    category: "Automotive",
    priority: "high",
    timestamp: new Date(Date.now() - 25 * 60 * 1000), // 25 minutes ago
    author: "Auto Team",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    icon: Car,
    breaking: true,
  },
  {
    id: 5,
    headline:
      "Microsoft Azure Suffers Major Outage Affecting Enterprise Customers",
    slug: "microsoft-azure-major-outage",
    summary:
      "Microsoft Azure cloud services are experiencing significant disruptions, impacting businesses and applications worldwide.",
    category: "Cloud",
    priority: "high",
    timestamp: new Date(Date.now() - 32 * 60 * 1000), // 32 minutes ago
    author: "Cloud Team",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    icon: Cloud,
    breaking: true,
  },
  {
    id: 6,
    headline: "GitHub Hit by Massive DDoS Attack, Services Partially Restored",
    slug: "github-ddos-attack-services-restored",
    summary:
      "GitHub has been targeted by a sophisticated DDoS attack, causing widespread service disruptions for developers worldwide.",
    category: "Development",
    priority: "medium",
    timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
    author: "Dev Team",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    icon: Code,
    breaking: true,
  },
  {
    id: 7,
    headline:
      "Sony PlayStation Network Down: Millions Unable to Access Online Games",
    slug: "sony-playstation-network-down",
    summary:
      "PlayStation Network is experiencing widespread outages, preventing users from accessing online gaming and digital services.",
    category: "Gaming",
    priority: "medium",
    timestamp: new Date(Date.now() - 52 * 60 * 1000), // 52 minutes ago
    author: "Gaming Team",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    icon: Gamepad2,
    breaking: true,
  },
  {
    id: 8,
    headline: "Meta Announces Layoffs of 15,000 Employees Amid Restructuring",
    slug: "meta-layoffs-15000-employees",
    summary:
      "Meta is cutting 15,000 jobs as part of a major restructuring effort, marking the largest layoffs in the company's history.",
    category: "Business",
    priority: "medium",
    timestamp: new Date(Date.now() - 68 * 60 * 1000), // 1 hour 8 minutes ago
    author: "Business Team",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    icon: Building,
    breaking: true,
  },
  {
    id: 9,
    headline: "Bitcoin Crashes Below $40,000 Following Regulatory Crackdown",
    slug: "bitcoin-crashes-40000-regulatory",
    summary:
      "Bitcoin has fallen below $40,000 for the first time in months following new regulatory announcements from major economies.",
    category: "Finance",
    priority: "medium",
    timestamp: new Date(Date.now() - 75 * 60 * 1000), // 1 hour 15 minutes ago
    author: "Finance Team",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    icon: DollarSign,
    breaking: false,
  },
];

const categories = [
  "All",
  "Security",
  "Mobile",
  "AI",
  "Automotive",
  "Cloud",
  "Development",
  "Gaming",
  "Business",
  "Finance",
];

const getPriorityColor = (priority) => {
  switch (priority) {
    case "critical":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-200 dark:border-red-800";
    case "high":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 border-gray-200 dark:border-gray-800";
  }
};

const getCategoryColor = (category) => {
  const colors = {
    Security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Mobile: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    AI: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Automotive:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Cloud: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
    Development:
      "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    Gaming: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    Business:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    Finance:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  };
  return (
    colors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  );
};

export default function BreakingNewsPage() {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [newItemsCount, setNewItemsCount] = useState(0);

  // Filter news by category
  const filteredNews = useMemo(() => {
    if (selectedCategory === "All") return breakingNews;
    return breakingNews.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Simulate auto-refresh
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      setLastUpdated(new Date());
      setNewItemsCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - timestamp.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60)
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24)
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  };

  const formatLastUpdated = (timestamp) => {
    return timestamp.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Breaking news for ticker
  const tickerNews = breakingNews.filter((item) => item.breaking).slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      {/* Live Ticker Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 overflow-hidden">
        <div className="flex items-center">
          <div className="flex items-center gap-2 px-4 whitespace-nowrap">
            <Radio className="w-4 h-4 animate-pulse" />
            <span className="font-bold text-sm">BREAKING</span>
          </div>
          <div className="flex animate-marquee">
            {tickerNews.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center whitespace-nowrap"
              >
                <Link
                  href={`/article/${item.slug}`}
                  className="hover:underline"
                >
                  <span className="text-sm font-medium">{item.headline}</span>
                </Link>
                {index < tickerNews.length - 1 && (
                  <span className="mx-8 text-red-200">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Breaking News
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-red-600 text-white animate-pulse">
                  <Radio className="w-3 h-3 mr-1" />
                  LIVE
                </Badge>
                <span className="text-muted-foreground">
                  Latest critical updates in the tech world
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Last updated: {formatLastUpdated(lastUpdated)}
              </span>
              {newItemsCount > 0 && (
                <Badge variant="secondary" className="animate-bounce">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {newItemsCount} new
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Auto-refresh toggle */}
              <div className="flex items-center gap-2">
                <Switch
                  id="auto-refresh"
                  checked={autoRefresh}
                  onCheckedChange={setAutoRefresh}
                />
                <label htmlFor="auto-refresh" className="text-sm font-medium">
                  Auto-refresh
                </label>
              </div>

              {/* Manual refresh button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLastUpdated(new Date())}
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
            </div>
          </div>
        </header>

        {/* Auto-refresh indicator */}
        <div className="mb-6 p-3 bg-muted/50 rounded-lg border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {autoRefresh
                ? "This page updates every 30 seconds"
                : "Auto-refresh is disabled"}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">
                {filteredNews.length} breaking stories
              </span>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-[140px] h-8">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Breaking News Feed */}
        <div className="space-y-4">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h2 className="text-xl font-semibold mb-2">No Breaking News</h2>
              <p className="text-muted-foreground">
                No breaking news found in the {selectedCategory} category.
              </p>
            </div>
          ) : (
            filteredNews.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={item.id}
                  className={`group transition-all duration-300 hover:shadow-lg border-l-4 ${
                    item.priority === "critical"
                      ? "border-l-red-500 bg-red-50/50 dark:bg-red-950/20"
                      : item.priority === "high"
                      ? "border-l-orange-500 bg-orange-50/50 dark:bg-orange-950/20"
                      : "border-l-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/20"
                  } ${index === 0 ? "animate-pulse" : ""}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {item.breaking && (
                            <Badge className="bg-red-600 text-white text-xs animate-pulse">
                              <Zap className="w-3 h-3 mr-1" />
                              BREAKING
                            </Badge>
                          )}
                          <Badge
                            className={getPriorityColor(item.priority)}
                            variant="outline"
                          >
                            {item.priority.toUpperCase()}
                          </Badge>
                          <Badge
                            className={getCategoryColor(item.category)}
                            variant="secondary"
                          >
                            {item.category}
                          </Badge>
                        </div>
                        <Link href={`/article/${item.slug}`}>
                          <h2 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-2">
                            {item.headline}
                          </h2>
                        </Link>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formatTimeAgo(item.timestamp)}
                          </span>
                          <span>By {item.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-muted">
                          <IconComponent className="w-5 h-5 text-muted-foreground" />
                        </div>
                        {item.image && (
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.headline}
                            width={80}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link href={`/article/${item.slug}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        >
                          Read Full Story
                        </Button>
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Updated {formatTimeAgo(item.timestamp)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Emergency Contact Info */}
        <section className="mt-16">
          <Separator className="mb-8" />
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Breaking News Alerts</h3>
                <p className="text-muted-foreground mb-4">
                  Stay informed about critical tech developments as they happen.
                  Our breaking news team monitors global tech events 24/7.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <span>Live monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                    <span>Real-time updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
                    <span>Priority alerts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
