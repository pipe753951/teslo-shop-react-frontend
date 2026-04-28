import { cn } from "@/lib/utils";
import React, { type JSX } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: JSX.Element;
  color: string;
}

const AdminStatCard: React.FC<StatCardProps> = function ({
  title,
  value,
  change,
  changeType,
  icon,
  color,
}) {
  const changeColor = {
    positive: "text-green-600 bg-green-50",
    negative: "text-red-600 bg-red-50",
    neutral: "text-gray-600 bg-gray-50",
  }[changeType];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <div
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${changeColor}`}
          >
            {change}
          </div>
        </div>
        <div className={cn("p-3 rounded-lg", color, "text-white")}>{icon}</div>
      </div>
    </div>
  );
};

export default AdminStatCard;
