import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  iconBgColor?: string;
  iconTextColor?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  onClick,
  iconBgColor = "bg-indigo-100",
  iconTextColor = "text-indigo-600",
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4 cursor-pointer hover:border-indigo-200 transition-colors group h-full"
    >
      <div
        className={`p-3 ${iconBgColor} ${iconTextColor} rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors flex-shrink-0`}
      >
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500 font-medium">{description}</p>
      </div>
    </motion.div>
  );
}
