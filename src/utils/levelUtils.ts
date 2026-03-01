export interface LevelStyle {
  indicator: string; // bg-color-600
  bg: string; // bg-color-50
  text: string; // text-color-600
  border: string; // border-color-100
  hoverBorder: string; // hover:border-color-200
  button: string; // bg-color-600 hover:bg-color-700 shadow-color-100
  badge: string; // bg-color-100 text-color-600
  icon: string; // text-color-500/600
  ring: string; // ring-color-500
}

export const getLevelStyles = (level: string): LevelStyle => {
  const normalizedLevel = level.toUpperCase();

  switch (normalizedLevel) {
    case "A1":
      return {
        indicator: "bg-blue-600",
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-100",
        hoverBorder: "hover:border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700 shadow-blue-100",
        badge: "bg-blue-100 text-blue-600",
        icon: "text-blue-600",
        ring: "ring-blue-500",
      };
    case "A2":
      return {
        indicator: "bg-orange-500",
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-100",
        hoverBorder: "hover:border-orange-200",
        button: "bg-orange-500 hover:bg-orange-600 shadow-orange-100",
        badge: "bg-orange-100 text-orange-600",
        icon: "text-orange-600",
        ring: "ring-orange-500",
      };
    case "B1":
      return {
        indicator: "bg-purple-600",
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-100",
        hoverBorder: "hover:border-purple-200",
        button: "bg-purple-600 hover:bg-purple-700 shadow-purple-100",
        badge: "bg-purple-100 text-purple-600",
        icon: "text-purple-600",
        ring: "ring-purple-500",
      };
    case "B2":
      return {
        indicator: "bg-rose-600",
        bg: "bg-rose-50",
        text: "text-rose-600",
        border: "border-rose-100",
        hoverBorder: "hover:border-rose-200",
        button: "bg-rose-600 hover:bg-rose-700 shadow-rose-100",
        badge: "bg-rose-100 text-rose-600",
        icon: "text-rose-600",
        ring: "ring-rose-500",
      };
    case "C1":
      return {
        indicator: "bg-indigo-700",
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        border: "border-indigo-100",
        hoverBorder: "hover:border-indigo-200",
        button: "bg-indigo-700 hover:bg-indigo-800 shadow-indigo-100",
        badge: "bg-indigo-100 text-indigo-700",
        icon: "text-indigo-700",
        ring: "ring-indigo-500",
      };
    default:
      return {
        indicator: "bg-slate-600",
        bg: "bg-slate-50",
        text: "text-slate-600",
        border: "border-slate-100",
        hoverBorder: "hover:border-slate-200",
        button: "bg-slate-600 hover:bg-slate-700 shadow-slate-100",
        badge: "bg-slate-100 text-slate-600",
        icon: "text-slate-600",
        ring: "ring-slate-500",
      };
  }
};
