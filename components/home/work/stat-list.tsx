// components/stat-list.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type StatListProps = {
  icon: React.ReactNode;
  value: string | number;
  label: string;
};

export default function StatList({ icon, value, label }: StatListProps) {
  return (
    <Card className="shadow-md rounded-2xl bg-white dark:bg-gray-800 transition-colors">
      <CardContent className="flex flex-col items-center p-6">
        <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg mb-4">
          {icon}
        </div>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {value}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
      </CardContent>
    </Card>
  );
}
