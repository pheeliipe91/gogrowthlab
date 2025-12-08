import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import MentorshipPage from "@/pages/MentorshipPage";
import Researches from "@/pages/Researches";
import ChineseLearningResearch from "@/pages/ChineseLearningResearch";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mentoria" component={MentorshipPage} />
      <Route path="/researches" component={Researches} />
      <Route path="/researches/chinese-learning" component={ChineseLearningResearch} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
