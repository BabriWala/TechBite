"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Search,
  Hash,
  TrendingUp,
  Grid3X3,
  List,
  Smartphone,
  Brain,
  Shield,
  Car,
  Code,
  Zap,
  Globe,
  Camera,
  Gamepad2,
  Cloud,
} from "lucide-react";

// Mock tags data with various tech topics
const mockTags = [
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    articleCount: 127,
    category: "Technology",
    trending: true,
    icon: Brain,
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    slug: "iphone-15",
    articleCount: 89,
    category: "Mobile",
    trending: true,
    icon: Smartphone,
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    slug: "cybersecurity",
    articleCount: 156,
    category: "Security",
    trending: false,
    icon: Shield,
  },
  {
    id: "tesla",
    name: "Tesla",
    slug: "tesla",
    articleCount: 73,
    category: "Automotive",
    trending: true,
    icon: Car,
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    slug: "machine-learning",
    articleCount: 94,
    category: "Technology",
    trending: false,
    icon: Brain,
  },
  {
    id: "react",
    name: "React",
    slug: "react",
    articleCount: 112,
    category: "Development",
    trending: false,
    icon: Code,
  },
  {
    id: "next-js",
    name: "Next.js",
    slug: "next-js",
    articleCount: 67,
    category: "Development",
    trending: false,
    icon: Code,
  },
  {
    id: "openai",
    name: "OpenAI",
    slug: "openai",
    articleCount: 85,
    category: "AI",
    trending: true,
    icon: Brain,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    slug: "chatgpt",
    articleCount: 78,
    category: "AI",
    trending: true,
    icon: Brain,
  },
  {
    id: "apple",
    name: "Apple",
    slug: "apple",
    articleCount: 203,
    category: "Company",
    trending: false,
    icon: Smartphone,
  },
  {
    id: "google",
    name: "Google",
    slug: "google",
    articleCount: 145,
    category: "Company",
    trending: false,
    icon: Globe,
  },
  {
    id: "microsoft",
    name: "Microsoft",
    slug: "microsoft",
    articleCount: 134,
    category: "Company",
    trending: false,
    icon: Globe,
  },
  {
    id: "blockchain",
    name: "Blockchain",
    slug: "blockchain",
    articleCount: 56,
    category: "Technology",
    trending: false,
    icon: Zap,
  },
  {
    id: "cryptocurrency",
    name: "Cryptocurrency",
    slug: "cryptocurrency",
    articleCount: 89,
    category: "Finance",
    trending: false,
    icon: Zap,
  },
  {
    id: "web3",
    name: "Web3",
    slug: "web3",
    articleCount: 45,
    category: "Technology",
    trending: false,
    icon: Globe,
  },
  {
    id: "5g",
    name: "5G",
    slug: "5g",
    articleCount: 67,
    category: "Network",
    trending: false,
    icon: Globe,
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    slug: "cloud-computing",
    articleCount: 98,
    category: "Technology",
    trending: false,
    icon: Cloud,
  },
  {
    id: "aws",
    name: "AWS",
    slug: "aws",
    articleCount: 76,
    category: "Cloud",
    trending: false,
    icon: Cloud,
  },
  {
    id: "docker",
    name: "Docker",
    slug: "docker",
    articleCount: 54,
    category: "Development",
    trending: false,
    icon: Code,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    slug: "kubernetes",
    articleCount: 43,
    category: "Development",
    trending: false,
    icon: Code,
  },
  {
    id: "python",
    name: "Python",
    slug: "python",
    articleCount: 87,
    category: "Programming",
    trending: false,
    icon: Code,
  },
  {
    id: "javascript",
    name: "JavaScript",
    slug: "javascript",
    articleCount: 123,
    category: "Programming",
    trending: false,
    icon: Code,
  },
  {
    id: "typescript",
    name: "TypeScript",
    slug: "typescript",
    articleCount: 65,
    category: "Programming",
    trending: false,
    icon: Code,
  },
  {
    id: "gaming",
    name: "Gaming",
    slug: "gaming",
    articleCount: 91,
    category: "Entertainment",
    trending: false,
    icon: Gamepad2,
  },
  {
    id: "vr",
    name: "Virtual Reality",
    slug: "vr",
    articleCount: 58,
    category: "Technology",
    trending: false,
    icon: Gamepad2,
  },
  {
    id: "ar",
    name: "Augmented Reality",
    slug: "ar",
    articleCount: 47,
    category: "Technology",
    trending: false,
    icon: Camera,
  },
  {
    id: "metaverse",
    name: "Metaverse",
    slug: "metaverse",
    articleCount: 39,
    category: "Technology",
    trending: false,
    icon: Gamepad2,
  },
  {
    id: "iot",
    name: "Internet of Things",
    slug: "iot",
    articleCount: 72,
    category: "Technology",
    trending: false,
    icon: Globe,
  },
  {
    id: "smart-home",
    name: "Smart Home",
    slug: "smart-home",
    articleCount: 64,
    category: "Technology",
    trending: false,
    icon: Globe,
  },
  {
    id: "electric-vehicles",
    name: "Electric Vehicles",
    slug: "electric-vehicles",
    articleCount: 83,
    category: "Automotive",
    trending: true,
    icon: Car,
  },
];

