"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Send,
  Download,
  Users,
  TrendingUp,
  Eye,
  BarChart3,
} from "lucide-react";

const subscribers = [
  {
    id: 1,
    email: "john.doe@example.com",
    name: "John Doe",
    subscribed: "2024-01-15",
    status: "active",
    source: "website",
  },
  {
    id: 2,
    email: "sarah.smith@example.com",
    name: "Sarah Smith",
    subscribed: "2024-01-14",
    status: "active",
    source: "social",
  },
  {
    id: 3,
    email: "mike.johnson@example.com",
    name: "Mike Johnson",
    subscribed: "2024-01-13",
    status: "unsubscribed",
    source: "website",
  },
];

const campaigns = [
  {
    id: 1,
    subject: "Weekly Tech Roundup - AI Breakthroughs",
    sent: "2024-01-15",
    recipients: 12847,
    opens: 8934,
    clicks: 2341,
    status: "sent",
  },
  {
    id: 2,
    subject: "Breaking: New iPhone 15 Features Revealed",
    sent: "2024-01-12",
    recipients: 12654,
    opens: 9876,
    clicks: 3456,
    status: "sent",
  },
  {
    id: 3,
    subject: "CES 2024 Highlights You Can't Miss",
    sent: "2024-01-10",
    recipients: 12432,
    opens: 7654,
    clicks: 1987,
    status: "sent",
  },
];

export default function NewsletterPage() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const totalSubscribers = subscribers.length;
  const activeSubscribers = subscribers.filter(
    (s) => s.status === "active"
  ).length;
  const avgOpenRate =
    (campaigns.reduce((acc, c) => acc + c.opens / c.recipients, 0) /
      campaigns.length) *
    100;
  const avgClickRate =
    (campaigns.reduce((acc, c) => acc + c.clicks / c.recipients, 0) /
      campaigns.length) *
    100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Newsletter Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage subscribers and send newsletters
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4 sm:mt-0">
              <Send className="h-4 w-4 mr-2" />
              Compose Newsletter
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Compose Newsletter</DialogTitle>
              <DialogDescription>
                Create and send a newsletter to your subscribers
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject Line</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter newsletter subject..."
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your newsletter content..."
                  className="mt-1 min-h-[200px]"
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium">Recipients</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {activeSubscribers} active subscribers
                  </p>
                </div>
                <Badge>{activeSubscribers}</Badge>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Save Draft</Button>
              <Button>Send Newsletter</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Subscribers
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {totalSubscribers.toLocaleString()}
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Active Subscribers
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {activeSubscribers.toLocaleString()}
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Avg. Open Rate
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {avgOpenRate.toFixed(1)}%
                </p>
              </div>
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600">
                <Eye className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Avg. Click Rate
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {avgClickRate.toFixed(1)}%
                </p>
              </div>
              <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600">
                <BarChart3 className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="subscribers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="subscribers" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Subscribers ({subscribers.length})</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Subscribed</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Source</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscribers.map((subscriber) => (
                      <TableRow key={subscriber.id}>
                        <TableCell className="font-medium">
                          {subscriber.email}
                        </TableCell>
                        <TableCell>{subscriber.name}</TableCell>
                        <TableCell>{subscriber.subscribed}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              subscriber.status === "active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {subscriber.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{subscriber.source}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Sent Date</TableHead>
                      <TableHead>Recipients</TableHead>
                      <TableHead>Opens</TableHead>
                      <TableHead>Clicks</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {campaigns.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium">
                          {campaign.subject}
                        </TableCell>
                        <TableCell>{campaign.sent}</TableCell>
                        <TableCell>
                          {campaign.recipients.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{campaign.opens.toLocaleString()}</span>
                            <span className="text-sm text-gray-500">
                              {(
                                (campaign.opens / campaign.recipients) *
                                100
                              ).toFixed(1)}
                              %
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{campaign.clicks.toLocaleString()}</span>
                            <span className="text-sm text-gray-500">
                              {(
                                (campaign.clicks / campaign.recipients) *
                                100
                              ).toFixed(1)}
                              %
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            {campaign.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      This Month
                    </span>
                    <span className="font-medium">+234 subscribers</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Last Month
                    </span>
                    <span className="font-medium">+189 subscribers</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Growth Rate
                    </span>
                    <span className="font-medium text-green-600">+23.8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Best Open Rate
                    </span>
                    <span className="font-medium">78.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Best Click Rate
                    </span>
                    <span className="font-medium">27.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Unsubscribe Rate
                    </span>
                    <span className="font-medium">1.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
