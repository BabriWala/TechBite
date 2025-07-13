"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Star,
  TrendingUp,
  Award,
  Sparkles,
  Eye,
  BookOpen,
  Brain,
  Smartphone,
  Shield,
  Car,
  Code,
  Zap,
  Cloud,
  Gamepad2,
} from "lucide-react";

// Mock featured articles data
const featuredArticles = [
  {
    id: 1,
    title:
      "The Future of AI: How Machine Learning Will Transform Every Industry by 2030",
    slug: "future-ai-transform-industries-2030",
    excerpt:
      "An in-depth analysis of how artificial intelligence and machine learning technologies are poised to revolutionize healthcare, finance, transportation, and education over the next decade. We explore the challenges, opportunities, and ethical considerations that will shape our AI-powered future.",
    category: "AI",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "AI Research Director",
    },
    publishDate: "2024-01-15",
    readingTime: 15,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: true,
    editorsPick: true,
    views: 12500,
    tags: ["artificial-intelligence", "machine-learning", "future-tech"],
    icon: Brain,
  },
  {
    id: 2,
    title:
      "iPhone 16 Deep Dive: Revolutionary Camera AI and What It Means for Mobile Photography",
    slug: "iphone-16-camera-ai-mobile-photography",
    excerpt:
      "Apple's latest iPhone introduces groundbreaking computational photography powered by the A18 Bionic chip. Our comprehensive review explores how these AI-driven camera features are setting new standards for smartphone photography and videography.",
    category: "Mobile",
    author: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Senior Tech Reviewer",
    },
    publishDate: "2024-01-14",
    readingTime: 12,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: true,
    editorsPick: false,
    views: 8900,
    tags: ["iphone", "mobile-photography", "apple"],
    icon: Smartphone,
  },
  {
    id: 3,
    title:
      "Cybersecurity in 2024: The Rise of AI-Powered Threats and Defense Systems",
    slug: "cybersecurity-2024-ai-threats-defense",
    excerpt:
      "As cybercriminals increasingly leverage artificial intelligence for sophisticated attacks, security professionals are fighting back with equally advanced AI-powered defense systems. This comprehensive report examines the evolving landscape of digital security.",
    category: "Security",
    author: {
      name: "Emily Watson",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Cybersecurity Analyst",
    },
    publishDate: "2024-01-13",
    readingTime: 18,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: true,
    editorsPick: true,
    views: 15200,
    tags: ["cybersecurity", "ai-security", "digital-defense"],
    icon: Shield,
  },
  {
    id: 4,
    title:
      "Tesla's Autonomous Revolution: Inside the Technology That's Changing Transportation",
    slug: "tesla-autonomous-revolution-transportation",
    excerpt:
      "An exclusive look at Tesla's Full Self-Driving technology, from neural network architecture to real-world performance. We examine how Tesla's approach to autonomous driving differs from competitors and what it means for the future of transportation.",
    category: "Automotive",
    author: {
      name: "James Park",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Automotive Tech Specialist",
    },
    publishDate: "2024-01-12",
    readingTime: 14,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: true,
    editorsPick: false,
    views: 11800,
    tags: ["tesla", "autonomous-driving", "electric-vehicles"],
    icon: Car,
  },
  {
    id: 5,
    title:
      "The Developer's Guide to React 19: Performance Optimizations and New Features",
    slug: "react-19-developer-guide-performance",
    excerpt:
      "React 19 introduces game-changing features that will transform how developers build modern web applications. Our comprehensive guide covers concurrent rendering improvements, new hooks, and performance optimizations that every React developer needs to know.",
    category: "Development",
    author: {
      name: "Lisa Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Senior Frontend Developer",
    },
    publishDate: "2024-01-11",
    readingTime: 20,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: true,
    editorsPick: true,
    views: 9600,
    tags: ["react", "web-development", "javascript"],
    icon: Code,
  },
  {
    id: 6,
    title:
      "Quantum Computing Breakthrough: IBM's 1000-Qubit Processor Changes Everything",
    slug: "quantum-computing-ibm-1000-qubit-breakthrough",
    excerpt:
      "IBM's latest quantum processor represents a monumental leap forward in quantum computing capabilities. We explore the technical achievements, potential applications, and what this breakthrough means for cryptography, drug discovery, and scientific research.",
    category: "Technology",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Quantum Computing Researcher",
    },
    publishDate: "2024-01-10",
    readingTime: 16,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: true,
    editorsPick: false,
    views: 7300,
    tags: ["quantum-computing", "ibm", "breakthrough"],
    icon: Zap,
  },
  {
    id: 7,
    title:
      "Cloud Wars 2024: AWS vs Azure vs Google Cloud - The Ultimate Comparison",
    slug: "cloud-wars-2024-aws-azure-google-comparison",
    excerpt:
      "A comprehensive analysis of the three major cloud platforms, comparing their services, pricing, performance, and strategic direction. Essential reading for CTOs and developers making cloud infrastructure decisions in 2024.",
    category: "Cloud",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Cloud Architecture Expert",
    },
    publishDate: "2024-01-09",
    readingTime: 22,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: true,
    editorsPick: true,
    views: 13400,
    tags: ["cloud-computing", "aws", "azure", "google-cloud"],
    icon: Cloud,
  },
  {
    id: 8,
    title:
      "Gaming's Next Frontier: How AI is Revolutionizing Game Development and Player Experience",
    slug: "gaming-ai-revolution-development-experience",
    excerpt:
      "From procedural content generation to intelligent NPCs, artificial intelligence is transforming every aspect of game development. We explore how AI is creating more immersive, personalized, and dynamic gaming experiences.",
    category: "Gaming",
    author: {
      name: "Ryan Miller",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Gaming Industry Analyst",
    },
    publishDate: "2024-01-08",
    readingTime: 13,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: true,
    editorsPick: false,
    views: 10200,
    tags: ["gaming", "ai-gaming", "game-development"],
    icon: Gamepad2,
  },
  {
    id: 9,
    title:
      "The Startup Unicorn Playbook: How 10 Companies Reached $1B Valuations in Record Time",
    slug: "startup-unicorn-playbook-billion-valuations",
    excerpt:
      "An exclusive analysis of the strategies, decisions, and market conditions that enabled ten recent unicorn startups to achieve billion-dollar valuations faster than ever before. Essential insights for entrepreneurs and investors.",
    category: "Startups",
    author: {
      name: "Jennifer Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Venture Capital Analyst",
    },
    publishDate: "2024-01-07",
    readingTime: 19,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: true,
    editorsPick: true,
    views: 16800,
    tags: ["startups", "unicorn", "venture-capital"],
    icon: TrendingUp,
  },
];

