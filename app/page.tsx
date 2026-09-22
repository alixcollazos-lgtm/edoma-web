// app/page.tsx
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BenefitsGrid } from "@/components/home/BenefitsGrid";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { ScheduleDemo } from "@/components/home/ScheduleDemo";
import { RolesTabs } from "@/components/home/RolesTabs";
import { SuccessStory } from "@/components/home/SuccessStory";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { CtaSection } from "@/components/home/CtaSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Edoma — Toda tu institución ordenada en un solo lugar",
  description:
    "Edoma es un sistema de seguimiento académico en tiempo real para instituciones educativas: notas, asistencia y observador siempre al día, con cumplimiento legal y modo offline.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsGrid />
      <ProductShowcase />
      <ScheduleDemo />
      <RolesTabs />
      <SuccessStory />
      <ComparisonTable />
      <CtaSection />
    </>
  );
}