/** "2026-10-09" -> "09 - 10 - 2026" (the site's display format). */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d} - ${m} - ${y}`;
}
