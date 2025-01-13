import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "Simon Orlob",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "I Create Software",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "simonorlob.de",
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Quick Start",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for small automation projects",
        // The price you want to display, the one user will be charged on Stripe.
        price: 999,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 1499,
        features: [
          {
            name: "Simple AI automation",
          },
          { name: "Basic no-code setup" },
          { name: "1 revision round" },
          { name: "1 week delivery" },
          { name: "14 days support" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: "Business Solution",
        description: "For established businesses seeking efficiency",
        price: 2499,
        priceAnchor: 3499,
        features: [
          {
            name: "Advanced AI integration",
          },
          { name: "Custom no-code workflows" },
          { name: "Database setup" },
          { name: "2 revision rounds" },
          { name: "2 weeks delivery" },
          { name: "30 days support" },
          { name: "Priority email support" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Enterprise Custom",
        description: "Full-scale digital transformation",
        price: 4999,
        priceAnchor: 6999,
        features: [
          { name: "Enterprise AI solutions" },
          { name: "Complex automation setup" },
          { name: "Custom integrations" },
          { name: "Unlimited revisions" },
          { name: "Custom timeline" },
          { name: "90 days support" },
          { name: "24/7 priority support" },
          { name: "Training sessions" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  resend: {
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `ShipFast <noreply@resend.shipfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Marc at ShipFast <marc@resend.shipfa.st>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "marc.louvion@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes["light"]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
