import { useLanguage } from "@/lib/LanguageContext";
import type { Language } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

const languages: { code: Language; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        <motion.a
          href="/"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          data-testid="link-home"
        >
          <span className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground font-['Space_Grotesk']">
            go<span className="text-primary">growth</span>.me
          </span>
        </motion.a>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{t.hero.location}</span>
          </div>

          <div className="flex items-center gap-1 bg-muted/50 rounded-md p-1">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                  language === lang.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`button-lang-${lang.code}`}
              >
                {lang.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
