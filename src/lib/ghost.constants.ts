import { GhostContentAPIOptions } from "@tryghost/content-api";

export const URL = process.env.GHOST_API_URL ?? "";
export const KEY = process.env.GHOST_CONTENT_API_KEY || "";
export const VERSION: GhostContentAPIOptions["version"] = "v5.0";
