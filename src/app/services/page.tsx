import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ArrowRight, BarChart, CheckCircle, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Full-Service TikTok Ad Management",
    description: "My flagship service. I handle everything from strategy and creative direction to campaign execution, optimization, and reporting. You focus on your business while I focus on scaling your results.",
    outcomes: ["Increased ROAS", "Consistent Lead Flow", "Sustainable Brand Growth"],
    icon: <BarChart className="w-10 h-10 text-primary" />,
  },
  {
    title: "Targeted Campaign Audit & Strategy",
    description: "Have existing campaigns that are underperforming? I'll conduct a comprehensive audit to identify leaks, missed opportunities, and provide a concrete action plan to turn things around fast.",
    outcomes: ["Improved Ad Performance", "Reduced Wasted Spend", "Actionable Optimization Plan"],
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
  },
  {
    title: "Brand Growth & Content Consulting",
    description: "Ads are only one part of the puzzle. I'll help you develop a holistic TikTok strategy that aligns your organic content with your paid efforts, creating a powerful growth engine for your brand.",
    outcomes: ["Authentic Brand Presence", "Higher Engagement Rates", "Long-Term Audience Building"],
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
  },
];

const guarantees = [
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Performance-Focused",
        description: "My primary goal is to deliver a measurable return on your investment. We track everything."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Full Transparency",
        description: "You get regular, easy-to-understand reports and direct access to me for any questions."
    },
    {
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
        title: "Proactive Optimization",
        description: "I don't 'set and forget'. I'm constantly testing and tweaking campaigns to maximize results."
    }
]

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            How I Help You Win on TikTok
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Strategic, data-driven services designed to turn views into revenue and build a lasting brand presence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
                {services.map((service, index) => (
                    <Card key={service.title} className="bg-transparent border-none shadow-none">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className={`flex flex-col gap-4 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <div className="mb-2">{service.icon}</div>
                                <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                                <p className="text-lg text-muted-foreground">{service.description}</p>
                                <div className="mt-4 space-y-2">
                                    <h3 className="font-semibold text-lg">Key Outcomes:</h3>
                                    <ul className="space-y-2">
                                        {service.outcomes.map(outcome => (
                                            <li key={outcome} className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                                <span className="text-muted-foreground">{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-6">
                                     <Button asChild size="lg">
                                        <Link href={WHATSAPP_LINK} target="_blank">Discuss This Service</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className={`bg-muted rounded-xl p-8 h-full ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                                <div className="w-full h-64 bg-background rounded-lg flex items-center justify-center">
                                    <p className="text-muted-foreground">Visual placeholder</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="bg-muted py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What You Can Expect</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Working with me is a partnership built on trust, transparency, and a shared hunger for results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map(guarantee => (
                <Card key={guarantee.title}>
                    <CardHeader>
                        {guarantee.icon}
                        <CardTitle className="mt-4">{guarantee.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{guarantee.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20 md:py-32">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">Ready to find the perfect fit for your brand?</h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            Let's chat. A short conversation is the best way to determine how I can best help you achieve your goals.
          </p>
          <Button asChild size="lg" className="mt-8 shadow-lg">
            <Link href={WHATSAPP_LINK} target="_blank">
              Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
