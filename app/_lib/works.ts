// Placeholder imagery from the Stitch design. Replace these with real event
// photos; the keys describe what each image is used for on the page.
export const images = {
  birthdayGlam:
    "/images/cinematic_high_fashion_editorial_portrait_photography_in_dramatic_chiaroscuro/screen.png",
  venue:
    "/images/striking_minimalist_architectural_photography_brutalist_concrete_curves_against/screen.png",
  portrait:
    "/images/moody_fine_art_portrait_photography_of_an_elegant_subject_in_dramatic_side/screen.png",
  preWedding: "/images/atlantic_coast_at_dusk/screen.jpg",
  weddingCar:
    "/images/minimalist_high_end_automotive_photography_luxury_sleek_black_hypercar_in_moody/screen.png",
  decor:
    "/images/intimate_fine_art_still_life_photography_of_delicate_botanical_dried_flowers_in/screen.png",
  photographer:
    "/images/editorial_portrait_of_a_distinguished_creative_photographer_in_minimalist_dark/screen.png",
} as const;

/** What the lightbox needs to show a photo. */
export type LightboxItem = {
  src: string;
  title: string;
  series: string;
  /** Where and when, e.g. "Maitama, Abuja · March 2025". */
  details: string;
};

export type Category = "weddings" | "birthdays" | "events" | "portraits";

export type FeaturedWork = LightboxItem & {
  label: string;
  subtitle: string;
  /** Short event type shown beside the title, e.g. "Wedding". */
  kind: string;
  date: string;
  /** Grid placement and aspect ratio for the asymmetric showcase. */
  layout: string;
  aspect: string;
};

export const featuredWorks: FeaturedWork[] = [
  {
    src: images.birthdayGlam,
    title: "Black-Tie Birthday",
    series: "Pre-Birthday Glam Shoot",
    details: "Maitama, Abuja · March 2025",
    label: "01 — Birthday",
    subtitle: "Pre-Birthday Glam Shoot · Maitama",
    kind: "Birthday",
    date: "March 2025",
    layout: "md:col-span-7",
    aspect: "aspect-[4/5]",
  },
  {
    src: images.venue,
    title: "The Venue at Golden Hour",
    series: "Venue & Décor Coverage",
    details: "Central Area, Abuja · November 2024",
    label: "02 — Events",
    subtitle: "Venue Coverage Before the Guests Arrive",
    kind: "Event",
    date: "Nov 2024",
    layout: "md:col-span-5 md:mt-16",
    aspect: "aspect-[4/3] md:aspect-[3/4]",
  },
  {
    src: images.portrait,
    title: "Ifeoma at Forty",
    series: "Milestone Birthday Portrait Session",
    details: "David Dan Studio, Abuja · June 2025",
    label: "03 — Portraits",
    subtitle: "Milestone Birthday Portrait Session",
    kind: "Portrait",
    date: "June 2025",
    layout: "md:col-span-5",
    aspect: "aspect-[3/4]",
  },
  {
    src: images.preWedding,
    title: "Before the Vows",
    series: "Pre-Wedding Shoot",
    details: "Lekki Beach, Lagos · October 2024",
    label: "04 — Pre-Wedding",
    subtitle: "Sunset Pre-Wedding Shoot · Lekki Beach",
    kind: "Pre-Wedding",
    date: "Oct 2024",
    layout: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    src: images.weddingCar,
    title: "The Grand Arrival",
    series: "Wedding Day Coverage",
    details: "Asokoro, Abuja · December 2024",
    label: "05 — Wedding",
    subtitle: "The Bride's Car Pulls Up · Asokoro",
    kind: "Wedding",
    date: "Dec 2024",
    layout: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    src: images.decor,
    title: "Reception Details",
    series: "Wedding Décor & Florals",
    details: "Wuse II, Abuja · December 2024",
    label: "06 — Details",
    subtitle: "Table Florals at the Reception",
    kind: "Wedding",
    date: "Dec 2024",
    layout: "md:col-span-5",
    aspect: "aspect-square",
  },
];

export type ArchiveWork = LightboxItem & {
  number: string;
  category: Category;
  tag: string;
  name: string;
  meta: string;
  year: string;
  /** Extra filter so variants of the same frame read differently. */
  filter?: string;
};

