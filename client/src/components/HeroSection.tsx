import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import profilePhoto from "@assets/image_1764726921551.png";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-10"
        >
          <div className="flex flex-col items-start gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-foreground/10">
              <img 
                src={profilePhoto} 
                alt="Phelipe Xavier"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-foreground">Phelipe Xavier</h2>
              <p className="text-sm text-foreground/50">夏腓力</p>
            </div>
          </div>

          <header>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground tracking-tight font-light">
              {t.hero.headline1}{" "}
              <span className="font-['Playfair_Display'] italic font-normal text-primary">{t.hero.headline1Italic}</span>
              <br />
              {t.hero.headline2}{" "}
              <span className="font-['Playfair_Display'] italic font-normal text-primary">{t.hero.headline2Italic}</span>
            </h1>
          </header>

          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6 text-base lg:text-lg leading-relaxed"
          >
            <p className="text-foreground/70">
              {t.hero.bio1}
            </p>
            <p className="text-foreground/70">
              {t.hero.bio2}
            </p>
            <p className="text-foreground/90">
              {t.hero.bio3}
            </p>
          </motion.article>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 pt-4"
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
        </motion.div>
      </div>
    </section>
  );
}
