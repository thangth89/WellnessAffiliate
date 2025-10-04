// src/types/global.d.ts
export {};

declare global {
  interface Window {
    dataLayer: any[];
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}