"use server";

import { z } from "zod";
import { prioritizeHighValueLeads } from "@/ai/flows/prioritize-high-value-leads";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  brand: z.string().min(2, "Brand must be at least 2 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type FormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function handleContactFormSubmission(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedData = contactFormSchema.safeParse(rawFormData);

    if (!validatedData.success) {
      return {
        message: "Invalid form data. Please check your entries.",
        status: "error",
      };
    }

    const { name, email, brand, message } = validatedData.data;

    // Call the GenAI flow to prioritize the lead
    const prioritizationResult = await prioritizeHighValueLeads({
      name,
      email,
      brand,
      message,
    });

    // In a real application, you would save the lead and the AI analysis to a database.
    // For this example, we'll just log the result on the server.
    console.log("New Lead Received:", validatedData.data);
    console.log("AI Prioritization:", prioritizationResult);

    return {
      message: "Thank you for your message! I'll be in touch soon.",
      status: "success",
    };
  } catch (error) {
    console.error("Error handling form submission:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: "error",
    };
  }
}
