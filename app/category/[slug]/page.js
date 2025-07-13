"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
  Home,
  ChevronRightIcon as BreadcrumbChevron,
  Brain,
  Smartphone,
  Cpu,
  Star,
  TrendingUp,
  Gamepad2,
  Shield,
  Code,
  Cloud,
} from "lucide-react";
import { useParams } from "next/navigation";

// Category data with icons
const categoryData = {
  "ai-machine-learning": {
    name: "AI & Machine Learning",
    description:
      "Artificial intelligence, machine learning, and neural networks shaping the future of technology.",
    icon: Brain,
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  "mobile-apps": {
    name: "Mobile & Apps",
    description:
      "Latest smartphones, mobile applications, iOS, Android, and mobile technology innovations.",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  "gadgets-hardware": {
    name: "Gadgets & Hardware",
    description:
      "Cutting-edge gadgets, computer hardware, processors, and electronic devices.",
    icon: Cpu,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    iconColor: "text-green-600 dark:text-green-400",
  },
  "reviews-comparisons": {
    name: "Reviews & Comparisons",
    description:
      "In-depth product reviews, detailed comparisons, and comprehensive buying guides.",
    icon: Star,
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  "startups-funding": {
    name: "Startups & Funding",
    description:
      "Startup ecosystem news, venture capital, funding rounds, and entrepreneurship insights.",
    icon: TrendingUp,
    color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  "gaming-entertainment": {
    name: "Gaming & Entertainment",
    description:
      "Video games, gaming hardware, streaming platforms, and entertainment technology.",
    icon: Gamepad2,
    color:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  "security-privacy": {
    name: "Security & Privacy",
    description:
      "Cybersecurity threats, data privacy, encryption technologies, and digital safety.",
    icon: Shield,
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    iconColor: "text-red-600 dark:text-red-400",
  },
  "web-development": {
    name: "Web Development",
    description:
      "Programming languages, web frameworks, developer tools, and coding best practices.",
    icon: Code,
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  "cloud-infrastructure": {
    name: "Cloud & Infrastructure",
    description:
      "Cloud computing platforms, DevOps practices, infrastructure, and enterprise solutions.",
    icon: Cloud,
    color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
};

// Mock articles data
const mockArticles = [
  {
    id: 1,
    title:
      "OpenAI Launches GPT-5: Revolutionary Breakthrough in Conversational AI",
    slug: "openai-gpt-5-launch",
    summary:
      "The latest iteration of GPT introduces multimodal capabilities, improved reasoning, and unprecedented natural language understanding that could reshape how we interact with AI systems.",
    category: "ai-machine-learning",
    author: {
      name: "Dr. Sarah Chen",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
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
    title:
      "Apple's M4 Chip Delivers 40% Performance Boost with Enhanced Neural Engine",
    slug: "apple-m4-chip-performance",
    summary:
      "Apple's latest silicon breakthrough focuses heavily on AI workloads, featuring a redesigned Neural Processing Unit that accelerates machine learning tasks across all applications.",
    category: "ai-machine-learning",
    author: {
      name: "Michael Rodriguez",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    publishDate: "2024-01-14",
    readingTime: 6,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: false,
  },
  {
    id: 3,
    title: "Google's Gemini AI Now Powers Real-Time Language Translation",
    slug: "google-gemini-translation",
    summary:
      "Google integrates Gemini AI into its translation services, offering real-time conversation translation with 95% accuracy across 100+ languages.",
    category: "ai-machine-learning",
    author: {
      name: "Emily Watson",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    publishDate: "2024-01-13",
    readingTime: 5,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
    featured: false,
  },
  {
    id: 4,
    title: "Tesla's Full Self-Driving Beta Achieves 99.9% Safety Rating",
    slug: "tesla-fsd-safety-rating",
    summary:
      "Tesla's latest FSD update demonstrates remarkable safety improvements, with AI-powered decision making that surpasses human drivers in complex scenarios.",
    category: "ai-machine-learning",
    author: {
      name: "James Park",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    publishDate: "2024-01-12",
    readingTime: 7,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: false,
  },
  {
    id: 5,
    title: "Microsoft Copilot Integration Transforms Office Productivity",
    slug: "microsoft-copilot-office",
    summary:
      "Microsoft's AI assistant now seamlessly integrates across all Office applications, automating complex tasks and boosting workplace productivity by up to 60%.",
    category: "ai-machine-learning",
    author: {
      name: "Lisa Thompson",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    publishDate: "2024-01-11",
    readingTime: 6,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
    featured: false,
  },
  {
    id: 6,
    title: "Meta's AI Research Lab Unveils Breakthrough in Computer Vision",
    slug: "meta-ai-computer-vision",
    summary:
      "Meta's latest computer vision model can understand and interpret complex visual scenes with human-level accuracy, opening new possibilities for AR and VR applications.",
    category: "ai-machine-learning",
    author: {
      name: "David Kim",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    publishDate: "2024-01-10",
    readingTime: 8,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: false,
  },
  {
    id: 7,
    title: "iPhone 16 Pro Review: Camera AI Redefines Mobile Photography",
    slug: "iphone-16-pro-camera-ai",
    summary:
      "Apple's latest iPhone leverages advanced AI algorithms to deliver professional-grade photography capabilities, making every user a potential photography expert.",
    category: "mobile-apps",
    author: {
      name: "Alex Johnson",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    publishDate: "2024-01-09",
    readingTime: 10,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: true,
  },
  {
    id: 8,
    title: "NVIDIA RTX 5090: Gaming Performance Reaches New Heights",
    slug: "nvidia-rtx-5090-gaming",
    summary:
      "NVIDIA's flagship GPU delivers unprecedented gaming performance with ray tracing capabilities that blur the line between virtual and reality.",
    category: "gadgets-hardware",
    author: {
      name: "Ryan Miller",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    publishDate: "2024-01-08",
    readingTime: 9,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: false,
  },
  {
    id: 9,
    title: "Startup Spotlight: AI Healthcare Platform Secures $100M Series B",
    slug: "ai-healthcare-startup-funding",
    summary:
      "Revolutionary healthcare AI startup raises significant funding to expand their diagnostic platform that can detect diseases earlier than traditional methods.",
    category: "startups-funding",
    author: {
      name: "Jennifer Lee",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    publishDate: "2024-01-07",
    readingTime: 7,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
    featured: false,
  },
  {
    id: 10,
    title: "Cybersecurity Alert: New AI-Powered Threat Detection System",
    slug: "ai-cybersecurity-threat-detection",
    summary:
      "Advanced AI system can predict and prevent cyber attacks before they happen, representing a major leap forward in digital security technology.",
    category: "security-privacy",
    author: {
      name: "Mark Davis",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    publishDate: "2024-01-06",
    readingTime: 6,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
    featured: false,
  },
];

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "popular", label: "Most Popular" },
  { value: "featured", label: "Featured" },
];

// interface CategoryDetailPageProps {
//   params: {
//     slug: string,
//   };
// }

export default function CategoryDetailPage() {
  const params = useParams();
  console.log(params);
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const category = categoryData[params.slug];

  // Filter articles by category
  const categoryArticles = mockArticles.filter(
    (article) => article.category === params.slug
  );

  // Sort articles
  const sortedArticles = useMemo(() => {
    return [...categoryArticles].sort((a, b) => {
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
  }, [categoryArticles, sortBy]);

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

  const IconComponent = category.icon;

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The category you're looking for doesn't exist.
          </p>
          <Link href="/categories">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
            href="/categories"
            className="hover:text-foreground transition-colors"
          >
            Categories
          </Link>
          <BreadcrumbChevron className="w-4 h-4" />
          <span className="text-foreground font-medium">{category.name}</span>
        </nav>

        {/* Header Section */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-lg ${category.color}`}>
              <IconComponent className={`w-8 h-8 ${category.iconColor}`} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Category: {category.name}
              </h1>
              <p className="text-muted-foreground text-lg">
                {category.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Showing {sortedArticles.length} articles</span>
              {sortedArticles.length > 0 && (
                <>
                  <Separator orientation="vertical" className="h-4" />
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                </>
              )}
            </div>

            <Link href="/categories">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Categories
              </Button>
            </Link>
          </div>
        </header>

        <Separator className="mb-8" />

        {/* Filter & Sort Controls */}
        {sortedArticles.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="space-y-2">
                <label htmlFor="sort-select" className="text-sm font-medium">
                  Sort by
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort-select" className="w-[180px]">
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
          </div>
        )}

        {/* News Article Grid */}
        {paginatedArticles.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <IconComponent className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h2 className="text-xl font-semibold mb-2">No Articles Found</h2>
              <p>
                There are currently no articles in the {category.name} category.
              </p>
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
                        <Badge className={category.color}>
                          {category.name}
                        </Badge>
                        {article.featured && (
                          <Badge
                            variant="secondary"
                            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          >
                            Featured
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
      </div>
    </div>
  );
}
