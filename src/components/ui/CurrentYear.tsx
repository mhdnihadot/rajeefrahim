"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const BUILD_YEAR = new Date().getFullYear();

/** Current year, refreshed in the browser so a static build never shows a stale year. */
export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => BUILD_YEAR);
  return <>{year}</>;
}
