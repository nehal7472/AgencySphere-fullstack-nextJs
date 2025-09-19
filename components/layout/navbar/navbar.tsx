"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/services", label: "Service" },
    { href: "/projects", label: "Projects" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  return (
    <header className="sticky top-0 bg-green-100 dark:bg-gray-900 transition-colors z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          AGENCY<span className="text-orange-500">SPHERE</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-bold transition-colors group
                  ${
                    isActive
                      ? "text-green-700 dark:text-green-400"
                      : "text-gray-800 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400"
                  }
                `}
              >
                {link.label}
                {/* Underline animation (active stays full width) */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 dark:bg-green-400 transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Buttons & Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop Only Buttons */}
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Register</Button>
          </div>

          {/* Theme Toggle always visible */}
          <ModeToggle />

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm">Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
                {links.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <Link
                      href={link.href}
                      className={`font-bold ${
                        pathname === link.href
                          ? "text-green-700 dark:text-green-400 underline"
                          : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}

                {/* Mobile Login/Register inside dropdown */}
                <DropdownMenuItem>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/register">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
