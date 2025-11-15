"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    const noHash = href.split("#")[0];
    return pathname === href || (href.includes("#") && pathname === noHash);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#030712]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-white"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/40 bg-gradient-to-br from-cyan-500/40 to-cyan-700/30 text-xl">
            AS
          </span>
          <span className="hidden sm:inline">Aman Singh</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={!link.href.includes("#")}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={cn(
                "rounded-full px-3 py-2 transition hover:text-white",
                isActive(link.href) && "bg-white/10 text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={profile.contact.gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-full border border-cyan-300/80 bg-cyan-500/10 px-4 py-2 text-cyan-100 transition hover:bg-cyan-500/20"
          >
            Email
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-[#030712]/95 px-5 py-4 text-sm text-slate-200 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={!link.href.includes("#")}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/5 px-4 py-3"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={profile.contact.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-cyan-300/50 bg-cyan-600/20 px-4 py-3 text-center text-cyan-50"
              onClick={() => setOpen(false)}
            >
              Email Aman
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
