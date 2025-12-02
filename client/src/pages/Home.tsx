import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExperimentsSection } from "@/components/ExperimentsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FrameworksSection } from "@/components/FrameworksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ExperimentsSection />
        <ExperienceSection />
        <FrameworksSection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}
