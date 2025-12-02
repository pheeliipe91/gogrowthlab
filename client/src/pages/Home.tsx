import { Header } from "@/components/Header";
import { HeroPoem } from "@/components/HeroPoem";
import { StartupsList } from "@/components/StartupsList";
import { CompaniesList } from "@/components/CompaniesList";
import { FrameworksSection } from "@/components/FrameworksSection";
import { StudySection } from "@/components/StudySection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block lg:col-span-3 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto lg:pr-4 px-6"
            >
              <StartupsList />
            </motion.aside>

            <div className="lg:col-span-6">
              <HeroPoem />
              
              <div className="lg:hidden px-6">
                <StartupsList />
              </div>
              
              <div className="lg:hidden px-6">
                <CompaniesList />
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block lg:col-span-3 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto lg:pl-4 px-6"
            >
              <CompaniesList />
            </motion.aside>
          </div>
        </div>

        <FrameworksSection />
        <StudySection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}
