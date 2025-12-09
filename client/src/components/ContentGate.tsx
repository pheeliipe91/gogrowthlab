import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    linkedin: z.string().url("Please enter a valid LinkedIn URL").includes("linkedin.com", { message: "Must be a LinkedIn URL" }),
});

interface ContentGateProps {
    children: React.ReactNode;
    contentId: string; // Unique ID for this content to persist unlock state
}

export function ContentGate({ children, contentId }: ContentGateProps) {
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            linkedin: "",
        },
    });

    useEffect(() => {
        const unlocked = localStorage.getItem(`content_unlocked_${contentId}`);
        const savedEmail = localStorage.getItem("user_email");

        if (savedEmail) {
            setUserEmail(savedEmail);
        }

        if (unlocked === "true") {
            setIsUnlocked(true);
        }
    }, [contentId]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            await apiRequest("POST", "/api/subscribe", {
                email: values.email,
                linkedin: values.linkedin,
                language: "en" // Defaulting to EN or explicit language if needed
            });

            localStorage.setItem(`content_unlocked_${contentId}`, "true");
            localStorage.setItem("user_email", values.email); // Persist global email
            setUserEmail(values.email);
            setIsUnlocked(true);
            toast({
                title: "Content Unlocked!",
                description: "Enjoy your reading.",
            });
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }

    if (isUnlocked) {
        return (
            <div className="relative mt-12">
                {userEmail && (
                    <div className="absolute -top-10 right-0 z-50 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                        <Lock className="w-4 h-4" />
                        Reading as {userEmail}
                    </div>
                )}
                {children}
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="relative max-h-[400px] overflow-hidden">
                <div className="blur-sm select-none pointer-events-none filter transition-all duration-1000">
                    {children}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background flex items-center justify-center pt-20">
                    {/* Overlay content positioned here if needed, but the main form is below */}
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-card border border-border/50 rounded-xl shadow-2xl backdrop-blur-md z-10">
                <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Unlock Full Article</h3>
                    <p className="text-muted-foreground">
                        Enter your email and LinkedIn to access the complete research and frameworks.
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="name@company.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="linkedin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>LinkedIn URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://linkedin.com/in/username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full font-bold" disabled={isLoading}>
                            {isLoading ? "Unlocking..." : "Unlock Access"}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground mt-4">
                            I respect your privacy. No spam, ever.
                        </p>
                    </form>
                </Form>
            </div>
        </div>
    );
}
