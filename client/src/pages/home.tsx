import Navigation from "@/components/navigation";
import NeuralNetworkIntro from "@/components/neural-network-intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import WorkExperience from "@/components/work-experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <NeuralNetworkIntro />
      <About />
      <Projects />
      <Skills />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}
