import type { Metadata } from "next";
import { MissionVision } from "@/components/nosotros/MissionVision";
import { TeamGrid } from "@/components/nosotros/TeamGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Conoce la historia, la misión y el propósito de Edoma: una herramienta pensada para resolver los problemas reales de docentes, administrativos y padres de familia.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <MissionVision />
      <TeamGrid />
    </>
  );
}