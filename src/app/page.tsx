import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import ComingSoon from "@/components/sections/ComingSoon";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ComingSoon />
      <Timeline />
      <Contact />
    </>
  );
}
