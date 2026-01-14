import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import AIReceptionistSection from "@/components/AIReceptionistSection";
import WebsiteDesignSection from "@/components/WebsiteDesignSection";
import ComparisonTable from "@/components/ComparisonTable";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingCards from "@/components/PricingCards";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <AIReceptionistSection />
      <WebsiteDesignSection />
      <ComparisonTable />
      <ProblemSolutionSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingCards />
      <CTASection />
    </main>
  );
}
