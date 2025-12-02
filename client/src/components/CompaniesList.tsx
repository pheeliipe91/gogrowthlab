import { useLanguage } from "@/lib/LanguageContext";
import { companies } from "@/lib/data";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function CompaniesList() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
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
    <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground font-['Space_Grotesk'] mb-3">
            {t.companies.title}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t.companies.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              variants={itemVariants}
              className="group relative flex flex-col items-center text-center p-6 rounded-lg bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              data-testid={`card-company-${company.id}`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg mb-1">
                {company.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {company.role[language]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
