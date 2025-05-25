import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

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
          color="#E5D0FF"
        />
        <CompanionCard
          id="123"
          subject="Maths"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard
          id="234"
          subject="Language"
          name="Verba the Vocabulary Builder"
          topic="Advanced Vocabulary Practice"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section space-y-8">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
