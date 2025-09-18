"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string; // if no href, it's the current page
}

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
}

export default function PageHeader({
  title,
  breadcrumbs = [],
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "w-full py-8 px-4 md:px-8 rounded-lg",
        "bg-gray-50 dark:bg-gray-900", // background switches on dark
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="mt-2 flex items-center text-sm space-x-2">
            {breadcrumbs.map((crumb, i) => (
              <div key={i} className="flex items-center">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {crumb.label}
                  </span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-500" />
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
