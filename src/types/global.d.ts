// src/types/global.d.ts
export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }

}
