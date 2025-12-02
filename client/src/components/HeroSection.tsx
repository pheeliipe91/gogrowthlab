import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-12"
        >
          <header className="space-y-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-foreground tracking-tight">
              <span className="font-['Playfair_Display'] italic font-medium">{t.hero.headline1Italic}</span>
              {" "}{t.hero.headline1}{" "}
              {t.hero.headline2}{" "}
              <span className="font-['Playfair_Display'] italic font-medium text-primary">{t.hero.headline2Italic}</span>
              {" "}{t.hero.headline3}
            </h1>
            <p className="text-lg lg:text-xl text-foreground/70 leading-relaxed">
              {t.hero.subheadline}
            </p>
          </header>

          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-5 text-base lg:text-lg leading-relaxed"
          >
            <p className="text-foreground/60">
              {t.hero.bio1}
            </p>
            <p className="text-foreground/60">
              {t.hero.bio2}
            </p>
            <p className="text-foreground font-medium">
              {t.hero.bio3}
            </p>
          </motion.article>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <Link href="/mentoria">
              <Button
                size="lg"
                data-testid="button-mentorship"
              >
                {t.hero.mentorshipCta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-testid="button-linkedin"
            >
              <a
                href="https://www.linkedin.com/in/phelipexavier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="mr-2 w-4 h-4" />
                {t.hero.linkedinCta}
              </a>
            </Button>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="border-l border-primary/40 pl-5 py-1 mt-8"
          >
            <p className="text-base lg:text-lg font-['Playfair_Display'] italic text-foreground/60 whitespace-pre-line">
              {t.hero.quote}
            </p>
            <cite className="text-sm text-foreground/40 mt-2 block not-italic">
              {t.hero.quoteAuthor}
            </cite>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
