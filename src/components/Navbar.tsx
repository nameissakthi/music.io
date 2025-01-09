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

export default function Navbar() {
  const { setTheme } = useTheme();
  const { isSignedIn } = useUser();
  const [mounted, setMounted] = useState(false);

  // Ensure dynamic logic only runs after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full flex justify-between px-4 py-1 items-center bg-slate-900/90 mb-1">
      <div className="flex items-center gap-0">
        <img src="/logo.png" alt="logo" className="w-20" />
        <h1 className="text-center text-4xl self-end mb-4 font-bold text-white">
          Music io
        </h1>
      </div>
      <div className="flex gap-2 items-center justify-between">
        {mounted && (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="px-3">
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

            {/* User auth buttons */}
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
                <SignInButton />
              </SignedOut>
            )}
          </>
        )}
      </div>
    </div>
  );
}
