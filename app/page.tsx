import { Suspense } from "react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/navbar";
import Stats from "@/components/sections/stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={null}>
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </Suspense>
    </main>
  );
}