import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function NewsletterSection() {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const subscribeMutation = useMutation({
    mutationFn: async (data: { email: string; language: string }) => {
      const response = await apiRequest("POST", "/api/subscribe", data);
      return response;
    },
    onSuccess: () => {
      setSuccess(true);
      setEmail("");
      toast({
        title: t.newsletter.success,
        description: "",
      });
    },
    onError: () => {
      toast({
        title: t.newsletter.error,
        description: "",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      subscribeMutation.mutate({ email, language });
    }
  };

  return (
    <section id="newsletter" className="py-20 lg:py-28 px-6 border-t border-border/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground font-['Playfair_Display'] tracking-tight mb-3">
            {t.newsletter.title}
          </h2>
          <p className="text-foreground/50 mb-8">
            {t.newsletter.subtitle}
          </p>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-primary"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">{t.newsletter.success}</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder={t.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-background border-border/30"
                required
                data-testid="input-email"
              />
              <Button
                type="submit"
                disabled={subscribeMutation.isPending}
                data-testid="button-subscribe"
              >
                {subscribeMutation.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  t.newsletter.button
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
