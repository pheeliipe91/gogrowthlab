import { useLanguage } from "@/lib/LanguageContext";
import type { Language } from "@/lib/i18n";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "wouter";

const languages: { code: Language; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "zh", label: "ZH" },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const navLabels = {
    pt: "Pesquisas",
    en: "Researches",
    zh: "研究",
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm"
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <nav className="flex items-center gap-4">
          <Link href="/researches">
            <span className="text-sm text-foreground/60 hover:text-foreground transition-colors cursor-pointer" data-testid="link-researches">
              {navLabels[language]}
            </span>
          </Link>
        </nav>
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-1.5 text-sm text-foreground/40">
            <MapPin className="w-3 h-3" />
            <span>{t.hero.location}</span>
          </div>

          <div className="flex items-center gap-0.5 text-sm">
            {languages.map((lang, index) => (
              <span key={lang.code} className="flex items-center">
                <motion.button
                  onClick={() => setLanguage(lang.code)}
                  className={`px-1.5 py-1 transition-colors ${
                    language === lang.code
                      ? "text-foreground font-medium"
                      : "text-foreground/40 hover:text-foreground"
                  }`}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`button-lang-${lang.code}`}
                >
                  {lang.label}
                </motion.button>
                {index < languages.length - 1 && (
                  <span className="text-foreground/20">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
