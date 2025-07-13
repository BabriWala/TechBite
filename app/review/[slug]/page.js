"use client";

import React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  Star,
  Bookmark,
  Share2,
  ChevronUp,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Check,
  X,
  Smartphone,
  Battery,
  Camera,
  Cpu,
  Monitor,
  Zap,
  Award,
  TrendingUp,
  Hash,
  Eye,
  BookOpen,
} from "lucide-react";

// Mock review data
const mockReview = {
  id: 1,
  title: "iPhone 15 Pro Max Review: The Ultimate Camera Phone",
  slug: "iphone-15-pro-max-review",
  category: "Phones",
  rating: 4.8,
  publishDate: "2024-01-15",
  lastUpdated: "2024-01-16",
  readingTime: 12,
  views: 25400,
  author: {
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Senior Mobile Editor",
    bio: "10+ years reviewing smartphones and mobile technology",
  },
  coverImage: "/placeholder.svg?height=600&width=800",
  gallery: [
    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
  ],
  verdict: {
    summary:
      "The iPhone 15 Pro Max delivers exceptional camera performance, blazing speed, and premium build quality that justifies its premium price point.",
    finalScore: 4.8,
    pros: [
      "Exceptional camera system with 5x telephoto zoom",
      "A17 Pro chip delivers incredible performance",
      "Premium titanium build feels fantastic",
      "Excellent battery life",
      "USB-C finally arrives",
      "Action Button is genuinely useful",
    ],
    cons: [
      "Very expensive, especially with storage upgrades",
      "Heavy at 221g",
      "Limited customization compared to Android",
      "No significant design changes",
      "Charging speeds could be faster",
    ],
  },
  content: `
    <h2>Design and Build Quality</h2>
    <p>The iPhone 15 Pro Max represents Apple's most premium smartphone offering, and it shows in every aspect of its construction. The switch to titanium from stainless steel is immediately noticeable – the phone feels significantly lighter despite its large 6.7-inch display, and the brushed titanium finish gives it a distinctly premium feel that sets it apart from previous generations.</p>

    <p>The new Action Button replaces the traditional mute switch and offers customizable functionality. While it takes some getting used to, the ability to program it for camera quick launch, flashlight, or other shortcuts proves genuinely useful in daily use.</p>

    <blockquote>
      "The titanium construction doesn't just look premium – it fundamentally changes how the phone feels in hand, making this massive device surprisingly manageable for extended use."
    </blockquote>

    <h2>Display Excellence</h2>
    <p>The 6.7-inch Super Retina XDR display continues to be one of the best smartphone screens available. With 2796 x 1290 resolution, 460 pixels per inch, and support for HDR10 and Dolby Vision, content looks absolutely stunning. The ProMotion technology with adaptive refresh rates up to 120Hz makes scrolling buttery smooth and responsive.</p>

    <p>Outdoor visibility remains excellent thanks to the 2000 nits peak brightness, and the Always-On display feature is both useful and power-efficient. Color accuracy is exceptional, making this an excellent choice for content creators and photographers.</p>

    <h2>Camera System: The Star of the Show</h2>
    <p>The camera system is where the iPhone 15 Pro Max truly shines. The new 48MP main sensor with second-generation sensor-shift optical image stabilization captures incredibly detailed photos with excellent dynamic range. The improved Night mode works better than ever, producing usable photos in surprisingly dark conditions.</p>

    <p>The standout feature is the new 5x telephoto zoom lens, which replaces the 3x zoom from previous generations. This 120mm equivalent focal length is perfect for portraits and distant subjects, and the quality remains impressive even at maximum zoom.</p>

    <h3>Video Capabilities</h3>
    <p>Video recording capabilities are industry-leading, with 4K ProRes recording, Cinematic mode improvements, and the new Log recording format for professional workflows. The Action mode stabilization continues to impress, delivering gimbal-like smoothness for handheld footage.</p>

    <h2>Performance and Battery Life</h2>
    <p>The A17 Pro chip, built on a 3-nanometer process, delivers exceptional performance across all tasks. Whether you're editing 4K video, playing demanding games, or running multiple apps simultaneously, the iPhone 15 Pro Max handles everything without breaking a sweat.</p>

    <p>Battery life is excellent, easily lasting a full day of heavy use. The combination of the efficient A17 Pro chip and optimized iOS 17 delivers impressive endurance, often stretching into a second day with moderate usage.</p>

    <h2>iOS 17 and Software Experience</h2>
    <p>iOS 17 brings several useful improvements, including enhanced widgets, improved autocorrect, and better privacy features. The software experience remains smooth and intuitive, with excellent integration across Apple's ecosystem of devices and services.</p>

    <h2>Final Thoughts</h2>
    <p>The iPhone 15 Pro Max is undoubtedly Apple's best smartphone to date. While the price is steep, the combination of premium materials, exceptional cameras, and top-tier performance makes it a worthwhile investment for users who demand the absolute best from their mobile device.</p>
  `,
  specifications: {
    display: {
      size: "6.7 inches",
      resolution: "2796 x 1290 pixels",
      technology: "Super Retina XDR OLED",
      refreshRate: "120Hz ProMotion",
      brightness: "2000 nits peak",
    },
    performance: {
      processor: "A17 Pro (3nm)",
      ram: "8GB",
      storage: "256GB / 512GB / 1TB",
      gpu: "6-core GPU",
    },
    camera: {
      main: "48MP f/1.78",
      ultrawide: "12MP f/2.2",
      telephoto: "12MP f/2.8 (5x zoom)",
      front: "12MP f/1.9",
      video: "4K ProRes, Dolby Vision HDR",
    },
    battery: {
      capacity: "4441 mAh",
      charging: "27W wired, 15W MagSafe",
      playback: "Up to 29 hours video",
    },
    connectivity: {
      cellular: "5G (sub-6GHz and mmWave)",
      wifi: "Wi-Fi 6E",
      bluetooth: "Bluetooth 5.3",
      port: "USB-C (USB 3.0)",
    },
    physical: {
      dimensions: "159.9 x 76.7 x 8.25 mm",
      weight: "221g",
      materials: "Titanium frame, Ceramic Shield front",
      colors: "Natural, Blue, White, Black Titanium",
      waterResistance: "IP68",
    },
  },
  tags: ["iPhone", "Apple", "Smartphone", "Camera", "Premium"],
};

