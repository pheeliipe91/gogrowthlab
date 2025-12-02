import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Language, getTranslation } from "./i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof getTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("gogrowth-lang") as Language;
      if (saved && ["pt", "en", "zh"].includes(saved)) {
        return saved;
      }
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("pt")) return "pt";
      if (browserLang.startsWith("zh")) return "zh";
      return "en";
    }
    return "pt";
  });

  useEffect(() => {
    localStorage.setItem("gogrowth-lang", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const t = getTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
