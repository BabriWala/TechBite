"use client";

import React from "react";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  FileText,
  TrendingUp,
  Clock,
  Filter,
} from "lucide-react";

// Mock search results data
const mockResults = [
  {
    id: 1,
    title:
      "OpenAI Announces Revolutionary AI Model with Enhanced Reasoning Capabilities",
    summary:
      "The latest AI breakthrough promises to transform how we interact with artificial intelligence, offering unprecedented reasoning and problem-solving abilities across multiple domains.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI",
    author: "Sarah Chen",
    publishedDate: "2024-12-28",
    relevanceScore: 95,
  },
  {
    id: 2,
    title: "Apple's AI Integration Strategy: What We Know So Far",
    summary:
      "Apple continues to integrate AI features across its ecosystem, with new developments in Siri, iOS, and macOS that could reshape the user experience significantly.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Apple",
    author: "Mike Rodriguez",
    publishedDate: "2024-12-27",
    relevanceScore: 88,
  },
  {
    id: 3,
    title: "The Future of Artificial Intelligence in Healthcare Technology",
    summary:
      "Medical professionals are increasingly adopting AI tools for diagnosis, treatment planning, and patient care, leading to improved outcomes and efficiency.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Healthcare",
    author: "Dr. Emily Watson",
    publishedDate: "2024-12-26",
    relevanceScore: 82,
  },
  {
    id: 4,
    title: "Google's AI-Powered Search Updates Transform User Experience",
    summary:
      "Recent updates to Google Search incorporate advanced AI algorithms that provide more contextual and accurate results for complex queries.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Google",
    author: "James Park",
    publishedDate: "2024-12-25",
    relevanceScore: 79,
  },
  {
    id: 5,
    title: "Microsoft Copilot AI Assistant Gets Major Upgrade",
    summary:
      "The latest version of Microsoft's AI assistant brings enhanced productivity features and better integration across Office applications and Windows.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Microsoft",
    author: "Lisa Wang",
    publishedDate: "2024-12-24",
    relevanceScore: 76,
  },
  {
    id: 6,
    title: "AI Ethics: Navigating the Challenges of Responsible Development",
    summary:
      "As AI technology advances rapidly, industry leaders discuss the importance of ethical guidelines and responsible development practices.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Ethics",
    author: "David Kim",
    publishedDate: "2024-12-23",
    relevanceScore: 73,
  },
  {
    id: 7,
    title: "Startup Spotlight: AI Companies Revolutionizing Finance",
    summary:
      "Emerging fintech startups are leveraging artificial intelligence to create innovative solutions for banking, investing, and financial planning.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Fintech",
    author: "Rachel Green",
    publishedDate: "2024-12-22",
    relevanceScore: 70,
  },
  {
    id: 8,
    title: "AI in Education: Transforming Learning Experiences",
    summary:
      "Educational institutions worldwide are adopting AI-powered tools to personalize learning, automate grading, and enhance student engagement.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Education",
    author: "Tom Anderson",
    publishedDate: "2024-12-21",
    relevanceScore: 67,
  },
];

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(mockResults);
  const resultsPerPage = 6;

  useEffect(() => {
    const query = searchParams.get("q") || "";
    setSearchTerm(query);
  }, [searchParams]);

  // Filter and sort results based on search term and sort option
  const filteredResults = results.filter(
    (result) =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime()
        );
      case "oldest":
        return (
          new Date(a.publishedDate).getTime() -
          new Date(b.publishedDate).getTime()
        );
      case "relevance":
      default:
        return b.relevanceScore - a.relevanceScore;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedResults.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const paginatedResults = sortedResults.slice(
    startIndex,
    startIndex + resultsPerPage
  );

  // Highlight search terms in text
  const highlightSearchTerm = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark
          key={index}
          className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    // In a real app, you would update the URL and trigger a new search
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              TechDaily
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-8">
        {/* Search Header Section */}
        <section className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Search results for:{" "}
              <span className="text-primary">'{searchTerm || "AI"}'</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              {sortedResults.length}{" "}
              {sortedResults.length === 1 ? "article" : "articles"} found
            </p>
          </div>

          {/* Search Input and Controls */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Refine your search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit">Search</Button>
            </form>

            {/* Sort Controls */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Relevance
                      </div>
                    </SelectItem>
                    <SelectItem value="newest">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Newest First
                      </div>
                    </SelectItem>
                    <SelectItem value="oldest">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Oldest First
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-sm text-muted-foreground">
                Showing {startIndex + 1}-
                {Math.min(startIndex + resultsPerPage, sortedResults.length)} of{" "}
                {sortedResults.length} results
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {sortedResults.length > 0 ? (
          <section className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {paginatedResults.map((result, index) => (
                <Card
                  key={result.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={result.image || "/placeholder.svg"}
                        alt={result.title}
                        width={300}
                        height={200}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{result.category}</Badge>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {result.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(result.publishedDate)}
                            </div>
                          </div>
                        </div>

                        <Link href={`/article/${result.id}`} className="group">
                          <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {highlightSearchTerm(result.title, searchTerm)}
                          </h2>
                        </Link>

                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {highlightSearchTerm(result.summary, searchTerm)}
                        </p>

                        <div className="flex items-center justify-between">
                          <Link href={`/article/${result.id}`}>
                            <Button variant="outline" size="sm">
                              Read More
                            </Button>
                          </Link>
                          {sortBy === "relevance" && (
                            <div className="text-xs text-muted-foreground">
                              Relevance: {result.relevanceScore}%
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Separator className="mb-6" />
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          className="w-10"
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
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

                <div className="text-center mt-4 text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </div>
              </div>
            )}
          </section>
        ) : (
          /* No Results State */
          <section className="max-w-2xl mx-auto text-center py-16">
            <div className="mb-8">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">No results found</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We couldn't find any articles matching your search for{" "}
                <span className="font-semibold">"{searchTerm}"</span>
              </p>
            </div>

            <Card className="p-6 text-left">
              <h3 className="font-semibold mb-4">Try these suggestions:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Check your spelling and try again</li>
                <li>• Use different or more general keywords</li>
                <li>• Try searching for related topics</li>
                <li>• Browse our latest articles instead</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">
                  Popular searches:
                </span>
                {["AI", "iPhone", "Tesla", "Google", "Apple", "Microsoft"].map(
                  (term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchTerm(term);
                        setCurrentPage(1);
                      }}
                    >
                      {term}
                    </Button>
                  )
                )}
              </div>

              <div className="mt-6">
                <Link href="/">
                  <Button>Browse Latest Articles</Button>
                </Link>
              </div>
            </Card>
          </section>
        )}
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
