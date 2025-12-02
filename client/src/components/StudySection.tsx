import { useLanguage } from "@/lib/LanguageContext";
import { studyTopics } from "@/lib/data";
import { motion } from "framer-motion";
import { Brain, Languages, TrendingUp, BookOpen, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, typeof Brain> = {
  Brain,
  Languages,
  TrendingUp,
};

const statusConfig = {
  current: {
    icon: BookOpen,
    color: "bg-green-500/10 text-green-600 border-green-500/20",
  },
  completed: {
    icon: CheckCircle,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  planned: {
    icon: Clock,
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
};

export function StudySection() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "current":
        return t.studying.current;
      case "completed":
        return t.studying.completed;
      case "planned":
        return t.studying.planned;
      default:
        return status;
    }
  };

  return (
    <section className="py-16 lg:py-24" id="studying">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground font-['Space_Grotesk'] mb-3">
            {t.studying.title}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t.studying.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {studyTopics.map((topic) => {
            const TopicIcon = iconMap[topic.icon] || Brain;
            const StatusIcon = statusConfig[topic.status].icon;
            
            return (
              <motion.div key={topic.id} variants={itemVariants}>
                <Card className="group h-full border-border/50 hover:border-primary/30 transition-all duration-300 overflow-visible">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <TopicIcon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${statusConfig[topic.status].color} text-xs`}
                      >
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {getStatusLabel(topic.status)}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {topic.title[language]}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {topic.description[language]}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
