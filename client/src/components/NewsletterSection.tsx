import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
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
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10" id="newsletter">
      <div className="max-w-[600px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground font-['Space_Grotesk'] mb-3">
            {t.newsletter.title}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t.newsletter.subtitle}
          </p>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-green-600 bg-green-500/10 p-4 rounded-md"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">{t.newsletter.success}</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder={t.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow h-12 text-base"
                required
                data-testid="input-email"
              />
              <Button
                type="submit"
                size="lg"
                disabled={subscribeMutation.isPending}
                className="h-12 px-8"
                data-testid="button-subscribe"
              >
                {subscribeMutation.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                {t.newsletter.button}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
