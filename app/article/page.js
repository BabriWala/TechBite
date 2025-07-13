"use client";

import { useState } from "react";
import Image from "next/image";
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
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Mock data for news articles
const mockArticles = [
  {
    id: 1,
    title: "Apple Unveils Revolutionary M4 Chip with Enhanced AI Capabilities",
    summary:
      "The new M4 processor promises 40% better performance and groundbreaking machine learning features for next-generation MacBooks.",
    category: "Mobile",
    date: "2024-01-15",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
  },
  {
    id: 2,
    title: "OpenAI Launches GPT-5: The Future of Conversational AI",
    summary:
      "GPT-5 introduces multimodal capabilities and improved reasoning, setting new standards for artificial intelligence applications.",
    category: "AI",
    date: "2024-01-14",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
  },
  {
    id: 3,
    title: "Tesla's New Autopilot Update Enables Full Self-Driving",
    summary:
      "The latest software update brings Tesla vehicles closer to complete autonomous driving with enhanced safety features.",
    category: "Startups",
    date: "2024-01-13",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
  },
  {
    id: 4,
    title: "iPhone 16 Pro Review: Camera Excellence Redefined",
    summary:
      "Our comprehensive review covers the iPhone 16 Pro's impressive camera system, performance improvements, and battery life.",
    category: "Reviews",
    date: "2024-01-12",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
  },
  {
    id: 5,
    title: "Google Pixel 9 vs Samsung Galaxy S24: Ultimate Comparison",
    summary:
      "We compare the latest flagship smartphones from Google and Samsung across design, performance, and camera quality.",
    category: "Reviews",
    date: "2024-01-11",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
  },
  {
    id: 6,
    title: "Meta's VR Headset Breakthrough: Lighter, Faster, Smarter",
    summary:
      "The new Meta Quest 4 promises to revolutionize virtual reality with improved comfort and unprecedented visual clarity.",
    category: "Mobile",
    date: "2024-01-10",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
  },
  {
    id: 7,
    title: "Startup Spotlight: AI-Powered Healthcare Platform Raises $50M",
    summary:
      "MedTech startup secures major funding to expand their AI diagnostic platform across hospitals nationwide.",
    category: "Startups",
    date: "2024-01-09",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
  },
  {
    id: 8,
    title:
      "Microsoft Copilot Gets Major Update with Enhanced Productivity Features",
    summary:
      "The latest Copilot update introduces new AI-powered tools for document creation, data analysis, and team collaboration.",
    category: "AI",
    date: "2024-01-08",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: true,
  },
  {
    id: 9,
    title: "Electric Vehicle Market Surges: 5 Startups to Watch in 2024",
    summary:
      "Emerging EV companies are challenging traditional automakers with innovative designs and sustainable technology solutions.",
    category: "Startups",
    date: "2024-01-07",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    popular: false,
  },
];

const categories = ["All", "Mobile", "AI", "Startups", "Reviews"];
const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "popular", label: "Most Popular" },
];

export default function NewsListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Filter and sort articles
  const filteredArticles = mockArticles
    .filter(
      (article) =>
        selectedCategory === "All" || article.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "popular":
          return b.popular === a.popular ? 0 : b.popular ? 1 : -1;
        default: // newest
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(
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

  const getCategoryColor = (category) => {
    const colors = {
      Mobile: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      AI: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      Startups:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      Reviews:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    };
    return (
      colors[category] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <header className="text-center md:text-left mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            All Tech News
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore the latest updates in technology
          </p>
        </header>

        {/* Filter and Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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
              <label htmlFor="sort-filter" className="text-sm font-medium">
                Sort by
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger id="sort-filter" className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
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

          <div className="text-sm text-muted-foreground">
            Showing {filteredArticles.length} results
          </div>
        </div>

        <Separator className="mb-8" />

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedArticles.map((article) => (
            <Card
              key={article.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md"
            >
              <Link href={`/article/${article.id}`}>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={getCategoryColor(article.category)}>
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(article.date)}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
      </div>
    </div>
  );
}
