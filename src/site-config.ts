import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";
import { courseMeta } from "./course-config";

// The underlying collection and URL remain `sessions`. Students are rostered
// onto a Shift, because that is what the work is.
export const sessionLabels = {
  singular: "Shift",
  plural: "Shifts",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  links: [
    { text: "Lectures", href: "/lectures/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "The Log", href: "/log/" },
    { text: "The Sandbox", href: "/sandbox/" },
    { text: "People", href: "/people/" },
    { text: "Policies", href: "/policies/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
  socialImage: "/src/assets/images/card.png",
  socialImageAlt:
    `A link card for ${courseMeta.code} ${courseMeta.title}: the course code and ` +
    `title set in heavy type over a stack of horizontal bars standing in for a ` +
    `moderation queue, in the Slop University gold and black`,
});
