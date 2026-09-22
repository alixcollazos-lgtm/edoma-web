// lib/constants.ts
// Fuente única de contenido del sitio: textos, enlaces y datos estructurados
// que alimentan los componentes. Todo el texto visible está en español.

export const SITE = {
  name: "Edoma",
  tagline: "Toda tu institución ordenada en un solo lugar",
  url: "https://edoma.com",
  whatsappNumber: "573000000000", // TODO: reemplazar por el número real de contacto
  whatsappMessage: "Hola, quiero conocer más sobre Edoma para mi institución.",
};

export function getWhatsappLink(message: string = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/soporte", label: "Soporte" },
  { href: "/contacto", label: "Contacto" },
];
// ---------------------------------------------------------------------------
// BRAND — Paleta visual
// ---------------------------------------------------------------------------

export const BRAND_COLORS = {
  primary: "#1E88E5",
  ink: "#0F2A3D",
  support: "#47B3E4",

  // Tonos complementarios
  green: "#159A68",
  purple: "#7956B8",
  yellow: "#E6A817",

  // Fondos suaves
  blueMist: "#F3F8FC",
  greenMist: "#F1FAF6",
  purpleMist: "#F7F3FC",
  warmMist: "#FFF9F0",

  line: "#DCE8F0",
};
// ---------------------------------------------------------------------------
// HOME — Beneficios agrupados en 3 ejes + beneficio adicional
// ---------------------------------------------------------------------------

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: string; // key de components/ui/icons.tsx
};

export type BenefitAxis = {
  id: string;
  eyebrow: string;
  title: string;
  benefits: Benefit[];
};

export const BENEFIT_AXES: BenefitAxis[] = [
  {
    id: "legal",
    eyebrow: "Eje 1",
    title: "Cumplimiento legal integrado",
    benefits: [
      {
        id: "proteccion-datos",
        title: "Tus datos, protegidos por ley",
        description:
          "La información académica de estudiantes, docentes y padres se almacena en una base de datos privada, cumpliendo con la Ley Estatutaria 1581 de 2012 de protección de datos personales en Colombia.",
        icon: "security",
      },
      {
        id: "convivencia",
        title: "Convivencia escolar, con respaldo legal",
        description:
          "El registro de situaciones de convivencia sigue los lineamientos de la Ley 1620, garantizando un seguimiento objetivo y trazable de cada caso.",
        icon: "shield",
      },
      {
        id: "extraedad",
        title: "Cumplimiento normativo, de forma automática",
        description:
          "El sistema identifica automáticamente estudiantes en posible extraedad, ayudando a la institución a cumplir con la normativa de cobertura educativa sin procesos manuales.",
        icon: "checkCircle",
      },
    ],
  },
  {
    id: "automatizacion",
    eyebrow: "Eje 2",
    title: "Automatización que ahorra tiempo",
    benefits: [
      {
        id: "horarios",
        title: "Horarios sin dolores de cabeza",
        description:
          "El sistema organiza automáticamente los horarios de clase, asignando docentes y salones según su disponibilidad, sin choques ni huecos en la jornada.",
        icon: "schedules",
      },
      {
        id: "boletines",
        title: "Boletines listos, sin trabajo manual repetido",
        description:
          "Edoma genera automáticamente el logro y la descripción cualitativa de cada estudiante por período, y permite configurar la estructura y escala de valoración por sede.",
        icon: "report",
      },
      {
        id: "reemplazos",
        title: "Cuando un docente falta, la clase sigue",
        description:
          "Si un docente titular no se presenta, se puede asignar un reemplazo con permisos específicos (solo asistencia, o asistencia y notas), sin perder el control de la clase.",
        icon: "userSwitch",
      },
      {
        id: "offline",
        title: "Trabaja sin depender del internet",
        description:
          "Sube notas, registra asistencia y diligencia el observador del estudiante incluso sin conexión. Edoma sincroniza todo automáticamente en cuanto vuelve la señal.",
        icon: "offline",
      },
    ],
  },
  {
    id: "tiempo-real",
    eyebrow: "Eje 3",
    title: "Seguimiento en tiempo real y alertas tempranas",
    benefits: [
      {
        id: "rendimiento",
        title: "Todo el rendimiento académico, al instante",
        description:
          "Notas, asistencia y observador se actualizan en tiempo real, permitiendo que docentes, coordinación y padres tengan siempre información al día, sin esperar boletines ni reportes trimestrales.",
        icon: "clock",
      },
      {
        id: "riesgo",
        title: "Detecta a tiempo, no cuando ya es tarde",
        description:
          "El sistema identifica automáticamente a los estudiantes en riesgo académico y marca cuáles requieren un plan de apoyo inmediato.",
        icon: "alert",
      },
      {
        id: "mobile",
        title: "Pensado primero para el celular",
        description:
          "Edoma está diseñado desde cero para usarse desde el celular, porque así es como docentes y padres realmente interactúan con la plataforma día a día.",
        icon: "mobile",
      },
    ],
  },
];

