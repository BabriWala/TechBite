"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Mail,
  Calendar,
  Bookmark,
  MessageSquare,
  Settings,
  Bell,
  Moon,
  Sun,
  Edit,
  ExternalLink,
  Clock,
  Heart,
  Share2,
} from "lucide-react";

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    avatar: "/placeholder.svg?height=80&width=80",
    joinDate: "March 2023",
    articlesRead: 247,
    commentsPosted: 89,
    articlesSaved: 34,
  };

  // Mock saved articles
  const savedArticles = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Healthcare",
      category: "AI",
      dateSaved: "2024-01-15",
      readTime: "8 min read",
      author: "Dr. Sarah Chen",
      image:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    {
      id: 2,
      title: "Apple Vision Pro: A Deep Dive into Spatial Computing",
      category: "Hardware",
      dateSaved: "2024-01-12",
      readTime: "12 min read",
      author: "Mike Rodriguez",
      image:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough: IBM's Latest Achievement",
      category: "Computing",
      dateSaved: "2024-01-10",
      readTime: "6 min read",
      author: "Lisa Wang",
      image:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
    },
  ];

  // Mock comment history
  const commentHistory = [
    {
      id: 1,
      articleTitle: "The Rise of Edge Computing in IoT",
      comment:
        "Great article! I've been working with edge computing solutions and this perfectly captures the current landscape.",
      date: "2024-01-14",
      likes: 12,
    },
    {
      id: 2,
      articleTitle: "Tesla's New Autopilot Features Explained",
      comment:
        "The safety improvements are impressive, but I'm still concerned about the ethical implications of autonomous vehicles.",
      date: "2024-01-12",
      likes: 8,
    },
    {
      id: 3,
      articleTitle: "Google's Gemini AI: Competition for ChatGPT?",
      comment:
        "Having tested both, I think Gemini has some unique advantages in multimodal tasks.",
      date: "2024-01-10",
      likes: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                />
                <AvatarFallback className="text-lg font-semibold">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {user.name}
                    </h1>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Mail className="h-4 w-4" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>Member since {user.joinDate}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="self-start sm:self-center bg-transparent"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {user.articlesRead}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Articles Read
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {user.commentsPosted}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Comments
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {user.articlesSaved}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Saved Articles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="saved" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Bookmark className="h-4 w-4" />
              Saved Articles
            </TabsTrigger>
            <TabsTrigger value="comments" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Comments
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Saved Articles Tab */}
          <TabsContent value="saved" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bookmark className="h-5 w-5" />
                  Saved Articles ({savedArticles.length})
                </CardTitle>
                <CardDescription>
                  Articles you've bookmarked for later reading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {savedArticles.map((article) => (
                    <div
                      key={article.id}
                      className="flex gap-4 p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-24 h-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 mb-2">
                              {article.title}
                            </h3>
                            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                              <Badge variant="secondary">
                                {article.category}
                              </Badge>
                              <span>by {article.author}</span>
                              <span>{article.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                              <Clock className="h-4 w-4" />
                              <span>
                                Saved on{" "}
                                {new Date(
                                  article.dateSaved
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comments Tab */}
          <TabsContent value="comments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Comment History ({commentHistory.length})
                </CardTitle>
                <CardDescription>
                  Your recent comments and discussions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {commentHistory.map((comment) => (
                    <div
                      key={comment.id}
                      className="border-l-4 border-blue-500 pl-4 py-2"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="font-medium text-slate-900 dark:text-slate-100">
                          {comment.articleTitle}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Heart className="h-4 w-4" />
                          <span>{comment.likes}</span>
                        </div>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-2">
                        {comment.comment}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(comment.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid gap-6">
              {/* Notification Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>
                    Manage how you receive updates and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Receive email updates about new articles and comments
                      </p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-notifications">
                        Push Notifications
                      </Label>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Get instant notifications for breaking news
                      </p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={pushNotifications}
                      onCheckedChange={setPushNotifications}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="newsletter">
                        Newsletter Subscription
                      </Label>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Weekly digest of top tech stories
                      </p>
                    </div>
                    <Switch
                      id="newsletter"
                      checked={newsletter}
                      onCheckedChange={setNewsletter}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Appearance Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {darkMode ? (
                      <Moon className="h-5 w-5" />
                    ) : (
                      <Sun className="h-5 w-5" />
                    )}
                    Appearance
                  </CardTitle>
                  <CardDescription>
                    Customize your reading experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Switch between light and dark themes
                      </p>
                    </div>
                    <Switch
                      id="dark-mode"
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Account Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Account Management
                  </CardTitle>
                  <CardDescription>
                    Manage your account settings and data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Export My Data
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Change Password
                    </Button>
                  </div>
                  <Separator />
                  <Button variant="destructive" className="w-full">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
