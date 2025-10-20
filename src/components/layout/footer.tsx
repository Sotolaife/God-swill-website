import { SOCIAL_LINKS, CONTACT_LINK } from "@/lib/constants";
import { Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";
import { TikTokIcon, WhatsAppIcon } from "@/components/icons";


export default function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
            <Link href="/" className="flex items-center space-x-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span className="font-bold">Godswill Etuk</span>
            </Link>
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Godswill Etuk. All rights reserved.
            </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href={SOCIAL_LINKS.tiktok} target="_blank" aria-label="TikTok" className="text-muted-foreground hover:text-primary">
                <TikTokIcon className="h-5 w-5" />
            </Link>
            <Link href={SOCIAL_LINKS.linkedin} target="_blank" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
            </Link>
            <Link href={SOCIAL_LINKS.twitter} target="_blank" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
            </Link>
             <Link href={CONTACT_LINK} target="_blank" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary">
                <WhatsAppIcon className="h-5 w-5" />
            </Link>
        </div>
      </div>
    </footer>
  );
}
