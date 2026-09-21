// components/contacto/PhoneMockup.tsx

const CHAT_MESSAGES = [
  {
    id: "welcome",
    from: "them",
    text: "¡Hola! 👋 Gracias por escribir a Edoma, ¿en qué podemos ayudarte?",
    time: "9:41",
  },
  {
    id: "question",
    from: "me",
    text: "Hola, quiero saber cómo funciona el seguimiento académico",
    time: "9:42",
  },
  {
    id: "answer",
    from: "them",
    text: "Claro. Con Edoma tu institución puede ver notas, asistencia y comportamiento en tiempo real.",
    time: "9:42",
  },
  {
    id: "demo",
    from: "them",
    text: "¿Te gustaría agendar una demo esta semana?",
    time: "9:43",
  },
];

export function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-[300px] sm:w-[320px]">
        {/* Botones laterales */}
        <div className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l bg-brand-ink/70" />
        <div className="absolute -left-[3px] top-36 h-14 w-[3px] rounded-l bg-brand-ink/70" />
        <div className="absolute -left-[3px] top-52 h-14 w-[3px] rounded-l bg-brand-ink/70" />
        <div className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r bg-brand-ink/70" />

        {/* Marco del teléfono */}
        <div className="relative rounded-[2.75rem] border-[10px] border-brand-ink bg-brand-ink shadow-2xl">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-brand-ink" />

          {/* Pantalla */}
          <div className="relative h-[600px] overflow-hidden rounded-[2rem] bg-[#ECE5DD]">
            {/* Barra de estado */}
            <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[11px] font-semibold text-white">
              <span>9:41</span>

              <div className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 20 12"
                  fill="currentColor"
                  className="h-2.5 w-4"
                  aria-hidden="true"
                >
                  <rect x="0" y="7" width="3" height="5" rx="0.5" />
                  <rect x="5" y="5" width="3" height="7" rx="0.5" />
                  <rect x="10" y="3" width="3" height="9" rx="0.5" />
                  <rect x="15" y="0" width="3" height="12" rx="0.5" />
                </svg>

                <svg
                  viewBox="0 0 16 12"
                  fill="currentColor"
                  className="h-2.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M8 10.5a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM4.6 6.9a5 5 0 016.8 0l-1.4 1.5a3 3 0 00-4 0L4.6 6.9zM1.8 4a9 9 0 0112.4 0L12.8 5.6a6.6 6.6 0 00-9.6 0L1.8 4z" />
                </svg>

                <svg
                  viewBox="0 0 25 12"
                  fill="none"
                  className="h-3 w-6"
                  aria-hidden="true"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="20"
                    height="11"
                    rx="2.5"
                    stroke="currentColor"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="16"
                    height="8"
                    rx="1.5"
                    fill="currentColor"
                  />
                  <rect
                    x="21.5"
                    y="4"
                    width="2"
                    height="4"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Encabezado de WhatsApp */}
            <div className="flex items-center gap-2 bg-[#075E54] px-3 py-3">
              <span className="text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 font-display text-sm font-semibold text-white">
                E
              </div>

              <div className="flex-1">
                <p className="font-display text-sm font-semibold text-white">
                  Edoma Soporte
                </p>

                <p className="text-[11px] text-white/70">en línea</p>
              </div>

              <span className="px-1 text-white/90">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <circle cx="4" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="20" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </span>
            </div>

            {/* Conversación */}
            <div className="flex h-[calc(600px-118px)] flex-col gap-2 overflow-hidden px-3 py-4">
              <div className="mx-auto rounded-md bg-white/70 px-3 py-1 text-[10px] text-brand-ink/50">
                Hoy
              </div>

              {CHAT_MESSAGES.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.from === "me"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[78%] rounded-lg px-3 py-2 shadow-sm ${
                      message.from === "me"
                        ? "rounded-tr-none bg-[#DCF8C6]"
                        : "rounded-tl-none bg-white"
                    }`}
                  >
                    <p className="text-[13px] leading-snug text-brand-ink">
                      {message.text}
                    </p>

                    <p className="mt-1 flex items-center justify-end gap-1 text-[10px] text-brand-ink/40">
                      {message.time}

                      {message.from === "me" && (
                        <span className="text-[#34B7F1]">✓✓</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Barra inferior */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-[#F0F0F0] px-3 py-3">
              <span className="text-brand-ink/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M8.5 14.5s1.2 2 3.5 2 3.5-2 3.5-2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="9" cy="10" r="1" fill="currentColor" />
                  <circle cx="15" cy="10" r="1" fill="currentColor" />
                </svg>
              </span>

              <div className="flex-1 rounded-full bg-white px-4 py-2 text-[12px] text-brand-ink/40">
                Escribe un mensaje
              </div>

              <span className="text-brand-ink/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M17 8l-7 7a3 3 0 01-4-4l8-8a2 2 0 013 3l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-white"
                  aria-hidden="true"
                >
                  <path
                    d="M12 15a3 3 0 003-3V6a3 3 0 10-6 0v6a3 3 0 003 3z"
                    fill="currentColor"
                  />
                  <path
                    d="M6 11a6 6 0 0012 0M12 19v3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior del teléfono */}
        <div className="absolute bottom-4 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-brand-ink/40" />
      </div>
    </div>
  );
}