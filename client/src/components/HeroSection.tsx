import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-foreground">
              <span className="font-['Playfair_Display'] italic">{t.hero.headline1Italic}</span>
              {" "}{t.hero.headline1}{" "}
              {t.hero.headline2}{" "}
              <span className="font-['Playfair_Display'] italic text-primary">{t.hero.headline2Italic}</span>
              {" "}{t.hero.headline3}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              {t.hero.subheadline}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl space-y-4"
          >
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t.hero.bio1}
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t.hero.bio2}
            </p>
            <p className="text-base lg:text-lg text-foreground leading-relaxed font-medium">
              {t.hero.bio3}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/mentoria">
              <Button
                size="lg"
                className="h-12 px-6"
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
              className="h-12 px-6"
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
            className="border-l-2 border-primary/50 pl-6 py-2"
          >
            <p className="text-lg lg:text-xl font-['Playfair_Display'] italic text-foreground/80 whitespace-pre-line">
              {t.hero.quote}
            </p>
            <cite className="text-sm text-muted-foreground mt-2 block not-italic">
              {t.hero.quoteAuthor}
            </cite>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
