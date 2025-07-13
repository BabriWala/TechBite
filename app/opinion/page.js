"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit3,
  Star,
  User,
  Users,
  MessageSquare,
  Award,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Shield,
  Brain,
  Smartphone,
  Code,
  Building,
} from "lucide-react";

// Mock editorial articles data
const editorialArticles = [
  {
    id: 1,
    title:
      "Why AI Regulation is the Most Important Tech Policy Challenge of Our Time",
    slug: "ai-regulation-tech-policy-challenge",
    excerpt:
      "As artificial intelligence becomes increasingly powerful and pervasive, the need for thoughtful regulation has never been more urgent. We must act now to ensure AI serves humanity's best interests while fostering continued innovation.",
    category: "Staff Editorial",
    author: {
      name: "Dr. Sarah Chen",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
      title: "Editor-in-Chief",
      bio: "Former AI researcher at Stanford, tech policy expert",
      type: "staff",
      verified: true,
    },
    publishDate: "2024-01-15",
    readingTime: 8,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: true,
    editorsPick: true,
    views: 15200,
    comments: 89,
    icon: Brain,
  },
  {
    id: 2,
    title:
      "The iPhone's Walled Garden: Innovation Driver or Competition Killer?",
    slug: "iphone-walled-garden-innovation-competition",
    excerpt:
      "Apple's closed ecosystem approach has sparked intense debate. While it delivers seamless user experiences, critics argue it stifles competition and innovation. The truth, as always, lies somewhere in between.",
    category: "Opinion",
    author: {
      name: "Michael Rodriguez",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
      title: "Senior Technology Analyst",
      bio: "15+ years covering mobile technology and platform economics",
      type: "staff",
      verified: true,
    },
    publishDate: "2024-01-14",
    readingTime: 12,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: false,
    editorsPick: false,
    views: 8900,
    comments: 156,
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Cybersecurity in the Age of Remote Work: A CISO's Perspective",
    slug: "cybersecurity-remote-work-ciso-perspective",
    excerpt:
      "The shift to remote work has fundamentally changed the cybersecurity landscape. As someone who's managed security for Fortune 500 companies, I've learned that traditional perimeter-based security is dead.",
    category: "Guest Post",
    author: {
      name: "Jennifer Martinez",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
      title: "Chief Information Security Officer",
      bio: "CISO at TechCorp, 20+ years in cybersecurity",
      type: "guest",
      verified: true,
    },
    publishDate: "2024-01-13",
    readingTime: 15,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: false,
    editorsPick: true,
    views: 12400,
    comments: 73,
    icon: Shield,
  },
  {
    id: 4,
    title:
      "The Developer Experience Crisis: Why We're Burning Out Our Best Talent",
    slug: "developer-experience-crisis-burnout",
    excerpt:
      "The tech industry's obsession with velocity and scale has created a developer experience crisis. We're asking engineers to do more with less, and the results are predictably disastrous for both individuals and organizations.",
    category: "Opinion",
    author: {
      name: "Alex Thompson",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
      title: "Senior Software Engineer",
      bio: "Full-stack developer, open source contributor",
      type: "staff",
      verified: true,
    },
    publishDate: "2024-01-12",
    readingTime: 10,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: false,
    editorsPick: false,
    views: 9800,
    comments: 234,
    icon: Code,
  },
  {
    id: 5,
    title: "Big Tech's Antitrust Reckoning: Too Little, Too Late?",
    slug: "big-tech-antitrust-reckoning-analysis",
    excerpt:
      "After decades of unchecked growth, regulators are finally taking aim at Big Tech's monopolistic practices. But is it too late to restore meaningful competition in the digital economy?",
    category: "Analysis",
    author: {
      name: "Dr. Emily Watson",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
      title: "Competition Policy Expert",
      bio: "Former DOJ antitrust attorney, Georgetown Law professor",
      type: "guest",
      verified: true,
    },
    publishDate: "2024-01-11",
    readingTime: 18,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: false,
    editorsPick: true,
    views: 11600,
    comments: 92,
    icon: Building,
  },
  {
    id: 6,
    title: "The Metaverse Mirage: Why Virtual Worlds Won't Replace Reality",
    slug: "metaverse-mirage-virtual-worlds-reality",
    excerpt:
      "Despite billions in investment and endless hype, the metaverse remains a solution in search of a problem. Here's why virtual worlds will complement, not replace, our physical existence.",
    category: "Opinion",
    author: {
      name: "David Kim",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
      title: "VR/AR Technology Critic",
      bio: "Former Meta engineer, immersive technology researcher",
      type: "staff",
      verified: true,
    },
    publishDate: "2024-01-10",
    readingTime: 14,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: false,
    editorsPick: false,
    views: 7300,
    comments: 167,
    icon: TrendingUp,
  },
  {
    id: 7,
    title: "Startup Culture's Toxic Positivity Problem",
    slug: "startup-culture-toxic-positivity-problem",
    excerpt:
      "The startup world's relentless optimism and 'fail fast' mentality has created a culture where honest discussion of challenges is discouraged. This toxic positivity is harming both founders and employees.",
    category: "Guest Post",
    author: {
      name: "Lisa Chen",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
      title: "Venture Capital Partner",
      bio: "Partner at Innovation Ventures, former startup founder",
      type: "guest",
      verified: true,
    },
    publishDate: "2024-01-09",
    readingTime: 11,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: false,
    editorsPick: false,
    views: 13800,
    comments: 201,
    icon: Lightbulb,
  },
  {
    id: 8,
    title: "The Ethics of Algorithmic Decision Making in Healthcare",
    slug: "ethics-algorithmic-decision-making-healthcare",
    excerpt:
      "As AI systems increasingly influence medical decisions, we must grapple with fundamental questions about bias, accountability, and the role of human judgment in healthcare.",
    category: "Analysis",
    author: {
      name: "Dr. Robert Johnson",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
      title: "Medical AI Ethics Researcher",
      bio: "Harvard Medical School, AI ethics committee member",
      type: "guest",
      verified: true,
    },
    publishDate: "2024-01-08",
    readingTime: 16,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: false,
    editorsPick: true,
    views: 6900,
    comments: 45,
    icon: Brain,
  },
  {
    id: 9,
    title: "Why Open Source is Winning the AI Race",
    slug: "open-source-winning-ai-race",
    excerpt:
      "While Big Tech companies battle for AI supremacy with proprietary models, the open source community is quietly building the foundation for the future of artificial intelligence.",
    category: "Staff Editorial",
    author: {
      name: "James Park",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
      title: "Open Source Editor",
      bio: "Former Linux Foundation, open source advocate",
      type: "staff",
      verified: true,
    },
    publishDate: "2024-01-07",
    readingTime: 13,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    featured: false,
    editorsPick: false,
    views: 10200,
    comments: 128,
    icon: Code,
  },
];

