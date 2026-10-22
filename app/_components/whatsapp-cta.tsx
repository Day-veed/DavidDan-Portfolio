import Link from "next/link";
import { site } from "../_lib/site";
import { Icon } from "./icon";

/** Contact section: sends every enquiry straight to David's WhatsApp. */
export function WhatsAppCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-background px-margin-mobile py-space-2xl md:px-margin-desktop"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-4 block text-label-caps uppercase tracking-[0.25em] text-secondary">
          Let&apos;s Talk
        </span>
        <h2 className="font-display text-display-hero-mobile tracking-tight text-primary md:text-headline-lg lg:text-display-hero">
          Ready to Capture Your Story?
        </h2>
        <p className="mt-6 max-w-xl text-body-lg text-on-surface-variant">
          Whether it&apos;s your wedding, a milestone birthday or a big event,
          send a message on WhatsApp with your date and venue, and let&apos;s
          start planning.
        </p>

        <Link
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex items-center gap-4 rounded-xl border border-outline-variant/60 bg-surface-container-high px-8 py-4 text-label-caps uppercase tracking-widest text-primary shadow-xl transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-whatsapp/50 hover:shadow-[0_10px_40px_-12px] hover:shadow-whatsapp/35 focus-visible:-translate-y-0.5 focus-visible:border-whatsapp/50 focus-visible:outline-none active:translate-y-0"
        >
          <Icon
            name="chat"
            className="size-5 text-on-surface-variant transition-colors duration-500 group-hover:text-whatsapp"
          />
          <span>Chat on WhatsApp</span>
          <Icon
            name="northEast"
            className="size-4 text-secondary transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        <div className="mt-10 flex w-full max-w-xl flex-col items-center justify-center gap-3 border-t border-outline-variant/20 pt-6 text-label-meta text-outline sm:flex-row sm:gap-6">
          <span>Weddings · Birthdays · Events</span>
          <span className="hidden text-outline-variant sm:inline">|</span>
          <span>
            {site.city} &amp; Nationwide · December Dates Fill Fast
          </span>
        </div>
      </div>
    </section>
  );
}
