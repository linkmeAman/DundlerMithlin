import Link from "next/link";
import { ContactInfo } from "@/data/profile";

type ContactPanelProps = {
  contact: ContactInfo;
};

export function ContactPanel({ contact }: ContactPanelProps) {
  return (
    <div className="panel-rounded w-full border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),_transparent_45%)] p-6 sm:p-8 shadow-[0_35px_90px_rgba(8,145,178,0.35)]">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
        Contact
      </p>
      <h3 className="mt-2 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-white text-pretty">
        Let’s build calmer, faster systems.
      </h3>
      <p className="mt-3 text-base text-slate-300 text-pretty">
        {contact.availability}
      </p>
      <div className="mt-6 space-y-3 text-slate-200">
        <Link
          href={contact.gmailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-cyan-100 transition hover:border-cyan-200/40 break-words"
        >
          <span aria-hidden>✉️</span>
          {contact.email}
        </Link>
        <a
          href={`tel:${contact.phone}`}
          className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-slate-200 transition hover:text-white"
        >
          <span aria-hidden>📞</span>
          {contact.phone}
        </a>
        <p className="flex items-center gap-3 text-sm text-slate-300">
          <span aria-hidden>📍</span>
          {contact.location}
        </p>
        <Link
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-100"
        >
          LinkedIn <span aria-hidden>↗</span>
        </Link>
      </div>
    </div>
  );
}
