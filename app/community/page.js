"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  Search,
  Plus,
  Pin,
  Eye,
  ThumbsUp,
  MessageCircle,
  Flame,
  Star,
  Filter,
} from "lucide-react";
import Link from "next/link";

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock forum categories
  const categories = [
    {
      id: "ai-ml",
      name: "Artificial Intelligence & Machine Learning",
      description:
        "Discuss the latest in AI, ML algorithms, and neural networks",
      icon: "🤖",
      postCount: 1247,
      memberCount: 8934,
      lastActivity: "2 minutes ago",
      color: "bg-purple-500",
    },
    {
      id: "web-dev",
      name: "Web Development",
      description: "Frontend, backend, frameworks, and web technologies",
      icon: "💻",
      postCount: 2156,
      memberCount: 12456,
      lastActivity: "5 minutes ago",
      color: "bg-blue-500",
    },
    {
      id: "mobile",
      name: "Mobile Development",
      description: "iOS, Android, React Native, and mobile app development",
      icon: "📱",
      postCount: 892,
      memberCount: 6789,
      lastActivity: "12 minutes ago",
      color: "bg-green-500",
    },
    {
      id: "hardware",
      name: "Hardware & Gadgets",
      description: "Latest gadgets, PC builds, and hardware reviews",
      icon: "⚡",
      postCount: 1534,
      memberCount: 9876,
      lastActivity: "8 minutes ago",
      color: "bg-yellow-500",
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      description:
        "Security practices, vulnerabilities, and protection strategies",
      icon: "🔒",
      postCount: 678,
      memberCount: 4532,
      lastActivity: "15 minutes ago",
      color: "bg-red-500",
    },
    {
      id: "startups",
      name: "Startups & Entrepreneurship",
      description: "Building companies, funding, and startup culture",
      icon: "🚀",
      postCount: 945,
      memberCount: 7234,
      lastActivity: "3 minutes ago",
      color: "bg-orange-500",
    },
  ];

  // Mock recent discussions
  const recentDiscussions = [
    {
      id: 1,
      title: "GPT-4 vs Claude 3: Which AI model is better for coding?",
      category: "AI & ML",
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 2847,
      },
      replies: 23,
      views: 1456,
      likes: 89,
      lastReply: "5 minutes ago",
      isPinned: true,
      isHot: true,
      tags: ["AI", "Coding", "Comparison"],
    },
    {
      id: 2,
      title: "Best practices for React Server Components in Next.js 14",
      category: "Web Development",
      author: {
        name: "Mike Rodriguez",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 1923,
      },
      replies: 15,
      views: 892,
      likes: 67,
      lastReply: "12 minutes ago",
      isPinned: false,
      isHot: true,
      tags: ["React", "Next.js", "SSR"],
    },
    {
      id: 3,
      title: "Apple Vision Pro development: First impressions and challenges",
      category: "Hardware",
      author: {
        name: "Alex Kim",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 3456,
      },
      replies: 31,
      views: 2134,
      likes: 156,
      lastReply: "18 minutes ago",
      isPinned: false,
      isHot: false,
      tags: ["Apple", "VR", "Development"],
    },
    {
      id: 4,
      title: "Cybersecurity trends to watch in 2024",
      category: "Cybersecurity",
      author: {
        name: "Lisa Wang",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 4123,
      },
      replies: 8,
      views: 567,
      likes: 34,
      lastReply: "25 minutes ago",
      isPinned: false,
      isHot: false,
      tags: ["Security", "Trends", "2024"],
    },
    {
      id: 5,
      title: "Funding strategies for early-stage tech startups",
      category: "Startups",
      author: {
        name: "David Park",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 1567,
      },
      replies: 19,
      views: 1023,
      likes: 78,
      lastReply: "32 minutes ago",
      isPinned: false,
      isHot: false,
      tags: ["Funding", "Startups", "VC"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Community Discussion
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Connect with fellow tech enthusiasts, share knowledge, and
                discuss the latest trends
              </p>
            </div>
            <Button className="self-start sm:self-center">
              <Plus className="h-4 w-4 mr-2" />
              New Discussion
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Forum Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Forum Categories
                </CardTitle>
                <CardDescription>Browse discussions by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {categories.map((category) => (
                    <Link key={category.id} href={`/community/${category.id}`}>
                      <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                        <div
                          className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white text-xl`}
                        >
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                            {category.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">
                            {category.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                            <span>
                              {category.postCount.toLocaleString()} posts
                            </span>
                            <span>
                              {category.memberCount.toLocaleString()} members
                            </span>
                            <span>Last activity {category.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Discussions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Recent Discussions
                </CardTitle>
                <CardDescription>
                  Latest posts from the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDiscussions.map((discussion) => (
                    <div
                      key={discussion.id}
                      className="border-b border-slate-200 dark:border-slate-700 last:border-b-0 pb-4 last:pb-0"
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={discussion.author.avatar || "/placeholder.svg"}
                            alt={discussion.author.name}
                          />
                          <AvatarFallback>
                            {discussion.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              {discussion.isPinned && (
                                <Pin className="h-4 w-4 text-blue-500" />
                              )}
                              {discussion.isHot && (
                                <Flame className="h-4 w-4 text-orange-500" />
                              )}
                              <Link href={`/community/thread/${discussion.id}`}>
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 line-clamp-2">
                                  {discussion.title}
                                </h3>
                              </Link>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {discussion.category}
                            </Badge>
                            {discussion.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                              <span className="flex items-center gap-1">
                                <Star className="h-4 w-4" />
                                {discussion.author.reputation.toLocaleString()}
                              </span>
                              <span>by {discussion.author.name}</span>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="h-4 w-4" />
                                {discussion.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle className="h-4 w-4" />
                                {discussion.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                {discussion.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {discussion.lastReply}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">
                      Total Members
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      47,892
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">
                      Total Posts
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      8,452
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">
                      Online Now
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      1,234
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">
                      New Today
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      89
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      name: "Sarah Chen",
                      reputation: 12847,
                      avatar: "/placeholder.svg?height=32&width=32",
                    },
                    {
                      name: "Mike Rodriguez",
                      reputation: 9234,
                      avatar: "/placeholder.svg?height=32&width=32",
                    },
                    {
                      name: "Alex Kim",
                      reputation: 8567,
                      avatar: "/placeholder.svg?height=32&width=32",
                    },
                    {
                      name: "Lisa Wang",
                      reputation: 7891,
                      avatar: "/placeholder.svg?height=32&width=32",
                    },
                  ].map((contributor, index) => (
                    <div
                      key={contributor.name}
                      className="flex items-center gap-3"
                    >
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">
                        {index + 1}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={contributor.avatar || "/placeholder.svg"}
                          alt={contributor.name}
                        />
                        <AvatarFallback className="text-xs">
                          {contributor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-slate-900 dark:text-slate-100">
                          {contributor.name}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          {contributor.reputation.toLocaleString()} reputation
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="text-slate-600 dark:text-slate-400">
                  • Be respectful and constructive
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  • Stay on topic and relevant
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  • No spam or self-promotion
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  • Help others learn and grow
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 bg-transparent"
                >
                  Read Full Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
