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
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Share2,
  Bookmark,
  Flag,
  Quote,
  Clock,
  Eye,
  Pin,
  Flame,
} from "lucide-react";
import Link from "next/link";

export default function ThreadPage({ params }) {
  const [replyContent, setReplyContent] = useState("");
  const [isReplying, setIsReplying] = useState(false);

  // Mock thread data
  const thread = {
    id: Number.parseInt(params.id),
    title: "GPT-4 vs Claude 3: Which AI model is better for coding?",
    content: `I've been experimenting with both GPT-4 and Claude 3 for various coding tasks, and I'm curious about the community's experience. Here's what I've observed so far:

**GPT-4 Strengths:**
- Excellent at explaining complex algorithms
- Great for debugging and code review
- Strong performance with popular frameworks

**Claude 3 Strengths:**
- Better at understanding context in large codebases
- More accurate with newer technologies
- Excellent at refactoring suggestions

What has been your experience? Which model do you prefer for different types of coding tasks?`,
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      reputation: 2847,
      joinDate: "March 2023",
      posts: 156,
    },
    category: "AI & ML",
    tags: ["AI", "Coding", "Comparison"],
    createdAt: "2024-01-15T10:30:00Z",
    views: 1456,
    likes: 89,
    dislikes: 3,
    replies: 23,
    isPinned: true,
    isHot: true,
  };

  // Mock replies
  const replies = [
    {
      id: 1,
      content: `Great comparison! I've been using both extensively and here's my take:

For **web development**, I find GPT-4 slightly better because it has more training data on popular frameworks like React and Next.js. However, Claude 3 excels when working with **newer technologies** or when you need to understand complex business logic.

One thing I've noticed is that Claude 3 is better at maintaining context across longer conversations, which is crucial when working on large projects.`,
      author: {
        name: "Mike Rodriguez",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 1923,
        joinDate: "January 2023",
        posts: 89,
      },
      createdAt: "2024-01-15T11:15:00Z",
      likes: 34,
      dislikes: 1,
      isEdited: false,
    },
    {
      id: 2,
      content: `I disagree with some points here. In my experience, GPT-4 tends to hallucinate more when it comes to newer APIs and libraries. Claude 3 has been more reliable for me, especially when working with:

- TypeScript advanced features
- Modern React patterns (Server Components, etc.)
- API integrations with newer services

That said, GPT-4's code explanations are definitely more beginner-friendly.`,
      author: {
        name: "Alex Kim",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 3456,
        joinDate: "February 2023",
        posts: 234,
      },
      createdAt: "2024-01-15T12:45:00Z",
      likes: 28,
      dislikes: 5,
      isEdited: true,
    },
  ];

  const handleReply = () => {
    if (replyContent.trim()) {
      console.log("Reply:", replyContent);
      setReplyContent("");
      setIsReplying(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link href="/community/ai-ml">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to AI & ML
            </Button>
          </Link>
        </div>

        {/* Thread Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {thread.isPinned && <Pin className="h-4 w-4 text-blue-500" />}
                  {thread.isHot && (
                    <Flame className="h-4 w-4 text-orange-500" />
                  )}
                  <Badge variant="secondary">{thread.category}</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">{thread.title}</CardTitle>
                <div className="flex items-center gap-2 mb-4">
                  {thread.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {thread.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {thread.replies} replies
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {new Date(thread.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Flag className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Original Post */}
        <Card className="mb-6">
          <CardContent className="pt-6">
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

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                      {thread.author.name}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <span>
                        {thread.author.reputation.toLocaleString()} reputation
                      </span>
                      <span>{thread.author.posts} posts</span>
                      <span>Joined {thread.author.joinDate}</span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">
                    {new Date(thread.createdAt).toLocaleString()}
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none mb-4">
                  <div className="whitespace-pre-wrap text-slate-700 dark:text-slate-300">
                    {thread.content}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {thread.likes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      {thread.dislikes}
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Quote className="h-4 w-4 mr-1" />
                    Quote
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Replies */}
        <div className="space-y-6 mb-8">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Replies ({replies.length})
          </h3>

          {replies.map((reply) => (
            <Card key={reply.id}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={reply.author.avatar || "/placeholder.svg"}
                      alt={reply.author.name}
                    />
                    <AvatarFallback>
                      {reply.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-slate-100">
                          {reply.author.name}
                        </h5>
                        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <span>
                            {reply.author.reputation.toLocaleString()}{" "}
                            reputation
                          </span>
                          <span>{reply.author.posts} posts</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        {reply.isEdited && (
                          <span className="text-xs">(edited)</span>
                        )}
                        <span>
                          {new Date(reply.createdAt).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none mb-4">
                      <div className="whitespace-pre-wrap text-slate-700 dark:text-slate-300">
                        {reply.content}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {reply.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          {reply.dislikes}
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Quote className="h-4 w-4 mr-1" />
                        Quote
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reply Form */}
        <Card>
          <CardHeader>
            <CardTitle>Post a Reply</CardTitle>
            <CardDescription>
              Share your thoughts and contribute to the discussion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder="Write your reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                rows={6}
                className="resize-none"
              />
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {replyContent.length}/2000 characters
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setReplyContent("")}
                    disabled={!replyContent.trim()}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleReply}
                    disabled={!replyContent.trim() || isReplying}
                  >
                    {isReplying ? "Posting..." : "Post Reply"}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
