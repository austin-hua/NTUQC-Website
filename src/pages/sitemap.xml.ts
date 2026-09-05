import type { APIRoute } from "astro";

import { STAFF } from "~/data/staff.ts";

const SITE = "https://www.ntuqc.com";

export const GET: APIRoute = () => {
  const staticPaths = ["/", "/join/", "/our-story/", "/team/", "/partners/", "/events/"];
  const teamYearPaths = STAFF.map((staffYear) => `/team/${staffYear.year}/`);
  const eventsYearPaths = STAFF.map((staffYear) => `/events/${staffYear.year}/`);
  const paths = Array.from(new Set([...staticPaths, ...teamYearPaths, ...eventsYearPaths]));

  const urls = paths.map((path) => `  <url><loc>${SITE}${path}</loc></url>`).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
