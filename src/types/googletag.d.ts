// src/types/googletag.d.ts

export interface GoogleTagSlot {
  defineSizeMapping?: (mapping: unknown) => GoogleTagSlot;
  addService?: (service: unknown) => GoogleTagSlot;
  // Added to fix cleanup logic errors
  getSlotElementId?: () => string; 
}

export interface GoogleTagPubAds {
  enableSingleRequest?: () => void;
  collapseEmptyDivs?: () => void;
  // Added to fix 'ready' error
  ready?: boolean; 
  // Added to fix cleanup logic errors
  getSlots?: () => GoogleTagSlot[]; 
}

export interface GoogleTagSizeMapping {
  addSize?: (viewportSize: number[], adSizes: (number[] | number[][])) => GoogleTagSizeMapping;
  build?: () => unknown;
}

declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      defineSlot?: (
        adUnitPath: string, 
        size: number[] | number[][] | "fluid", 
        divId: string
      ) => GoogleTagSlot | null | undefined;
      enableServices?: () => void;
      display?: (divId: string) => void;
      pubads?: () => GoogleTagPubAds | undefined;
      sizeMapping?: () => GoogleTagSizeMapping | undefined;
      // Added to fix 'destroySlots' error
      destroySlots?: (slots?: GoogleTagSlot[]) => void; 
    };
  }
}

export {};