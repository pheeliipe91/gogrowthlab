import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 border-t border-border/50"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="font-bold text-foreground font-['Space_Grotesk']">
              {t.footer.lab}
            </span>
            <span className="text-border">|</span>
            <span>{t.footer.from}</span>
          </div>
          
          <span>{currentYear} {t.footer.copyright}</span>
        </div>
      </div>
    </motion.footer>
  );
}
