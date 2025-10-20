"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleContactFormSubmission, type FormState } from "@/app/actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { Label } from "./ui/label";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: FormState = { message: "", status: "idle" };
  const [state, formAction] = useFormState(handleContactFormSubmission, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="your@email.com" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="brand">Brand/Company</Label>
        <Input id="brand" name="brand" placeholder="Your Brand Name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="How can I help you win on TikTok?" required minLength={10} rows={5} />
      </div>
      <SubmitButton />
    </form>
  );
}
