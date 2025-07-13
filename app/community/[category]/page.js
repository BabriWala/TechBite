"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Search,
  Plus,
  Pin,
  Flame,
  Clock,
  Eye,
  ThumbsUp,
  MessageCircle,
  Filter,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function CategoryPage({ params }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  // Mock category data
  const categoryInfo = {
    "ai-ml": {
      name: "Artificial Intelligence & Machine Learning",
      description:
        "Discuss the latest in AI, ML algorithms, and neural networks",
      icon: "🤖",
      memberCount: 8934,
      postCount: 1247,
    },
    "web-dev": {
      name: "Web Development",
      description: "Frontend, backend, frameworks, and web technologies",
      icon: "💻",
      memberCount: 12456,
      postCount: 2156,
    },
  };

  const category = categoryInfo[params.category] || categoryInfo["ai-ml"];

  // Mock threads
  const threads = [
    {
      id: 1,
      title: "GPT-4 vs Claude 3: Which AI model is better for coding?",
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 2847,
      },
      replies: 23,
      views: 1456,
      likes: 89,
      lastReply: "5 minutes ago",
      lastReplyBy: "Mike Rodriguez",
      isPinned: true,
      isHot: true,
      tags: ["AI", "Coding", "Comparison"],
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      title: "Understanding Transformer Architecture: A Deep Dive",
      author: {
        name: "Alex Kim",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 3456,
      },
      replies: 15,
      views: 892,
      likes: 67,
      lastReply: "12 minutes ago",
      lastReplyBy: "Lisa Wang",
      isPinned: false,
      isHot: true,
      tags: ["Neural Networks", "Architecture", "Deep Learning"],
      createdAt: "2024-01-14",
    },
    {
      id: 3,
      title: "Best practices for training large language models",
      author: {
        name: "David Park",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 1567,
      },
      replies: 31,
      views: 2134,
      likes: 156,
      lastReply: "18 minutes ago",
      lastReplyBy: "Emma Johnson",
      isPinned: false,
      isHot: false,
      tags: ["LLM", "Training", "Best Practices"],
      createdAt: "2024-01-13",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/community">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Community
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl">
              {category.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {category.name}
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                {category.description}
              </p>
              <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {category.memberCount.toLocaleString()} members
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {category.postCount.toLocaleString()} posts
                </span>
              </div>
            </div>
          </div>

          {/* Search and Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search in this category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="replies">Most Replies</SelectItem>
                  <SelectItem value="views">Most Views</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Thread
              </Button>
            </div>
          </div>
        </div>

        {/* Threads List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Discussions ({threads.length})</span>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {threads.map((thread) => (
                <div
                  key={thread.id}
                  className="border-b border-slate-200 dark:border-slate-700 last:border-b-0 pb-4 last:pb-0"
                >
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={thread.author.avatar || "/placeholder.svg"}
                        alt={thread.author.name}
                      />
                      <AvatarFallback>
                        {thread.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {thread.isPinned && (
                              <Pin className="h-4 w-4 text-blue-500" />
                            )}
                            {thread.isHot && (
                              <Flame className="h-4 w-4 text-orange-500" />
                            )}
                            <Link href={`/community/thread/${thread.id}`}>
                              <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 line-clamp-2">
                                {thread.title}
                              </h3>
                            </Link>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            {thread.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                            <span>by {thread.author.name}</span>
                            <span>
                              {thread.author.reputation.toLocaleString()}{" "}
                              reputation
                            </span>
                            <span>
                              {new Date(thread.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {thread.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {thread.replies} replies
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {thread.views} views
                          </span>
                        </div>

                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>
                              Last reply {thread.lastReply} by{" "}
                              {thread.lastReplyBy}
                            </span>
                          </div>
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
    </div>
  );
}
