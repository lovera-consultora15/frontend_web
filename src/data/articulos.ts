export type Articulo = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
};

export const articulos: Articulo[] = [
  {
    id: 1,
    title: "Cómo presentar tu Declaración Jurada de IVA",
    excerpt:
      "Aprendé paso a paso cómo cumplir correctamente con la presentación del IVA ante AFIP.",
    content: "La declaración jurada de IVA es una obligación mensual clave...",
    date: "15 de Diciembre, 2024",
    category: "Impuestos",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Gestión de sueldos y cargas sociales",
    excerpt: "Todo lo que tenés que saber para liquidar sueldos correctamente.",
    content: "La liquidación de sueldos implica aportes y obligaciones...",
    date: "10 de Diciembre, 2024",
    category: "Sueldos",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Errores comunes en monotributo",
    excerpt: "Los errores más frecuentes que cometen los monotributistas.",
    content: "Una mala categoría puede generar deudas...",
    date: "5 de Diciembre, 2024",
    category: "Monotributo",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Inflación y su impacto en las empresas",
    excerpt: "Cómo afecta la inflación a la planificación financiera.",
    content: "La inflación impacta directamente en costos y márgenes...",
    date: "30 de Noviembre, 2024",
    category: "Economía",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "Balances contables",
    excerpt: "La importancia del balance para tu empresa.",
    content: "El balance permite evaluar resultados y patrimonio...",
    date: "22 de Noviembre, 2024",
    category: "Contabilidad",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Planificación fiscal inteligente",
    excerpt: "Cómo pagar menos impuestos legalmente.",
    content: "Optimizar la carga impositiva evita sorpresas...",
    date: "15 de Noviembre, 2024",
    category: "Impuestos",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    title: "Costos y rentabilidad",
    excerpt: "Cómo analizar costos en inflación.",
    content: "Indicadores clave para no perder rentabilidad...",
    date: "8 de Noviembre, 2024",
    category: "Economía",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
  },
  {
    id: 8,
    title: "Finanzas para pymes",
    excerpt: "Orden financiero para crecer.",
    content: "Controlar ingresos y egresos es fundamental...",
    date: "1 de Noviembre, 2024",
    category: "Finanzas",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: 9,
    title: "Impuestos provinciales",
    excerpt: "Ingresos Brutos explicado fácil.",
    content: "Qué tener en cuenta para cumplir correctamente...",
    date: "28 de Octubre, 2024",
    category: "Impuestos",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    id: 10,
    title: "Control presupuestario",
    excerpt: "Herramientas para controlar gastos.",
    content: "Un buen presupuesto evita desbalances...",
    date: "20 de Octubre, 2024",
    category: "Gestión",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
  },
  {
    id: 11,
    title: "Auditorías internas",
    excerpt: "Por qué son importantes.",
    content: "Detectar errores antes de tiempo...",
    date: "15 de Octubre, 2024",
    category: "Contabilidad",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
  },
  {
    id: 12,
    title: "Economía 2025",
    excerpt: "Escenarios posibles.",
    content: "Proyecciones y análisis económico...",
    date: "10 de Octubre, 2024",
    category: "Economía",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105",
  },
];
