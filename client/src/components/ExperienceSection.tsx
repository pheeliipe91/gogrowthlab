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
              className="group grid grid-cols-12 gap-4 py-4 border-b border-border/30 hover:bg-muted/30 transition-colors -mx-4 px-4"
              data-testid={`row-company-${company.id}`}
            >
              <div className="col-span-5 sm:col-span-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
              </div>
              <div className="col-span-5 sm:col-span-5">
                <p className="text-muted-foreground">
                  {company.role[language]}
                </p>
              </div>
              <div className="col-span-2 sm:col-span-3 text-right">
                <span className="text-sm text-muted-foreground/70">
                  {company.period || t.experience.present}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
