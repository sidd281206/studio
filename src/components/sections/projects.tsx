import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'Trinova Trends - E-Commerce Platform',
    description: 'Trinova Trends is a cosmetics dropshipping brand committed to bringing high-quality, affordable beauty products directly to your doorstep. We focus on curating a wide range of skincare, makeup, and wellness essentials that blend global trends with everyday needs—making self-care simple, stylish, and accessible for all.',
    image: 'https://i.postimg.cc/XYR1jtzZ/Screenshot-2025-03-29-170254.png',
    hint: 'fashion e-commerce',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Shopify', 'Meta Ads'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'V Attendance',
    description: 'An online attendance platform for college, designed to streamline the attendance tracking process for both students and faculty. Features include real-time updates, and a user-friendly interface for managing classes and attendance records.',
    image: 'https://i.postimg.cc/xCwLMSLH/Screenshot-2025-08-05-225617.png',
    hint: 'college attendance',
    tags: ['React', 'Firebase', 'Zustand', 'dnd-kit', 'JavaScript', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website (the one you are currently on!) to showcase my skills and projects, built with Next.js and Genkit.',
    image: 'https://placehold.co/600x400.png',
    hint: 'developer portfolio',
    tags: ['Next.js', 'Genkit', 'Shadcn UI', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, using D3.js and React to create dynamic charts and graphs.',
    image: 'https://placehold.co/600x400.png',
    hint: 'analytics dashboard',
    tags: ['React', 'D3.js', 'Node.js', 'Express'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud of. Each one represents a unique challenge and a learning opportunity.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
          {projectsData.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={project.hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-muted/50">
                <div className="flex w-full justify-end gap-4">
                  <Button asChild variant="ghost" size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" /> Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" /> Source Code
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
