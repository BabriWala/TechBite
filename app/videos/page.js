"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Play,
  Video,
  Filter,
  TrendingUp,
  Users,
  Mic,
  Monitor,
  Smartphone,
  Cpu,
  Gamepad2,
} from "lucide-react";

// Mock video data
const mockVideos = [
  {
    id: 1,
    title: "iPhone 15 Pro Max Complete Review: Is It Worth the Upgrade?",
    slug: "iphone-15-pro-max-complete-review",
    description:
      "Our comprehensive review of Apple's latest flagship smartphone covering cameras, performance, and value.",
    thumbnail:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    duration: "12:45",
    publishDate: "2024-01-15",
    views: 125000,
    category: "Review",
    youtubeId: "dQw4w9WgXcQ",
    author: "Sarah Chen",
    featured: true,
    icon: Smartphone,
  },
  {
    id: 2,
    title: "CES 2024 Highlights: The Future of Tech is Here",
    slug: "ces-2024-highlights-future-tech",
    description:
      "Covering the biggest announcements and coolest gadgets from CES 2024 in Las Vegas.",
    thumbnail:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    duration: "18:30",
    publishDate: "2024-01-14",
    views: 89000,
    category: "Event",
    youtubeId: "dQw4w9WgXcQ",
    author: "Michael Rodriguez",
    featured: false,
    icon: Monitor,
  },
  {
    id: 3,
    title: "How to Build Your First Gaming PC in 2024",
    slug: "build-gaming-pc-2024-tutorial",
    description:
      "Step-by-step guide to building a powerful gaming PC with the latest components and best practices.",
    thumbnail:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    duration: "25:15",
    publishDate: "2024-01-13",
    views: 67000,
    category: "Tutorial",
    youtubeId: "dQw4w9WgXcQ",
    author: "Alex Thompson",
    featured: false,
    icon: Gamepad2,
  },
  {
    id: 4,
    title: "Tesla Model Y vs BMW iX: Electric SUV Showdown",
    slug: "tesla-model-y-vs-bmw-ix-comparison",
    description:
      "Detailed comparison of two premium electric SUVs covering performance, features, and value.",
    thumbnail:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    duration: "16:20",
    publishDate: "2024-01-12",
    views: 156000,
    category: "Comparison",
    youtubeId: "dQw4w9WgXcQ",
    author: "Emily Watson",
    featured: true,
    icon: Monitor,
  },
  {
    id: 5,
    title: "M3 MacBook Pro: 6 Months Later - Real World Performance",
    slug: "m3-macbook-pro-6-months-review",
    description:
      "Long-term review of the M3 MacBook Pro after 6 months of professional use and testing.",
    thumbnail:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    duration: "14:55",
    publishDate: "2024-01-11",
    views: 98000,
    category: "Review",
    youtubeId: "dQw4w9WgXcQ",
    author: "David Kim",
    featured: false,
    icon: Cpu,
  },
  {
    id: 6,
    title: "AI in 2024: What's Real vs What's Hype",
    slug: "ai-2024-real-vs-hype-analysis",
    description:
      "Separating AI reality from marketing hype with real-world examples and expert analysis.",
    thumbnail:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    duration: "21:10",
    publishDate: "2024-01-10",
    views: 203000,
    category: "Explainer",
    youtubeId: "dQw4w9WgXcQ",
    author: "Lisa Thompson",
    featured: true,
    icon: Cpu,
  },
  {
    id: 7,
    title: "Samsung Galaxy S24 Ultra Hands-On: First Impressions",
    slug: "samsung-galaxy-s24-ultra-hands-on",
    description:
      "First look at Samsung's latest flagship with hands-on testing and initial impressions.",
    thumbnail:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    duration: "8:45",
    publishDate: "2024-01-09",
    views: 134000,
    category: "Demo",
    youtubeId: "dQw4w9WgXcQ",
    author: "James Park",
    featured: false,
    icon: Smartphone,
  },
  {
    id: 8,
    title: "Interview: OpenAI CEO on the Future of Artificial Intelligence",
    slug: "openai-ceo-interview-future-ai",
    description:
      "Exclusive interview discussing AI development, safety concerns, and what's coming next.",
    thumbnail:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    duration: "32:40",
    publishDate: "2024-01-08",
    views: 445000,
    category: "Interview",
    youtubeId: "dQw4w9WgXcQ",
    author: "Sarah Chen",
    featured: true,
    icon: Users,
  },
  {
    id: 9,
    title: "Top 10 Tech Gadgets You Need in 2024",
    slug: "top-10-tech-gadgets-2024",
    description:
      "Our picks for the most useful and innovative tech gadgets to watch this year.",
    thumbnail:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    duration: "19:25",
    publishDate: "2024-01-07",
    views: 78000,
    category: "Review",
    youtubeId: "dQw4w9WgXcQ",
    author: "Ryan Miller",
    featured: false,
    icon: Monitor,
  },
];

