import type { JSX } from "react";
import SmartCaravan, { articleData as smartCaravanData } from "../_assets/articles/smart-caravan";
import type { articleType } from "../types";
import type { categoryType } from "../types";
import type { authorType } from "../types";

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

export const articles: articleType[] = [
  {
    ...smartCaravanData,
    content: <SmartCaravan />,
  },
];

// Export everything from their respective files
export * from "./categories";
export * from "./authors";
export * from "./socialIcons";
