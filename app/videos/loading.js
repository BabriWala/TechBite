import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function VideosLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Skeleton */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Skeleton className="w-8 h-8" />
            <Skeleton className="h-12 w-64" />
          </div>
          <Skeleton className="h-6 w-96 mx-auto mb-6" />
          <div className="flex items-center justify-center gap-4">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
          </div>
        </header>

        {/* Featured Videos Skeleton */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="w-6 h-6" />
            <Skeleton className="h-8 w-40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <Skeleton className="w-full h-full rounded-t-lg" />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-3 w-20" />
                    <div className="flex gap-3">
                      <Skeleton className="h-3 w-16" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Filters Skeleton */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="w-5 h-5" />
            <Skeleton className="h-6 w-32" />
          </div>
          <Skeleton className="h-10 w-full mb-6" />
          <div className="flex justify-between">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        {/* Videos Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className="border-0 shadow-md">
              <CardHeader className="p-0">
                <AspectRatio ratio={16 / 9}>
                  <Skeleton className="w-full h-full rounded-t-lg" />
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-4/5 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-3 w-20" />
                  <div className="flex gap-3">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
