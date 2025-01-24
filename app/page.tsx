import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <link rel="icon" href="/favicon.ico" />
        <Hero />
        <About />
        <Experience />
        <Contact />
      </div>
    </>
  );
}