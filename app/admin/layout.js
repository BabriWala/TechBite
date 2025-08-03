"use client";

import React, { useEffect } from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  FileText,
  Users,
  MessageSquare,
  ImageIcon,
  Search,
  Mail,
  BarChart3,
  Settings,
  Menu,
  X,
  LogOut,
  Bell,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

import { useAuth } from "../context/AuthContext";
import axios from "axios";
import API from "../services/auth";

const sidebarItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/users", icon: Users, label: "Users" },
  { href: "/admin/articles", icon: FileText, label: "Articles" },
  { href: "/admin/categories", icon: Settings, label: "Categories & Tags" },
  { href: "/admin/comments", icon: MessageSquare, label: "Comments" },
  { href: "/admin/media", icon: ImageIcon, label: "Media" },
  { href: "/admin/seo", icon: Search, label: "SEO Settings" },
  { href: "/admin/newsletter", icon: Mail, label: "Newsletter" },
  { href: "/admin/analytics", icon: BarChart3, label: "Analytics" },
];

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // const { user } = useAuth();
  // console.log(user);
  const [user, setUser] = useState(null);

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    console.log("i am here");
    try {
      console.log("i am here");
      setLoading(true);
      const accessToken = localStorage.getItem("accessToken");
      const response = await API.get("/users/profile/me");
      console.log("response");
      console.log(response?.data?.data?.user, "user");
      setUser(response?.data?.data?.user);
      if (response?.data?.data?.user.role !== "admin") {
        return router.push("auth");
      }
    } catch (e) {
      console.log(e, "errro");
    } finally {
      console.log(user);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // useEffect(() => {
  //   console.log(loading, user);
  //   // if (!loading && (!user || user.role !== "admin")) {
  //   //   router.replace("/auth");
  //   // }
  // }, [loading, user]);
  // console.log(user);
  // console.log(loading, user);
  console.log(user, "user");
  if (loading === true) {
    return <h3>Loading......................</h3>;
  } else if (loading === false && user?.role !== "admin") {
    return router.replace("/auth");
  } else if (loading === false && user?.role === "admin") {
    return (
      <html lang="en">
        <body>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Mobile sidebar overlay */}
            {/* {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )} */}

            {/* Sidebar */}
            <div
              className={cn(
                "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              )}
            >
              <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">TN</span>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Tech News Admin
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                  {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                          isActive
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        )}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                {/* User info */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        Admin User
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        admin@technews.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:ml-64">
              {/* Top header */}
              <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="lg:hidden"
                      onClick={() => setSidebarOpen(true)}
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                    <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Admin Panel
                    </h1>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      {theme === "dark" ? (
                        <Sun className="h-4 w-4" />
                      ) : (
                        <Moon className="h-4 w-4" />
                      )}
                    </Button>

                    <Button variant="ghost" size="sm" className="relative">
                      <Bell className="h-4 w-4" />
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                        3
                      </Badge>
                    </Button>

                    <Button variant="ghost" size="sm">
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </header>

              {/* Page content */}
              <main className="p-6">{children}</main>
            </div>
          </div>
        </body>
      </html>
    );
  }

  // if (!user || user.role !== "admin") {
  //   return null;
  // }
}
