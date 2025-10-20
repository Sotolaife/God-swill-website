"use client";

import { Button } from "@/components/ui/button";
import { CONTACT_LINK } from "@/lib/constants";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { WhatsAppIcon } from "@/components/icons";

export default function FloatingContactButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={CONTACT_LINK} target="_blank" aria-label="Contact me on WhatsApp">
            <Button
              size="icon"
              className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-2xl transition-transform hover:scale-110"
            >
              <WhatsAppIcon className="h-8 w-8 text-primary-foreground" />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background">
          <p>Contact on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