const categories = [
  "All",
  "Review",
  "Tutorial",
  "Event",
  "Comparison",
  "Explainer",
  "Demo",
  "Interview",
];

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "most-viewed", label: "Most Viewed" },
  { value: "featured", label: "Featured" },
];

const getCategoryColor = (category) => {
  const colors = {
    Review: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Tutorial:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Event:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Comparison:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Explainer: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    Demo: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    Interview:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  };
  return (
    colors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  );
};

export default function TechVideosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;

  // Filter and sort videos
  const filteredAndSortedVideos = useMemo(() => {
    const filtered = mockVideos.filter(
      (video) =>
        selectedCategory === "All" || video.category === selectedCategory
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return (
            new Date(a.publishDate).getTime() -
            new Date(b.publishDate).getTime()
          );
        case "most-viewed":
          return b.views - a.views;
        case "featured":
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default: // newest
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
      }
    });
  }, [selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedVideos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const paginatedVideos = filteredAndSortedVideos.slice(
    startIndex,
    startIndex + videosPerPage
  );

  // Featured videos for hero section
  const featuredVideos = mockVideos
    .filter((video) => video.featured)
    .slice(0, 3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}K`;
    }
    return views.toString();
  };

  const formatDuration = (duration) => {
    return duration;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Video className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Tech Videos
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Watch the latest tech reviews, explainers, and interviews from our
            expert team
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{mockVideos.length} Videos</span>
            <Separator orientation="vertical" className="h-4" />
            <span>{featuredVideos.length} Featured</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Updated Daily</span>
          </div>
        </header>

        {/* Featured Videos Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Featured Videos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => {
              const IconComponent = video.icon;
              return (
                <Card
                  key={`featured-${video.id}`}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 shadow-lg relative overflow-hidden"
                >
                  {/* Featured Badge */}
                  <div className="absolute top-2 right-2 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                      Featured
                    </Badge>
                  </div>

                  <CardHeader className="p-0">
                    <AspectRatio ratio={16 / 9}>
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                            <Play className="w-6 h-6 text-black ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2">
                          <Badge
                            variant="secondary"
                            className="bg-black/80 text-white"
                          >
                            {formatDuration(video.duration)}
                          </Badge>
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge className={getCategoryColor(video.category)}>
                            {video.category}
                          </Badge>
                        </div>
                      </div>
                    </AspectRatio>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>By {video.author}</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(video.publishDate)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {formatViews(video.views)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Filter & Sort Controls */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">All Videos</h2>
          </div>

          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-6"
          >
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-2">
              <label htmlFor="sort-select" className="text-sm font-medium">
                Sort by
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger id="sort-select" className="w-full sm:w-[180px]">
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

            <div className="text-sm text-muted-foreground">
              Showing {filteredAndSortedVideos.length} video
              {filteredAndSortedVideos.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        {paginatedVideos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No Videos Found</h3>
              <p>No videos match your current filters.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedVideos.map((video) => {
                const IconComponent = video.icon;
                return (
                  <Card
                    key={video.id}
                    className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md"
                  >
                    <CardHeader className="p-0">
                      <AspectRatio ratio={16 / 9}>
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                              <Play className="w-5 h-5 text-black ml-0.5" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2">
                            <Badge
                              variant="secondary"
                              className="bg-black/80 text-white"
                            >
                              {formatDuration(video.duration)}
                            </Badge>
                          </div>
                          <div className="absolute top-2 left-2">
                            <Badge className={getCategoryColor(video.category)}>
                              {video.category}
                            </Badge>
                          </div>
                          <div className="absolute top-2 right-2">
                            <div className="p-1.5 rounded-full bg-background/90 backdrop-blur-sm">
                              <IconComponent className="w-3 h-3 text-primary" />
                            </div>
                          </div>
                        </div>
                      </AspectRatio>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>

                      <Separator className="mb-4" />

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>By {video.author}</span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(video.publishDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {formatViews(video.views)}
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

        {/* Video Stats */}
        <section className="mt-16">
          <Separator className="mb-12" />
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Video Statistics</h2>
            <p className="text-muted-foreground">
              Our video content at a glance
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {mockVideos.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Videos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {formatViews(
                  mockVideos.reduce((sum, video) => sum + video.views, 0)
                )}
              </div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {categories.length - 1}
              </div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Weekly</div>
              <div className="text-sm text-muted-foreground">New Content</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
