import { useLanguage } from "@/lib/LanguageContext";
import { companies } from "@/lib/data";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="experience" className="py-20 lg:py-28 px-6 border-t border-border/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs tracking-[0.2em] text-foreground/40 uppercase mb-3 block">
            {t.experience.subtitle}
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground font-['Playfair_Display'] tracking-tight">
            {t.experience.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-0"
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              variants={itemVariants}
              className="group py-4 border-b border-border/20"
              data-testid={`row-company-${company.id}`}
            >
              <h3 className="font-medium text-foreground">
                {company.name}
              </h3>
              <p className="text-sm text-foreground/50 mt-0.5">
                {company.role[language]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
