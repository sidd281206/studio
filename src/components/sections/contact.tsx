import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import MessageGenerator from '@/components/message-generator';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-background/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Let's Connect</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Have a project in mind, a job opportunity, or just want to say hi? I'd love to hear from you. Reach out via email, social media, or use the handy message generator to craft the perfect opening line.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Alex Doe</h3>
              <p className="text-muted-foreground">
                Email: <a href="mailto:alex.doe@example.com" className="text-primary hover:underline">alex.doe@example.com</a>
              </p>
            </div>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <Link href="#" target="_blank"><Github className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <Link href="#" target="_blank"><Linkedin className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <Link href="#" target="_blank"><Twitter className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
          <div>
            <MessageGenerator />
          </div>
        </div>
      </div>
    </section>
  );
}
