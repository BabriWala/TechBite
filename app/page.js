import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Smartphone,
  Cpu,
  Gamepad2,
  Star,
  ArrowRight,
  Calendar,
  User,
  TrendingUp,
} from "lucide-react";

export default function TechNewsHomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">TechDaily</h1>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Latest
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Reviews
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                AI
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Mobile
              </Link>
            </nav>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Latest Tech News</h2>

          {/* Main Hero Card */}
          <Card className="mb-8 overflow-hidden">
            <Link href={"/article/1"}>
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA.."
                    alt="Apple Vision Pro Review"
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="destructive">Breaking</Badge>
                    <Badge variant="outline">Apple</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    Apple Vision Pro Gets Major Update with New Spatial
                    Computing Features
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    Apple's latest visionOS 2.0 update brings revolutionary
                    spatial computing capabilities, enhanced hand tracking, and
                    new productivity apps that could change how we work forever.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Sarah Chen
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />2 hours ago
                    </div>
                  </div>
                  <Button className="w-fit">Read Full Story</Button>
                </div>
              </div>
            </Link>
          </Card>

          {/* Latest News Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title:
                  "OpenAI Announces GPT-5 with Revolutionary Reasoning Capabilities",
                author: "Mike Rodriguez",
                time: "4 hours ago",
                tag: "AI",
                image:
                  "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
              },
              {
                title:
                  "Tesla's New Cybertruck Update Includes Full Self-Driving Mode",
                author: "Emma Thompson",
                time: "6 hours ago",
                tag: "Automotive",
                image:
                  "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
              },
              {
                title:
                  "Google Pixel 9 Pro Review: The Best Android Camera Yet?",
                author: "David Park",
                time: "8 hours ago",
                tag: "Mobile",
                image:
                  "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
              },
            ].map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/article/${article.title}`}>
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {article.tag}
                    </Badge>
                    <h4 className="font-semibold mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.time}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Articles */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <Link href={"/article"}>
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-6 pb-4">
              {[
                {
                  title: "The Future of Quantum Computing: What 2024 Holds",
                  author: "Dr. Lisa Wang",
                  date: "Dec 28, 2024",
                  tags: ["Quantum", "Computing"],
                  image:
                    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
                  gradient: "from-purple-500/20 to-transparent",
                },
                {
                  title: "iPhone 16 Pro Max: Complete Performance Analysis",
                  author: "James Wilson",
                  date: "Dec 27, 2024",
                  tags: ["iPhone", "Review"],
                  image:
                    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
                  gradient: "from-blue-500/20 to-transparent",
                },
                {
                  title: "AI Startups That Will Dominate 2025",
                  author: "Rachel Green",
                  date: "Dec 26, 2024",
                  tags: ["AI", "Startups"],
                  image:
                    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
                  gradient: "from-green-500/20 to-transparent",
                },
                {
                  title: "Meta's New VR Headset Changes Everything",
                  author: "Tom Anderson",
                  date: "Dec 25, 2024",
                  tags: ["VR", "Meta"],
                  image:
                    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
                  gradient: "from-orange-500/20 to-transparent",
                },
                {
                  title: "Electric Vehicle Market Predictions for 2025",
                  author: "Anna Martinez",
                  date: "Dec 24, 2024",
                  tags: ["EV", "Automotive"],
                  image:
                    "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?_gl=1*3nnlt0*_ga*MTk1MTMzMjgyNS4xNzM3MDQ1MjQ4*_ga_8JE65Q40S6*czE3NTI0MjQzNTkkbzUzJGcxJHQxNzUyNDI0Mzc1JGo0NCRsMCRoMA..",
                  gradient: "from-red-500/20 to-transparent",
                },
              ].map((article, index) => (
                <Card
                  key={index}
                  className="w-80 flex-shrink-0 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Link href={`/article/${article.title}`}>
                    <div className="relative">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={240}
                        className="w-full h-48 object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${article.gradient}`}
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-black/50 text-white border-0"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Trending Topics */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6" />
            <h2 className="text-3xl font-bold">Trending Topics</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              {
                name: "Artificial Intelligence",
                count: 127,
                color: "bg-purple-500",
              },
              { name: "iPhone 16", count: 89, color: "bg-blue-500" },
              { name: "Tesla Cybertruck", count: 76, color: "bg-green-500" },
              { name: "Quantum Computing", count: 54, color: "bg-orange-500" },
              { name: "ChatGPT", count: 43, color: "bg-red-500" },
              { name: "Apple Vision Pro", count: 38, color: "bg-indigo-500" },
              { name: "Google Pixel", count: 32, color: "bg-yellow-500" },
              { name: "Meta Quest", count: 29, color: "bg-pink-500" },
              { name: "Samsung Galaxy", count: 25, color: "bg-cyan-500" },
              { name: "SpaceX", count: 21, color: "bg-teal-500" },
              { name: "Microsoft Surface", count: 18, color: "bg-violet-500" },
              { name: "Nintendo Switch", count: 15, color: "bg-rose-500" },
            ].map((topic, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <Link href={"/article"}>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-3 h-3 rounded-full ${topic.color}`} />
                    <Badge variant="outline" className="text-xs">
                      {topic.count}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                    {topic.name}
                  </h4>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Preview */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Explore Categories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Gadgets",
                description: "Latest tech gadgets and accessories",
                icon: Gamepad2,
                count: "245 articles",
                color: "text-purple-500",
                category: "gadgets-hardware",
              },
              {
                title: "Mobile",
                description: "Smartphones, tablets, and mobile tech",
                icon: Smartphone,
                count: "189 articles",
                color: "text-blue-500",
                category: "mobile-apps",
              },
              {
                title: "AI & Machine Learning",
                description: "Artificial intelligence and ML news",
                icon: Cpu,
                count: "156 articles",
                color: "text-green-500",
                category: "ai-machine-learning",
              },
              {
                title: "Reviews",
                description: "In-depth product reviews and tests",
                icon: Star,
                count: "298 articles",
                color: "text-orange-500",
                category: "reviews-comparisons",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <Link href={`/category/${category.category}`}>
                  <div className="flex items-center justify-between mb-4">
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.count}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      View All
                    </Button>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 TechDaily. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
