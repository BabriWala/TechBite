"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Brain,
  Smartphone,
  Cpu,
  Star,
  TrendingUp,
  Gamepad2,
  Shield,
  Code,
  Cloud,
  Camera,
  Headphones,
  Car,
  Home,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";

// Mock categories data
const categories = [
  {
    id: "ai",
    name: "AI & Machine Learning",
    slug: "ai-machine-learning",
    description:
      "Artificial intelligence, machine learning, and neural networks shaping the future.",
    articleCount: 127,
    icon: Brain,
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    hoverColor: "hover:bg-purple-50 dark:hover:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "mobile",
    name: "Mobile & Apps",
    slug: "mobile-apps",
    description:
      "Smartphones, mobile apps, iOS, Android, and mobile technology trends.",
    articleCount: 89,
    icon: Smartphone,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    hoverColor: "hover:bg-blue-50 dark:hover:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "gadgets",
    name: "Gadgets & Hardware",
    slug: "gadgets-hardware",
    description:
      "Latest gadgets, computer hardware, processors, and electronic devices.",
    articleCount: 156,
    icon: Cpu,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    hoverColor: "hover:bg-green-50 dark:hover:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    id: "reviews",
    name: "Reviews & Comparisons",
    slug: "reviews-comparisons",
    description:
      "In-depth product reviews, comparisons, and buying guides for tech products.",
    articleCount: 203,
    icon: Star,
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    hoverColor: "hover:bg-orange-50 dark:hover:bg-orange-950",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "startups",
    name: "Startups & Funding",
    slug: "startups-funding",
    description:
      "Startup news, venture capital, funding rounds, and entrepreneurship.",
    articleCount: 94,
    icon: TrendingUp,
    color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    hoverColor: "hover:bg-pink-50 dark:hover:bg-pink-950",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    id: "gaming",
    name: "Gaming & Entertainment",
    slug: "gaming-entertainment",
    description:
      "Video games, gaming hardware, streaming, and entertainment technology.",
    articleCount: 78,
    icon: Gamepad2,
    color:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    hoverColor: "hover:bg-indigo-50 dark:hover:bg-indigo-950",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "security",
    name: "Security & Privacy",
    slug: "security-privacy",
    description:
      "Cybersecurity, data privacy, encryption, and digital safety news.",
    articleCount: 112,
    icon: Shield,
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    hoverColor: "hover:bg-red-50 dark:hover:bg-red-950",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    id: "development",
    name: "Web Development",
    slug: "web-development",
    description:
      "Programming, web development, frameworks, and developer tools.",
    articleCount: 145,
    icon: Code,
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    hoverColor: "hover:bg-teal-50 dark:hover:bg-teal-950",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    slug: "cloud-infrastructure",
    description:
      "Cloud computing, DevOps, infrastructure, and enterprise technology.",
    articleCount: 87,
    icon: Cloud,
    color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    hoverColor: "hover:bg-cyan-50 dark:hover:bg-cyan-950",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "photography",
    name: "Photography & Imaging",
    slug: "photography-imaging",
    description:
      "Cameras, photography gear, image editing, and visual technology.",
    articleCount: 65,
    icon: Camera,
    color:
      "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
    hoverColor: "hover:bg-violet-50 dark:hover:bg-violet-950",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    id: "audio",
    name: "Audio & Sound",
    slug: "audio-sound",
    description: "Headphones, speakers, audio equipment, and sound technology.",
    articleCount: 52,
    icon: Headphones,
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    hoverColor: "hover:bg-amber-50 dark:hover:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "automotive",
    name: "Automotive Tech",
    slug: "automotive-tech",
    description:
      "Electric vehicles, autonomous driving, and automotive technology.",
    articleCount: 73,
    icon: Car,
    color:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    hoverColor: "hover:bg-emerald-50 dark:hover:bg-emerald-950",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "smart-home",
    name: "Smart Home & IoT",
    slug: "smart-home-iot",
    description:
      "Smart home devices, Internet of Things, and connected technology.",
    articleCount: 91,
    icon: Home,
    color: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
    hoverColor: "hover:bg-lime-50 dark:hover:bg-lime-950",
    iconColor: "text-lime-600 dark:text-lime-400",
  },
  {
    id: "energy",
    name: "Energy & Sustainability",
    slug: "energy-sustainability",
    description:
      "Renewable energy, battery technology, and sustainable tech solutions.",
    articleCount: 48,
    icon: Zap,
    color:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    hoverColor: "hover:bg-yellow-50 dark:hover:bg-yellow-950",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "internet",
    name: "Internet & Networking",
    slug: "internet-networking",
    description:
      "Internet infrastructure, networking, 5G, and connectivity technology.",
    articleCount: 67,
    icon: Globe,
    color: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
    hoverColor: "hover:bg-slate-50 dark:hover:bg-slate-950",
    iconColor: "text-slate-600 dark:text-slate-400",
  },
];

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter categories based on search term
  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalArticles = categories.reduce(
    (sum, category) => sum + category.articleCount,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Browse by Category
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore the tech world by your favorite topics
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{categories.length} Categories</span>
            <Separator orientation="vertical" className="h-4" />
            <span>{totalArticles.toLocaleString()} Total Articles</span>
          </div>
        </header>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              aria-label="Search categories"
            />
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Results Info */}
        {searchTerm && (
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">
              {filteredCategories.length === 0
                ? "No categories found"
                : `Showing ${filteredCategories.length} of ${categories.length} categories`}
            </p>
          </div>
        )}

        {/* Category Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">
                No categories found matching "{searchTerm}"
              </p>
              <p className="text-sm">Try adjusting your search terms</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="group"
                >
                  <Card
                    className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-0 shadow-md ${category.hoverColor}`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div
                          className={`p-3 rounded-lg bg-background shadow-sm`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${category.iconColor}`}
                          />
                        </div>
                        <Badge className={category.color} variant="secondary">
                          {category.articleCount} articles
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="w-full justify-between group-hover:bg-background/80 transition-colors"
                        asChild
                      >
                        <span>
                          View Articles
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}

        {/* Popular Categories Section */}
        {!searchTerm && (
          <section className="mt-16">
            <Separator className="mb-12" />
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                Most Popular Categories
              </h2>
              <p className="text-muted-foreground">
                Categories with the most articles and engagement
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories
                .sort((a, b) => b.articleCount - a.articleCount)
                .slice(0, 4)
                .map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Link
                      key={`popular-${category.id}`}
                      href={`/category/${category.slug}`}
                    >
                      <Card className="text-center p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <div
                          className={`inline-flex p-3 rounded-full mb-3 ${category.color}`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-sm mb-1">
                          {category.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {category.articleCount} articles
                        </p>
                      </Card>
                    </Link>
                  );
                })}
            </div>
          </section>
        )}

        {/* Quick Stats */}
        {!searchTerm && (
          <section className="mt-16">
            <Separator className="mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {categories.length}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {totalArticles.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Articles
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {Math.round(totalArticles / categories.length)}
                </div>
                <div className="text-sm text-muted-foreground">
                  Avg per Category
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  Daily
                </div>
                <div className="text-sm text-muted-foreground">New Content</div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
