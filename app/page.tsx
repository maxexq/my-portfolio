// * Components
import HeroSection from "./pages/Hero";
import Projects from "./pages/Projects";
import Stacks from "./pages/Stacks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 max-w-5xl mx-auto">
      <HeroSection />
      <Stacks />
      <Projects />
    </main>
  );
}
