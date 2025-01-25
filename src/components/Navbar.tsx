"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { setTheme } = useTheme();
  const { isSignedIn } = useUser();
  const [mounted, setMounted] = useState(false);

  // Ensure dynamic logic only runs after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full flex justify-between px-4 py-1 items-center bg-slate-900 sticky top-0 z-50 mb-4">
      <div>
        <Link href="/" className="flex items-center gap-0">
          <img src="/logo.png" alt="logo" className="md:w-20 w-16 pointer-events-none select-none" />
          <h1 className="text-center hidden md:block text-4xl self-end mb-4 font-bold text-white">
            Music io
          </h1>
        </Link>
      </div>
      <div className="flex gap-2 items-center justify-between">
        {mounted && (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="px-3 bg-transparent rounded-full sm:rounded-lg text-white sm:bg-background sm:text-foreground">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {isSignedIn ? (
              <div className="flex gap-3 items-center">
                <Button
                  size="sm"
                  variant="default"
                  className="bg-green-600 outline-none"
                >
                  Upload Your Song
                </Button>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            ) : (
              <SignedOut>
                <div className="text-white bg-green-600 rounded-lg sm:py-1.5 sm:px-6 py-1 px-3">
                  <SignInButton />
                </div>
              </SignedOut>
            )}
          </>
        )}
      </div>
    </div>
  );
}
