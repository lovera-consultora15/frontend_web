import {
  FileText,
  Calculator,
  BarChart3,
  PieChart,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const servicios = [
  {
    icon: FileText,
    title: "Gestión Impositiva",
    items: [
      "Seguimiento impositivo de Monotributistas.",
      "Declaraciones Juradas de Impuesto a los Ingresos Brutos y Convenio Multilateral (incluido vendedores de Mercado Libre).",
      "Presentaciones Impositivas de IVA.",
      "Gestión y administración de Impuesto a las Ganancias.",
    ],
  },
  {
    icon: Calculator,
    title: "Gestión de Sueldos y Trabajadores",
    items: [
      "Asesoramiento laboral legal integral.",
      "Proposición en encuadre laboral.",
      "Cálculo de Sueldos.",
      "Presentación de F. 572 (SiRADIG).",
      "Liquidaciones Finales.",
    ],
  },
  {
    icon: BarChart3,
    title: "Gestión Contable",
    items: [
      "Realización de libros contables.",
      "Elaboración de Estados Contables para distintas entidades.",
      "Auditoría externa",
    ],
  },
  {
    icon: PieChart,
    title: "Asesoría Financiera",
    items: [
      "Estudio y elaboración de Presupuestos Financieros para proyectos de expansión.",
      "Mejora de flujos financieros",
    ],
  },
  {
    icon: TrendingUp,
    title: "Acompañamiento Empresarial",
    items: [
      "Consultora en armado y diseño societario",
      "Análisis y mejoramiento de estructuras empresariales.",
    ],
  },
];

export default function Servicios() {
  return (
    <main className="bg-[#0f0f0f] text-slate-100">
      {/* ================= HERO ================= */}
      <section className="pt-40 pb-32 text-center px-6 bg-[#0f0f0f]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Asesoramiento contable estratégico
        </motion.h1>

        <p className="max-w-3xl mx-auto text-slate-300 text-lg">
          Orientado a profesionales, empresas, emprendedores y personas que
          buscan orden, claridad y crecimiento.
        </p>
      </section>

      {/* ================= SERVICIOS ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-earth-100 to-white pt-32 pb-[28rem]">
        {/* BLURS */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-slate-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {servicios.map((servicio, i) => {
              const Icon = servicio.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="
              relative
              bg-white
              rounded-2xl
              p-8
              border border-[#e9c579]/40
              shadow-xl
              transition
              hover:-translate-y-2
              hover:shadow-2xl
              group
              flex flex-col
            "
                >
                  {/* líneas hover */}
                  <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#e9c579] transition-all duration-300 group-hover:w-full" />
                  <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#e9c579] transition-all duration-300 group-hover:w-full" />

                  {/* icono */}
                  <Icon size={40} className="text-[#e9c579] mb-5" />

                  {/* título */}
                  <h3 className="text-xl font-bold text-earth-900 mb-4">
                    {servicio.title}
                  </h3>

                  {/* lista */}
                  <ul className="space-y-2 text-slate-700 text-sm mb-10">
                    {servicio.items.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[#e9c579]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* botón */}
                  <button
                    className="
                mt-auto
                inline-flex items-center gap-3
                text-base font-semibold
                text-[#d4aa3f]
                transition-all
                group-hover:gap-4
                hover:text-[#b8922e]
              "
                  >
                    Leer más
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* CORTE DIAGONAL BIEN ABAJO */}
        <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-[#0f0f0f] clip-diagonal" />
      </section>

      {/* ================= PROCESO ================= */}
      <section className="relative bg-[#121212] py-40 px-6 overflow-hidden">
        {/* Glow decorativo */}
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-[#e9c579]/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-24"
          >
            Nuestro proceso de trabajo
          </motion.h2>

          <div className="relative border-l border-[#e9c579]/30 pl-12 space-y-16">
            {[
              "Consulta inicial",
              "Análisis de la situación",
              "Propuesta personalizada",
              "Implementación",
              "Seguimiento continuo",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Punto */}
                <span className="absolute -left-[26px] top-6 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#e9c579]" />

                {/* Card */}
                <div className="relative bg-[#151515] border border-white/10 rounded-2xl p-8 transition-all duration-300 group-hover:border-[#e9c579]/60 group-hover:translate-x-1">
                  {/* Número decorativo */}
                  <span className="absolute top-4 right-6 text-6xl font-extrabold text-white/5">
                    0{i + 1}
                  </span>

                  <h3 className="text-xl font-semibold mb-3 text-slate-100">
                    {step}
                  </h3>

                  <p className="text-slate-400 text-sm max-w-md">
                    Te acompañamos con claridad, compromiso y una visión
                    estratégica enfocada en resultados reales.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section className="relative w-full bg-gradient-to-b from-[#121212] to-[#0f0f0f] pt-32 pb-40 overflow-hidden">
        {/* Glow central suave */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#e9c579]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="relative max-w-6xl mx-auto px-6 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-6"
          >
            ¿Listo para trabajar con nosotros?
          </motion.h2>

          <p className="text-center text-slate-300 max-w-xl mx-auto">
            Contactanos y empezá a ordenar tu gestión contable con una mirada
            estratégica y profesional.
          </p>
        </div>

        {/* FORMULARIO FULL WIDTH REAL */}
        <div className="relative w-full">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
