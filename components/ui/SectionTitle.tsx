// components/ui/SectionTitle.tsx
type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 font-display text-sm font-medium text-brand-support">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-medium leading-[1.15] text-brand-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-brand-ink/70">
          {description}
        </p>
      )}
    </div>
  );
}
