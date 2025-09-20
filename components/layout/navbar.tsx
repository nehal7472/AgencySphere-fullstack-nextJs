import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
<<<<<<< HEAD:components/layout/navbar.tsx
    <header className="sticky top-0 bg-green-100 dark:bg-gray-900 transition-colors z-40 shadow-sm">
=======
    <header className=" sticky top-0  bg-green-100 dark:bg-gray-900 transition-colors z-40">
>>>>>>> parent of a86c610 (Project is ready to submit):components/layout/navbar/navbar.tsx
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          AGENCY<span className="text-orange-500">SPHERE</span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
<<<<<<< HEAD:components/layout/navbar.tsx
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
                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 dark:bg-green-400 transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            );
          })}
=======
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors font-bold"
          >
            Home
          </Link>
          <Link
            href="/team"
            className="text-gray-800 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors font-bold"
          >
            Team
          </Link>
          <Link
            href="/services"
            className="text-gray-800 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors font-bold"
          >
            Service
          </Link>
          <Link
            href="/projects"
            className="text-gray-800 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors font-bold"
          >
            Projects
          </Link>
          <Link
            href="/testimonials"
            className="text-gray-800 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition-colors font-bold"
          >
            Testimonials
          </Link>
>>>>>>> parent of a86c610 (Project is ready to submit):components/layout/navbar/navbar.tsx
        </nav>

        {/* Buttons & Toggle */}
        <div className="flex items-center gap-4">
<<<<<<< HEAD:components/layout/navbar.tsx
          {/* Desktop Only Buttons */}
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>

          {/* Theme Toggle */}
=======
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Register</Button>

>>>>>>> parent of a86c610 (Project is ready to submit):components/layout/navbar/navbar.tsx
          <ModeToggle />

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
<<<<<<< HEAD:components/layout/navbar.tsx
                {links.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
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
                <DropdownMenuItem asChild>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">Register</Link>
                </DropdownMenuItem>
=======
                {["Home", "Team", "Service", "Projects", "Testimonials"].map(
                  (item) => (
                    <DropdownMenuItem key={item}>
                      <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                    </DropdownMenuItem>
                  )
                )}
>>>>>>> parent of a86c610 (Project is ready to submit):components/layout/navbar/navbar.tsx
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
