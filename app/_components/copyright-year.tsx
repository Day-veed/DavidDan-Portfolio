import { cacheLife } from "next/cache";

/**
 * Renders the current year. Cached for a day so the page stays prerendered
 * but still rolls over to the new year on its own.
 */
export async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
