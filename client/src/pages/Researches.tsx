import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Brain, Scroll, Users, Clock, Lightbulb, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Researches() {
  const { language } = useLanguage();

  const titles = {
    pt: {
      back: "Voltar",
      pageTitle: "Pesquisas",
      pageSubtitle: "Estudos e análises aprofundadas",
      articleTitle: "Um Guia Prático para Táticas Poderosas de Aprendizado Chinês",
      articleSubtitle: "Da Sabedoria Antiga à Maestria Moderna: Desbloqueando 2.500 Anos de Tradição Acadêmica",
      summary: "Resumo Executivo",
      summaryText: "Este guia sintetiza milênios de tradição de aprendizado chinesa com ciência cognitiva moderna, oferecendo um framework prático para dominar assuntos complexos.",
      section1Title: "O Poder Duradouro da Memória",
      section1Subtitle: "Técnicas Mnemônicas Através dos Milênios",
      section2Title: "O Framework Confucionista",
      section2Subtitle: "O Ciclo Dinâmico de Aprender, Pensar e Fazer",
      section3Title: "O Legado dos Exames Imperiais",
      section3Subtitle: "1.300 Anos de Cultura Educacional",
      section4Title: "A Síntese",
      section4Subtitle: "Combinando Técnicas Antigas com Ciência Moderna",
    },
    en: {
      back: "Back",
      pageTitle: "Researches",
      pageSubtitle: "In-depth studies and analyses",
      articleTitle: "A Practical Guide to Powerful Chinese Learning Tactics",
      articleSubtitle: "From Ancient Wisdom to Modern Mastery: Unlocking 2,500 Years of Scholarly Tradition",
      summary: "Executive Summary",
      summaryText: "This comprehensive guide synthesizes millennia of Chinese learning tradition with modern cognitive science, offering a practical framework for mastering complex subjects.",
      section1Title: "The Enduring Power of Memory",
      section1Subtitle: "Mnemonic Techniques Across Millennia",
      section2Title: "The Confucian Framework",
      section2Subtitle: "The Dynamic Cycle of Learning, Thinking, and Doing",
      section3Title: "The Imperial Examination Legacy",
      section3Subtitle: "1,300 Years of Educational Culture",
      section4Title: "The Synthesis",
      section4Subtitle: "Blending Ancient Techniques with Modern Science",
    },
    zh: {
      back: "返回",
      pageTitle: "研究",
      pageSubtitle: "深度研究与分析",
      articleTitle: "中文学习策略实用指南",
      articleSubtitle: "从古代智慧到现代精通：解锁2500年的学术传统",
      summary: "执行摘要",
      summaryText: "本指南将数千年的中国学习传统与现代认知科学相结合，提供了一个掌握复杂学科的实用框架。",
      section1Title: "记忆的持久力量",
      section1Subtitle: "跨越千年的记忆技术",
      section2Title: "儒家框架",
      section2Subtitle: "学、思、行的动态循环",
      section3Title: "科举遗产",
      section3Subtitle: "1300年的教育文化",
      section4Title: "综合",
      section4Subtitle: "将古代技术与现代科学相结合",
    },
  };

  const t = titles[language];

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
            <h1 className="text-4xl lg:text-5xl font-medium text-foreground font-['Playfair_Display'] tracking-tight mb-8">
              {t.pageTitle}
            </h1>
          </header>

          <article className="space-y-16">
            <section className="border border-border/30 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-['Playfair_Display'] font-medium text-foreground mb-2">
                      {t.articleTitle}
                    </h2>
                    <p className="text-foreground/60 text-lg">
                      {t.articleSubtitle}
                    </p>
                  </div>
                </div>

                <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 mt-8">
                  <h3 className="text-sm font-medium text-foreground/80 uppercase tracking-wider mb-4">
                    {t.summary}
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    {t.summaryText}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Memory Mastery</p>
                        <p className="text-xs text-foreground/50">Ancient mnemonics validated by neuroscience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Confucian Framework</p>
                        <p className="text-xs text-foreground/50">Learning, thinking, and doing cycle</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Scroll className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Imperial Legacy</p>
                        <p className="text-xs text-foreground/50">1,300 years of examination culture</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12 space-y-12">
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-['Playfair_Display'] font-medium text-foreground">
                        {t.section1Title}
                      </h3>
                      <p className="text-sm text-foreground/50">{t.section1Subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-foreground/70 pl-11">
                    <p>
                      The Chinese learning tradition has always placed profound emphasis on memory power. From ancient scholars preparing for imperial examinations to modern students, the ability to retain vast amounts of information has been a cornerstone of success.
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                      <p className="text-sm italic">
                        "The Imperial Examination System (科举) dominated Chinese education for over 1,300 years, requiring candidates to memorize entire classical texts."
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-medium text-foreground text-sm mb-2">Rhyme and Rhythm (口诀)</h4>
                        <p className="text-xs text-foreground/60">Transform factual information into memorable verses and rhythmic chants.</p>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-medium text-foreground text-sm mb-2">Memory Palace</h4>
                        <p className="text-xs text-foreground/60">Matteo Ricci brought the Method of Loci to China in the 16th century.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-['Playfair_Display'] font-medium text-foreground">
                        {t.section2Title}
                      </h3>
                      <p className="text-sm text-foreground/50">{t.section2Subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-foreground/70 pl-11">
                    <p>
                      Beyond memorization techniques, Chinese learning is rooted in a philosophical framework established by Confucius over 2,500 years ago—viewing learning as a lifelong process of self-cultivation.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 my-6">
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <span className="text-2xl font-['Playfair_Display']">学</span>
                        <p className="text-sm font-medium mt-2">Learning (Xué)</p>
                        <p className="text-xs text-foreground/50">Active acquisition</p>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <span className="text-2xl font-['Playfair_Display']">思</span>
                        <p className="text-sm font-medium mt-2">Thinking (Sī)</p>
                        <p className="text-xs text-foreground/50">Critical reflection</p>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <span className="text-2xl font-['Playfair_Display']">行</span>
                        <p className="text-sm font-medium mt-2">Doing (Xíng)</p>
                        <p className="text-xs text-foreground/50">Practical application</p>
                      </div>
                    </div>
                    <blockquote className="border-l-4 border-primary pl-4 italic">
                      "Learning without thought is labor lost; thought without learning is perilous" — Confucius
                    </blockquote>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-['Playfair_Display'] font-medium text-foreground">
                        {t.section3Title}
                      </h3>
                      <p className="text-sm text-foreground/50">{t.section3Subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-foreground/70 pl-11">
                    <p>
                      The imperial examination system (科举) lasted over 1,300 years, creating a culture of intense competition, rigorous study, and deep belief in examinations as mechanisms for social mobility.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Timed Mock Exams</p>
                          <p className="text-xs text-foreground/60">Regular simulated sessions to build mental stamina and time management.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Scroll className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Thousand Character Classic</p>
                          <p className="text-xs text-foreground/60">1,000 unique characters in 250 rhyming couplets for systematic learning.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-['Playfair_Display'] font-medium text-foreground">
                        {t.section4Title}
                      </h3>
                      <p className="text-sm text-foreground/50">{t.section4Subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-foreground/70 pl-11">
                    <p>
                      The most powerful approach combines ancient wisdom with modern cognitive science. Schema-Associated Mnemonics, validated by 2023 research, shows 60% retention vs 38% with rote memorization.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-6 mt-6">
                      <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-primary" />
                        Practical Framework
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm">Create rhymes and jingles for complex information</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm">Design memory palaces using familiar locations</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm">Use Spaced Repetition Systems (Anki, Memrise)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm">Apply the Feynman Technique for true mastery</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </article>
        </motion.div>
      </div>
    </div>
  );
}
