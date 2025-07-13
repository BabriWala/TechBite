import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TagLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center space-x-2 mb-6">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Skeleton className="h-16 w-16 rounded-xl" />
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-8 w-80" />
              </div>
              <Skeleton className="h-5 w-full max-w-2xl" />
              <Skeleton className="h-5 w-3/4 max-w-xl" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Skeleton className="h-9 w-24" />
          </div>
        </div>

        {/* Controls Skeleton */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <Skeleton className="h-10 w-full lg:w-80" />
          <Skeleton className="h-10 w-full sm:w-48" />
        </div>

        {/* Article Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="border-0 shadow-md">
              <CardHeader className="p-0">
                <Skeleton className="w-full h-48 rounded-t-lg" />
              </CardHeader>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-4" />
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <Skeleton className="h-3 w-12" />
                </div>
                <div className="flex gap-1">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-12" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
