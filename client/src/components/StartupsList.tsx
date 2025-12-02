import { useLanguage } from "@/lib/LanguageContext";
import { startups } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Rocket, FlaskConical, BookOpen } from "lucide-react";

const statusIcons = {
  active: Rocket,
  experiment: FlaskConical,
  blog: BookOpen,
};

const statusColors = {
  active: "bg-green-500/10 text-green-600 border-green-500/20",
  experiment: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  blog: "bg-blue-500/10 text-blue-600 border-blue-500/20",
};

export function StartupsList() {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl lg:text-3xl font-semibold text-foreground font-['Space_Grotesk'] mb-2">
          {t.startups.title}
        </h2>
        <p className="text-sm text-muted-foreground">{t.startups.subtitle}</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-2"
      >
        {startups.map((startup) => {
          const StatusIcon = statusIcons[startup.status];
          return (
            <motion.a
              key={startup.id}
              href={startup.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group flex items-center justify-between p-4 rounded-md border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
              data-testid={`link-startup-${startup.id}`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center border ${statusColors[startup.status]}`}>
                  <StatusIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                    {startup.name}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {startup.description[language]}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
