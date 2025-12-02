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
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl lg:text-3xl font-semibold text-foreground font-['Space_Grotesk'] mb-2">
          {t.companies.title}
        </h2>
        <p className="text-sm text-muted-foreground">{t.companies.subtitle}</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-2"
      >
        {companies.map((company) => (
          <motion.div
            key={company.id}
            variants={itemVariants}
            className="group relative flex items-center gap-4 p-4 rounded-md border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 overflow-hidden"
            data-testid={`card-company-${company.id}`}
          >
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
              <Building2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {company.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {company.role[language]}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
