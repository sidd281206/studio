"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generatePersonalizedMessage, GeneratePersonalizedMessageInput } from '@/ai/flows/generate-personalized-message';
import { useToast } from "@/hooks/use-toast"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Copy } from 'lucide-react';

const formSchema = z.object({
  userName: z.string().min(2, "Name must be at least 2 characters."),
  userEmail: z.string().email("Please enter a valid email."),
  messagePurpose: z.string({ required_error: "Please select a purpose." }).min(1, "Please select a purpose."),
  userSkills: z.string().min(10, "Please describe your skills in at least 10 characters."),
  additionalDetails: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function MessageGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      userEmail: '',
      messagePurpose: '',
      userSkills: '',
      additionalDetails: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setGeneratedMessage('');
    try {
      const input: GeneratePersonalizedMessageInput = {
        ...values,
        siteOwnerName: 'Siddharth Shinde',
      };
      const result = await generatePersonalizedMessage(input);
      setGeneratedMessage(result.personalizedMessage);
      toast({
        title: "Message Generated!",
        description: "Your personalized message is ready below.",
      });
    } catch (error) {
      console.error('Error generating message:', error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem generating your message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    toast({
      title: "Copied to clipboard!",
    });
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">AI Message Generator</CardTitle>
        <CardDescription>
          Not sure how to break the ice? Fill out the form below and let AI craft a personalized message for you.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jane.smith@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="messagePurpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purpose</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the purpose of your message" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Job Opportunity">Job Opportunity</SelectItem>
                      <SelectItem value="Collaboration">Collaboration</SelectItem>
                      <SelectItem value="Networking">Networking</SelectItem>
                       <SelectItem value="Mentorship">Mentorship</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userSkills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Skills/Expertise</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Senior Frontend Developer, UI/UX Designer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Details (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any specific project or idea you want to discuss?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
            <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? 'Generating...' : 'Generate Message'}
            </Button>
            {generatedMessage && (
              <div className="relative space-y-2">
                <FormLabel>Your Generated Message</FormLabel>
                <Textarea readOnly value={generatedMessage} className="pr-12" rows={8} />
                 <Button type="button" size="icon" variant="ghost" className="absolute top-7 right-1" onClick={handleCopy}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
