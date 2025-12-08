import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { ExperimentsSection } from "@/components/ExperimentsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FrameworksSection } from "@/components/FrameworksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="GoGrowth.me | Solo Empreendedor - Kunshan, China"
        description="Portfolio de um Solo Empreendedor construindo startups da China. Experimentos, frameworks e mentorias."
      />
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
