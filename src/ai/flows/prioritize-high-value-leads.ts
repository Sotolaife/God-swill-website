'use server';
/**
 * @fileOverview An AI tool to analyze new contact form submissions and estimate their potential marketing ROI.
 *
 * - prioritizeHighValueLeads - A function that handles the lead prioritization process.
 * - PrioritizeHighValueLeadsInput - The input type for the prioritizeHighValueLeads function.
 * - PrioritizeHighValueLeadsOutput - The return type for the prioritizeHighValueLeads function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizeHighValueLeadsInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  brand: z.string().describe('The brand or company the person represents.'),
  message: z.string().describe('The message or inquiry from the person.'),
});
export type PrioritizeHighValueLeadsInput = z.infer<
  typeof PrioritizeHighValueLeadsInputSchema
>;

const PrioritizeHighValueLeadsOutputSchema = z.object({
  roiEstimate: z.number().describe('Estimated potential marketing ROI (0-100).'),
  priority: z
    .string()
    .describe('Priority level (High, Medium, Low) based on ROI estimate.'),
  reason: z.string().describe('Reasoning behind the ROI estimate and priority assignment.'),
});
export type PrioritizeHighValueLeadsOutput = z.infer<
  typeof PrioritizeHighValueLeadsOutputSchema
>;

export async function prioritizeHighValueLeads(
  input: PrioritizeHighValueLeadsInput
): Promise<PrioritizeHighValueLeadsOutput> {
  return prioritizeHighValueLeadsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizeHighValueLeadsPrompt',
  input: {schema: PrioritizeHighValueLeadsInputSchema},
  output: {schema: PrioritizeHighValueLeadsOutputSchema},
  prompt: `You are an AI assistant specializing in estimating the potential marketing ROI of new leads from a contact form submission on a marketing expert\'s website.

  Analyze the following information provided by the lead:
  Name: {{{name}}}
  Email: {{{email}}}
  Brand: {{{brand}}}
  Message: {{{message}}}

  Based on this information, estimate the potential marketing ROI on a scale of 0 to 100.  Consider factors such as the clarity of the message, the size and reputation of the brand, and the apparent interest in marketing services.

  Assign a priority level (High, Medium, or Low) based on the ROI estimate:
  - High: ROI estimate 70-100
  - Medium: ROI estimate 40-69
  - Low: ROI estimate 0-39

  Provide a brief explanation for your ROI estimate and priority assignment.
  Return your answer in JSON format.
  `,
});

const prioritizeHighValueLeadsFlow = ai.defineFlow(
  {
    name: 'prioritizeHighValueLeadsFlow',
    inputSchema: PrioritizeHighValueLeadsInputSchema,
    outputSchema: PrioritizeHighValueLeadsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
