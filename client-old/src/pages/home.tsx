import Navigation from "@/components/navigation";
import MobileNeuralIntro from "@/components/mobile-neural-intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import InteractiveProjects from "@/components/interactive-projects";
import WorkExperience from "@/components/work-experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <MobileNeuralIntro />
      <About />
      <InteractiveProjects />
      <Skills />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}
