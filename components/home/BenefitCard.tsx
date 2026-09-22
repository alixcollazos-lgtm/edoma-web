// components/home/BenefitCard.tsx
import { Card, IconFrame } from "@/components/ui/Card";
import { Icons, type IconName } from "@/components/ui/icons";
import type { Benefit } from "@/lib/constants";

type BenefitTone = "blue" | "green" | "purple";

type BenefitCardProps = {
  benefit: Benefit;
  tone?: BenefitTone;
};

const TONE_STYLES = {
  blue: {
    card:
      "hover:border-[#1E88E5]/35 hover:shadow-[0_14px_35px_-18px_rgba(30,136,229,0.45)]",
    icon: "group-hover:bg-[#E3F2FD] group-hover:text-[#1E88E5]",
    title: "group-hover:text-[#1E88E5]",
  },
  green: {
    card:
      "hover:border-[#159A68]/35 hover:shadow-[0_14px_35px_-18px_rgba(21,154,104,0.45)]",
    icon: "group-hover:bg-[#E4F7EE] group-hover:text-[#159A68]",
    title: "group-hover:text-[#159A68]",
  },
  purple: {
    card:
      "hover:border-[#7956B8]/35 hover:shadow-[0_14px_35px_-18px_rgba(121,86,184,0.45)]",
    icon: "group-hover:bg-[#F0EBFA] group-hover:text-[#7956B8]",
    title: "group-hover:text-[#7956B8]",
  },
};

export function BenefitCard({
  benefit,
  tone = "blue",
}: BenefitCardProps) {
  const Icon = Icons[benefit.icon as IconName];
  const styles = TONE_STYLES[tone];

  return (
    <Card
      className={`group h-full transition-all duration-300 ease-out ${styles.card}`}
    >
      <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
        <IconFrame className={`transition-all duration-300 ${styles.icon}`}>
          <Icon />
        </IconFrame>
      </div>

      <h3
        className={`mt-5 font-display text-lg font-medium leading-snug text-brand-ink transition-colors duration-300 ${styles.title}`}
      >
        {benefit.title}
      </h3>

      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-brand-ink/65">
        {benefit.description}
      </p>
    </Card>
  );
}
