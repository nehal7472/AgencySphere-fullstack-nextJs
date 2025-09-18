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

export default function Navbar() {
  return (
    <header className=" sticky top-0  bg-green-100 dark:bg-gray-900 transition-colors z-40">
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
        </nav>

        {/* Buttons & Toggle */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Register</Button>

          <ModeToggle />

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm">Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
                {["Home", "Team", "Service", "Projects", "Testimonials"].map(
                  (item) => (
                    <DropdownMenuItem key={item}>
                      <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
