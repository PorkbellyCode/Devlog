"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();
  const user = session?.user;

  return (
    <header className="bg-card border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Devlog
        </Link>
        <nav className="flex items-center gap-4">
          <ul className="flex space-x-2">
            <li>
              <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>
            </li>
            {/* Other nav links */}
          </ul>
          <ThemeToggle />
          {status === "loading" ? null : user ? (
            <div className="flex items-center gap-2">
              {user.image && (
                <Image
                  src={user.image}
                  alt={user.name ?? ""}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <Button variant="outline" onClick={() => signOut()}>Logout</Button>
            </div>
          ) : (
            <Button onClick={() => signIn()}>Login</Button>
          )}
        </nav>
      </div>
    </header>
  );
}
