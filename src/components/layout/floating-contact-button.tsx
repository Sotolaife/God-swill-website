"use client";

import { Button } from "@/components/ui/button";
import { CONTACT_LINK } from "@/lib/constants";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Mail } from "lucide-react";

export default function FloatingContactButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            size="icon"
            className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-2xl transition-transform hover:scale-110"
            aria-label="Contact me"
          >
            <Link href={CONTACT_LINK} target="_blank">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background">
          <p>Contact me!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
