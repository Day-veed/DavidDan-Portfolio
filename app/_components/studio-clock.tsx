"use client";

import { useSyncExternalStore } from "react";
import { site } from "../_lib/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: site.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

function getSnapshot() {
  return formatter.format(new Date());
}

// The time is only known in the browser; the server renders a placeholder.
function getServerSnapshot() {
  return "--:--:--";
}

export function StudioClock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <>
      {site.city.toUpperCase()} {time} {site.timeZoneLabel}
    </>
  );
}
