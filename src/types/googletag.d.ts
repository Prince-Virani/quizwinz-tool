// src/types/googletag.d.ts

export interface GoogleTagSlot {
  defineSizeMapping?: (mapping: unknown) => GoogleTagSlot;
  addService?: (service: unknown) => GoogleTagSlot;
}

export interface GoogleTagPubAds {
  enableSingleRequest?: () => void;
  collapseEmptyDivs?: () => void;
}

export interface GoogleTagSizeMapping {
  addSize?: (viewportSize: number[], adSizes: (number[] | number[][])) => GoogleTagSizeMapping;
  build?: () => unknown;
}

declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      defineSlot?: (adUnitPath: string, size: number[] | number[][], divId: string) => GoogleTagSlot | null | undefined;
      enableServices?: () => void;
      display?: (divId: string) => void;
      pubads?: () => GoogleTagPubAds | undefined;
      sizeMapping?: () => GoogleTagSizeMapping | undefined;
    };
  }
}

export {};