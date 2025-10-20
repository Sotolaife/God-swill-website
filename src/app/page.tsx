import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_LINK } from "@/lib/constants";
import { ArrowRight, CheckCircle, BarChart, Users, TrendingUp, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { placeholderImages } from "@/lib/placeholder-images";

const services = [
  {
    title: "TikTok Ad Management",
    description: "Full-service management of your TikTok ad campaigns, from strategy to execution and optimization.",
    icon: <BarChart className="w-8 h-8 text-primary" />,
  },
  {
    title: "Campaign Audit",
    description: "A deep dive into your existing ad campaigns to identify areas for improvement and unlock hidden potential.",
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
  },
  {
    title: "Brand Growth Consulting",
    description: "Strategic advice to grow your brand's presence and impact on TikTok, beyond just paid ads.",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
  },
];

const testimonials = [
  {
    name: "John Doe, E-commerce Brand",
    quote: "Godswill transformed our TikTok presence. Our sales have doubled since we started working with him!",
    avatar: placeholderImages.find(p => p.id === 'avatar1'),
  },
  {
    name: "Jane Smith, Startup Founder",
    quote: "The campaign audit was a game-changer. We saw a 150% increase in ROAS within the first month.",
    avatar: placeholderImages.find(p => p.id === 'avatar2'),
  },
];

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'godswill-portrait');
  const caseStudyImage = placeholderImages.find(p => p.id === 'case-study-visual-1');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div className="flex flex-col gap-6 items-start text-center md:text-left animate-in fade-in duration-500">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
              Turning TikTok Attention Into <span className="text-primary">Real Sales</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              I help brands like yours leverage the power of TikTok advertising to achieve measurable growth and a powerful return on investment.
            </p>
            <Button asChild size="lg" className="shadow-lg">
              <Link href={CONTACT_LINK} target="_blank">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative w-full max-w-sm mx-auto md:max-w-md h-96 md:h-[500px] animate-in fade-in zoom-in duration-500">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                data-ai-hint={heroImage.imageHint}
                className="object-cover rounded-2xl shadow-2xl object-top"
              />
            )}
          </div>
        </div>
      </section>

      {/* Trust / Proof Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Growing Brands</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            My strategies deliver tangible results that fuel business growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <p className="text-5xl font-bold text-primary">5x</p>
                <p className="text-muted-foreground mt-2">Average ROAS Increase</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <p className="text-5xl font-bold text-primary">+200%</p>
                <p className="text-muted-foreground mt-2">Follower Growth in 90 Days</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <p className="text-5xl font-bold text-primary">$1M+</p>
                <p className="text-muted-foreground mt-2">Ad Spend Managed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Services Preview */}
      <section className="py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How I Can Help You Win</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              I offer a range of services designed to meet your specific needs and goals on TikTok.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href={CONTACT_LINK} target="_blank">Get Your Free Proposal</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Story Highlight */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div className="relative w-full h-80 md:h-96 rounded-2xl shadow-xl animate-in fade-in duration-500">
             {caseStudyImage && (
              <Image
                src={caseStudyImage.imageUrl}
                alt={caseStudyImage.description}
                fill
                data-ai-hint={caseStudyImage.imageHint}
                className="object-cover rounded-2xl"
              />
            )}
          </div>
          <div className="animate-in fade-in duration-500 delay-200">
            <h3 className="text-sm font-bold uppercase text-primary tracking-widest">Client Spotlight</h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">From 1k to 50k followers in 3 months</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              A fashion startup struggled to gain traction. Our targeted content and ad strategy not only grew their following but boosted sales by 300%.
            </p>
            <div className="mt-6">
              <p className="font-semibold">Challenge: <span className="font-normal text-muted-foreground">Low brand awareness and engagement.</span></p>
              <p className="font-semibold mt-2">Strategy: <span className="font-normal text-muted-foreground">Viral content series + hyper-targeted ad funnels.</span></p>
              <p className="font-semibold mt-2">Result: <span className="font-normal text-muted-foreground">Explosive growth and record sales.</span></p>
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/case-studies">Explore More Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What My Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-primary">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  <blockquote className="text-lg italic text-foreground">"{testimonial.quote}"</blockquote>
                  <p className="font-semibold mt-4 text-right">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-muted-foreground">* Testimonial videos coming soon.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">Ready to turn your TikTok presence into a profit machine?</h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            Let's talk. I'll show you how we can achieve exceptional results together.
          </p>
          <Button asChild size="lg" className="mt-8 shadow-lg">
            <Link href={CONTACT_LINK} target="_blank">
              Schedule Your Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
