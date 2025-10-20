"use client";

import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...props}><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.546-.827-1.219-.827-1.219l-1.12-1.12c-.14-.14-.28-.14-.42-.14a.993.993 0 0 0-.56.215c-.28.28-.42.63-.42.945 0 .215.14.42.14.56l.827 2.22c.28.7.28 1.4.073 1.963-.14.42-.42.84-.827 1.219-.48.48-1.13.895-1.963 1.219a10.45 10.45 0 0 0-2.036.827c-.372.14-.63.28-.827.28-.14 0-.28 0-.28-.14s.42-.42.56-.56c.14-.14.28-.28.42-.56.21-.28.28-.56.21-.827-.073-.28-.14-.42-.14-.56a.426.426 0 0 0-.21-.42c-.14-.073-.28-.073-.42-.073h-.56c-.28 0-.56.073-.827.14a2.7 2.7 0 0 0-1.68 1.68c-.073.28-.073.56-.073.827 0 .215.073.42.073.56 0 .14 0 .28-.073.42-.073.14-.14.21-.21.372a9.54 9.54 0 0 0 5.46 5.46c.14.073.28.14.42.14.14 0 .28 0 .42-.073.14-.073.21-.14.372-.21a5.46 5.46 0 0 0 3.22-3.22c.14-.28.21-.56.21-.827s-.073-.56-.14-.827a.426.426 0 0 0-.21-.42c-.14-.073-.28-.073-.42-.073h-.56c-.28 0-.56.073-.827.14-.21.28-.28.42-.28.56 0 .215.073.42.073.56s0 .28-.073.42c-.073.14-.14.21-.21.372a5.46 5.46 0 0 0 3.22-3.22c.14-.28.21-.56.21-.827s-.073-.56-.14-.827z" fill="currentColor"></path></svg>
);


export default function FloatingWhatsAppButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            size="icon"
            className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-2xl transition-transform hover:scale-110"
            aria-label="Message on WhatsApp"
          >
            <Link href={WHATSAPP_LINK} target="_blank">
              <WhatsAppIcon className="h-8 w-8 text-primary-foreground" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background">
          <p>Message me on WhatsApp!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
