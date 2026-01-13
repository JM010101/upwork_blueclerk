import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import Features from "@/components/sections/Features";
import ForContractors from "@/components/sections/ForContractors";
import ForBuilders from "@/components/sections/ForBuilders";
import IndustryFocus from "@/components/sections/IndustryFocus";
import SocialProof from "@/components/sections/SocialProof";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <Features />
      <ForContractors />
      <ForBuilders />
      <IndustryFocus />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