const categories = [
  "All",
  "Staff Editorial",
  "Opinion",
  "Guest Post",
  "Analysis",
];
const authors = [
  "All Authors",
  ...Array.from(
    new Set(editorialArticles.map((article) => article.author.name))
  ),
];

const getCategoryColor = (category) => {
  const colors = {
    "Staff Editorial":
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Opinion:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "Guest Post":
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Analysis:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  };
  return (
    colors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  );
};

export default function OpinionEditorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAuthor, setSelectedAuthor] = useState("All Authors");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Filter articles
  const filteredArticles = useMemo(() => {
    return editorialArticles.filter((article) => {
      const categoryMatch =
        selectedCategory === "All" || article.category === selectedCategory;
      const authorMatch =
        selectedAuthor === "All Authors" ||
        article.author.name === selectedAuthor;
      return categoryMatch && authorMatch;
    });
  }, [selectedCategory, selectedAuthor]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  // Featured article
  const featuredArticle = editorialArticles.find((article) => article.featured);

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
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Edit3 className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Opinion & Editorials
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Expert perspectives, analysis, and guest commentary on the most
            important issues shaping technology and society
          </p>
          <div className="bg-muted/50 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our editorial section features thoughtful analysis from industry
              experts, technology leaders, and our editorial team. We welcome
              diverse perspectives and encourage respectful dialogue on the
              complex issues facing the tech industry.
            </p>
          </div>
        </header>

        {/* Featured Editorial */}
        {featuredArticle && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Featured Editorial</h2>
            </div>
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden lg:rounded-l-lg">
                  <Link href={`/article/${featuredArticle.slug}`}>
                    <Image
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      width={500}
                      height={300}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                    <Badge
                      className={getCategoryColor(featuredArticle.category)}
                    >
                      {featuredArticle.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <Link href={`/article/${featuredArticle.slug}`}>
                    <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                      {featuredArticle.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={
                          featuredArticle.author.avatar || "/placeholder.svg"
                        }
                        alt={featuredArticle.author.name}
                      />
                      <AvatarFallback>
                        {featuredArticle.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">
                          {featuredArticle.author.name}
                        </p>
                        {featuredArticle.author.verified && (
                          <Badge variant="secondary" className="text-xs">
                            {featuredArticle.author.type === "staff" ? (
                              <User className="w-3 h-3 mr-1" />
                            ) : (
                              <Users className="w-3 h-3 mr-1" />
                            )}
                            {featuredArticle.author.type === "staff"
                              ? "Staff"
                              : "Guest"}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {featuredArticle.author.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {featuredArticle.author.bio}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredArticle.publishDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readingTime} min read
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {formatViews(featuredArticle.views)}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {featuredArticle.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="space-y-2">
              <label htmlFor="category-filter" className="text-sm font-medium">
                Category
              </label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger
                  id="category-filter"
                  className="w-full sm:w-[180px]"
                >
                  <SelectValue placeholder="Select category" />
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

            <div className="space-y-2">
              <label htmlFor="author-filter" className="text-sm font-medium">
                Author
              </label>
              <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
                <SelectTrigger
                  id="author-filter"
                  className="w-full sm:w-[200px]"
                >
                  <SelectValue placeholder="Select author" />
                </SelectTrigger>
                <SelectContent>
                  {authors.map((author) => (
                    <SelectItem key={author} value={author}>
                      {author}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            Showing {filteredArticles.length} editorial
            {filteredArticles.length !== 1 ? "s" : ""}
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Editorial Articles Grid */}
        {paginatedArticles.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <Edit3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">
                No Editorials Found
              </h3>
              <p>No editorial articles match your current filters.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedArticles.map((article) => {
                const IconComponent = article.icon;
                return (
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
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </Link>
                        <div className="absolute top-3 left-3 flex gap-2">
                          {article.editorsPick && (
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                              <Award className="w-3 h-3 mr-1" />
                              Editor's Pick
                            </Badge>
                          )}
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className="p-2 rounded-full bg-background/90 backdrop-blur-sm">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <Link href={`/article/${article.slug}`}>
                        <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage
                            src={article.author.avatar || "/placeholder.svg"}
                            alt={article.author.name}
                          />
                          <AvatarFallback>
                            {article.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-sm">
                              {article.author.name}
                            </p>
                            {article.author.verified && (
                              <Badge variant="secondary" className="text-xs">
                                {article.author.type === "staff" ? (
                                  <User className="w-3 h-3 mr-1" />
                                ) : (
                                  <Users className="w-3 h-3 mr-1" />
                                )}
                                {article.author.type === "staff"
                                  ? "Staff"
                                  : "Guest"}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {article.author.title}
                          </p>
                        </div>
                      </div>

                      <Separator className="mb-4" />

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(article.publishDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readingTime} min
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {formatViews(article.views)}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            {article.comments}
                          </span>
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

        {/* Editorial Guidelines */}
        <section className="mt-16">
          <Separator className="mb-12" />
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Editorial Standards</h2>
            <p className="text-muted-foreground">
              Our commitment to quality opinion journalism
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Edit3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Perspectives</h3>
              <p className="text-sm text-muted-foreground">
                All opinion pieces are written by recognized experts in their
                respective fields
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Editorial Independence</h3>
              <p className="text-sm text-muted-foreground">
                Our editorial content maintains independence from commercial
                interests
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Open Dialogue</h3>
              <p className="text-sm text-muted-foreground">
                We encourage respectful discussion and diverse viewpoints on
                complex issues
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
