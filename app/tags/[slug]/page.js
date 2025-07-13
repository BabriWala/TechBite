"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Hash,
  Home,
  Search,
  ChevronRightIcon as BreadcrumbChevron,
  Brain,
  Smartphone,
  Shield,
  Car,
  Code,
  Zap,
  Cloud,
  TrendingUp,
} from "lucide-react";

// Tag metadata with descriptions and icons
const tagData = {
  "artificial-intelligence": {
    name: "Artificial Intelligence",
    description:
      "Explore the latest developments in AI, machine learning, neural networks, and intelligent systems that are reshaping technology and society.",
    icon: Brain,
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    iconColor: "text-purple-600 dark:text-purple-400",
    category: "Technology",
  },
  "iphone-15": {
    name: "iPhone 15",
    description:
      "Complete coverage of Apple's iPhone 15 series including reviews, features, comparisons, and the latest news about Apple's flagship smartphone.",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    iconColor: "text-blue-600 dark:text-blue-400",
    category: "Mobile",
  },
  cybersecurity: {
    name: "Cybersecurity",
    description:
      "Stay informed about the latest cybersecurity threats, data breaches, security tools, and best practices for protecting digital assets.",
    icon: Shield,
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    iconColor: "text-red-600 dark:text-red-400",
    category: "Security",
  },
  tesla: {
    name: "Tesla",
    description:
      "Latest news about Tesla's electric vehicles, autonomous driving technology, energy solutions, and Elon Musk's innovative company.",
    icon: Car,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    iconColor: "text-green-600 dark:text-green-400",
    category: "Automotive",
  },
  react: {
    name: "React",
    description:
      "React development tutorials, best practices, new features, and the latest updates from the React ecosystem and community.",
    icon: Code,
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    iconColor: "text-teal-600 dark:text-teal-400",
    category: "Development",
  },
  "next-js": {
    name: "Next.js",
    description:
      "Next.js framework tutorials, performance optimization, deployment strategies, and the latest features in React's production framework.",
    icon: Code,
    color: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
    iconColor: "text-slate-600 dark:text-slate-400",
    category: "Development",
  },
  openai: {
    name: "OpenAI",
    description:
      "Coverage of OpenAI's latest models, research breakthroughs, ChatGPT updates, and the company's impact on artificial intelligence.",
    icon: Brain,
    color:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    category: "AI",
  },
  chatgpt: {
    name: "ChatGPT",
    description:
      "ChatGPT tutorials, use cases, updates, and how this conversational AI is transforming various industries and workflows.",
    icon: Brain,
    color:
      "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
    iconColor: "text-violet-600 dark:text-violet-400",
    category: "AI",
  },
  blockchain: {
    name: "Blockchain",
    description:
      "Blockchain technology news, cryptocurrency developments, DeFi innovations, and the future of decentralized systems.",
    icon: Zap,
    color:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    category: "Technology",
  },
  "cloud-computing": {
    name: "Cloud Computing",
    description:
      "Cloud infrastructure, serverless computing, multi-cloud strategies, and the latest developments in cloud technology platforms.",
    icon: Cloud,
    color: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
    iconColor: "text-sky-600 dark:text-sky-400",
    category: "Technology",
  },
};

