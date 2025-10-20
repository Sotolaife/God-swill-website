"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, CONTACT_LINK } from "@/lib/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";

export default function Header() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <MessageCircle className="h-6 w-6 text-primary" />
          <span className="font-bold">Godswill Etuk</span>
        </Link>

        {isMobile ? (
          <div className="flex flex-1 items-center justify-end">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                     <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                        <MessageCircle className="h-6 w-6 text-primary" />
                        <span className="font-bold">Godswill Etuk</span>
                    </Link>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close Menu</span>
                        </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col gap-6 text-lg">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "transition-colors hover:text-primary",
                          pathname === link.href ? "text-primary font-semibold" : "text-foreground/70"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button asChild className="mt-auto">
                    <Link href={CONTACT_LINK} target="_blank" onClick={() => setIsOpen(false)}>Contact Me</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <>
            <nav className="flex items-center gap-6 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-foreground",
                    pathname === link.href ? "text-foreground font-semibold" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-1 items-center justify-end gap-4">
              <Button asChild>
                <Link href={CONTACT_LINK} target="_blank">
                  Contact Me
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
