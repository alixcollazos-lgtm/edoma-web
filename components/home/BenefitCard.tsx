// components/home/BenefitCard.tsx
import { Card, IconFrame } from "@/components/ui/Card";
import { Icons, type IconName } from "@/components/ui/icons";
import type { Benefit } from "@/lib/constants";

type BenefitCardProps = {
  benefit: Benefit;
};

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = Icons[benefit.icon as IconName];

  return (
    <Card className="h-full">
      <IconFrame>
        <Icon />
      </IconFrame>
      <h3 className="mt-5 font-display text-lg font-medium leading-snug text-brand-ink">
        {benefit.title}
      </h3>
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-brand-ink/65">
        {benefit.description}
      </p>
    </Card>
  );
}
