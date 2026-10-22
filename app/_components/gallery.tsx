"use client";

import Image from "next/image";
import {
  createContext,
  use,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  archiveFilters,
  archiveWorks,
  type Category,
  type FeaturedWork,
  type LightboxItem,
} from "../_lib/works";
import { site } from "../_lib/site";
import { Icon } from "./icon";

type GalleryContextValue = {
  openArchive: () => void;
  openLightbox: (item: LightboxItem) => void;
};

const GalleryContext = createContext<GalleryContextValue | null>(null);

function useGallery() {
  const ctx = use(GalleryContext);
  if (!ctx) throw new Error("useGallery must be used inside <GalleryProvider>");
  return ctx;
}

/** Owns the archive overlay and lightbox so any section can open them. */
export function GalleryProvider({ children }: { children: ReactNode }) {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  const anyOpen = archiveOpen || lightboxOpen;

  useEffect(() => {
    if (!anyOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [anyOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (lightboxOpen) setLightboxOpen(false);
      else setArchiveOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen]);

  const value: GalleryContextValue = {
    openArchive: () => setArchiveOpen(true),
    openLightbox: (item) => {
      setLightboxItem(item);
      setLightboxOpen(true);
    },
  };

  return (
    <GalleryContext value={value}>
      {children}
      <ArchiveView open={archiveOpen} onClose={() => setArchiveOpen(false)} />
      <Lightbox
        open={lightboxOpen}
        item={lightboxItem}
        onClose={() => setLightboxOpen(false)}
        onInquire={() => {
          setLightboxOpen(false);
          setArchiveOpen(false);
        }}
      />
    </GalleryContext>
  );
}

function overlayState(open: boolean) {
  return open
    ? "visible opacity-100"
    : "invisible pointer-events-none opacity-0";
}

export function OpenArchiveButton({
  className,
  title,
  children,
}: {
  className?: string;
  title?: string;
  children: ReactNode;
}) {
  const { openArchive } = useGallery();
  return (
    <button type="button" className={className} title={title} onClick={openArchive}>
      {children}
    </button>
  );
}

export function FeaturedCard({
  work,
  sizes,
}: {
  work: FeaturedWork;
  sizes: string;
}) {
  const { openLightbox } = useGallery();
  return (
    <button
      type="button"
      onClick={() => openLightbox(work)}
      className={`${work.layout} group block cursor-pointer text-left`}
    >
      <div
        className={`relative ${work.aspect} overflow-hidden rounded-xs border border-outline-variant/30 bg-surface-container-lowest`}
      >
        <Image
          src={work.src}
          alt={`${work.title} — ${work.series}`}
          fill
          sizes={sizes}
          className="img-zoom object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-xs border border-outline-variant/30 bg-surface/85 px-2.5 py-1 text-label-caps uppercase text-secondary backdrop-blur-md">
            {work.label}
          </span>
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <div className="flex items-center gap-2 text-label-caps uppercase tracking-widest text-primary">
            <Icon name="fullscreen" className="size-4" />
            <span>View Photo</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-display text-headline-sm tracking-tight text-primary transition-colors group-hover:text-secondary">
            {work.title}
          </h3>
          <p className="mt-1 text-label-meta text-on-surface-variant">
            {work.subtitle}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <span className="block text-label-caps uppercase text-secondary">
            {work.kind}
          </span>
          <span className="text-label-meta uppercase text-outline">
            {work.date}
          </span>
        </div>
      </div>
    </button>
  );
}

function ArchiveView({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { openLightbox } = useGallery();
  const [filter, setFilter] = useState<Category | "all">("all");
  const works =
    filter === "all"
      ? archiveWorks
      : archiveWorks.filter((w) => w.category === filter);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full gallery"
      inert={!open}
      className={`fixed inset-0 z-50 overflow-y-auto bg-background transition-[opacity,visibility] duration-300 ${overlayState(open)}`}
    >
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-outline-variant/30 bg-surface/90 px-margin-mobile py-4 backdrop-blur-md md:px-margin-desktop">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="group flex items-center gap-2 text-label-caps uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
          >
            <Icon
              name="arrowLeft"
              className="size-5 transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Home</span>
          </button>
          <span className="hidden text-outline-variant sm:inline">|</span>
          <span className="hidden font-display text-headline-sm text-primary lg:inline">
            FULL GALLERY · {site.studio.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-label-meta text-secondary sm:inline">
            {archiveWorks.length} PHOTOS
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary"
          >
            <Icon name="close" className="size-6" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-margin-mobile py-12 md:px-margin-desktop">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-outline-variant/20 pb-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-headline-lg tracking-tight text-primary">
              The Full Gallery
            </h2>
            <p className="mt-1 text-body-sm text-on-surface-variant">
              Weddings, birthdays and events from Abuja and beyond. Tap any
              photo to see it larger.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {archiveFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                aria-pressed={filter === f.value}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  filter === f.value
                    ? "bg-secondary text-on-secondary-fixed"
                    : "border border-outline-variant/30 bg-surface-container text-on-surface-variant hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <button
              key={work.number}
              type="button"
              onClick={() => openLightbox(work)}
              className="group block cursor-pointer text-left"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-outline-variant/30 bg-surface-container-lowest">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`img-zoom object-cover ${work.filter ?? ""}`}
                />
                <span className="absolute top-3 left-3 border border-outline-variant/30 bg-background/80 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                  #{work.number} · {work.tag}
                </span>
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-base text-primary transition-colors group-hover:text-secondary">
                    {work.name}
                  </p>
                  <p className="text-xs text-outline">{work.meta}</p>
                </div>
                <span className="shrink-0 text-xs font-semibold uppercase text-secondary">
                  {work.year}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-outline-variant/20 pt-8 sm:flex-row">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-label-caps uppercase tracking-widest text-primary transition-colors hover:text-secondary"
          >
            <Icon name="arrowLeft" className="size-4" />
            <span>Back to Home</span>
          </button>
          <span className="text-center text-label-meta text-outline">
            Every gallery is hand-edited and delivered online · Prints &amp;
            albums available
          </span>
        </div>
      </div>
    </div>
  );
}

function Lightbox({
  open,
  item,
  onClose,
  onInquire,
}: {
  open: boolean;
  item: LightboxItem | null;
  onClose: () => void;
  onInquire: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item?.title ?? "Photo viewer"}
      inert={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className={`fixed inset-0 z-[60] flex flex-col justify-between bg-background/95 p-4 backdrop-blur-xl transition-[opacity,visibility] duration-300 md:p-8 ${overlayState(open)}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-display text-headline-sm text-primary">
            {item?.title}
          </h4>
          <p className="mt-0.5 text-label-meta text-secondary">
            {item?.series}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="rounded-full p-3 text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary"
        >
          <Icon name="close" className="size-7" />
        </button>
      </div>

      <div
        className="relative flex-1 py-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {item && (
          <Image
            key={item.src + item.title}
            src={item.src}
            alt={item.title}
            fill
            sizes="90vw"
            className="object-contain"
          />
        )}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/30 pt-4 text-center sm:flex-row sm:text-left">
        <span className="text-label-caps uppercase tracking-wider text-on-surface-variant">
          {item?.details}
        </span>
        <a
          href="#contact"
          onClick={onInquire}
          className="rounded-lg bg-primary px-4 py-2 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-secondary"
        >
          Book a Shoot Like This
        </a>
      </div>
    </div>
  );
}