// Mock articles data with multiple tags
const mockArticles = [
  {
    id: 1,
    title: "OpenAI Unveils GPT-5: The Next Evolution in Conversational AI",
    slug: "openai-gpt-5-evolution",
    summary:
      "OpenAI's latest language model introduces groundbreaking multimodal capabilities, enhanced reasoning, and unprecedented natural language understanding that could revolutionize human-AI interaction.",
    tags: ["artificial-intelligence", "openai", "chatgpt"],
    category: "AI",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-15",
    readingTime: 8,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: true,
  },
  {
    id: 2,
    title: "iPhone 15 Pro Max Review: Apple's Most Advanced Smartphone Yet",
    slug: "iphone-15-pro-max-review",
    summary:
      "Our comprehensive review of the iPhone 15 Pro Max covers its titanium design, advanced camera system, A17 Pro chip performance, and whether it's worth the premium price.",
    tags: ["iphone-15", "apple", "mobile"],
    category: "Reviews",
    author: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-14",
    readingTime: 12,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: false,
  },
  {
    id: 3,
    title: "Major Cybersecurity Breach Exposes 50 Million User Records",
    slug: "cybersecurity-breach-50-million",
    summary:
      "A sophisticated cyberattack on a major tech company has compromised sensitive user data, highlighting the urgent need for enhanced security measures and better data protection protocols.",
    tags: ["cybersecurity", "data-breach", "privacy"],
    category: "Security",
    author: {
      name: "Emily Watson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-13",
    readingTime: 6,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: false,
  },
  {
    id: 4,
    title: "Tesla's Full Self-Driving Beta Achieves Milestone Safety Rating",
    slug: "tesla-fsd-safety-milestone",
    summary:
      "Tesla's latest Full Self-Driving beta software demonstrates remarkable safety improvements with AI-powered decision making that surpasses human drivers in complex urban scenarios.",
    tags: ["tesla", "autonomous-driving", "artificial-intelligence"],
    category: "Automotive",
    author: {
      name: "James Park",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-12",
    readingTime: 9,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
    featured: false,
  },
  {
    id: 5,
    title: "React 19 Beta: Revolutionary Features for Modern Web Development",
    slug: "react-19-beta-features",
    summary:
      "React 19 introduces game-changing features including automatic batching improvements, concurrent rendering enhancements, and new hooks that will transform how developers build applications.",
    tags: ["react", "web-development", "javascript"],
    category: "Development",
    author: {
      name: "Lisa Thompson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-11",
    readingTime: 10,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: true,
  },
  {
    id: 6,
    title: "Next.js 15: Performance Optimizations and New App Router Features",
    slug: "nextjs-15-performance-optimizations",
    summary:
      "Next.js 15 delivers significant performance improvements, enhanced App Router capabilities, and new developer experience features that make React development more efficient than ever.",
    tags: ["next-js", "react", "web-development"],
    category: "Development",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-10",
    readingTime: 8,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
    featured: false,
  },
  {
    id: 7,
    title: "ChatGPT Integration Transforms Enterprise Productivity Workflows",
    slug: "chatgpt-enterprise-productivity",
    summary:
      "Companies worldwide are integrating ChatGPT into their workflows, resulting in unprecedented productivity gains and transforming how teams collaborate and solve complex problems.",
    tags: ["chatgpt", "artificial-intelligence", "enterprise"],
    category: "Business",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-09",
    readingTime: 7,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: false,
  },
  {
    id: 8,
    title: "iPhone 15 Camera System: Computational Photography Breakthrough",
    slug: "iphone-15-camera-breakthrough",
    summary:
      "Apple's iPhone 15 series introduces revolutionary computational photography features powered by the A17 Pro chip, delivering professional-grade results for everyday users.",
    tags: ["iphone-15", "photography", "apple"],
    category: "Technology",
    author: {
      name: "Ryan Miller",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-08",
    readingTime: 6,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
    featured: false,
  },
  {
    id: 9,
    title: "AI-Powered Cybersecurity: The Future of Threat Detection",
    slug: "ai-cybersecurity-threat-detection",
    summary:
      "Advanced artificial intelligence systems are revolutionizing cybersecurity by predicting and preventing cyber attacks before they happen, representing a major leap in digital protection.",
    tags: ["artificial-intelligence", "cybersecurity", "machine-learning"],
    category: "Security",
    author: {
      name: "Jennifer Lee",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-07",
    readingTime: 9,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: false,
  },
  {
    id: 10,
    title: "Blockchain Revolution: Decentralized Finance Reaches New Heights",
    slug: "blockchain-defi-revolution",
    summary:
      "The decentralized finance ecosystem built on blockchain technology is experiencing unprecedented growth, offering new financial services and challenging traditional banking systems.",
    tags: ["blockchain", "cryptocurrency", "defi"],
    category: "Finance",
    author: {
      name: "Mark Davis",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-06",
    readingTime: 11,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
    featured: false,
  },
  {
    id: 11,
    title: "Tesla Model Y Refresh: Enhanced Range and Autonomous Features",
    slug: "tesla-model-y-refresh",
    summary:
      "Tesla's updated Model Y brings improved battery technology, extended range, and advanced autonomous driving capabilities that push the boundaries of electric vehicle innovation.",
    tags: ["tesla", "electric-vehicles", "autonomous-driving"],
    category: "Automotive",
    author: {
      name: "Sophie Anderson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-05",
    readingTime: 8,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: false,
  },
  {
    id: 12,
    title: "Cloud Computing Trends: Multi-Cloud Strategies Dominate 2024",
    slug: "cloud-computing-multicloud-trends",
    summary:
      "Organizations are increasingly adopting multi-cloud strategies to optimize performance, reduce costs, and avoid vendor lock-in, reshaping the cloud computing landscape.",
    tags: ["cloud-computing", "enterprise", "technology"],
    category: "Technology",
    author: {
      name: "Robert Chen",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "2024-01-04",
    readingTime: 7,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
    featured: false,
  },
];

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "popular", label: "Most Popular" },
  { value: "featured", label: "Featured" },
];

const getCategoryColor = (category) => {
  const colors = {
    AI: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Reviews:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Automotive:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Development:
      "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    Business: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Technology:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    Finance:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  };
  return (
    colors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  );
};

export default function TagDetailPage({ params }) {
  const [sortBy, setSortBy] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const tag = tagData[params.slug];

  // Filter articles by tag and search term
  const tagArticles = mockArticles.filter(
    (article) =>
      article.tags.includes(params.slug) &&
      (searchTerm === "" ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Sort articles
  const sortedArticles = useMemo(() => {
    return [...tagArticles].sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return (
            new Date(a.publishDate).getTime() -
            new Date(b.publishDate).getTime()
          );
        case "popular":
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case "featured":
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default: // newest
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
      }
    });
  }, [tagArticles, sortBy]);

  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = sortedArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (!tag) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Hash className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-4">Tag Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The tag you're looking for doesn't exist.
          </p>
          <Link href="/tags">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tags
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = tag.icon;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center space-x-2 text-sm text-muted-foreground mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          <BreadcrumbChevron className="w-4 h-4" />
          <Link
            href="/tags"
            className="hover:text-foreground transition-colors"
          >
            Tags
          </Link>
          <BreadcrumbChevron className="w-4 h-4" />
          <span className="text-foreground font-medium">{tag.name}</span>
        </nav>

        {/* Page Header */}
        <header className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`p-4 rounded-xl ${tag.color} shadow-sm`}>
              <IconComponent className={`w-8 h-8 ${tag.iconColor}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Hash className="w-6 h-6 text-muted-foreground" />
                <h1 className="text-3xl md:text-4xl font-bold">
                  Articles tagged: {tag.name}
                </h1>
              </div>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                {tag.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{sortedArticles.length} articles found</span>
                {sortedArticles.length > 0 && (
                  <>
                    <Separator orientation="vertical" className="h-4" />
                    <span>
                      Page {currentPage} of {totalPages}
                    </span>
                  </>
                )}
                <Separator orientation="vertical" className="h-4" />
                <Badge className={tag.color} variant="secondary">
                  {tag.category}
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/tags">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Tags
              </Button>
            </Link>
          </div>
        </header>

        <Separator className="mb-8" />

        {/* Filter & Sort Controls */}
        {sortedArticles.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-4 mb-8 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Search Input */}
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search within tag..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  aria-label="Search articles within tag"
                />
              </div>

              {/* Sort Select */}
              <div className="space-y-2">
                <label
                  htmlFor="sort-select"
                  className="text-sm font-medium sr-only"
                >
                  Sort by
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger
                    id="sort-select"
                    className="w-full sm:w-[180px]"
                  >
                    <SelectValue placeholder="Sort articles" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Info */}
            {searchTerm && (
              <div className="text-sm text-muted-foreground">
                {sortedArticles.length === 0
                  ? "No articles found"
                  : `${sortedArticles.length} articles match "${searchTerm}"`}
              </div>
            )}
          </div>
        )}

        {/* Article Grid */}
        {paginatedArticles.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <IconComponent className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h2 className="text-xl font-semibold mb-2">
                {searchTerm ? "No Articles Found" : "No Articles Yet"}
              </h2>
              <p>
                {searchTerm
                  ? `No articles match "${searchTerm}" in the ${tag.name} tag.`
                  : `There are currently no articles tagged with "${tag.name}".`}
              </p>
              {searchTerm && (
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => setSearchTerm("")}
                >
                  Clear Search
                </Button>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedArticles.map((article) => (
                <Card
                  key={article.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Link href={`/article/${article.slug}`}>
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                        {article.featured && (
                          <Badge
                            variant="secondary"
                            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          >
                            Featured
                          </Badge>
                        )}
                        {article.popular && (
                          <Badge
                            variant="secondary"
                            className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
                          >
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Link href={`/article/${article.slug}`}>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>

                    <Separator className="mb-4" />

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Image
                            src={article.author.avatar || "/placeholder.svg"}
                            alt={article.author.name}
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                          <span>{article.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(article.publishDate)}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readingTime} min
                      </div>
                    </div>

                    {/* Article Tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {article.tags.slice(0, 3).map((articleTag) => (
                        <Link key={articleTag} href={`/tags/${articleTag}`}>
                          <Badge
                            variant="outline"
                            className={`text-xs hover:bg-primary hover:text-primary-foreground transition-colors ${
                              articleTag === params.slug ? tag.color : ""
                            }`}
                          >
                            <Hash className="w-2 h-2 mr-1" />
                            {tagData[articleTag]?.name || articleTag}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-10 h-10"
                      >
                        {page}
                      </Button>
                    )
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
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

        {/* Related Tags Section */}
        {sortedArticles.length > 0 && (
          <section className="mt-16">
            <Separator className="mb-8" />
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Related Tags</h2>
              <p className="text-muted-foreground">Explore similar topics</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from(
                new Set(
                  sortedArticles
                    .flatMap((article) => article.tags)
                    .filter((articleTag) => articleTag !== params.slug)
                )
              )
                .slice(0, 8)
                .map((relatedTag) => {
                  const relatedTagData = tagData[relatedTag];
                  if (!relatedTagData) return null;

                  return (
                    <Link key={relatedTag} href={`/tags/${relatedTag}`}>
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        <Hash className="w-3 h-3 mr-1" />
                        {relatedTagData.name}
                      </Badge>
                    </Link>
                  );
                })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
