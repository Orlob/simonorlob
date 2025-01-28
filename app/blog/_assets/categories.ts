import type { categoryType } from "../types";

export const categorySlugs = {
  feature: "feature",
  tutorial: "tutorial",
  camping: "camping",
  technology: "technology",
  software: "software",
} as const;

export const categories: categoryType[] = [
  {
    slug: categorySlugs.feature,
    title: "New Features",
    titleShort: "Features",
    description:
      "Here are the latest features we've added to ShipFast. I'm constantly improving our product to help you ship faster.",
    descriptionShort: "Latest features added to ShipFast.",
  },
  {
    slug: categorySlugs.tutorial,
    title: "How Tos & Tutorials",
    titleShort: "Tutorials",
    description:
      "Learn how to use ShipFast with these step-by-step tutorials. I'll show you how to ship faster and save time.",
    descriptionShort:
      "Learn how to use ShipFast with these step-by-step tutorials.",
  },
  {
    slug: categorySlugs.camping,
    title: "Camping & Outdoor",
    titleShort: "Camping",
    description:
      "Discover the best camping tips, gear reviews, and outdoor adventures. From beginner guides to expert advice.",
    descriptionShort: "Everything you need to know about camping and outdoor life.",
  },
  {
    slug: categorySlugs.technology,
    title: "Technology Trends",
    titleShort: "Tech",
    description:
      "Stay up to date with the latest technology trends, innovations, and breakthroughs shaping our digital future.",
    descriptionShort: "Latest updates from the world of technology.",
  },
  {
    slug: categorySlugs.software,
    title: "Software Development",
    titleShort: "Dev",
    description:
      "Deep dive into software development best practices, coding tutorials, and programming insights for developers.",
    descriptionShort: "Software development guides and best practices.",
  },
]; 