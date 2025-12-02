import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroPoem() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const highlightVariants = {
    hidden: { backgroundSize: "0% 100%" },
    visible: {
      backgroundSize: "100% 100%",
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="relative min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          {t.hero.role}
        </span>
      </motion.div>

      <div className="relative z-10 space-y-4 lg:space-y-6 max-w-3xl">
        <motion.p
          custom={0}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={lineVariants}
          className="text-2xl sm:text-3xl lg:text-5xl font-light text-foreground/80 font-['Playfair_Display'] italic leading-relaxed"
          data-testid="text-poem-line-1"
        >
          {t.hero.poem.line1}
        </motion.p>

        <motion.p
          custom={1}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={lineVariants}
          className="text-2xl sm:text-3xl lg:text-5xl font-light text-foreground/80 font-['Playfair_Display'] italic leading-relaxed"
          data-testid="text-poem-line-2"
        >
          {t.hero.poem.line2}
        </motion.p>

        <motion.p
          custom={2}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={lineVariants}
          className="text-2xl sm:text-3xl lg:text-5xl font-light text-foreground/80 font-['Playfair_Display'] italic leading-relaxed"
          data-testid="text-poem-line-3"
        >
          {t.hero.poem.line3}{" "}
          <motion.span
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={highlightVariants}
            className="font-semibold text-primary relative inline-block"
            style={{
              backgroundImage: "linear-gradient(120deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.2) 100%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 88%",
            }}
          >
            {t.hero.poem.line3Highlight}
          </motion.span>{" "}
          {t.hero.poem.line3End}
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={lineVariants}
          className="text-2xl sm:text-3xl lg:text-5xl font-light text-foreground/80 font-['Playfair_Display'] italic leading-relaxed"
          data-testid="text-poem-line-4"
        >
          {t.hero.poem.line4}{" "}
          <motion.span
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={highlightVariants}
            className="font-semibold text-primary relative inline-block"
            style={{
              backgroundImage: "linear-gradient(120deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.2) 100%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 88%",
            }}
          >
            {t.hero.poem.line4Highlight}
          </motion.span>{" "}
          {t.hero.poem.line4End}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </div>
  );
}
