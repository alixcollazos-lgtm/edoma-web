// components/contacto/ContactFeatures.tsx

const FEATURES = [
  {
    title: "Respuesta rápida",
    description: "Te atendemos en pocos minutos.",
    bg: "bg-sky-50",
    color: "text-sky-500",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Asesoría personalizada",
    description: "Resolvemos todas tus dudas.",
    bg: "bg-emerald-50",
    color: "text-emerald-500",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Siempre contigo",
    description: "Tu institución es nuestra prioridad.",
    bg: "bg-violet-50",
    color: "text-violet-500",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M12 21s-7-4.35-9.5-8.5C.8 9 2 5.5 5.3 4.6 7.5 4 9.8 5 12 7.5 14.2 5 16.5 4 18.7 4.6 22 5.5 23.2 9 21.5 12.5 19 16.65 12 21 12 21z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export function ContactFeatures() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {FEATURES.map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left"
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${feature.bg} ${feature.color}`}
          >
            {feature.icon}
          </div>

          <p className="font-display text-sm font-semibold text-brand-ink">
            {feature.title}
          </p>

          <p className="text-sm text-brand-ink/55">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}