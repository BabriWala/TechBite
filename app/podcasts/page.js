"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Headphones,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Mic,
  Users,
  Star,
  TrendingUp,
  Filter,
} from "lucide-react";

// Mock podcast data
const mockPodcasts = [
  {
    id: 1,
    title: "The Future of AI: Opportunities and Challenges with Sam Altman",
    slug: "future-ai-sam-altman-interview",
    description:
      "OpenAI CEO Sam Altman discusses the latest developments in artificial intelligence, safety concerns, and what the future holds for AI technology.",
    duration: "45:30",
    publishDate: "2024-01-15",
    audioUrl: "/placeholder-audio.mp3",
    category: "AI",
    guest: {
      name: "Sam Altman",
      title: "CEO, OpenAI",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    host: "Sarah Chen",
    featured: true,
    downloads: 125000,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Building the Next Unicorn: Startup Lessons from Y Combinator",
    slug: "building-unicorn-startup-lessons",
    description:
      "Y Combinator partners share insights on what makes successful startups, common mistakes to avoid, and the current state of venture funding.",
    duration: "38:15",
    publishDate: "2024-01-12",
    audioUrl: "/placeholder-audio.mp3",
    category: "Startups",
    guest: {
      name: "Michael Seibel",
      title: "Managing Director, Y Combinator",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    host: "Alex Thompson",
    featured: false,
    downloads: 89000,
    rating: 4.7,
  },
  {
    id: 3,
    title: "iPhone 15 Deep Dive: Design Decisions and Engineering Challenges",
    slug: "iphone-15-design-engineering-deep-dive",
    description:
      "Former Apple engineers discuss the design philosophy and technical challenges behind the iPhone 15's development process.",
    duration: "52:20",
    publishDate: "2024-01-10",
    audioUrl: "/placeholder-audio.mp3",
    category: "Hardware",
    guest: {
      name: "John Ternus",
      title: "Senior VP Hardware Engineering, Apple",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    host: "Emily Watson",
    featured: true,
    downloads: 156000,
    rating: 4.8,
  },
  {
    id: 4,
    title: "Cybersecurity in 2024: Protecting Against AI-Powered Threats",
    slug: "cybersecurity-2024-ai-threats",
    description:
      "Security experts discuss emerging threats, AI-powered attacks, and how organizations can protect themselves in an evolving landscape.",
    duration: "41:45",
    publishDate: "2024-01-08",
    audioUrl: "/placeholder-audio.mp3",
    category: "Security",
    guest: {
      name: "Katie Moussouris",
      title: "Founder & CEO, Luta Security",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    host: "David Kim",
    featured: false,
    downloads: 67000,
    rating: 4.6,
  },
  {
    id: 5,
    title: "The Electric Vehicle Revolution: Tesla's Impact and What's Next",
    slug: "electric-vehicle-revolution-tesla-impact",
    description:
      "Automotive industry experts analyze Tesla's influence on the EV market and discuss the future of electric transportation.",
    duration: "48:10",
    publishDate: "2024-01-05",
    audioUrl: "/placeholder-audio.mp3",
    category: "Automotive",
    guest: {
      name: "Drew Baglino",
      title: "SVP Powertrain & Energy, Tesla",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    host: "Lisa Thompson",
    featured: true,
    downloads: 134000,
    rating: 4.7,
  },
  {
    id: 6,
    title: "Web3 and Blockchain: Separating Hype from Reality",
    slug: "web3-blockchain-hype-vs-reality",
    description:
      "Blockchain experts discuss real-world applications, challenges, and the future potential of Web3 technologies beyond cryptocurrency.",
    duration: "44:25",
    publishDate: "2024-01-03",
    audioUrl: "/placeholder-audio.mp3",
    category: "Blockchain",
    guest: {
      name: "Vitalik Buterin",
      title: "Co-founder, Ethereum",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    host: "James Park",
    featured: false,
    downloads: 98000,
    rating: 4.5,
  },
  {
    id: 7,
    title: "Gaming Industry Trends: From Mobile to Cloud Gaming",
    slug: "gaming-industry-trends-mobile-cloud",
    description:
      "Gaming industry leaders discuss the shift to mobile gaming, cloud gaming platforms, and the future of interactive entertainment.",
    duration: "39:55",
    publishDate: "2024-01-01",
    audioUrl: "/placeholder-audio.mp3",
    category: "Gaming",
    guest: {
      name: "Phil Spencer",
      title: "CEO Gaming, Microsoft",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    host: "Ryan Miller",
    featured: false,
    downloads: 112000,
    rating: 4.6,
  },
  {
    id: 8,
    title: "The Creator Economy: Building Sustainable Content Businesses",
    slug: "creator-economy-sustainable-content-business",
    description:
      "Successful content creators and platform executives share strategies for building sustainable businesses in the creator economy.",
    duration: "46:30",
    publishDate: "2023-12-29",
    audioUrl: "/placeholder-audio.mp3",
    category: "Business",
    guest: {
      name: "MrBeast",
      title: "Content Creator & Entrepreneur",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    host: "Sarah Chen",
    featured: false,
    downloads: 203000,
    rating: 4.8,
  },
];

const categories = [
  "All",
  "AI",
  "Startups",
  "Hardware",
  "Security",
  "Automotive",
  "Blockchain",
  "Gaming",
  "Business",
];

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "most-downloaded", label: "Most Downloaded" },
  { value: "highest-rated", label: "Highest Rated" },
];

const getCategoryColor = (category) => {
  const colors = {
    AI: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Startups:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Hardware: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Automotive:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Blockchain:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Gaming: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    Business:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  };
  return (
    colors[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  );
};

export default function TechPodcastsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);
  const episodesPerPage = 8;

  // Filter and sort podcasts
  const filteredAndSortedPodcasts = useMemo(() => {
    const filtered = mockPodcasts.filter(
      (podcast) =>
        selectedCategory === "All" || podcast.category === selectedCategory
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return (
            new Date(a.publishDate).getTime() -
            new Date(b.publishDate).getTime()
          );
        case "most-downloaded":
          return b.downloads - a.downloads;
        case "highest-rated":
          return b.rating - a.rating;
        default: // newest
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
      }
    });
  }, [selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedPodcasts.length / episodesPerPage
  );
  const startIndex = (currentPage - 1) * episodesPerPage;
  const paginatedPodcasts = filteredAndSortedPodcasts.slice(
    startIndex,
    startIndex + episodesPerPage
  );

  // Featured podcast for hero section
  const featuredPodcast = mockPodcasts.find((podcast) => podcast.featured);

  // Audio controls
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, [currentlyPlaying]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    }
    if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(0)}K`;
    }
    return downloads.toString();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = (podcastId) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentlyPlaying === podcastId) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentlyPlaying(podcastId);
      setCurrentTime(0);
      audio.src = mockPodcasts.find((p) => p.id === podcastId)?.audioUrl || "";
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (value) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (value[0] / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (value) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = value[0] / 100;
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-3 h-3 fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="w-3 h-3 text-gray-300 dark:text-gray-600"
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <Headphones className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Tech Podcasts
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Listen to expert discussions, interviews, and deep dives into the
            latest technology trends
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{mockPodcasts.length} Episodes</span>
            <Separator orientation="vertical" className="h-4" />
            <span>
              {mockPodcasts.filter((p) => p.featured).length} Featured
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span>Weekly</span>
          </div>
        </header>

        {/* Featured Episode */}
        {featuredPodcast && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Featured Episode</h2>
            </div>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/50">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-1 p-8 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mic className="w-16 h-16 text-primary" />
                    </div>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                      Featured Episode
                    </Badge>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge
                      className={getCategoryColor(featuredPodcast.category)}
                    >
                      {featuredPodcast.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {renderStars(featuredPodcast.rating)}
                      <span className="text-sm font-medium ml-1">
                        {featuredPodcast.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {featuredPodcast.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPodcast.description}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={featuredPodcast.guest.avatar || "/placeholder.svg"}
                        alt={featuredPodcast.guest.name}
                      />
                      <AvatarFallback>
                        {featuredPodcast.guest.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">
                        {featuredPodcast.guest.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {featuredPodcast.guest.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPodcast.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPodcast.publishDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {formatDownloads(featuredPodcast.downloads)}
                      </span>
                    </div>
                    <Button
                      size="lg"
                      onClick={() => handlePlayPause(featuredPodcast.id)}
                      className="flex items-center gap-2"
                    >
                      {currentlyPlaying === featuredPodcast.id && isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                      {currentlyPlaying === featuredPodcast.id && isPlaying
                        ? "Pause"
                        : "Play"}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        <Separator className="mb-12" />

        {/* Filter & Sort Controls */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">All Episodes</h2>
          </div>

          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-6"
          >
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-9">
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
              Showing {filteredAndSortedPodcasts.length} episode
              {filteredAndSortedPodcasts.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* Episodes List */}
        {paginatedPodcasts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <Headphones className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No Episodes Found</h3>
              <p>No podcast episodes match your current filters.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-12">
              {paginatedPodcasts.map((podcast) => (
                <Card
                  key={podcast.id}
                  className={`group transition-all duration-300 hover:shadow-lg border-0 shadow-md ${
                    currentlyPlaying === podcast.id
                      ? "ring-2 ring-primary/20 bg-primary/5"
                      : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-3">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Button
                              size="lg"
                              variant={
                                currentlyPlaying === podcast.id
                                  ? "default"
                                  : "outline"
                              }
                              onClick={() => handlePlayPause(podcast.id)}
                              className="w-12 h-12 rounded-full"
                            >
                              {currentlyPlaying === podcast.id && isPlaying ? (
                                <Pause className="w-5 h-5" />
                              ) : (
                                <Play className="w-5 h-5 ml-0.5" />
                              )}
                            </Button>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                className={getCategoryColor(podcast.category)}
                              >
                                {podcast.category}
                              </Badge>
                              <div className="flex items-center gap-1">
                                {renderStars(podcast.rating)}
                                <span className="text-sm font-medium ml-1">
                                  {podcast.rating}
                                </span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {podcast.title}
                            </h3>
                            <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                              {podcast.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {podcast.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {formatDate(podcast.publishDate)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Download className="w-4 h-4" />
                                {formatDownloads(podcast.downloads)}
                              </span>
                              <span>Hosted by {podcast.host}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage
                              src={podcast.guest.avatar || "/placeholder.svg"}
                              alt={podcast.guest.name}
                            />
                            <AvatarFallback>
                              {podcast.guest.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm">
                              {podcast.guest.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {podcast.guest.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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

        {/* Podcast Stats */}
        <section className="mt-16">
          <Separator className="mb-12" />
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Podcast Statistics</h2>
            <p className="text-muted-foreground">
              Our audio content at a glance
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {mockPodcasts.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Episodes
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {formatDownloads(
                  mockPodcasts.reduce(
                    (sum, podcast) => sum + podcast.downloads,
                    0
                  )
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Downloads
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {categories.length - 1}
              </div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {(
                  mockPodcasts.reduce(
                    (sum, podcast) => sum + podcast.rating,
                    0
                  ) / mockPodcasts.length
                ).toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Audio Player */}
      {currentlyPlaying && (
        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-lg z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src={
                      mockPodcasts.find((p) => p.id === currentlyPlaying)?.guest
                        .avatar || "/placeholder.svg"
                    }
                    alt="Guest"
                  />
                  <AvatarFallback>
                    {mockPodcasts
                      .find((p) => p.id === currentlyPlaying)
                      ?.guest.name.split(" ")
                      .map((n) => n[0])
                      .join("") || ""}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm truncate">
                    {mockPodcasts.find((p) => p.id === currentlyPlaying)?.title}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {
                      mockPodcasts.find((p) => p.id === currentlyPlaying)?.guest
                        .name
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <SkipBack className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handlePlayPause(currentlyPlaying)}
                  size="sm"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </Button>
                <Button variant="ghost" size="sm">
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {formatTime(currentTime)}
                </span>
                <Slider
                  value={[duration ? (currentTime / duration) * 100 : 0]}
                  onValueChange={handleSeek}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={toggleMute}>
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </Button>
                <Slider
                  value={[isMuted ? 0 : volume * 100]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="w-20"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Audio Element */}
      <audio ref={audioRef} preload="metadata" />
    </div>
  );
}
