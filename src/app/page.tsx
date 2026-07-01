import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Results from "@/components/Results";
import FooterSocials, { FloatingSocials } from "@/components/Socials";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <Hero />
      <Courses />
      <Results />
      <FooterSocials />
      <FloatingSocials />
    </main>
  );
}
