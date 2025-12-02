import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-foreground">
              <span className="font-['Playfair_Display'] italic">{t.hero.tagline1Italic}</span>
              {" "}{t.hero.tagline1}{" "}
              {t.hero.tagline2}{" "}
              <span className="font-['Playfair_Display'] italic">{t.hero.tagline2Italic}</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-foreground">
              {t.hero.tagline3}{" "}
              <span className="font-['Playfair_Display'] italic text-primary">{t.hero.tagline3Italic}</span>
              {" "}{t.hero.tagline3End}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl space-y-4"
          >
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t.hero.bio}
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t.hero.bio2}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
