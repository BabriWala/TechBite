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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Star,
  Eye,
  Award,
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  Camera,
  Gamepad2,
  Tablet,
  Speaker,
  Monitor,
  Filter,
  TrendingUp,
} from "lucide-react";

// Mock product reviews data
const productReviews = [
  {
    id: 1,
    title: "iPhone 15 Pro Max Review: The Ultimate Camera Phone",
    slug: "iphone-15-pro-max-review",
    verdict:
      "Apple's best iPhone yet delivers exceptional cameras, blazing performance, and premium build quality that justifies the price.",
    category: "Phones",
    rating: 4.8,
    publishDate: "2024-01-15",
    image: "/placeholder.svg?height=300&width=400",
    author: "Sarah Chen",
    views: 25400,
    editorsChoice: true,
    topRated: true,
    icon: Smartphone,
    pros: [
      "Exceptional camera system",
      "A17 Pro performance",
      "Premium titanium build",
    ],
    cons: ["Expensive", "Heavy", "Limited customization"],
  },
  {
    id: 2,
    title: "MacBook Pro M3 Max Review: Creative Powerhouse",
    slug: "macbook-pro-m3-max-review",
    verdict:
      "The M3 Max MacBook Pro is a creative professional's dream with unmatched performance and excellent battery life.",
    category: "Laptops",
    rating: 4.7,
    publishDate: "2024-01-14",
    image: "/placeholder.svg?height=300&width=400",
    author: "Michael Rodriguez",
    views: 18900,
    editorsChoice: false,
    topRated: true,
    icon: Laptop,
    pros: ["M3 Max performance", "Excellent display", "All-day battery"],
    cons: ["Very expensive", "Limited ports", "Heavy for travel"],
  },
  {
    id: 3,
    title: "Apple Watch Ultra 2 Review: Adventure Ready",
    slug: "apple-watch-ultra-2-review",
    verdict:
      "The Ultra 2 is the most capable smartwatch for outdoor enthusiasts, with rugged design and advanced health features.",
    category: "Wearables",
    rating: 4.6,
    publishDate: "2024-01-13",
    image: "/placeholder.svg?height=300&width=400",
    author: "Emily Watson",
    views: 12300,
    editorsChoice: true,
    topRated: false,
    icon: Watch,
    pros: ["Rugged titanium build", "Excellent GPS", "Long battery life"],
    cons: ["Bulky design", "Expensive", "Limited third-party apps"],
  },
  {
    id: 4,
    title: "Sony WH-1000XM5 Review: Noise Canceling Perfection",
    slug: "sony-wh-1000xm5-review",
    verdict:
      "Sony's flagship headphones deliver industry-leading noise cancellation and exceptional sound quality.",
    category: "Accessories",
    rating: 4.9,
    publishDate: "2024-01-12",
    image: "/placeholder.svg?height=300&width=400",
    author: "James Park",
    views: 16700,
    editorsChoice: true,
    topRated: true,
    icon: Headphones,
    pros: ["Best-in-class ANC", "Superb sound quality", "Comfortable fit"],
    cons: ["Not foldable", "Touch controls can be finicky", "Premium price"],
  },
  {
    id: 5,
    title: "Canon EOS R5 Mark II Review: Photography Excellence",
    slug: "canon-eos-r5-mark-ii-review",
    verdict:
      "Canon's latest mirrorless camera sets new standards for professional photography with incredible image quality.",
    category: "Cameras",
    rating: 4.5,
    publishDate: "2024-01-11",
    image: "/placeholder.svg?height=300&width=400",
    author: "Lisa Thompson",
    views: 9800,
    editorsChoice: false,
    topRated: false,
    icon: Camera,
    pros: [
      "Outstanding image quality",
      "Fast autofocus",
      "Excellent build quality",
    ],
    cons: ["Expensive", "Large and heavy", "Battery life could be better"],
  },
  {
    id: 6,
    title: "PlayStation 5 Pro Review: Gaming at Its Peak",
    slug: "playstation-5-pro-review",
    verdict:
      "The PS5 Pro delivers the ultimate console gaming experience with enhanced performance and stunning visuals.",
    category: "Gaming",
    rating: 4.4,
    publishDate: "2024-01-10",
    image: "/placeholder.svg?height=300&width=400",
    author: "David Kim",
    views: 22100,
    editorsChoice: false,
    topRated: false,
    icon: Gamepad2,
    pros: [
      "Excellent performance",
      "Great exclusive games",
      "Solid build quality",
    ],
    cons: ["Large size", "Limited storage", "Expensive games"],
  },
  {
    id: 7,
    title: "iPad Pro M4 Review: Tablet Perfection",
    slug: "ipad-pro-m4-review",
    verdict:
      "The M4 iPad Pro blurs the line between tablet and laptop with incredible performance and a stunning display.",
    category: "Tablets",
    rating: 4.6,
    publishDate: "2024-01-09",
    image: "/placeholder.svg?height=300&width=400",
    author: "Alex Johnson",
    views: 14500,
    editorsChoice: true,
    topRated: true,
    icon: Tablet,
    pros: [
      "M4 chip performance",
      "Stunning OLED display",
      "Thin and light design",
    ],
    cons: [
      "Expensive with accessories",
      "Limited desktop apps",
      "No headphone jack",
    ],
  },
  {
    id: 8,
    title: "HomePod (2nd Gen) Review: Smart Speaker Excellence",
    slug: "homepod-2nd-gen-review",
    verdict:
      "Apple's HomePod delivers exceptional sound quality and seamless smart home integration for Apple users.",
    category: "Smart Home",
    rating: 4.3,
    publishDate: "2024-01-08",
    image: "/placeholder.svg?height=300&width=400",
    author: "Ryan Miller",
    views: 8600,
    editorsChoice: false,
    topRated: false,
    icon: Speaker,
    pros: [
      "Excellent sound quality",
      "Great Siri integration",
      "Premium build",
    ],
    cons: ["Limited to Apple ecosystem", "Expensive", "No Bluetooth pairing"],
  },
  {
    id: 9,
    title: "Dell XPS 13 Plus Review: Ultrabook Refined",
    slug: "dell-xps-13-plus-review",
    verdict:
      "Dell's XPS 13 Plus offers a premium ultrabook experience with excellent performance and build quality.",
    category: "Laptops",
    rating: 4.2,
    publishDate: "2024-01-07",
    image: "/placeholder.svg?height=300&width=400",
    author: "Jennifer Lee",
    views: 11200,
    editorsChoice: false,
    topRated: false,
    icon: Laptop,
    pros: ["Premium design", "Great display", "Solid performance"],
    cons: ["Limited ports", "Keyboard layout", "Average battery life"],
  },
  {
    id: 10,
    title: "LG C4 OLED TV Review: Picture Perfect",
    slug: "lg-c4-oled-tv-review",
    verdict:
      "LG's C4 OLED delivers stunning picture quality and gaming features that make it perfect for any living room.",
    category: "Displays",
    rating: 4.7,
    publishDate: "2024-01-06",
    image: "/placeholder.svg?height=300&width=400",
    author: "Mark Davis",
    views: 19300,
    editorsChoice: true,
    topRated: true,
    icon: Monitor,
    pros: ["Perfect blacks", "Excellent gaming features", "webOS interface"],
    cons: ["Risk of burn-in", "Expensive", "Reflective screen"],
  },
  {
    id: 11,
    title: "Google Pixel 8 Pro Review: AI Photography Leader",
    slug: "google-pixel-8-pro-review",
    verdict:
      "Google's Pixel 8 Pro showcases the future of smartphone photography with incredible AI-powered features.",
    category: "Phones",
    rating: 4.5,
    publishDate: "2024-01-05",
    image: "/placeholder.svg?height=300&width=400",
    author: "Sophie Anderson",
    views: 16800,
    editorsChoice: false,
    topRated: true,
    icon: Smartphone,
    pros: ["Best-in-class cameras", "Clean Android experience", "AI features"],
    cons: ["Average battery life", "Gets warm", "Limited availability"],
  },
  {
    id: 12,
    title: "Samsung Galaxy Watch 6 Classic Review: Traditional Smartwatch",
    slug: "samsung-galaxy-watch-6-classic-review",
    verdict:
      "Samsung's Galaxy Watch 6 Classic combines traditional watch aesthetics with modern smartwatch functionality.",
    category: "Wearables",
    rating: 4.1,
    publishDate: "2024-01-04",
    image: "/placeholder.svg?height=300&width=400",
    author: "Robert Chen",
    views: 9400,
    editorsChoice: false,
    topRated: false,
    icon: Watch,
    pros: ["Classic design", "Rotating bezel", "Good health tracking"],
    cons: ["Battery life", "Limited iOS support", "Bulky for small wrists"],
  },
];

