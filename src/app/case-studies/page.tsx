import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_LINK } from "@/lib/constants";
import { placeholderImages } from "@/lib/placeholder-images";
import { ArrowRight, BarChart, DollarSign, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    clientType: "D2C Fashion Brand",
    challenge: "Stagnant sales and low ROAS from existing social media ads.",
    strategy: "Developed three core TikTok video funnels targeting different audience temperatures (cold, warm, hot) with unique creative angles and offers.",
    results: [
      { metric: "3.5x", label: "Increase in ROAS" },
      { metric: "+$50k", label: "Monthly Revenue" },
      { metric: "60%", label: "Decrease in CPA" },
    ],
    image: placeholderImages.find(p => p.id === 'case-study-visual-1'),
  },
  {
    clientType: "Mobile App (SaaS)",
    challenge: "High user acquisition cost and low engagement from new sign-ups.",
    strategy: "Launched a viral-style campaign using user-generated content (UGC) and creator partnerships to drive authentic interest and downloads.",
    results: [
      { metric: "-75%", label: "Cost Per Install" },
      { metric: "+300k", label: "New Users in 60 Days" },
      { metric: "Top 10", label: "App Store Ranking" },
    ],
    image: placeholderImages.find(p => p.id === 'case-study-visual-2'),
  },
  {
    clientType: "Local Service Business",
    challenge: "Struggling to reach a younger demographic and generate local leads.",
    strategy: "Implemented a geo-targeted TikTok campaign showcasing behind-the-scenes content and client transformations, driving traffic to a lead form.",
    results: [
      { metric: "400+", label: "Qualified Leads/Month" },
      { metric: "2.5M+", label: "Local Views" },
      { metric: "10x", label: "Return on Ad Spend" },
    ],
    image: placeholderImages.find(p => p.id === 'case-study-visual-3'),
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Proof That Converts
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            I don't just talk about results, I deliver them. Explore how I've helped brands like yours achieve explosive growth on TikTok.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                 <div className="grid md:grid-cols-2">
                    <div className="relative min-h-[300px] md:min-h-full">
                        {study.image && (
                            <Image
                                src={study.image.imageUrl}
                                alt={study.image.description}
                                fill
                                data-ai-hint={study.image.imageHint}
                                className="object-cover"
                            />
                        )}
                    </div>
                    <div className="flex flex-col p-8">
                        <CardHeader className="p-0">
                            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{study.clientType}</p>
                            <CardTitle className="mt-2 text-2xl">The Challenge</CardTitle>
                            <CardDescription className="text-base pt-2">{study.challenge}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 mt-6 flex-grow">
                             <h3 className="text-xl font-bold">The Strategy</h3>
                             <p className="text-muted-foreground mt-2">{study.strategy}</p>
                             <div className="mt-6">
                                <h3 className="text-xl font-bold text-primary">The Results</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 text-center">
                                    {study.results.map(result => (
                                        <div key={result.label} className="bg-muted p-4 rounded-lg">
                                            <p className="text-2xl font-bold text-foreground">{result.metric}</p>
                                            <p className="text-sm text-muted-foreground">{result.label}</p>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </CardContent>
                        <CardFooter className="p-0 mt-8">
                             <Button asChild>
                                <Link href={CONTACT_LINK} target="_blank">Replicate These Results</Link>
                            </Button>
                        </CardFooter>
                    </div>
                 </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Your success story could be next.
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            Ready to see what's possible for your brand? Let's connect and build a strategy for your success.
          </p>
          <Button asChild size="lg" className="mt-8 shadow-lg">
            <Link href={CONTACT_LINK} target="_blank">
              Get My Custom Strategy <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
