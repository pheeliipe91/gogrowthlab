import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";
import { Header } from "@/components/Header";

export default function MentorshipPage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    currentRole: "",
    experience: "",
    challenge: "",
    expectations: "",
    referral: "",
  });

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/mentorship-applications", data);
      return response;
    },
    onSuccess: () => {
      setSuccess(true);
      toast({
        title: t.mentorship.form.success,
        description: "",
      });
    },
    onError: () => {
      toast({
        title: t.mentorship.form.error,
        description: "",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-16 lg:pt-36 lg:pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <Button variant="ghost" className="mb-8 -ml-2" data-testid="button-back">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.mentorship.back}
              </Button>
            </Link>

            <header className="mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-['Playfair_Display'] tracking-tight mb-4">
                {t.mentorship.title}
              </h1>
              <p className="text-xl text-primary font-medium">
                {t.mentorship.subtitle}
              </p>
            </header>

            <section className="space-y-6 mb-16">
              <p className="text-lg lg:text-xl text-foreground leading-relaxed font-medium">
                {t.mentorship.intro}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                {t.mentorship.description}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                {t.mentorship.format}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                {t.mentorship.method}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 py-6 border-y border-border/50">
                <div className="flex-1">
                  <p className="text-2xl font-bold text-primary font-['Playfair_Display']">
                    {t.mentorship.price}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-semibold text-foreground">
                    {t.mentorship.spots}
                  </p>
                </div>
              </div>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                {t.mentorship.about}
              </p>
              <p className="text-base lg:text-lg text-foreground leading-relaxed font-medium italic">
                {t.mentorship.mission}
              </p>
            </section>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {t.mentorship.form.success}
                </h2>
              </motion.div>
            ) : (
              <section>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-['Playfair_Display'] mb-8">
                  {t.mentorship.form.title}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.mentorship.form.name} *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.mentorship.form.email} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">{t.mentorship.form.linkedin} *</Label>
                      <Input
                        id="linkedin"
                        name="linkedin"
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        value={formData.linkedin}
                        onChange={handleChange}
                        required
                        data-testid="input-linkedin"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currentRole">{t.mentorship.form.currentRole} *</Label>
                      <Input
                        id="currentRole"
                        name="currentRole"
                        value={formData.currentRole}
                        onChange={handleChange}
                        required
                        data-testid="input-role"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">{t.mentorship.form.experience} *</Label>
                    <Input
                      id="experience"
                      name="experience"
                      placeholder="Ex: 5 anos"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      data-testid="input-experience"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenge">{t.mentorship.form.challenge} *</Label>
                    <Textarea
                      id="challenge"
                      name="challenge"
                      rows={3}
                      value={formData.challenge}
                      onChange={handleChange}
                      required
                      data-testid="input-challenge"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectations">{t.mentorship.form.expectations} *</Label>
                    <Textarea
                      id="expectations"
                      name="expectations"
                      rows={3}
                      value={formData.expectations}
                      onChange={handleChange}
                      required
                      data-testid="input-expectations"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="referral">{t.mentorship.form.referral} *</Label>
                    <Input
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      required
                      data-testid="input-referral"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto h-12 px-8"
                    disabled={submitMutation.isPending}
                    data-testid="button-submit"
                  >
                    {submitMutation.isPending ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    ) : null}
                    {t.mentorship.form.submit}
                  </Button>
                </form>
              </section>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
