import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import SocialProof from "@/components/home/SocialProof";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import FinalCTA from "@/components/home/FinalCTA";
import { generateOrganizationSchema } from "@/lib/schema";

export default function HomePage() {
  const schema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <SocialProof />
      <Services />
      <Portfolio />
      <Process />
      <FinalCTA />
    </>
  );
}
