import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020617]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {profile.displayYear ?? new Date().getFullYear()} Aman Singh. All rights
          reserved.
        </p>
        <div className="flex flex-wrap gap-4 text-slate-300">
          <Link
            href={profile.contact.gmailComposeUrl}
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Link>
          <Link
            href={profile.contact.linkedin}
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href={profile.contact.resumeUrl}
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
