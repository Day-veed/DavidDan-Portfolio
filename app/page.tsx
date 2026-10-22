import Image from "next/image";
import {
  FeaturedCard,
  GalleryProvider,
  OpenArchiveButton,
} from "./_components/gallery";
import { Icon } from "./_components/icon";
import { CopyrightYear } from "./_components/copyright-year";
import { StudioClock } from "./_components/studio-clock";
import { WhatsAppCta } from "./_components/whatsapp-cta";
import { site } from "./_lib/site";
import { archiveWorks, featuredWorks, images } from "./_lib/works";

const navLink =
  "text-label-caps uppercase tracking-widest text-on-surface-variant transition-colors duration-300 hover:text-primary";

const services = [
  { name: "Weddings", note: "White & Traditional" },
  { name: "Birthdays", note: "Shoots & Parties" },
  { name: "Events", note: "Corporate & Social" },
  { name: "Portraits", note: "Family & Pre-Wedding" },
];

const highlights = [
  { value: "48 hrs", text: "Sneak peeks after your event" },
  { value: "2–3 wks", text: "Full edited gallery, delivered online" },
  { value: `Since ${site.startedYear}`, text: `Capturing celebrations in ${site.city}` },
];

export default function Home() {
  return (
    <GalleryProvider>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <About />
        <WhatsAppCta />
      </main>
      <Footer />
    </GalleryProvider>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 z-40 flex w-full items-center justify-between border-b border-outline-variant/30 bg-surface/85 px-margin-mobile py-4 backdrop-blur-md md:px-margin-desktop">
      <a
        href="#hero"
        className="flex items-center gap-2 font-display text-headline-sm uppercase text-primary"
      >
        <span className="tracking-[0.25em]">{site.name}</span>
        <span className="hidden font-sans text-xs tracking-normal text-on-surface-variant/40 lg:inline">
          | PHOTOGRAPHY · {site.city.toUpperCase()}
        </span>
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        <a
          href="#showcase"
          className="border-b border-secondary pb-1 text-label-caps uppercase tracking-widest text-secondary"
        >
          Gallery
        </a>
        <OpenArchiveButton className={navLink}>Full Gallery</OpenArchiveButton>
        <a href="#about" className={navLink}>
          About
        </a>
        <a href="#contact" className={navLink}>
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-label-caps uppercase tracking-widest text-background shadow-sm transition-all duration-300 hover:bg-primary-container active:scale-[0.99] sm:inline-flex"
        >
          Book a Session
        </a>
        <OpenArchiveButton
          className="p-2 text-primary md:hidden"
          title="Open the full gallery"
        >
          <Icon name="menu" className="size-6" />
        </OpenArchiveButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden border-b border-outline-variant/30 px-margin-mobile pt-28 pb-16 md:px-margin-desktop"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={images.birthdayGlam}
          alt="Guest in an evening gown at a black-tie birthday"
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="scale-[1.01] object-cover object-top brightness-[0.7] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/50" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end">
        <div className="flex flex-col justify-between gap-8 border-b border-outline-variant/30 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-xs border border-outline-variant/30 bg-surface-container-lowest/80 px-3 py-1 text-label-caps uppercase tracking-[0.25em] text-secondary backdrop-blur-md">
              Weddings · Birthdays · Events · {site.city}, Nigeria
            </span>
            <h1 className="font-display text-display-hero-mobile text-primary drop-shadow-md md:text-display-hero">
              YOUR MOMENTS, BEAUTIFULLY KEPT
            </h1>
            <p className="mt-4 max-w-xl text-body-lg text-on-surface-variant">
              {site.studio} — Wedding, birthday and event photography that
              keeps the laughter, the colour and the people who made your day.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-3 lg:items-end">
            <div className="flex items-center gap-2 rounded-xs border border-outline-variant/40 bg-surface-container/70 px-3.5 py-1.5 backdrop-blur-md">
              <span className="size-2 animate-pulse rounded-full bg-secondary" />
              <span className="text-label-meta uppercase tracking-wider text-primary tabular-nums">
                <StudioClock />
              </span>
            </div>
            <p className="text-label-caps uppercase tracking-widest text-on-surface-variant">
              Now Booking · Abuja &amp; Nationwide
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-6 text-on-surface-variant">
          <div className="flex gap-6 text-label-meta">
            <span className="text-primary">01 / PORTFOLIO</span>
            <span className="hidden text-on-surface-variant/60 sm:inline">
              WEDDINGS · BIRTHDAYS · EVENTS
            </span>
            <span className="hidden text-on-surface-variant/60 md:inline">
              ABUJA · LAGOS · PORT HARCOURT · ANYWHERE
            </span>
          </div>
          <a
            href="#showcase"
            className="group flex items-center gap-2 text-label-caps uppercase tracking-widest text-primary transition-colors hover:text-secondary"
          >
            <span>See Recent Work</span>
            <Icon
              name="arrowDown"
              className="size-5 transition-transform group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section
      id="showcase"
      className="scroll-mt-20 bg-background px-margin-mobile py-space-2xl md:px-margin-desktop"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-outline-variant/20 pb-4 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block text-label-caps uppercase tracking-[0.25em] text-secondary">
              Recent Work
            </span>
            <h2 className="font-display text-headline-lg tracking-tight text-primary">
              Moments We&apos;ve Kept
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="max-w-sm text-body-md text-on-surface-variant">
              A few favourites from recent weddings, birthdays and events: the
              big moments, the small details and everything in between.
            </p>
            <OpenArchiveButton className="hidden shrink-0 items-center gap-2 rounded-xs border border-secondary/40 px-4 py-2 text-label-caps uppercase tracking-widest text-secondary transition-colors hover:text-primary sm:inline-flex">
              <span>View All {archiveWorks.length}</span>
              <Icon name="arrowRight" className="size-4" />
            </OpenArchiveButton>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 lg:gap-12">
          {featuredWorks.map((work) => (
            <FeaturedCard
              key={work.title}
              work={work}
              sizes={
                work.layout.includes("col-span-7")
                  ? "(min-width: 768px) 58vw, 100vw"
                  : "(min-width: 768px) 42vw, 100vw"
              }
            />
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center justify-center border-t border-outline-variant/20 pt-12 text-center">
          <p className="mb-4 text-label-caps uppercase tracking-[0.25em] text-on-surface-variant">
            There&apos;s More Where These Came From
          </p>
          <OpenArchiveButton className="group inline-flex items-center gap-4 rounded-xl border border-outline-variant/40 bg-surface-container-low px-8 py-4 shadow-xl transition-all duration-300 hover:border-secondary hover:bg-surface-container-high active:scale-95">
            <span className="text-label-caps uppercase tracking-widest text-primary transition-colors group-hover:text-secondary">
              View the Full Gallery
            </span>
            <Icon
              name="arrowRight"
              className="size-5 text-secondary transition-transform group-hover:translate-x-1.5"
            />
          </OpenArchiveButton>
          <span className="mt-3 text-label-meta text-outline">
            {archiveWorks.length} photos · Weddings, birthdays, events &amp;
            portraits
          </span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-outline-variant/30 bg-surface-container-lowest px-margin-mobile py-space-2xl md:px-margin-desktop"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-5">
          <div className="relative rounded-xs border border-outline-variant/30 bg-surface-container-low p-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xs">
              <Image
                src={images.photographer}
                alt={`${site.name} in the studio`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover contrast-[1.05]"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 hidden rounded-lg border border-outline-variant/40 bg-surface p-4 shadow-2xl sm:block">
              <p className="text-label-caps uppercase tracking-widest text-secondary">
                Based In
              </p>
              <p className="mt-1 text-label-meta text-primary">{site.base}</p>
              <p className="text-label-meta text-outline">
                Available to Travel Nationwide
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <span className="mb-3 text-label-caps uppercase tracking-[0.25em] text-secondary">
            Wedding, Birthday &amp; Event Photographer
          </span>
          <h2 className="mb-6 font-display text-headline-lg tracking-tight text-primary">
            {site.name}
          </h2>
          <div className="space-y-4 text-body-lg text-on-surface-variant">
            <p>
              Hi, I&apos;m {site.name.split(" ")[0]}, a photographer based in{" "}
              {site.city}. Since {site.startedYear} I&apos;ve photographed
              weddings, birthdays and celebrations of every size, from intimate
              introductions in the family compound to five-hundred-guest
              receptions that go on until the very last song.
            </p>
            <p>
              I work quietly in the background, so you can enjoy your day
              while I catch the moments that matter: the vows, the spraying,
              the first dance and the aunties who own the dance floor. You get
              beautifully edited photos you&apos;ll want to share, print and
              look back on for years.
            </p>
          </div>

          <div className="mt-8 border-t border-outline-variant/30 pt-8">
            <span className="mb-4 block text-label-caps uppercase tracking-widest text-outline">
              What I Cover
            </span>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {services.map((c) => (
                <div
                  key={c.name}
                  className="rounded-lg border border-outline-variant/20 bg-surface p-3 text-center transition-colors hover:border-secondary"
                >
                  <span className="block font-display text-sm font-medium uppercase tracking-widest text-primary">
                    {c.name}
                  </span>
                  <span className="text-[0.6rem] font-semibold tracking-[0.18em] text-outline">
                    {c.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-outline-variant/20 pt-6 text-label-meta text-on-surface-variant">
            {highlights.map((h) => (
              <div key={h.value}>
                <span className="font-bold text-primary">{h.value}</span> —{" "}
                {h.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest px-margin-mobile py-space-2xl text-on-surface-variant md:px-margin-desktop">
      <div className="mx-auto mb-12 flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <span className="block font-display text-headline-md uppercase tracking-widest text-primary">
            {site.name}
          </span>
          <p className="mt-1 text-body-sm text-outline">
            {site.studio} · {site.base} · Available Nationwide
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-label-caps uppercase tracking-widest md:gap-8">
          <OpenArchiveButton className="transition-colors duration-200 hover:text-on-surface">
            Full Gallery
          </OpenArchiveButton>
          <a
            href="#showcase"
            className="transition-colors duration-200 hover:text-on-surface"
          >
            Recent Work
          </a>
          <a
            href="#about"
            className="transition-colors duration-200 hover:text-on-surface"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-secondary underline underline-offset-4"
          >
            Book Now
          </a>
        </nav>

        <a
          href="#hero"
          className="group inline-flex items-center gap-2 text-label-meta text-outline transition-colors hover:text-secondary"
        >
          <span>TOP</span>
          <Icon
            name="arrowUp"
            className="size-4 transition-transform group-hover:-translate-y-1"
          />
        </a>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-outline-variant/20 pt-6 text-xs text-outline sm:flex-row">
        <p>
          © <CopyrightYear /> {site.studio.toUpperCase()}. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4">
          <span>INSTAGRAM: {site.instagram.toUpperCase()}</span>
          <span>·</span>
          <span>
            {site.timeZoneLabel} (GMT+1) · {site.city.toUpperCase()}
          </span>
        </div>
      </div>
    </footer>
  );
}
