"use client";

import React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  User,
  Twitter,
  Facebook,
  Linkedin,
  LinkIcon,
  MessageCircle,
  Share2,
  ChevronUp,
  Hash,
} from "lucide-react";
import Link from "next/link";

// Mock article data
const mockArticle = {
  id: 1,
  title: "Apple Unveils Revolutionary M4 Chip with Enhanced AI Capabilities",
  slug: "apple-m4-chip-ai-capabilities",
  author: {
    name: "Sarah Johnson",
    avatar:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
  },
  publishDate: "2024-01-15",
  readingTime: 8,
  category: "Mobile",
  coverImage:
    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
  content: `
    <p>Apple has officially announced its groundbreaking M4 chip, marking a significant leap forward in mobile computing performance and artificial intelligence capabilities. The new processor promises to deliver unprecedented power efficiency while maintaining the sleek design Apple is known for.</p>

    <h2>Revolutionary Architecture</h2>
    <p>The M4 chip features a completely redesigned architecture that focuses heavily on AI and machine learning workloads. Built on a cutting-edge 3-nanometer process, the chip delivers up to 40% better performance compared to its predecessor while consuming 25% less power.</p>

    <blockquote>
      "The M4 represents our most ambitious chip design to date. We've reimagined what's possible in mobile computing by putting AI at the center of everything." - Tim Cook, Apple CEO
    </blockquote>

    <h2>Enhanced AI Capabilities</h2>
    <p>One of the most impressive features of the M4 is its dedicated Neural Processing Unit (NPU) that can handle complex AI tasks with remarkable efficiency. This includes:</p>

    <ul>
      <li>Real-time language translation without internet connectivity</li>
      <li>Advanced computational photography with improved Night mode</li>
      <li>Intelligent battery management that learns from user patterns</li>
      <li>Enhanced Siri capabilities with faster response times</li>
    </ul>

    <h2>Performance Benchmarks</h2>
    <p>Early benchmarks show impressive results across various performance metrics. The M4 chip demonstrates significant improvements in both single-core and multi-core performance, making it ideal for demanding applications like video editing, 3D rendering, and complex data analysis.</p>

    <pre><code>// Example performance comparison
    M3 Chip: 2,800 single-core, 11,200 multi-core
    M4 Chip: 3,920 single-core, 15,680 multi-core
    Improvement: +40% single-core, +40% multi-core</code></pre>

    <h2>Impact on Future Devices</h2>
    <p>The M4 chip will first appear in the upcoming MacBook Pro models, followed by integration into the iPad Pro lineup later this year. Apple has hinted that this chip will also power future innovations in augmented reality and autonomous systems.</p>

    <p>Industry analysts predict that the M4's advanced AI capabilities will set a new standard for mobile processors, potentially influencing the entire semiconductor industry's direction toward AI-first designs.</p>
  `,
};

// Mock comments data
const mockComments = [
  {
    id: 1,
    author: "Tech Enthusiast",
    email: "tech@example.com",
    content:
      "This is incredible! Can't wait to see how this performs in real-world applications.",
    timestamp: "2024-01-15T10:30:00Z",
    replies: [
      {
        id: 2,
        author: "Developer Mike",
        email: "mike@example.com",
        content:
          "Agreed! The AI capabilities sound particularly promising for developers.",
        timestamp: "2024-01-15T11:15:00Z",
      },
    ],
  },
  {
    id: 3,
    author: "Apple Fan",
    email: "fan@example.com",
    content:
      "Apple continues to push the boundaries of what's possible. The 40% performance improvement is remarkable.",
    timestamp: "2024-01-15T14:20:00Z",
    replies: [],
  },
];

// Mock related articles
const relatedArticles = [
  {
    id: 2,
    title: "iPhone 16 Pro Review: Camera Excellence Redefined",
    slug: "iphone-16-pro-review",
    category: "Reviews",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    readingTime: 6,
  },
  {
    id: 3,
    title: "Meta's VR Headset Breakthrough: Lighter, Faster, Smarter",
    slug: "meta-vr-headset-breakthrough",
    category: "Mobile",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    readingTime: 5,
  },
  {
    id: 4,
    title: "Google Pixel 9 vs Samsung Galaxy S24: Ultimate Comparison",
    slug: "pixel-9-vs-galaxy-s24",
    category: "Reviews",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    readingTime: 7,
  },
];

