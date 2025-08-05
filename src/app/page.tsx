import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Intro from '@/components/sections/intro';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
