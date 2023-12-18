import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./pages/Hero";
import Projects from "./pages/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <HeroSection />
      <Projects />

      <Footer />
    </main>
  );
}
