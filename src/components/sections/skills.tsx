import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CodeXml, ServerCog, Database, PenTool } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend',
    icon: CodeXml,
    skills: [
      { name: 'React & Next.js', proficiency: 95 },
      { name: 'TypeScript', proficiency: 90 },
      { name: 'JavaScript (ES6+)', proficiency: 95 },
      { name: 'Tailwind CSS', proficiency: 98 },
      { name: 'HTML5 & CSS3', proficiency: 92 },
    ],
  },
  {
    category: 'Backend',
    icon: ServerCog,
    skills: [
      { name: 'Node.js & Express', proficiency: 85 },
      { name: 'Python & Django', proficiency: 75 },
      { name: 'REST & GraphQL APIs', proficiency: 88 },
      { name: 'Firebase', proficiency: 92 },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', proficiency: 80 },
      { name: 'MongoDB', proficiency: 85 },
      { name: 'Firestore', proficiency: 90 },
      { name: 'SQL & NoSQL', proficiency: 82 },
    ],
  },
  {
    category: 'Tools & Design',
    icon: PenTool,
    skills: [
      { name: 'Git & GitHub', proficiency: 95 },
      { name: 'Canva', proficiency: 70 },
      { name: 'Figma', proficiency: 85 },
      { name: 'Vercel', proficiency: 95 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-background/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">My Tech Stack</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of technologies I use to bring ideas to life, from frontend design to backend logic.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {skillsData.map((category) => (
            <Card key={category.category} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <category.icon className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-2xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <p className="font-medium">{skill.name}</p>
                        <p className="text-sm text-muted-foreground">{skill.proficiency}%</p>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
