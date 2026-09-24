// components/home/BenefitCard.tsx
import { Card, IconFrame } from "@/components/ui/Card";
import { Icons, type IconName } from "@/components/ui/icons";
import { TONE_STYLES, type ToneName } from "@/components/ui/toneStyles";
import type { Benefit } from "@/lib/constants";

type BenefitCardProps = {
  benefit: Benefit;
  tone?: ToneName;
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
