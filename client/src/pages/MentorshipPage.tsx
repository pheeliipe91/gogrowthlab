import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMentorshipApplicationSchema, type InsertMentorshipApplication } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function MentorshipPage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [success, setSuccess] = useState(false);

  const form = useForm<InsertMentorshipApplication>({
    resolver: zodResolver(insertMentorshipApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      linkedin: "",
      currentRole: "",
      experience: "",
      challenge: "",
      expectations: "",
      referral: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertMentorshipApplication) => {
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

  const onSubmit = (data: InsertMentorshipApplication) => {
    submitMutation.mutate(data);
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
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.mentorship.form.name} *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.mentorship.form.email} *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="linkedin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.mentorship.form.linkedin} *</FormLabel>
                            <FormControl>
                              <Input
                                type="url"
                                placeholder="https://linkedin.com/in/..."
                                {...field}
                                data-testid="input-linkedin"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="currentRole"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.mentorship.form.currentRole} *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-role" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.mentorship.form.experience} *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: 5 anos" {...field} data-testid="input-experience" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="challenge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.mentorship.form.challenge} *</FormLabel>
                          <FormControl>
                            <Textarea rows={3} {...field} data-testid="input-challenge" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="expectations"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.mentorship.form.expectations} *</FormLabel>
                          <FormControl>
                            <Textarea rows={3} {...field} data-testid="input-expectations" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="referral"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.mentorship.form.referral} *</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-referral" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
                </Form>
              </section>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
