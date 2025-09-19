"use client";

import { Phone, Calendar } from "lucide-react";

interface MobileStickyFooterProps {
  phoneNumber?: string;
  consultationLink?: string;
}

export function MobileStickyFooter({ 
  phoneNumber = "9000767060", 
  consultationLink = "#consultation" 
}: MobileStickyFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 sm:p-3 z-50 md:hidden shadow-lg">
      <div className="flex gap-2">
        <a 
          href={`tel:${phoneNumber}`} 
          className="flex-1 bg-blue-600 text-white text-center py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 sm:gap-2"
        >
          <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="whitespace-nowrap">Call Now</span>
        </a>
        <a 
          href={consultationLink} 
          className="flex-1 bg-green-600 text-white text-center py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg font-semibold text-xs sm:text-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-1 sm:gap-2"
        >
          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="whitespace-nowrap">Book Consult</span>
        </a>
      </div>
    </div>
  );
}