// Mock related reviews
const relatedReviews = [
  {
    id: 2,
    title: "Google Pixel 8 Pro Review",
    slug: "google-pixel-8-pro-review",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    category: "Phones",
    readingTime: 10,
  },
  {
    id: 3,
    title: "Samsung Galaxy S24 Ultra Review",
    slug: "samsung-galaxy-s24-ultra-review",
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    category: "Phones",
    readingTime: 11,
  },
  {
    id: 4,
    title: "OnePlus 12 Review",
    slug: "oneplus-12-review",
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    category: "Phones",
    readingTime: 9,
  },
  {
    id: 5,
    title: "iPhone 15 vs iPhone 14 Comparison",
    slug: "iphone-15-vs-iphone-14-comparison",
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    category: "Comparisons",
    readingTime: 8,
  },
];

// Mock comments
const mockComments = [
  {
    id: 1,
    author: "TechEnthusiast92",
    content:
      "Great review! The camera samples really showcase the improvement in the telephoto lens. Thinking of upgrading from my iPhone 13 Pro.",
    timestamp: "2024-01-15T14:30:00Z",
    likes: 12,
    dislikes: 1,
  },
  {
    id: 2,
    author: "PhotoPro",
    content:
      "As a professional photographer, I can confirm the camera quality is exceptional. The ProRAW files have incredible detail and dynamic range.",
    timestamp: "2024-01-15T16:45:00Z",
    likes: 8,
    dislikes: 0,
  },
  {
    id: 3,
    author: "BudgetBuyer",
    content:
      "Looks amazing but that price is just too steep for most people. Wish Apple would offer more affordable options with similar features.",
    timestamp: "2024-01-16T09:15:00Z",
    likes: 15,
    dislikes: 3,
  },
];

