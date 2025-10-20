import { Button } from "@/components/ui/button";
import { CONTACT_LINK } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { placeholderImages } from "@/lib/placeholder-images";
import ContactForm from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/icons";

export default function ContactPage() {
    const profileImage = placeholderImages.find(p => p.id === 'godswill-portrait-small');

    return (
        <div>
            {/* Header */}
            <section className="bg-muted py-20 md:py-28">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Let's Build Something That Converts
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
                        Whether you have a specific project in mind or just want to explore possibilities, I'm here to help.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column: Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
                            <p className="text-muted-foreground mb-6">Fill out the form and I'll get back to you promptly.</p>
                            <ContactForm />
                        </div>
                        {/* Right Column: Direct Contact */}
                        <div className="bg-muted rounded-xl p-8 flex flex-col items-center text-center justify-center">
                             {profileImage && (
                                <Image
                                    src={profileImage.imageUrl}
                                    alt={profileImage.description}
                                    width={100}
                                    height={100}
                                    data-ai-hint={profileImage.imageHint}
                                    className="rounded-full mb-4"
                                />
                             )}
                            <h3 className="text-2xl font-bold">Prefer a direct chat?</h3>
                            <p className="text-muted-foreground mt-2 mb-6 max-w-sm">
                                Click the button below to message me on WhatsApp for a faster response.
                            </p>
                            <Button asChild size="lg" className="w-full">
                                <Link href={CONTACT_LINK} target="_blank">
                                    <WhatsAppIcon className="mr-2 h-5 w-5" />
                                    Contact on WhatsApp
                                </Link>
                            </Button>
                            <p className="text-sm text-muted-foreground mt-4">Average response time: under 2 hours</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