const categories = [
  "All",
  "Phones",
  "Laptops",
  "Wearables",
  "Accessories",
  "Cameras",
  "Gaming",
  "Tablets",
  "Smart Home",
  "Displays",
];

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "highest-rated", label: "Highest Rated" },
  { value: "most-viewed", label: "Most Viewed" },
  { value: "editors-choice", label: "Editor's Choice" },
];

const ratingFilters = [
  { value: "all", label: "All Ratings" },
  { value: "4.5", label: "4.5+ Stars" },
  { value: "4.0", label: "4.0+ Stars" },
  { value: "3.5", label: "3.5+ Stars" },
];

const getCategoryColor = (category) => {
  const colors = {
    Phones: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Laptops:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Wearables:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Accessories:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Cameras: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    Gaming: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Tablets:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    "Smart Home":
      "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    Displays: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
  };
  return (
    colors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  );
};

export default function TechReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 9;

  // Filter and sort reviews
  const filteredAndSortedReviews = useMemo(() => {
    const filtered = productReviews.filter((review) => {
      const categoryMatch =
        selectedCategory === "All" || review.category === selectedCategory;
      const ratingMatch =
        ratingFilter === "all" ||
        review.rating >= Number.parseFloat(ratingFilter);
      return categoryMatch && ratingMatch;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "highest-rated":
          return b.rating - a.rating;
        case "most-viewed":
          return b.views - a.views;
        case "editors-choice":
          return (b.editorsChoice ? 1 : 0) - (a.editorsChoice ? 1 : 0);
        default: // newest
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
      }
    });
  }, [selectedCategory, sortBy, ratingFilter]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedReviews.length / reviewsPerPage
  );
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const paginatedReviews = filteredAndSortedReviews.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  // Featured reviews for top section
  const featuredReviews = productReviews
    .filter((review) => review.editorsChoice)
    .slice(0, 3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-4 h-4 fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300 dark:text-gray-600"
        />
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Tech Reviews
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Honest opinions on the latest gadgets and gear
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{productReviews.length} Reviews</span>
            <Separator orientation="vertical" className="h-4" />
            <span>{featuredReviews.length} Editor's Choice</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Updated Daily</span>
          </div>
        </header>

        {/* Editor's Choice Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Editor's Choice</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((review) => {
              const IconComponent = review.icon;
              return (
                <Card
                  key={`featured-${review.id}`}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 shadow-lg relative overflow-hidden"
                >
                  {/* Editor's Choice Ribbon */}
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-l from-yellow-400 to-orange-500 text-white px-3 py-1 text-xs font-bold transform rotate-12 translate-x-2 -translate-y-1">
                      EDITOR'S CHOICE
                    </div>
                  </div>

                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Link href={`/review/${review.slug}`}>
                        <Image
                          src={review.image || "/placeholder.svg"}
                          alt={review.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge className={getCategoryColor(review.category)}>
                          {review.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <div className="p-2 rounded-full bg-background/90 backdrop-blur-sm">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Link href={`/review/${review.slug}`}>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {review.title}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm font-semibold">
                        {review.rating}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                      {review.verdict}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>By {review.author}</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(review.publishDate)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {formatViews(review.views)}
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
            <h2 className="text-xl font-semibold">All Reviews</h2>
          </div>

          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-6"
          >
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="space-y-2">
                <label htmlFor="sort-select" className="text-sm font-medium">
                  Sort by
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger
                    id="sort-select"
                    className="w-full sm:w-[180px]"
                  >
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

              <div className="space-y-2">
                <label htmlFor="rating-filter" className="text-sm font-medium">
                  Rating
                </label>
                <Select value={ratingFilter} onValueChange={setRatingFilter}>
                  <SelectTrigger
                    id="rating-filter"
                    className="w-full sm:w-[150px]"
                  >
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratingFilters.map((filter) => (
                      <SelectItem key={filter.value} value={filter.value}>
                        {filter.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Showing {filteredAndSortedReviews.length} review
              {filteredAndSortedReviews.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        {paginatedReviews.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <Star className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No Reviews Found</h3>
              <p>No reviews match your current filters.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedReviews.map((review) => {
                const IconComponent = review.icon;
                return (
                  <Card
                    key={review.id}
                    className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md relative overflow-hidden"
                  >
                    {/* Top Rated Badge */}
                    {review.topRated && (
                      <div className="absolute top-2 right-2 z-10">
                        <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 text-xs">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Top Rated
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Link href={`/review/${review.slug}`}>
                          <Image
                            src={review.image || "/placeholder.svg"}
                            alt={review.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </Link>
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className={getCategoryColor(review.category)}>
                            {review.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <div className="p-2 rounded-full bg-background/90 backdrop-blur-sm">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <Link href={`/review/${review.slug}`}>
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {review.title}
                        </h3>
                      </Link>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm font-semibold">
                          {review.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          / 5.0
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                        {review.verdict}
                      </p>

                      <Separator className="mb-4" />

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>By {review.author}</span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(review.publishDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {formatViews(review.views)}
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

        {/* Review Stats */}
        <section className="mt-16">
          <Separator className="mb-12" />
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Review Statistics</h2>
            <p className="text-muted-foreground">
              Our comprehensive testing and review process
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {productReviews.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {productReviews.filter((r) => r.editorsChoice).length}
              </div>
              <div className="text-sm text-muted-foreground">
                Editor's Choice
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {(
                  productReviews.reduce((sum, r) => sum + r.rating, 0) /
                  productReviews.length
                ).toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {categories.length - 1}
              </div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
