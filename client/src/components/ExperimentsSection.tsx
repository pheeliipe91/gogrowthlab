import { useLanguage } from "@/lib/LanguageContext";
import { startups } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ExperimentsSection() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="experiments" className="py-20 lg:py-28 px-6 border-t border-border/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs tracking-[0.2em] text-foreground/40 uppercase mb-3 block">
            {t.experiments.subtitle}
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground font-['Playfair_Display'] tracking-tight">
            {t.experiments.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-0"
        >
          {startups.map((startup, index) => (
            <motion.a
              key={startup.id}
              href={startup.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group flex items-baseline justify-between py-4 border-b border-border/20 hover:border-primary/30 transition-colors"
              data-testid={`link-experiment-${startup.id}`}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-mono text-foreground/30 w-6">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    {startup.name}
                  </h3>
                  <p className="text-sm text-foreground/50 mt-1">
                    {startup.description[language]}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
