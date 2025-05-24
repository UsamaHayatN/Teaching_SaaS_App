import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/ui/CTA";

const Page = () => {
  return (
    <main className="p-6 space-y-12">
      <h1 className="text-3xl font-bold text-center">Popular Companions</h1>

      <section className="home-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CompanionCard
          id="456"
          subject="Science"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={30}
          color="#E0F7FA" // light cyan background
        />
        <CompanionCard
          id="123"
          subject="Maths"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          duration={30}
          color="#FFF3E0" // light orange background
        />
        <CompanionCard
          id="234"
          subject="Language"
          name="Verba the Vocabulary Builder"
          topic="Advanced Vocabulary Practice"
          duration={30}
          color="#F3E5F5" // light purple background
        />
      </section>

      <section className="home-section space-y-8">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
