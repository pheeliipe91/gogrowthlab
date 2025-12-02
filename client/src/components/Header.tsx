import { useLanguage } from "@/lib/LanguageContext";
import type { Language } from "@/lib/i18n";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const languages: { code: Language; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "zh", label: "ZH" },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/30"
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <motion.a
          href="/"
          className="flex items-center gap-2 group"
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.2 }}
          data-testid="link-home"
        >
          <span className="text-lg font-bold tracking-tight text-foreground font-['Space_Grotesk']">
            {t.hero.name}
          </span>
        </motion.a>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.hero.location}</span>
          </div>

          <div className="flex items-center gap-0.5 text-sm">
            {languages.map((lang, index) => (
              <span key={lang.code} className="flex items-center">
                <motion.button
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 transition-colors ${
                    language === lang.code
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`button-lang-${lang.code}`}
                >
                  {lang.label}
                </motion.button>
                {index < languages.length - 1 && (
                  <span className="text-border">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
