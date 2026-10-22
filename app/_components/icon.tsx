// Inline replacements for the Material Symbols used in the Stitch design,
// so the page doesn't need to load an icon font.
const paths = {
  menu: "M4 7h16M4 12h16M4 17h16",
  arrowDown: "M12 4v16m0 0-6-6m6 6 6-6",
  arrowUp: "M12 20V4m0 0-6 6m6-6 6 6",
  arrowRight: "M4 12h16m0 0-6-6m6 6-6 6",
  arrowLeft: "M20 12H4m0 0 6-6m-6 6 6 6",
  northEast: "M7 17 17 7m0 0H8m9 0v9",
  close: "M6 6l12 12M18 6 6 18",
  fullscreen: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5",
  check: "M8 12.5l2.5 2.5L16 9.5",
  chat: "M3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 8 19.3z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {name === "check" && <circle cx="12" cy="12" r="9" />}
      <path d={paths[name]} />
    </svg>
  );
}
