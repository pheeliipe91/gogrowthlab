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

  return (
    <div className="relative min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center items-center text-center px-8 lg:px-16 py-20 lg:py-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/8 via-primary/3 to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-radial from-primary/5 to-transparent blur-2xl opacity-40" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          {t.hero.role}
        </span>
      </motion.div>

      <div className="relative z-10 space-y-5 lg:space-y-8 max-w-4xl">
        <motion.p
          custom={0}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={lineVariants}
          className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-light text-foreground/80 font-['Playfair_Display'] italic leading-relaxed"
          data-testid="text-poem-line-1"
        >
          {t.hero.poem.line1}
        </motion.p>

        <motion.p
          custom={1}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={lineVariants}
          className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-light text-foreground/80 font-['Playfair_Display'] italic leading-relaxed"
          data-testid="text-poem-line-2"
        >
          {t.hero.poem.line2}
        </motion.p>

        <motion.p
          custom={2}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={lineVariants}
          className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-light text-foreground/80 font-['Playfair_Display'] italic leading-relaxed"
          data-testid="text-poem-line-3"
        >
          {t.hero.poem.line3}{" "}
          <span className="highlight-word">
            {t.hero.poem.line3Highlight}
          </span>{" "}
          {t.hero.poem.line3End}
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={lineVariants}
          className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-light text-foreground/80 font-['Playfair_Display'] italic leading-relaxed"
          data-testid="text-poem-line-4"
        >
          {t.hero.poem.line4}{" "}
          <span className="highlight-word">
            {t.hero.poem.line4Highlight}
          </span>{" "}
          {t.hero.poem.line4End}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
