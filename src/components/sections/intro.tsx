import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Rocket, Target, Heart, ThumbsUp, ThumbsDown } from 'lucide-react';

const introData = {
  whoAmI: {
    title: "Who I Am",
    icon: User,
    content: "I am Siddharth, an engineering student currently pursuing a BTech in Information Technology. Apart from this, I love to travel and explore new places and experiences. I also enjoy spending time with my family and friends. Additionally, I love spending time with myself by listening to music, podcasts, and reading books."
  },
  lifeGoals: {
    title: "What I Want to Do in Life",
    icon: Rocket,
    content: "I want to achieve financial stability and take my parents on a vacation every 4–5 months. I want to be physically fit and become the best version of myself. I aspire to be successful enough to donate a portion of my income to those in need. I want to travel around the world."
  },
  ambitions: {
    title: "Who I Want to Be",
    icon: Target,
    content: "I want to be a businessman and start my own company."
  },
  strengths: {
    title: "My Strengths",
    icon: ThumbsUp,
    points: [
      "Fast learner",
      "Swimming",
      "Family-Oriented & Kind",
      "Disciplined & Hardworking",
      "Goal-Oriented"
    ]
  },
  weaknesses: {
    title: "My Weaknesses",
    icon: ThumbsDown,
    points: [
      "Overthinking",
      "Soft Skills",
      "Lack of Interest in Engineering"
    ]
  }
};

export default function Intro() {
  return (
    <section id="intro" className="w-full py-20 md:py-32 bg-background/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">A Little More About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Beyond the code and design, here's a glimpse into my life, my goals, and what makes me tick.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 md:grid-cols-1 lg:grid-cols-2">
          <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 col-span-1 lg:col-span-2">
            <CardHeader className="flex flex-row items-center gap-4">
              <introData.whoAmI.icon className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline text-2xl">{introData.whoAmI.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{introData.whoAmI.content}</p>
            </CardContent>
          </Card>
           <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 col-span-1 lg:col-span-2">
            <CardHeader className="flex flex-row items-center gap-4">
              <introData.lifeGoals.icon className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline text-2xl">{introData.lifeGoals.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{introData.lifeGoals.content}</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 col-span-1 lg:col-span-2">
            <CardHeader className="flex flex-row items-center gap-4">
              <introData.ambitions.icon className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline text-2xl">{introData.ambitions.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{introData.ambitions.content}</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <introData.strengths.icon className="w-8 h-8 text-green-500" />
              <CardTitle className="font-headline text-2xl">{introData.strengths.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {introData.strengths.points.map(point => <li key={point}>{point}</li>)}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <introData.weaknesses.icon className="w-8 h-8 text-red-500" />
              <CardTitle className="font-headline text-2xl">{introData.weaknesses.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {introData.weaknesses.points.map(point => <li key={point}>{point}</li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