export default function ArticleDetailPage() {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll for floating elements
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section for table of contents
      const sections = document.querySelectorAll("h2");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          current = section.textContent || "";
        }
      });
      setActiveSection(current);
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

  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = mockArticle.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(url);
          // You could add a toast notification here
        } catch (err) {
          console.error("Failed to copy link:", err);
        }
        break;
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.email && newComment.content) {
      const comment = {
        id: Date.now(),
        author: newComment.name,
        email: newComment.email,
        content: newComment.content,
        timestamp: new Date().toISOString(),
        replies: [],
      };
      setComments([comment, ...comments]);
      setNewComment({ name: "", email: "", content: "" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tableOfContents = [
    "Revolutionary Architecture",
    "Enhanced AI Capabilities",
    "Performance Benchmarks",
    "Impact on Future Devices",
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <Badge className={getCategoryColor(mockArticle.category)}>
              {mockArticle.category}
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {mockArticle.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Image
                src={mockArticle.author.avatar}
                alt={mockArticle.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {mockArticle.author.name}
              </span>
            </div>

            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(mockArticle.publishDate)}
            </span>

            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {mockArticle.readingTime} min read
            </span>
          </div>

          <div className="relative overflow-hidden rounded-lg mb-8">
            <Image
              src={mockArticle.coverImage}
              alt={mockArticle.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
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
                    <Hash className="w-4 h-4" />
                    Table of Contents
                  </h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tableOfContents.map((section) => (
                    <button
                      key={section}
                      onClick={() => {
                        const element = document.querySelector(
                          `h2:contains("${section}")`
                        );
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`block text-left text-sm hover:text-primary transition-colors ${
                        activeSection === section
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      }`}
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
            {/* Article Content */}
            <article className="prose prose-gray dark:prose-invert max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: mockArticle.content }} />
            </article>

            {/* Social Share Options */}
            <section className="mb-12">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share this article
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("twitter")}
                  className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("facebook")}
                  className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("linkedin")}
                  className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("copy")}
                  className="flex items-center gap-2 hover:bg-gray-50 hover:border-gray-200 dark:hover:bg-gray-950"
                  aria-label="Copy link"
                >
                  <LinkIcon className="w-4 h-4" />
                  Copy Link
                </Button>
              </div>
            </section>

            <Separator className="mb-12" />

            {/* Comments Section */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Leave a Comment
              </h3>

              {/* Comment Form */}
              <Card className="mb-8">
                <CardContent className="p-6">
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
                          Email *
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
                          required
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
                        placeholder="Share your thoughts..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full md:w-auto">
                      Post Comment
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Existing Comments */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <Card key={comment.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">{comment.author}</h4>
                          <p className="text-sm text-muted-foreground">
                            {formatTimestamp(comment.timestamp)}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed mb-4">
                        {comment.content}
                      </p>

                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="ml-6 space-y-4 border-l-2 border-muted pl-6">
                          {comment.replies.map((reply) => (
                            <div key={reply.id}>
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h5 className="font-medium text-sm">
                                    {reply.author}
                                  </h5>
                                  <p className="text-xs text-muted-foreground">
                                    {formatTimestamp(reply.timestamp)}
                                  </p>
                                </div>
                              </div>
                              <p className="text-sm leading-relaxed">
                                {reply.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="mb-12" />

            {/* Related Articles */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="group cursor-pointer hover:shadow-lg transition-all duration-300"
                  >
                    <Link href={`/article/${article.id}`}>
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={250}
                            height={150}
                            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge
                              className={getCategoryColor(article.category)}
                              variant="secondary"
                            >
                              {article.category}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readingTime} min read
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
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

      {/* Floating Share Bar - Desktop Only */}
      <div className="hidden lg:block fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <Card className="p-2">
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleShare("twitter")}
              className="hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleShare("facebook")}
              className="hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleShare("linkedin")}
              className="hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleShare("copy")}
              className="hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-950"
              aria-label="Copy link"
            >
              <LinkIcon className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