export const ADDITIONAL_BENEFIT = {
  eyebrow: "Beneficio adicional",
  title: "Identidad institucional",
  description:
    "Cada institución accede a Edoma a través de su propio subdominio personalizado (por ejemplo, colegioabc.edoma.com), en lugar de un login genérico compartido, reforzando su identidad institucional.",
  icon: "building",
};

// ---------------------------------------------------------------------------
// HOME — Roles (presentación por tipo de usuario)
// ---------------------------------------------------------------------------

export type Role = {
  id: string;
  label: string;
  headline: string;
  points: string[];
  icon: string;
};

export const ROLES: Role[] = [
  {
    id: "docente",
    label: "Docente",
    headline: "Menos papeleo, más tiempo para enseñar",
    points: [
      "Registra notas y asistencia desde el celular, incluso sin internet.",
      "Genera el logro y la descripción cualitativa de cada estudiante de forma automática.",
      "Recibe permisos claros cuando asumes un reemplazo.",
    ],
    icon: "teacher",
  },
  {
    id: "Administrador",
    label: "Administrador",
    headline: "Visión completa de la institución, sin perseguir reportes",
    points: [
      "Detecta automáticamente estudiantes en riesgo académico o en extraedad.",
      "Gestiona reemplazos docentes con permisos específicos por rol.",
      "Da seguimiento objetivo y trazable a la convivencia escolar (Ley 1620).",
    ],
    icon: "coordinator",
  },
  {
    id: "padre",
    label: "Padre de familia",
    headline: "Información al día, sin esperar al boletín",
    points: [
      "Consulta notas, asistencia y observador en tiempo real desde el celular.",
      "Recibe alertas tempranas si tu hijo necesita apoyo académico.",
      "Un solo lugar, sin depender de circulares o mensajes sueltos.",
    ],
    icon: "parent",
  },
];

// ---------------------------------------------------------------------------
// HOME — Tabla comparativa
// ---------------------------------------------------------------------------

export type ComparisonValue = "yes" | "no" | "partial" | "unspecified";

export type ComparisonRow = {
  feature: string;
  edoma: ComparisonValue;
  altA: ComparisonValue;
  altB: ComparisonValue;
  altC: ComparisonValue;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Seguimiento académico en tiempo real", edoma: "yes", altA: "yes", altB: "partial", altC: "yes" },
  { feature: "Modo offline (notas, asistencia, observador)", edoma: "yes", altA: "no", altB: "no", altC: "no" },
  { feature: "Base de datos privada (Ley 1581 de 2012)", edoma: "yes", altA: "unspecified", altB: "unspecified", altC: "partial" },
  { feature: "Observador conforme a Ley 1620", edoma: "yes", altA: "no", altB: "no", altC: "no" },
  { feature: "Detección automática de extraedad", edoma: "yes", altA: "no", altB: "no", altC: "no" },
  { feature: "Generación automática de horarios", edoma: "yes", altA: "no", altB: "no", altC: "partial" },
  { feature: "Reemplazos docentes gestionados", edoma: "yes", altA: "no", altB: "no", altC: "no" },
  { feature: "Alertas pedagógicas automáticas", edoma: "yes", altA: "no", altB: "partial", altC: "no" },
  { feature: "Diseño Mobile First", edoma: "yes", altA: "no", altB: "partial", altC: "no" },
  { feature: "Login personalizado por institución (subdominio)", edoma: "yes", altA: "no", altB: "no", altC: "partial" },
  { feature: "Soporte humano", edoma: "yes", altA: "no", altB: "yes", altC: "no" },
];

