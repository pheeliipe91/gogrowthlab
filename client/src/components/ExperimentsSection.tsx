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
    <section className="py-16 lg:py-24 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground font-['Playfair_Display'] tracking-tight">
            {t.experiments.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
        >
          {startups.map((startup, index) => (
            <motion.a
              key={startup.id}
              href={startup.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group block py-4 border-b border-border/30 hover:border-primary/50 transition-colors"
              data-testid={`link-experiment-${startup.id}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl lg:text-4xl font-bold font-['Playfair_Display'] text-primary/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg lg:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {startup.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground pl-12 lg:pl-14">
                    {startup.description[language]}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
