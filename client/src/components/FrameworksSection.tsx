import { useLanguage } from "@/lib/LanguageContext";
import { frameworks } from "@/lib/data";
import { motion } from "framer-motion";
import { Download, FileText, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FrameworksSection() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30" id="frameworks">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Download className="w-3 h-3 mr-1" />
            Gumroad
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground font-['Space_Grotesk'] mb-3">
            {t.frameworks.title}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t.frameworks.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {frameworks.map((framework) => (
            <motion.div key={framework.id} variants={itemVariants}>
              <Card className="group h-full border-border/50 hover:border-primary/30 transition-all duration-300 overflow-visible">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {framework.title[language]}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {framework.description[language]}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group/btn"
                    asChild
                  >
                    <a
                      href={framework.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`button-download-${framework.id}`}
                    >
                      {t.frameworks.download}
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