export const COMPARISON_NOTE =
  "Comparación funcional elaborada con base en información pública de categorías de producto similares. Las columnas no identifican proveedores concretos.";

// ---------------------------------------------------------------------------
// HOME — Caso de éxito
// ---------------------------------------------------------------------------

export const SUCCESS_STORY = {
  quote:
    "Desde que empezamos a usar Edoma dejamos de perseguir boletines y reportes atrasados: hoy sabemos cómo va cada estudiante el mismo día, y eso nos permite actuar a tiempo.",
  role: "Coordinación académica",
  institution: "Institución educativa que ya usa Edoma",
  stat: { value: "En tiempo real", label: "seguimiento académico, sin esperar al corte de período" },
};

// ---------------------------------------------------------------------------
// NOSOTROS
// ---------------------------------------------------------------------------

export const ABOUT = {
  history: {
    title: "Nuestra historia",
    body:
      "Edoma nace de escuchar de primera mano las quejas y problemáticas reales de docentes, administrativos y padres de familia dentro del día a día escolar.",
  },
  mission: {
    title: "Nuestra misión",
    body:
      "Hacerle la vida más fácil al docente, al administrativo y al padre de familia, a través de una herramienta que realmente resuelva sus problemas cotidianos, no que se los complique.",
  },
  purpose: {
    title: "Nuestro propósito",
    body:
      "Llegar a cada vez más instituciones educativas y demostrar que sí es posible construir herramientas tecnológicas de calidad, pensadas y hechas para resolver problemas reales.",
  },
  dataProtection: {
    title: "Compromiso con la protección de datos",
    body:
      "En Edoma protegemos la información académica de estudiantes, docentes y padres de familia conforme a la Ley Estatutaria 1581 de 2012 de protección de datos personales en Colombia.",
  },
};

// ---------------------------------------------------------------------------
// SOPORTE — FAQ
// ---------------------------------------------------------------------------

export const FAQS = [
  {
    question: "¿Qué es Edoma?",
    answer:
      "Edoma es un sistema de seguimiento académico en tiempo real para instituciones educativas: notas, asistencia, observador del estudiante y alertas tempranas, todo actualizado al instante.",
  },
  {
    question: "¿Edoma funciona sin conexión a internet?",
    answer:
      "Sí. Puedes registrar notas, asistencia y el observador del estudiante sin conexión; Edoma sincroniza todo automáticamente en cuanto vuelve la señal.",
  },
  {
    question: "¿Cómo protege Edoma los datos de estudiantes y familias?",
    answer:
      "La información se almacena en una base de datos privada por institución, cumpliendo con la Ley Estatutaria 1581 de 2012 de protección de datos personales en Colombia.",
  },
  {
    question: "¿Cada institución tiene su propio acceso?",
    answer:
      "Sí. Cada institución cuenta con su propio subdominio personalizado (por ejemplo, colegioabc.edoma.com), en lugar de un login genérico compartido.",
  },
  {
    question: "¿Qué pasa si un docente titular no asiste?",
    answer:
      "Se puede asignar un reemplazo con permisos específicos: solo asistencia, o asistencia y notas, sin perder el control de la clase.",
  },
  {
    question: "¿Cómo contacto a soporte técnico?",
    answer:
      "Por ahora la vía de contacto es directa por WhatsApp. Puedes usar el botón de WhatsApp en cualquier página del sitio para escribirnos.",
  },
];

export const LEGAL_NOTICE =
  "Edoma cumple con la Ley Estatutaria 1581 de 2012 de protección de datos personales en Colombia.";
