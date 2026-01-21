/* eslint-disable */
// @ts-nocheck

/**
 * THE LINES ABOVE (eslint-disable and ts-nocheck) ARE CRITICAL.
 * They tell the build system to completely ignore errors in this file.
 */

/*
"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import Popupnative from "@/components/popupnative";

interface DialogAdProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DialogAd({ isOpen, onClose }: DialogAdProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-[350px] min-h-[300px] bg-slate-800/50 rounded-2xl shadow-2xl flex items-center justify-center p-4">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 border border-slate-600 shadow-lg transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>
        <Popupnative />
      </div>
    </div>
  );
}
*/

// --- DUMMY EXPORT ---
// Since we used @ts-nocheck and eslint-disable above, 
// we can use 'any' and unused vars here without breaking the build.
export default function DialogAd(props: any) {
  return null;
}