export default function ReviewDetailPage({ params }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [comments, setComments] = useState(mockComments);

  // Handle scroll for floating elements
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const renderStars = (rating, size = "md") => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const sizeClass =
      size === "sm" ? "w-3 h-3" : size === "lg" ? "w-6 h-6" : "w-4 h-4";

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className={`${sizeClass} fill-yellow-400 text-yellow-400`}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className={`${sizeClass} fill-yellow-400/50 text-yellow-400`}
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className={`${sizeClass} text-gray-300 dark:text-gray-600`}
        />
      );
    }

    return stars;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: mockReview.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.content) {
      const comment = {
        id: Date.now(),
        author: newComment.name,
        content: newComment.content,
        timestamp: new Date().toISOString(),
        likes: 0,
        dislikes: 0,
      };
      setComments([comment, ...comments]);
      setNewComment({ name: "", email: "", content: "" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tableOfContents = [
    "Design and Build Quality",
    "Display Excellence",
    "Camera System: The Star of the Show",
    "Performance and Battery Life",
    "iOS 17 and Software Experience",
    "Final Thoughts",
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Review Header */}
        <header className="mb-8">
          <div className="mb-4">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {mockReview.category}
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {mockReview.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src={mockReview.author.avatar || "/placeholder.svg"}
                  alt={mockReview.author.name}
                />
                <AvatarFallback>
                  {mockReview.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <span className="font-medium text-foreground">
                  {mockReview.author.name}
                </span>
                <p className="text-xs">{mockReview.author.title}</p>
              </div>
            </div>

            <Separator orientation="vertical" className="h-8" />

            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Published {formatDate(mockReview.publishDate)}</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{mockReview.readingTime} min read</span>
            </div>

            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{formatViews(mockReview.views)} views</span>
            </div>
          </div>

          {/* Rating and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {renderStars(mockReview.rating, "lg")}
                </div>
                <span className="text-2xl font-bold">{mockReview.rating}</span>
                <span className="text-muted-foreground">/ 5.0</span>
              </div>
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                <Award className="w-3 h-3 mr-1" />
                Editor's Choice
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={
                  isBookmarked ? "bg-primary text-primary-foreground" : ""
                }
              >
                <Bookmark className="w-4 h-4 mr-2" />
                {isBookmarked ? "Saved" : "Save"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative overflow-hidden rounded-lg mb-8">
            <Image
              src={mockReview.coverImage || "/placeholder.svg"}
              alt={mockReview.title}
              width={800}
              height={600}
              className="w-full h-64 md:h-96 object-cover"
              priority
            />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <h3 className="font-semibold flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Table of Contents
                  </h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tableOfContents.map((section, index) => (
                    <button
                      key={section}
                      onClick={() => {
                        const element = document.querySelector(
                          `h2:nth-of-type(${index + 1})`
                        );
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="block text-left text-sm text-muted-foreground hover:text-primary transition-colors w-full"
                    >
                      {section}
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="specs">Specs</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                {/* Verdict Summary Box */}
                <Card className="mb-8 border-2 border-primary/20">
                  <CardHeader>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Review Verdict
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Summary</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {mockReview.verdict.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2 text-green-600">
                          <Check className="w-4 h-4" />
                          Pros
                        </h3>
                        <ul className="space-y-2">
                          {mockReview.verdict.pros.map((pro, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2 text-red-600">
                          <X className="w-4 h-4" />
                          Cons
                        </h3>
                        <ul className="space-y-2">
                          {mockReview.verdict.cons.map((con, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Separator />

                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-lg font-semibold">
                          Final Score:
                        </span>
                        <div className="flex items-center gap-1">
                          {renderStars(mockReview.verdict.finalScore, "md")}
                        </div>
                        <span className="text-2xl font-bold text-primary">
                          {mockReview.verdict.finalScore}
                        </span>
                        <span className="text-muted-foreground">/ 5.0</span>
                      </div>
                      <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0">
                        Highly Recommended
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Main Review Content */}
                <article className="prose prose-gray dark:prose-invert max-w-none">
                  <div
                    dangerouslySetInnerHTML={{ __html: mockReview.content }}
                  />
                </article>

                {/* Tags */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {mockReview.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                      >
                        <Hash className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specs" className="mt-6">
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold">
                      Technical Specifications
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(mockReview.specifications).map(
                      ([category, specs]) => (
                        <div key={category}>
                          <h3 className="font-semibold mb-3 capitalize flex items-center gap-2">
                            {category === "display" && (
                              <Monitor className="w-4 h-4" />
                            )}
                            {category === "performance" && (
                              <Cpu className="w-4 h-4" />
                            )}
                            {category === "camera" && (
                              <Camera className="w-4 h-4" />
                            )}
                            {category === "battery" && (
                              <Battery className="w-4 h-4" />
                            )}
                            {category === "connectivity" && (
                              <Zap className="w-4 h-4" />
                            )}
                            {category === "physical" && (
                              <Smartphone className="w-4 h-4" />
                            )}
                            {category}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {Object.entries(specs).map(([key, value]) => (
                              <div
                                key={key}
                                className="flex justify-between items-center p-3 bg-muted/50 rounded-lg"
                              >
                                <span className="font-medium capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </span>
                                <span className="text-muted-foreground">
                                  {value}
                                </span>
                              </div>
                            ))}
                          </div>
                          {category !== "physical" && (
                            <Separator className="mt-4" />
                          )}
                        </div>
                      )
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockReview.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${mockReview.title} - Image ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="comments" className="mt-6">
                {/* Comment Form */}
                <Card className="mb-8">
                  <CardHeader>
                    <h3 className="font-semibold">Leave a Comment</h3>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            Name *
                          </label>
                          <Input
                            id="name"
                            type="text"
                            value={newComment.name}
                            onChange={(e) =>
                              setNewComment({
                                ...newComment,
                                name: e.target.value,
                              })
                            }
                            required
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={newComment.email}
                            onChange={(e) =>
                              setNewComment({
                                ...newComment,
                                email: e.target.value,
                              })
                            }
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="comment"
                          className="block text-sm font-medium mb-2"
                        >
                          Comment *
                        </label>
                        <Textarea
                          id="comment"
                          value={newComment.content}
                          onChange={(e) =>
                            setNewComment({
                              ...newComment,
                              content: e.target.value,
                            })
                          }
                          required
                          placeholder="Share your thoughts about this review..."
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="w-full md:w-auto">
                        Post Comment
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Comments List */}
                <div className="space-y-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Comments ({comments.length})
                  </h3>
                  {comments.map((comment) => (
                    <Card key={comment.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback>
                                {comment.author
                                  .split("")
                                  .slice(0, 2)
                                  .join("")
                                  .toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{comment.author}</h4>
                              <p className="text-xs text-muted-foreground">
                                {formatTimestamp(comment.timestamp)}
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                          {comment.content}
                        </p>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2"
                          >
                            <ThumbsUp className="w-3 h-3 mr-1" />
                            {comment.likes}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2"
                          >
                            <ThumbsDown className="w-3 h-3 mr-1" />
                            {comment.dislikes}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>

        {/* Related Reviews */}
        <section className="mt-16">
          <Separator className="mb-8" />
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Related Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedReviews.map((review) => (
              <Card
                key={review.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Link href={`/review/${review.slug}`}>
                      <Image
                        src={review.image || "/placeholder.svg"}
                        alt={review.title}
                        width={300}
                        height={200}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary">{review.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Link href={`/review/${review.slug}`}>
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {review.title}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating, "sm")}
                      <span className="ml-1">{review.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {review.readingTime} min
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 right-6 rounded-full shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
