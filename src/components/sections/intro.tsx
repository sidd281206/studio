import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Rocket, Target, Heart, ThumbsUp, ThumbsDown } from 'lucide-react';

const introData = {
  whoAmI: {
    title: "Who I am?",
    icon: User,
    content: "I’m Siddharth, an enthusiastic engineering student currently pursuing a BTech in Information Technology. I have a deep passion for travel and love discovering new places, cultures, and experiences. I cherish quality time with my family and friends, and I also value solitude—often recharging by listening to music, podcasts, and reading insightful books that help me grow."
  },
  lifeGoals: {
    title: "What do I want to do in life?",
    icon: Rocket,
    content: "I strive for financial stability and want to give back to my family by taking them on memorable vacations every few months. I aim to maintain physical fitness and continuously grow into the best version of myself. Success, for me, means being in a position to support those in need through regular donations. I also dream of traveling the world and soaking in diverse cultures and experiences."
  },
  ambitions: {
    title: "Who do I want to be?",
    icon: Target,
    content: "I aspire to become a successful businessman and build a company of my own that makes a meaningful impact."
  },
  strengths: {
    title: "My Strengths (Positively Framed):",
    icon: ThumbsUp,
    points: [
      "Quick Learner: I adapt and absorb new knowledge and skills rapidly.",
      "Strong Swimmer: A symbol of my discipline, resilience, and physical fitness.",
      "Family-Oriented and Compassionate: I value relationships and always strive to support and uplift those around me.",
      "Disciplined and Hardworking: I stay committed and consistent in whatever I pursue.",
      "Goal-Oriented: I maintain a clear vision and work diligently towards achieving my objectives."
    ]
  },
  weaknesses: {
    title: "Areas I’m Working On (formerly 'Weaknesses'):",
    icon: ThumbsDown,
    points: [
      "Deep Thinker (formerly Overthinking): I’m learning to channel my thoughts constructively and take action with clarity.",
      "Enhancing Communication Skills (formerly Soft Skills): I’m actively improving my interpersonal and professional communication to build stronger connections.",
      "Exploring My True Interests: While engineering may not fully resonate with me, I’m using this time to explore and align with my real passions, especially entrepreneurship."
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
