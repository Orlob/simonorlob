import type { authorType } from "../types";
import simonImg from "@/app/blog/_assets/images/authors/simon.jpeg";
import { socialIcons } from "./socialIcons";

export const authorSlugs = {
  simon: "simon",
} as const;

export const authors: authorType[] = [
  {
    slug: authorSlugs.simon,
    name: "Simon Orlob",
    job: "Maker of Things",
    description:
      "Simon is a hands-on tech enthusiast who combines his love for software development, low-code solutions, and AI with his passion for agriculture, 3D printing, and a lifestyle rooted in creativity and innovation.",
    avatar: simonImg,
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://twitter.com/simonHubs",
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/simonorlob/",
      },
    ],
  },
]; 