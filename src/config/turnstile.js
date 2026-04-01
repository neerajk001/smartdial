export const TURNSTILE_SITE_KEY =
  import.meta.env.VITE_TURNSTILE_SITE_KEY || 
  (import.meta.env.DEV ? "1x00000000000000000000AA" : "0x4AAAAAAACsFp7T-Iaud3wXl");
