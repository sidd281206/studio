'use server';

/**
 * @fileOverview AI-powered message generation for personalized outreach.
 *
 * This file defines a Genkit flow that allows users to generate personalized messages
 * tailored to the site owner's interests, such as job opportunities or collaborations.
 *
 * @module ai/flows/generate-personalized-message
 *
 * @exports generatePersonalizedMessage - The main function to generate personalized messages.
 * @exports GeneratePersonalizedMessageInput - The input type for the generatePersonalizedMessage function.
 * @exports GeneratePersonalizedMessageOutput - The output type for the generatePersonalizedMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedMessageInputSchema = z.object({
  userName: z.string().describe('Your name'),
  userEmail: z.string().email().describe('Your email address'),
  messagePurpose: z
    .string()
    .describe(
      'The purpose of your message (e.g., job opportunity, collaboration, networking)'
    ),
  siteOwnerName: z.string().describe('The name of the site owner'),
  userSkills: z
    .string()
    .describe('Your skills and expertise relevant to the message purpose'),
  additionalDetails: z
    .string()
    .optional()
    .describe(
      'Any additional details or context you want to include in the message'
    ),
});

export type GeneratePersonalizedMessageInput = z.infer<
  typeof GeneratePersonalizedMessageInputSchema
>;

const GeneratePersonalizedMessageOutputSchema = z.object({
  personalizedMessage: z
    .string()
    .describe('The AI-generated personalized message'),
});

export type GeneratePersonalizedMessageOutput = z.infer<
  typeof GeneratePersonalizedMessageOutputSchema
>;

const generatePersonalizedMessagePrompt = ai.definePrompt({
  name: 'generatePersonalizedMessagePrompt',
  input: {schema: GeneratePersonalizedMessageInputSchema},
  output: {schema: GeneratePersonalizedMessageOutputSchema},
  prompt: `You are an AI assistant designed to help users generate personalized messages to website owners.

  Your goal is to create a message that is tailored to the site owner's interests and increases the chances of getting a response.

  Here's some information to help you craft the message:

  - Your Name: {{{userName}}}
  - Your Email: {{{userEmail}}}
  - Message Purpose: {{{messagePurpose}}}
  - Site Owner's Name: {{{siteOwnerName}}}
  - Your Skills: {{{userSkills}}}
  - Additional Details: {{{additionalDetails}}}

  Please generate a personalized message that is professional, concise, and highlights the potential benefits for the site owner.
  Focus on how your skills and expertise can contribute to their goals, based on the message purpose.
  Keep the message relatively short, under 200 words.
  
  Here is an example message:
  Dear {{siteOwnerName}},

  I hope this message finds you well. My name is {{userName}}, and I am writing to you today because I am impressed with your work.
  I am a {{userSkills}} and I believe that my skills and experience could be a valuable asset to your team. 

  I am particularly interested in {{messagePurpose}}. I believe that my skills and experience in {{userSkills}} would be a valuable asset to your team. 

  I have attached my resume for your review. Thank you for your time and consideration. I look forward to hearing from you soon.
  
  Sincerely,
  {{userName}}`, // add example
});

const generatePersonalizedMessageFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedMessageFlow',
    inputSchema: GeneratePersonalizedMessageInputSchema,
    outputSchema: GeneratePersonalizedMessageOutputSchema,
  },
  async input => {
    const {output} = await generatePersonalizedMessagePrompt(input);
    return output!;
  }
);

export async function generatePersonalizedMessage(
  input: GeneratePersonalizedMessageInput
): Promise<GeneratePersonalizedMessageOutput> {
  return generatePersonalizedMessageFlow(input);
}
