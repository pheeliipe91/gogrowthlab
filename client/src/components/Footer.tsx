import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Heart, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 border-t border-border/50"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground font-['Space_Grotesk']">
              go<span className="text-primary">growth</span>.me
            </span>
            <span className="text-muted-foreground/50">|</span>
            <span>{currentYear} {t.footer.copyright}</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <span>{t.footer.madeWith}</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>{t.footer.from}</span>
            <MapPin className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
