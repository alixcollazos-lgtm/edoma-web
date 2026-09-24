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
  const isCentered = align === "center";

  const wrapperClass = isCentered
    ? "mx-auto max-w-3xl text-center"
    : "max-w-3xl text-left";

  const descriptionClass = isCentered
    ? "mx-auto mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-brand-ink/70"
    : "mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-brand-ink/70";

  return (
    <div className={wrapperClass}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
          {eyebrow}
        </span>
      )}

      <h2 className="font-display text-3xl font-medium leading-[1.15] text-brand-ink sm:text-4xl">
        {title}
      </h2>

      {description && <p className={descriptionClass}>{description}</p>}
    </div>
  );
}
