import React, { useState, useEffect } from "react";
import { ShoppingCart, Sparkles, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#0B1322]/95 backdrop-blur-md text-white p-3 rounded-2xl border border-amber-500/30 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center space-x-2 pl-2">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold font-serif text-amber-300">Jahrgangssardinen</p>
            <p className="text-[10px] text-slate-400">Traditionelle Jahrgangssorten</p>
          </div>
        </div>

        <Button
          asChild
          size="sm"
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-2 text-xs rounded-xl shadow-md flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
        >
          <a href="https://amzn.to/3HKUksF" target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Angebote ansehen*</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
