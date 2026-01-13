"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Gamepad2,
  TrendingUp,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Backlog",
    href: "/backlog",
    icon: Gamepad2,
  },
  {
    title: "Sugestões",
    href: "/suggestions",
    icon: TrendingUp,
  },
  {
    title: "Configurações",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h border-r bg-muted/40 p-4 flex flex-col">
      <div className="mb-6">
        <h2 className="text-lg font-semibold px-2">Games Backlog</h2>
      </div>

      <Separator className="mb-4" />

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <Separator className="my-4" />

      <Button variant="ghost" className="justify-start gap-3">
        <LogOut className="h-4 w-4" />
        Sair
      </Button>
    </aside>
  );
}
