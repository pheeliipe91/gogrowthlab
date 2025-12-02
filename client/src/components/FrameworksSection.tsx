import { useLanguage } from "@/lib/LanguageContext";
import { frameworks } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FrameworksSection() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
            {t.frameworks.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            {t.frameworks.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {frameworks.map((framework) => (
            <motion.a
              key={framework.id}
              href={framework.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group block p-6 border border-border/50 hover:border-primary/30 bg-card/50 transition-all"
              data-testid={`card-framework-${framework.id}`}
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {framework.title[language]}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {framework.description[language]}
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <span>{t.frameworks.download}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