const sortOptions = [
  { value: "alphabetical", label: "Alphabetical" },
  { value: "popularity", label: "Most Popular" },
  { value: "trending", label: "Trending" },
  { value: "recent", label: "Recently Added" },
];

const categoryColors = {
  Technology:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  Mobile: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  Automotive:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Development: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  AI: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  Company:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  Finance:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Network: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
  Cloud: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
  Programming:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  Entertainment:
    "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
};

export default function TagsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState("grid");

  // Filter and sort tags
  const filteredAndSortedTags = useMemo(() => {
    const filtered = mockTags.filter((tag) =>
      tag.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "alphabetical":
          return a.name.localeCompare(b.name);
        case "trending":
          return (
            (b.trending ? 1 : 0) - (a.trending ? 1 : 0) ||
            b.articleCount - a.articleCount
          );
        case "recent":
          return Math.random() - 0.5; // Mock recent sorting
        default: // popularity
          return b.articleCount - a.articleCount;
      }
    });
  }, [searchTerm, sortBy]);

  const trendingTags = mockTags.filter((tag) => tag.trending).slice(0, 8);
  const totalArticles = mockTags.reduce(
    (sum, tag) => sum + tag.articleCount,
    0
  );

  const getCategoryColor = (category) => {
    return (
      categoryColors[category] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Browse by Tags
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Find articles by your favorite topics and explore trending
            discussions
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{mockTags.length} Tags</span>
            <Separator orientation="vertical" className="h-4" />
            <span>{totalArticles.toLocaleString()} Total Articles</span>
            <Separator orientation="vertical" className="h-4" />
            <span>{trendingTags.length} Trending</span>
          </div>
        </header>

        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                aria-label="Search tags"
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
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Results Info */}
        {searchTerm && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredAndSortedTags.length === 0
                ? "No tags found"
                : `Showing ${filteredAndSortedTags.length} of ${mockTags.length} tags`}
            </p>
          </div>
        )}

        {/* Trending Tags Section */}
        {!searchTerm && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Trending Tags</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {trendingTags.map((tag) => (
                <Link key={`trending-${tag.id}`} href={`/tags/${tag.slug}`}>
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    <Hash className="w-3 h-3 mr-1" />
                    {tag.name}
                    <span className="ml-2 text-xs opacity-75">
                      {tag.articleCount}
                    </span>
                  </Badge>
                </Link>
              ))}
            </div>
            <Separator className="mt-8" />
          </section>
        )}

        {/* Tags Display */}
        <Tabs value={viewMode} onValueChange={setViewMode} className="w-full">
          <TabsContent value="grid" className="mt-0">
            {filteredAndSortedTags.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-muted-foreground">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">
                    No tags found matching "{searchTerm}"
                  </p>
                  <p className="text-sm">Try adjusting your search terms</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredAndSortedTags.map((tag) => {
                  const IconComponent = tag.icon;
                  return (
                    <Link key={tag.id} href={`/tags/${tag.slug}`}>
                      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-muted">
                                <IconComponent className="w-5 h-5 text-muted-foreground" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                  {tag.name}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  {tag.category}
                                </p>
                              </div>
                            </div>
                            {tag.trending && (
                              <Badge variant="secondary" className="text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Hot
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge
                              className={getCategoryColor(tag.category)}
                              variant="outline"
                            >
                              {tag.articleCount} articles
                            </Badge>
                            <Hash className="w-4 h-4 text-muted-foreground" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            )}
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            {filteredAndSortedTags.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-muted-foreground">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">
                    No tags found matching "{searchTerm}"
                  </p>
                  <p className="text-sm">Try adjusting your search terms</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredAndSortedTags.map((tag) => {
                  const IconComponent = tag.icon;
                  return (
                    <Link key={tag.id} href={`/tags/${tag.slug}`}>
                      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-md border-0 shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="p-2 rounded-lg bg-muted">
                                <IconComponent className="w-5 h-5 text-muted-foreground" />
                              </div>
                              <div>
                                <h3 className="font-semibold group-hover:text-primary transition-colors">
                                  {tag.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {tag.category}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              {tag.trending && (
                                <Badge variant="secondary" className="text-xs">
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  Trending
                                </Badge>
                              )}
                              <Badge
                                className={getCategoryColor(tag.category)}
                                variant="outline"
                              >
                                {tag.articleCount} articles
                              </Badge>
                              <Hash className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Popular Categories Section */}
        {!searchTerm && (
          <section className="mt-16">
            <Separator className="mb-12" />
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Popular Categories</h2>
              <p className="text-muted-foreground">Explore tags by category</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Object.entries(categoryColors).map(([category, colorClass]) => {
                const categoryTags = mockTags.filter(
                  (tag) => tag.category === category
                );
                const totalCount = categoryTags.reduce(
                  (sum, tag) => sum + tag.articleCount,
                  0
                );

                return (
                  <Card
                    key={category}
                    className="text-center p-4 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <Badge className={colorClass} variant="secondary">
                      {category}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-2">
                      {categoryTags.length} tags
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {totalCount} articles
                    </p>
                  </Card>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