const categories = [
  "All",
  "AI",
  "Mobile",
  "Security",
  "Automotive",
  "Development",
  "Technology",
  "Cloud",
  "Gaming",
  "Startups",
];

const getCategoryColor = (category) => {
  const colors = {
    AI: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Mobile: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Automotive:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Development:
      "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    Technology:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    Cloud: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
    Gaming: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    Startups:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  };
  return (
    colors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  );
};

export default function FeaturedArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Filter articles by category
  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") return featuredArticles;
    return featuredArticles.filter(
      (article) => article.category === activeCategory
    );
  }, [activeCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  // Editor's picks for hero section
  const editorsPicks = featuredArticles
    .filter((article) => article.editorsPick)
    .slice(0, 3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Featured Articles
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Editor's picks and in-depth tech stories that shape the future
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <span>{featuredArticles.length} Premium Articles</span>
              <Separator orientation="vertical" className="h-4" />
              <span>{editorsPicks.length} Editor's Picks</span>
              <Separator orientation="vertical" className="h-4" />
              <span>Updated Daily</span>
            </div>
          </div>

          {/* Editor's Picks Carousel */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Editor's Picks</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {editorsPicks.map((article) => {
                const IconComponent = article.icon;
                return (
                  <Card
                    key={`hero-${article.id}`}
                    className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-card to-card/50"
                  >
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Link href={`/article/${article.slug}`}>
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            width={600}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </Link>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                            <Star className="w-3 h-3 mr-1" />
                            Editor's Pick
                          </Badge>
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="p-2 rounded-full bg-background/90 backdrop-blur-sm">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <Link href={`/article/${article.slug}`}>
                        <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Image
                            src={article.author.avatar || "/placeholder.svg"}
                            alt={article.author.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium">
                            {article.author.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readingTime} min
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {formatViews(article.views)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Category Tabs */}
        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">All Featured Articles</h2>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {filteredArticles.length} articles
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </div>
          </div>

          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              {paginatedArticles.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-muted-foreground">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold mb-2">
                      No Featured Articles
                    </h3>
                    <p>
                      No featured articles found in the {category} category.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Articles Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {paginatedArticles.map((article) => {
                      const IconComponent = article.icon;
                      return (
                        <Card
                          key={article.id}
                          className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 shadow-md"
                        >
                          <CardHeader className="p-0">
                            <div className="relative overflow-hidden rounded-t-lg">
                              <Link href={`/article/${article.slug}`}>
                                <Image
                                  src={article.image || "/placeholder.svg"}
                                  alt={article.title}
                                  width={600}
                                  height={400}
                                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </Link>
                              <div className="absolute top-4 left-4 flex gap-2">
                                {article.editorsPick && (
                                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                                    <Star className="w-3 h-3 mr-1" />
                                    Editor's Pick
                                  </Badge>
                                )}
                                <Badge
                                  className={getCategoryColor(article.category)}
                                >
                                  {article.category}
                                </Badge>
                              </div>
                              <div className="absolute top-4 right-4">
                                <div className="p-2 rounded-full bg-background/90 backdrop-blur-sm">
                                  <IconComponent className="w-4 h-4 text-primary" />
                                </div>
                              </div>
                              <div className="absolute bottom-4 right-4">
                                <Badge
                                  variant="secondary"
                                  className="bg-background/90 backdrop-blur-sm"
                                >
                                  <Eye className="w-3 h-3 mr-1" />
                                  {formatViews(article.views)}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-6">
                            <Link href={`/article/${article.slug}`}>
                              <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                                {article.title}
                              </h3>
                            </Link>
                            <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                              {article.excerpt}
                            </p>

                            <Separator className="mb-4" />

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Image
                                  src={
                                    article.author.avatar || "/placeholder.svg"
                                  }
                                  alt={article.author.name}
                                  width={32}
                                  height={32}
                                  className="rounded-full"
                                />
                                <div>
                                  <p className="font-medium text-sm">
                                    {article.author.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {article.author.title}
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                                  <Calendar className="w-3 h-3" />
                                  {formatDate(article.publishDate)}
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  {article.readingTime} min read
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="flex items-center"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Previous
                      </Button>

                      <div className="flex items-center space-x-1">
                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1
                        ).map((page) => (
                          <Button
                            key={page}
                            variant={
                              currentPage === page ? "default" : "outline"
                            }
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className="w-10 h-10"
                          >
                            {page}
                          </Button>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="flex items-center"
                      >
                        Next
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Stats Section */}
        <section className="mt-16">
          <Separator className="mb-12" />
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Featured Content Stats</h2>
            <p className="text-muted-foreground">
              Our commitment to quality editorial content
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {featuredArticles.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Featured Articles
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {editorsPicks.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Editor's Picks
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {Math.round(
                  featuredArticles.reduce(
                    (sum, article) => sum + article.readingTime,
                    0
                  ) / featuredArticles.length
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                Avg Reading Time
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {formatViews(
                  featuredArticles.reduce(
                    (sum, article) => sum + article.views,
                    0
                  )
                )}
              </div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
