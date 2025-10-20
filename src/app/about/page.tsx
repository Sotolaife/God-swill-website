import { Button } from "@/components/ui/button";
import { CONTACT_LINK } from "@/lib/constants";
import { placeholderImages } from "@/lib/placeholder-images";
import { Award, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const heroImage = placeholderImages.find(p => p.id === 'about-hero');
  const portraitImage = placeholderImages.find(p => p.id === 'godswill-portrait');

  return (
    <div>
      {/* Header */}
      <section className="relative h-64 md:h-80 bg-muted">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                data-ai-hint={heroImage.imageHint}
                className="object-cover"
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
                    The Strategist Behind High-Converting TikTok Ads
                </h1>
            </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center px-4">
          <div className="relative w-full max-w-sm mx-auto md:max-w-none h-[450px] rounded-2xl shadow-xl">
             {portraitImage && (
                <Image
                    src={portraitImage.imageUrl}
                    alt={portraitImage.description}
                    fill
                    data-ai-hint={portraitImage.imageHint}
                    className="object-cover rounded-2xl object-top"
                />
             )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Godswill Etuk</h2>
            <p className="text-lg text-muted-foreground">
              With a background in digital marketing and a passion for viral trends, I found my calling on TikTok. I'm not just a marketer; I'm a growth architect who understands the platform's unique culture and algorithm.
            </p>
            <p className="text-lg text-muted-foreground">
              My journey began with a simple observation: many brands were on TikTok, but few were truly connecting. They were spending money without seeing returns. I dedicated myself to cracking the code, developing data-driven strategies that merge creativity with conversion science.
            </p>
             <p className="text-lg text-muted-foreground">
              Today, I partner with ambitious brands to transform their TikTok presence from a cost center into a powerful revenue driver.
            </p>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
       <section className="bg-muted py-20 md:py-24">
         <div className="container mx-auto px-4 text-center">
            <blockquote className="text-2xl md:text-4xl italic font-semibold text-foreground max-w-4xl mx-auto">
                "Attention is easy. Turning it into profit takes strategy."
            </blockquote>
         </div>
       </section>
       
       {/* Mission Section */}
       <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">My Core Principles</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                        <Target className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">Results-Driven</h3>
                    <p className="text-muted-foreground mt-2">Every campaign is built on a foundation of clear KPIs and a relentless focus on ROI.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                        <TrendingUp className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">Data-Informed</h3>
                    <p className="text-muted-foreground mt-2">I leverage deep analytics to make informed decisions, test hypotheses, and continuously optimize for performance.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                        <Award className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">Partnership Approach</h3>
                    <p className="text-muted-foreground mt-2">Your success is my success. I work as an extension of your team to achieve shared goals.</p>
                </div>
            </div>
        </div>
       </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 border-t">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold">Let's build your brand on TikTok.</h2>
          <Button asChild size="lg" className="mt-8">
            <Link href={CONTACT_LINK} target="_blank">Contact Me</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
