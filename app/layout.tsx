import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "./_lib/site";
import "./globals.css";

// Self-hosted variable fonts, so builds don't depend on reaching Google Fonts.
const playfair = localFont({
  variable: "--font-playfair",
  weight: "400 900",
  src: [
    { path: "./fonts/playfair-display-latin-wght-normal.woff2", style: "normal" },
    { path: "./fonts/playfair-display-latin-wght-italic.woff2", style: "italic" },
  ],
});

const jakarta = localFont({
  variable: "--font-jakarta",
  weight: "200 800",
  src: "./fonts/plus-jakarta-sans-latin-wght-normal.woff2",
});

export const metadata: Metadata = {
  title: `${site.name} — Wedding, Birthday & Event Photographer in ${site.city}`,
  description: `Wedding, birthday and event photography by ${site.name}, based in ${site.base}, Nigeria. Available nationwide.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      className={`${playfair.variable} ${jakarta.variable} antialiased`}
    >
      <body className="bg-background font-sans text-on-surface">
        {children}
      </body>
    </html>
  );
}
