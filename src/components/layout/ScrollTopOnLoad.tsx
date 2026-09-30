"use client";

import { useEffect } from "react";

/**
 * Every full page load / refresh starts at the top of the page: turn off the
 * browser's scroll restoration and drop any #hash left in the URL (e.g. after
 * clicking "About"), so a reload doesn't jump back down. In-app navigation is
 * unaffected — Next.js already scrolls to the top (or to the #anchor) itself.
 */
export default function ScrollTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    window.scrollTo(0, 0);
  }, []);

  return null;
}
