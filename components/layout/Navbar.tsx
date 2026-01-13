"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "@/components/layout/Theme-toggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-3xl font-bold">
          Game <span className="text-highlight text-red-500">Backlog</span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button variant="outline" asChild>
          <Link
            href="/login"
            className={cn(pathname === "/login" && "bg-muted")}
          >
            Login
          </Link>
        </Button>

        <Button asChild>
          <Link href="/register">Cadastrar</Link>
        </Button>
      </div>
    </nav>
  );
}
