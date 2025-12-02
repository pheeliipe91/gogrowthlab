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
    <section id="resources" className="py-20 lg:py-28 px-6 border-t border-border/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs tracking-[0.2em] text-foreground/40 uppercase mb-3 block">
            {t.frameworks.via}
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground font-['Playfair_Display'] tracking-tight">
            {t.frameworks.title}
          </h2>
          <p className="mt-3 text-foreground/50">
            {t.frameworks.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-0"
        >
          {frameworks.map((framework) => (
            <motion.a
              key={framework.id}
              href={framework.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group flex items-baseline justify-between py-4 border-b border-border/20 hover:border-primary/30 transition-colors"
              data-testid={`card-framework-${framework.id}`}
            >
              <div className="flex-1">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {framework.title[language]}
                </h3>
                <p className="text-sm text-foreground/50 mt-1">
                  {framework.description[language]}
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4">
                <span>{t.frameworks.download}</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
