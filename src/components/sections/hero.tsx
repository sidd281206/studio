import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Siddharth Shinde
              </h1>
              <p className="text-xl text-foreground/80 font-medium">
                Future Founder | Tech & Design Enthusiast | Driven to Build Impact
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I'm an IT engineering student with an entrepreneurial mindset, passionate about building scalable digital products that solve real problems. With growing skills in full-stack development and UI/UX design, I’m on a mission to combine technology, creativity, and purpose to create user-first solutions. I aspire to build my own company someday—focused on innovation, simplicity, and positive impact.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
             <Avatar className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-primary/20 shadow-lg">
                <AvatarImage src="https://i.postimg.cc/gjmfY1ry/IMG-20241003-WA0029.jpg" alt="Siddharth Shinde" data-ai-hint="professional portrait" />
                <AvatarFallback>SS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}
