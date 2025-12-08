import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function ChineseLearningResearch() {
  const { language } = useLanguage();
  
  const backLabel = {
    pt: "Voltar",
    en: "Back",
    zh: "返回",
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        .serif-display { font-family: 'Crimson Text', serif; }
        .insight-highlight {
          background: linear-gradient(120deg, rgba(212, 175, 55, 0.1) 0%, rgba(139, 154, 139, 0.1) 100%);
          border-left: 4px solid #D4AF37;
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 0 0.5rem 0.5rem 0;
        }
        .citation-link {
          color: #D4AF37;
          text-decoration: none;
          font-weight: 500;
        }
        .citation-link:hover {
          color: #2D4A2B;
          text-decoration: underline;
        }
        .ancient-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(139, 154, 139, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <div className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#8B9A8B]/20">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/researches">
            <Button variant="ghost" size="sm" className="text-[#2D4A2B]" data-testid="button-back-research">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {backLabel[language]}
            </Button>
          </Link>
        </div>
      </div>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <section className="min-h-[70vh] relative overflow-hidden ancient-pattern">
          <div className="container mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 relative overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(45, 74, 43, 0.9) 0%, rgba(139, 154, 139, 0.8) 50%, rgba(212, 175, 55, 0.6) 100%)' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A2B]/80 via-transparent to-transparent"></div>
                <div className="relative p-8 lg:p-12 min-h-[400px] flex flex-col justify-end">
                  <h1 className="serif-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    <em className="italic">A Practical Guide to</em>
                    <br />
                    Powerful Chinese
                    <br />
                    <span className="text-[#D4AF37]">Learning Tactics</span>
                  </h1>
                  <p className="text-white/90 text-lg max-w-2xl">
                    From Ancient Wisdom to Modern Mastery: Unlocking 2,500 Years of Scholarly Tradition
                  </p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-8">
                <h3 className="serif-display text-xl font-semibold text-[#2D4A2B] mb-4">Executive Summary</h3>
                <p className="text-sm text-[#6B7280] mb-6">
                  This comprehensive guide synthesizes millennia of Chinese learning tradition with modern cognitive science, offering a practical framework for mastering complex subjects.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D4AF37] mt-1">🧠</span>
                    <div>
                      <strong className="text-[#2D4A2B]">Memory Mastery:</strong>
                      <span className="text-[#6B7280]"> Ancient mnemonic techniques validated by neuroscience</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D4AF37] mt-1">☯️</span>
                    <div>
                      <strong className="text-[#2D4A2B]">Confucian Framework:</strong>
                      <span className="text-[#6B7280]"> The dynamic cycle of learning, thinking, and doing</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D4AF37] mt-1">📜</span>
                    <div>
                      <strong className="text-[#2D4A2B]">Imperial Legacy:</strong>
                      <span className="text-[#6B7280]"> Structured discipline from 1,300 years of examination culture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Enduring Power of Memory */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <header className="mb-12">
              <h2 className="serif-display text-4xl font-bold text-[#2D4A2B] mb-4">
                The Enduring Power of Memory
              </h2>
              <p className="text-xl text-[#6B7280] leading-relaxed">
                Mnemonic Techniques Across Millennia: From Imperial Examinations to Modern Mastery
              </p>
            </header>

            <div className="prose prose-lg max-w-none text-[#2D4A2B]">
              <p className="text-lg leading-relaxed mb-8">
                The Chinese learning tradition, stretching back thousands of years, has always placed a profound emphasis on the power of memory. From the ancient scholars preparing for the grueling imperial examinations to modern students mastering complex subjects, the ability to retain and recall vast amounts of information has been a cornerstone of academic and professional success.
              </p>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">Ancient Foundations: Mnemonics in the Imperial Examination System</h3>

                <div className="insight-highlight">
                  <h4 className="font-semibold text-[#2D4A2B] mb-3">
                    👑 The Imperial Examination System (科举)
                  </h4>
                  <p className="mb-0 text-[#6B7280]">
                    For over 1,300 years, this system dominated Chinese education, requiring candidates to memorize entire classical texts and demonstrate mastery through rigorous, timed essays. The pressure to succeed, which could elevate a family's social standing for generations, created powerful incentives to perfect cognitive tools.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="serif-display text-xl font-semibold text-[#2D4A2B] mb-4">The Art of Rhyme and Rhythm</h4>
                    <p className="mb-4 text-[#6B7280]">
                      One of the most pervasive mnemonic techniques was <strong>"口诀" (kǒujué)</strong>, or "oral formulas." These rhythmic chants transformed factual information into memorable verses.
                    </p>
                    <blockquote className="border-l-4 border-[#D4AF37] pl-4 italic text-[#6B7280] bg-[#8B9A8B]/5 p-4 rounded-r-lg">
                      "唐尧虞舜夏商周, 秦汉魏晋南北朝, 隋唐五代十国宋, 元明清民到共和"
                      <footer className="text-sm mt-2 not-italic">
                        — Rhyme for Chinese dynasties, encapsulating 4,000+ years of history
                      </footer>
                    </blockquote>
                  </div>

                  <div>
                    <h4 className="serif-display text-xl font-semibold text-[#2D4A2B] mb-4">Matteo Ricci's Memory Palace</h4>
                    <p className="mb-4 text-[#6B7280]">
                      The Jesuit missionary <strong>Matteo Ricci</strong> brought the Method of Loci to China in the 16th century, writing <em>《西国记法》</em> ("The Western Method of Memory") to teach Chinese nobles.
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      This technique involves visualizing a familiar physical location and placing items to be remembered at specific "loci" along a predetermined route.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">Modern Adaptations: Scientifically-Backed Memory Methods</h3>

                <div className="bg-white/70 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-[#2D4A2B] mb-4">
                    🧪 Schema-Associated Mnemonics for Classical Texts
                  </h4>
                  <p className="mb-4 text-[#6B7280]">
                    A 2023 study in <em>Scientific Reports</em> provided empirical validation for the "Schema-Associated Mnemonic Method" for classical Chinese poetry. This technique connects new information to existing knowledge structures, significantly improving both memory efficiency and retention.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[#8B9A8B]/30">
                          <th className="text-left py-3 px-4 text-[#2D4A2B]">Metric</th>
                          <th className="text-left py-3 px-4 text-[#2D4A2B]">Rote Memorization</th>
                          <th className="text-left py-3 px-4 text-[#2D4A2B]">Schema-Associated Mnemonics</th>
                          <th className="text-left py-3 px-4 text-[#2D4A2B]">Significance</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#6B7280]">
                        <tr className="border-b border-[#8B9A8B]/10">
                          <td className="py-3 px-4 font-medium">Retention Rate (1 week)</td>
                          <td className="py-3 px-4">37.93%</td>
                          <td className="py-3 px-4 text-[#2D4A2B] font-semibold">59.99%</td>
                          <td className="py-3 px-4">p &lt; 0.05</td>
                        </tr>
                        <tr className="border-b border-[#8B9A8B]/10">
                          <td className="py-3 px-4 font-medium">Fully-Memorized Lines</td>
                          <td className="py-3 px-4">2.25</td>
                          <td className="py-3 px-4 text-[#2D4A2B] font-semibold">4.90</td>
                          <td className="py-3 px-4">p &lt; 0.05</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Median Score (/20)</td>
                          <td className="py-3 px-4">3.5</td>
                          <td className="py-3 px-4 text-[#2D4A2B] font-semibold">17</td>
                          <td className="py-3 px-4">Significant</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-2">
                    Data from controlled experiment, <a href="https://www.nature.com/articles/s41598-023-47826-x" className="citation-link">Scientific Reports 2023</a>
                  </p>
                </div>

                <div className="insight-highlight">
                  <h4 className="font-semibold text-[#2D4A2B] mb-3">
                    ⏰ Spaced Repetition Systems (SRS)
                  </h4>
                  <p className="mb-0 text-[#6B7280]">
                    Modern SRS algorithms optimize review schedules based on the psychological "forgetting curve," strengthening neural pathways for durable long-term retention. Platforms like <strong>Pandanese</strong> combine pre-made mnemonics with SRS for Chinese character mastery.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">Practical Application: Building Your Own Mnemonic Toolkit</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/60 rounded-lg p-6">
                    <span className="text-[#D4AF37] text-2xl mb-4 block">🎵</span>
                    <h4 className="font-semibold text-[#2D4A2B] mb-3">Creating Rhymes & Jingles</h4>
                    <p className="text-sm text-[#6B7280]">
                      Transform information into catchy phrases. For Chinese idioms (成语), use acronyms like "PFCZ" for 破釜沉舟 (pò fǔ chén zhōu).
                    </p>
                  </div>

                  <div className="bg-white/60 rounded-lg p-6">
                    <span className="text-[#D4AF37] text-2xl mb-4 block">🏰</span>
                    <h4 className="font-semibold text-[#2D4A2B] mb-3">Designing Memory Palaces</h4>
                    <p className="text-sm text-[#6B7280]">
                      Use familiar locations as mental storage. Place Chinese characters in specific "loci" within your home, creating vivid, bizarre imagery for enhanced recall.
                    </p>
                  </div>

                  <div className="bg-white/60 rounded-lg p-6">
                    <span className="text-[#D4AF37] text-2xl mb-4 block">📱</span>
                    <h4 className="font-semibold text-[#2D4A2B] mb-3">Digital Integration</h4>
                    <p className="text-sm text-[#6B7280]">
                      Combine mnemonics with SRS apps like Anki or Memrise. Create digital flashcards with characters, pinyin, and your personal memory hooks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Confucian Framework */}
        <section className="py-16 px-6 bg-white/30 ancient-pattern">
          <div className="container mx-auto max-w-4xl">
            <header className="mb-12">
              <h2 className="serif-display text-4xl font-bold text-[#2D4A2B] mb-4">
                The Confucian Framework
              </h2>
              <p className="text-xl text-[#6B7280] leading-relaxed">
                A Philosophy of Learning and Self-Cultivation: The Dynamic Cycle of "Learning, Thinking, and Doing"
              </p>
            </header>

            <div className="prose prose-lg max-w-none text-[#2D4A2B]">
              <p className="text-lg leading-relaxed mb-8">
                Beyond specific memorization techniques, the Chinese learning tradition is deeply rooted in a philosophical framework established by Confucius over 2,500 years ago. This framework views learning as a lifelong process of self-cultivation and moral development, where the goal is not just knowledge acquisition but the development of virtuous character.
              </p>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">The Core Tenets: "Learning, Thinking, and Doing"</h3>

                <div className="bg-gradient-to-r from-[#8B9A8B]/10 to-[#D4AF37]/10 rounded-xl p-8 mb-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="w-16 h-16 bg-[#8B9A8B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="serif-display text-2xl font-bold text-[#2D4A2B]">学</span>
                      </div>
                      <h4 className="font-semibold text-[#2D4A2B] mb-2">Learning (Xué)</h4>
                      <p className="text-sm text-[#6B7280]">
                        Active acquisition of knowledge through observation, dialogue, and experience
                      </p>
                    </div>

                    <div>
                      <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="serif-display text-2xl font-bold text-[#2D4A2B]">思</span>
                      </div>
                      <h4 className="font-semibold text-[#2D4A2B] mb-2">Thinking (Sī)</h4>
                      <p className="text-sm text-[#6B7280]">
                        Critical reflection, analysis, and inquiry to process and understand
                      </p>
                    </div>

                    <div>
                      <div className="w-16 h-16 bg-[#2D4A2B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="serif-display text-2xl font-bold text-[#2D4A2B]">行</span>
                      </div>
                      <h4 className="font-semibold text-[#2D4A2B] mb-2">Doing (Xíng)</h4>
                      <p className="text-sm text-[#6B7280]">
                        Practical application and practice to test and refine knowledge
                      </p>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#D4AF37] pl-6 italic text-xl text-[#2D4A2B] bg-white/50 p-6 rounded-r-lg mb-8">
                  "Learning without thought is labor lost; thought without learning is perilous"
                  <footer className="text-base mt-3 not-italic text-[#6B7280]">
                    — Confucius
                  </footer>
                </blockquote>
              </div>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">The Master's Method: Confucius's Pedagogical Innovations</h3>

                <div className="space-y-8">
                  <div className="insight-highlight">
                    <h4 className="font-semibold text-[#2D4A2B] mb-3">
                      💡 Heuristic Teaching: "Not to enlighten until one is perplexed"
                    </h4>
                    <p className="mb-3 text-[#6B7280]">
                      <strong>"不愤不启, 不悱不发"</strong> (bù fèn bù qǐ, bù fěi bù fā) — Confucius would wait until students grappled with problems and reached frustration before offering guidance, fostering intellectual autonomy and critical thinking.
                    </p>
                    <p className="text-sm text-[#6B7280] mb-0">
                      This approach positions the teacher as a "guide on the side" rather than a "sage on the stage."
                    </p>
                  </div>

                  <div className="bg-white/60 rounded-lg p-6">
                    <h4 className="font-semibold text-[#2D4A2B] mb-4">
                      👥 Teaching According to Aptitude (因材施教)
                    </h4>
                    <p className="mb-4 text-[#6B7280]">
                      Confucius recognized different learning styles among his students. When asked about "ren" (benevolence), he gave different answers:
                    </p>
                    <ul className="space-y-2 text-sm text-[#6B7280]">
                      <li><strong>To Yan Hui:</strong> "To master oneself and return to propriety is benevolence"</li>
                      <li><strong>To Fan Chi:</strong> "It is to love others"</li>
                      <li><strong>To Zi Zhang:</strong> Detailed list of five specific virtues</li>
                    </ul>
                    <p className="text-sm text-[#6B7280] mt-3">
                      This demonstrates sophisticated understanding of human psychology and commitment to individualized learning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">Modern Relevance: Applying Confucian Principles Today</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#2D4A2B] mb-4">
                      ❤️ Cultivating Love for Learning (好学)
                    </h4>
                    <p className="mb-4 text-[#6B7280]">
                      Confucius believed intrinsic motivation was the most powerful engine for growth: "To know it is not as good as to love it; to love it is not as good as to take joy in it."
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      Modern application involves connecting material to personal interests, asking genuine questions, and celebrating discovery moments.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#2D4A2B] mb-4">
                      🎓 The Feynman Technique
                    </h4>
                    <p className="mb-4 text-[#6B7280]">
                      This modern method aligns perfectly with Confucian principles: explaining concepts in simple terms forces you to confront gaps in understanding and achieve true mastery.
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      The act of teaching implements both "thinking" (思) and "doing" (行) from the Confucian triad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Imperial Examination Legacy */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <header className="mb-12">
              <h2 className="serif-display text-4xl font-bold text-[#2D4A2B] mb-4">
                The Imperial Examination Legacy
              </h2>
              <p className="text-xl text-[#6B7280] leading-relaxed">
                Structured Learning and Rigor: 1,300 Years of Educational Culture
              </p>
            </header>

            <div className="prose prose-lg max-w-none text-[#2D4A2B]">
              <p className="text-lg leading-relaxed mb-8">
                The imperial examination system (科举), which lasted for over 1,300 years, has left an indelible mark on the Chinese approach to education. This system created a culture of intense competition, rigorous study, and deep-seated belief in the power of examinations to determine social and economic future.
              </p>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">The Gaokao's Ancestor: The Kējǔ System's Influence</h3>

                <div className="insight-highlight">
                  <h4 className="font-semibold text-[#2D4A2B] mb-3">
                    📜 Standardized Testing Perpetuation
                  </h4>
                  <p className="mb-0 text-[#6B7280]">
                    The kējǔ created powerful cultural acceptance of standardized testing as a fair mechanism for social mobility. This legacy is clearly reflected in the modern Gaokao, which determines university access and career prospects through high-stakes, nationwide examinations.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">Ancient Study Regimens: A Blueprint for Discipline</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/60 rounded-lg p-6">
                    <h4 className="font-semibold text-[#2D4A2B] mb-4">
                      📚 Structured Memorization
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-4">
                      The "Thousand Character Classic" (千字文) served as a cornerstone, with 1,000 unique characters arranged in 250 rhyming couplets for systematic learning.
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      This method emphasized foundational memorization as the crucial first step toward deeper understanding.
                    </p>
                  </div>

                  <div className="bg-white/60 rounded-lg p-6">
                    <h4 className="font-semibold text-[#2D4A2B] mb-4">
                      ⏳ Timed Mock Exams
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-4">
                      Regular simulated exam sessions replicated actual test conditions, building mental stamina and time management skills.
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      This practice prepared candidates for the intense pressure of multi-day examination sessions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">Exam Strategies: Techniques for the Modern Gaokao</h3>

                <div className="space-y-6">
                  <div className="insight-highlight">
                    <h4 className="font-semibold text-[#2D4A2B] mb-3">
                      🔄 Rote Memorization and Repetition (死记硬背)
                    </h4>
                    <p className="mb-3 text-[#6B7280]">
                      Despite modern emphasis on critical thinking, rote memorization remains a powerful strategy, seen as a necessary foundation for deeper understanding rather than mindless activity.
                    </p>
                    <p className="text-sm text-[#6B7280] mb-0">
                      This approach internalizes information through repetitive practice, making it readily accessible for exam recall.
                    </p>
                  </div>

                  <div className="bg-white/60 rounded-lg p-6">
                    <h4 className="font-semibold text-[#2D4A2B] mb-4">
                      ✍️ Intensive Note-Taking and Information Condensation
                    </h4>
                    <p className="mb-4 text-[#6B7280]">
                      Students take detailed classroom notes, then rewrite and condense them after class, creating personalized study guides through active processing and synthesis.
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      This practice develops critical thinking while organizing knowledge for efficient review.
                    </p>
                  </div>

                  <div className="bg-white/60 rounded-lg p-6">
                    <h4 className="font-semibold text-[#2D4A2B] mb-4">
                      🌊 The "Sea of Questions" (题海) Strategy
                    </h4>
                    <p className="mb-4 text-[#6B7280]">
                      Working through vast numbers of practice problems builds mastery through repeated exposure to question types and develops intuitive understanding through extensive practice.
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      This strategy reflects deep-seated belief in the power of disciplined practice and repetition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The Synthesis */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#8B9A8B]/10 to-[#D4AF37]/10 ancient-pattern">
          <div className="container mx-auto max-w-4xl">
            <header className="mb-12">
              <h2 className="serif-display text-4xl font-bold text-[#2D4A2B] mb-4">
                The Synthesis
              </h2>
              <p className="text-xl text-[#6B7280] leading-relaxed">
                Integrating Ancient Wisdom with Modern Science for Optimal Learning
              </p>
            </header>

            <div className="prose prose-lg max-w-none text-[#2D4A2B]">
              <p className="text-lg leading-relaxed mb-8">
                The most powerful learning strategies do not lie in choosing between ancient traditions and modern science, but in synthesizing them. This integration moves beyond passive rote-learning to active construction, combining the discipline of the past with the insights of the present.
              </p>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">Blending Traditional and Modern Memory Techniques</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/70 rounded-xl p-6">
                    <h4 className="font-semibold text-[#2D4A2B] mb-4">
                      🔄 SRS for Classical Texts
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-4">
                      Combine Spaced Repetition Systems with traditional texts like the "Thousand Character Classic." Digital flashcards with stroke-order animations and audio pronunciations optimize ancient content with modern efficiency.
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      This transforms brute-force memorization into data-driven optimization.
                    </p>
                  </div>

                  <div className="bg-white/70 rounded-xl p-6">
                    <h4 className="font-semibold text-[#2D4A2B] mb-4">
                      🗺️ Memory Palaces for Timelines
                    </h4>
                    <p className="text-sm text-[#6B7280] mb-4">
                      Apply the Memory Palace technique to historical timelines, placing dynasties in specific locations within a familiar mental space.
                    </p>
                    <div className="bg-[#8B9A8B]/10 rounded-lg p-3 text-xs text-[#6B7280]">
                      Example: Front door = Xia dynasty, hallway = Shang, living room = Zhou, each with vivid imagery representing the era's characteristics.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">From Passive Reception to Active Construction</h3>

                <div className="insight-highlight">
                  <h4 className="font-semibold text-[#2D4A2B] mb-4">
                    🧠 The Shift in Educational Philosophy
                  </h4>
                  <p className="mb-4 text-[#6B7280]">
                    Moving from the "banking" model of education (students as empty vessels) to constructivist learning (students as active participants) represents a fundamental shift toward deeper, more durable understanding.
                  </p>
                  <p className="text-sm text-[#6B7280] mb-0">
                    This transition builds upon traditional discipline while fostering creativity and critical thinking.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#8B9A8B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">❓</span>
                    </div>
                    <h4 className="font-semibold text-[#2D4A2B] mb-2">Questioning</h4>
                    <p className="text-sm text-[#6B7280]">
                      Encourage students to ask "why" and "how," challenging assumptions and connecting new information to existing knowledge.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h4 className="font-semibold text-[#2D4A2B] mb-2">Projects</h4>
                    <p className="text-sm text-[#6B7280]">
                      Apply knowledge to real-world problems through extended, in-depth investigations that bridge theory and practice.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#2D4A2B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <h4 className="font-semibold text-[#2D4A2B] mb-2">Technology</h4>
                    <p className="text-sm text-[#6B7280]">
                      AI tutors and interactive platforms provide personalized instruction and immersive learning experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="serif-display text-2xl font-semibold text-[#2D4A2B] mb-6">A Practical Framework for the Modern Learner</h3>

                <div className="bg-white/80 rounded-xl p-8 mb-8">
                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#8B9A8B]/20 rounded-full flex items-center justify-center">
                        <span className="serif-display text-xl font-bold text-[#2D4A2B]">1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#2D4A2B] mb-3">Build Foundation with Structured Memorization</h4>
                        <p className="text-sm text-[#6B7280] mb-3">
                          Create a vast mental database of fundamental knowledge using rhythm, rhyme, and repetition. Leverage traditional texts like the "Thousand Character Classic" with modern SRS tools.
                        </p>
                        <p className="text-sm text-[#6B7280]">
                          Focus on core vocabulary, common phrases, and grammatical patterns through disciplined practice.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <span className="serif-display text-xl font-bold text-[#2D4A2B]">2</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#2D4A2B] mb-3">Deepen Understanding through Reflection</h4>
                        <p className="text-sm text-[#6B7280] mb-3">
                          Move beyond surface memorization to critical engagement. Break down characters into radicals, explore historical context, and ask probing questions.
                        </p>
                        <p className="text-sm text-[#6B7280]">
                          Transform from passive recipient to active investigator, connecting memorized facts into coherent understanding.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#2D4A2B]/20 rounded-full flex items-center justify-center">
                        <span className="serif-display text-xl font-bold text-[#2D4A2B]">3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#2D4A2B] mb-3">Master Knowledge through Application</h4>
                        <p className="text-sm text-[#6B7280] mb-3">
                          Use the Feynman Technique to explain concepts simply, engage in project-based learning, and teach others to solidify understanding.
                        </p>
                        <p className="text-sm text-[#6B7280]">
                          True mastery comes through practical application and the ability to communicate knowledge effectively to others.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <blockquote className="serif-display text-2xl italic text-[#2D4A2B] mb-4">
                    "The journey of a thousand miles begins with a single step"
                  </blockquote>
                  <p className="text-[#6B7280]">
                    Begin your synthesis of ancient wisdom and modern science today, building upon millennia of proven learning strategies enhanced by contemporary insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </div>
  );
}