export const archiveWorks: ArchiveWork[] = [
  {
    number: "001",
    category: "birthdays",
    tag: "Birthday",
    src: images.birthdayGlam,
    name: "Black-Tie Birthday",
    title: "Black-Tie Birthday",
    series: "Pre-Birthday Glam Shoot",
    details: "Maitama, Abuja · March 2025",
    meta: "Maitama, Abuja",
    year: "2025",
  },
  {
    number: "002",
    category: "events",
    tag: "Event",
    src: images.venue,
    name: "The Venue at Golden Hour",
    title: "The Venue at Golden Hour",
    series: "Venue & Décor Coverage",
    details: "Central Area, Abuja · November 2024",
    meta: "Central Area, Abuja",
    year: "2024",
  },
  {
    number: "003",
    category: "portraits",
    tag: "Portrait",
    src: images.portrait,
    name: "Ifeoma at Forty",
    title: "Ifeoma at Forty",
    series: "Milestone Birthday Portrait Session",
    details: "David Dan Studio, Abuja · June 2025",
    meta: "Studio Session, Abuja",
    year: "2025",
  },
  {
    number: "004",
    category: "weddings",
    tag: "Pre-Wedding",
    src: images.preWedding,
    name: "Before the Vows",
    title: "Before the Vows",
    series: "Pre-Wedding Shoot",
    details: "Lekki Beach, Lagos · October 2024",
    meta: "Lekki Beach, Lagos",
    year: "2024",
  },
  {
    number: "005",
    category: "weddings",
    tag: "Wedding",
    src: images.weddingCar,
    name: "The Grand Arrival",
    title: "The Grand Arrival",
    series: "Wedding Day Coverage",
    details: "Asokoro, Abuja · December 2024",
    meta: "Asokoro, Abuja",
    year: "2024",
  },
  {
    number: "006",
    category: "weddings",
    tag: "Details",
    src: images.decor,
    name: "Reception Details",
    title: "Reception Details",
    series: "Wedding Décor & Florals",
    details: "Wuse II, Abuja · December 2024",
    meta: "Wuse II, Abuja",
    year: "2024",
  },
  {
    number: "007",
    category: "birthdays",
    tag: "Birthday",
    src: images.birthdayGlam,
    name: "Black & White Birthday",
    title: "Black & White Birthday",
    series: "Pre-Birthday Glam Shoot",
    details: "Maitama, Abuja · March 2025",
    meta: "Maitama, Abuja",
    year: "2025",
    filter: "grayscale",
  },
  {
    number: "008",
    category: "events",
    tag: "Corporate",
    src: images.venue,
    name: "End-of-Year Gala",
    title: "End-of-Year Gala",
    series: "Corporate Event Coverage",
    details: "Central Business District, Abuja · December 2023",
    meta: "Central Business District",
    year: "2023",
    filter: "contrast-125",
  },
  {
    number: "009",
    category: "portraits",
    tag: "Portrait",
    src: images.portrait,
    name: "Graduation Portrait",
    title: "Graduation Portrait",
    series: "Studio Portrait Session",
    details: "David Dan Studio, Abuja · July 2024",
    meta: "Studio Session, Abuja",
    year: "2024",
    filter: "brightness-90",
  },
  {
    number: "010",
    category: "weddings",
    tag: "Pre-Wedding",
    src: images.preWedding,
    name: "Golden Hour Proposal",
    title: "Golden Hour Proposal",
    series: "Surprise Proposal Shoot",
    details: "Lekki Beach, Lagos · February 2024",
    meta: "Lekki Beach, Lagos",
    year: "2024",
    filter: "brightness-75",
  },
  {
    number: "011",
    category: "events",
    tag: "Event",
    src: images.weddingCar,
    name: "Product Launch Night",
    title: "Product Launch Night",
    series: "Brand Event Coverage",
    details: "Wuse, Abuja · August 2024",
    meta: "Wuse, Abuja",
    year: "2024",
    filter: "contrast-110",
  },
  {
    number: "012",
    category: "weddings",
    tag: "Traditional",
    src: images.decor,
    name: "Introduction Ceremony Décor",
    title: "Introduction Ceremony Décor",
    series: "Traditional Wedding Coverage",
    details: "Gwarinpa, Abuja · April 2025",
    meta: "Gwarinpa, Abuja",
    year: "2025",
    filter: "brightness-95",
  },
];

export const archiveFilters: { value: Category | "all"; label: string }[] = [
  { value: "all", label: `All (${archiveWorks.length})` },
  { value: "weddings", label: "Weddings" },
  { value: "birthdays", label: "Birthdays" },
  { value: "events", label: "Events" },
  { value: "portraits", label: "Portraits" },
];
