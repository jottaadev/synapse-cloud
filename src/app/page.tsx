import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { ConnectionGuide } from "@/components/ConnectionGuide";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { SectionFadeIn } from "@/components/SectionFadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      
      <SectionFadeIn>
        <Benefits />
      </SectionFadeIn>
      
      <SectionFadeIn>
        <Pricing />
      </SectionFadeIn>
      
      <SectionFadeIn>
        <ConnectionGuide />
      </SectionFadeIn>
      
      <SectionFadeIn>
        <Faq />
      </SectionFadeIn>
      
      <SectionFadeIn>
        <FinalCta />
      </SectionFadeIn>
    </>
  );
}