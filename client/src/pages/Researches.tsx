import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Researches() {
  const { language } = useLanguage();

  const titles = {
    pt: {
      back: "Voltar",
      pageTitle: "Pesquisas",
      pageSubtitle: "Estudos e análises aprofundadas",
      readMore: "Ler artigo completo",
    },
    en: {
      back: "Back",
      pageTitle: "Researches",
      pageSubtitle: "In-depth studies and analyses",
      readMore: "Read full article",
    },
    zh: {
      back: "返回",
      pageTitle: "研究",
      pageSubtitle: "深度研究与分析",
      readMore: "阅读全文",
    },
  };

  const t = titles[language];

  const researches = [
    {
      id: "chinese-learning",
      title: {
        pt: "Um Guia Prático para Táticas Poderosas de Aprendizado Chinês",
        en: "A Practical Guide to Powerful Chinese Learning Tactics",
        zh: "中文学习策略实用指南",
      },
      subtitle: {
        pt: "Da Sabedoria Antiga à Maestria Moderna: Desbloqueando 2.500 Anos de Tradição Acadêmica",
        en: "From Ancient Wisdom to Modern Mastery: Unlocking 2,500 Years of Scholarly Tradition",
        zh: "从古代智慧到现代精通：解锁2500年的学术传统",
      },
      description: {
        pt: "Este guia sintetiza milênios de tradição de aprendizado chinesa com ciência cognitiva moderna, oferecendo um framework prático para dominar assuntos complexos. Inclui técnicas mnemônicas, o framework confucionista de 学-思-行, e estratégias dos exames imperiais.",
        en: "This comprehensive guide synthesizes millennia of Chinese learning tradition with modern cognitive science, offering a practical framework for mastering complex subjects. Includes mnemonic techniques, the Confucian 学-思-行 framework, and imperial examination strategies.",
        zh: "本指南将数千年的中国学习传统与现代认知科学相结合，提供了一个掌握复杂学科的实用框架。包括记忆技术、儒家学-思-行框架和科举考试策略。",
      },
      topics: ["Memory", "Confucianism", "科举", "SRS"],
      href: "/researches/chinese-learning",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-8" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.back}
            </Button>
          </Link>

          <header className="mb-16">
            <span className="text-xs tracking-[0.2em] text-foreground/40 uppercase mb-3 block">
              {t.pageSubtitle}
            </span>
            <h1 className="text-4xl lg:text-5xl font-medium text-foreground font-['Playfair_Display'] tracking-tight">
              {t.pageTitle}
            </h1>
          </header>

          <div className="space-y-8">
            {researches.map((research) => (
              <Link key={research.id} href={research.href}>
                <motion.article
                  className="group border border-border/30 rounded-lg overflow-hidden hover:border-primary/30 transition-colors cursor-pointer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  data-testid={`card-research-${research.id}`}
                >
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl lg:text-2xl font-['Playfair_Display'] font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                          {research.title[language]}
                        </h2>
                        <p className="text-sm text-foreground/50">
                          {research.subtitle[language]}
                        </p>
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {research.description[language]}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {research.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs px-2 py-1 bg-muted/50 text-foreground/60 rounded"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t.readMore}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
