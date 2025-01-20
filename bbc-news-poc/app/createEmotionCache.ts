import createCache from "@emotion/cache";

// Client-side cache for Material-UI
export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}
