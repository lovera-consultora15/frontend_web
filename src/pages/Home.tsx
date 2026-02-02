import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Calculator,
  FileText,
  Users,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, imageReveal } from "../animation/motionVariants";
import heroImage from "../assets/img.jpg";
import ContactForm from "../components/ContactForm";
import WhatsAppFloating from "../components/WhatsAppFloating";
import { Variants } from "framer-motion";
import cardImage from "../assets/cal.jpg";

const testimonials = [
  {
    name: "María González",
    image: "https://i.pravatar.cc/150?img=32",
    comment:
      "Me ayudaron a ordenar toda la parte impositiva. Hoy tengo claridad y previsibilidad.",
  },
  {
    name: "Lucas Romero",
    image: "https://i.pravatar.cc/150?img=12",
    comment:
      "Profesionales, claros y muy atentos. Siempre explican todo sin vueltas.",
  },
  {
    name: "Ana Pérez",
    image: "https://i.pravatar.cc/150?img=47",
    comment: "Un acompañamiento constante y serio. Se nota la experiencia.",
  },
  {
    name: "Carlos Medina",
    image: "https://i.pravatar.cc/150?img=8",
    comment: "La digitalización y el orden que logramos fue clave para crecer.",
  },
];

/* ================= VARIANTS LOCALES ================= */

const sectionReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const parallaxImage: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-white font-sans">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] w-full pt-20">
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Estudio contable"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-6 w-full mt-[45vh] md:mt-[38vh]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="max-w-3xl"
            >
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 mb-4 leading-[1.05]"
              >
                Sueldos e Impuestos
              </motion.h1>

              <motion.h2
                variants={fadeUp}
                className="text-lg md:text-xl text-brand-400 font-semibold mb-4"
              >
                Servicio de liquidación digital
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg text-slate-200/90 mb-8 max-w-2xl"
              >
                Asesoramiento contable profesional, claro y 100% online.
              </motion.p>

              <motion.div variants={fadeUp}>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-brand-500 transition shadow-lg"
                >
                  Consultanos ahora
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= COMO TE AYUDAMOS ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-earth-100 to-white pt-32 pb-48">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-slate-400/20 rounded-full blur-3xl" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionReveal}
          className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center"
        >
          {/* TEXTO */}
          <motion.div variants={fadeUp}>
            <span className="block text-brand-600 font-semibold tracking-wide mb-6">
              Cómo trabajamos
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-earth-900 leading-tight mb-10">
              Contabilidad pensada <br className="hidden sm:block" />
              para tomar decisiones
            </h2>

            <p className="text-xl sm:text-2xl text-slate-700 max-w-xl mb-14 leading-relaxed">
              En Lovera combinamos conocimiento contable, mirada estratégica y
              herramientas digitales para que tu estructura acompañe el
              crecimiento de tu negocio.
            </p>

            <div className="space-y-6 max-w-xl">
              {[
                "Asesoría tributaria y tax planning",
                "Análisis financiero y presupuestos",
                "Diseño societario y optimización empresarial",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm"
                >
                  <span className="text-brand-600 text-2xl leading-none">
                    ▸
                  </span>
                  <p className="text-slate-800 text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div variants={parallaxImage} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-slate-900/10 rotate-[-2deg]" />

            <motion.div
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ type: "spring", stiffness: 40, damping: 20 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <motion.img
                src={cardImage}
                alt="Consultoría Lovera"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full object-cover grayscale"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />

              <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur px-5 py-3 rounded-xl">
                <span className="text-sm font-medium text-slate-100">
                  Enfoque estratégico & digital
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CORTE DIAGONAL */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-slate-900 clip-diagonal" />
      </section>

      {/* ================= SERVICIOS SEGÚN TU PERFIL ================= */}
      <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
            >
              Servicios según tu perfil
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="origin-center h-[2px] w-24 bg-slate-900 mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-3xl mx-auto"
            >
              Soluciones contables pensadas para cada etapa y tipo de
              contribuyente
            </motion.p>
          </div>

          {/* Grid */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {[
              {
                icon: Building2,
                title: "Empresas",
                items: [
                  "Constitución S.A. / S.R.L.",
                  "IVA e Ingresos Brutos",
                  "Ganancias y balances",
                  "Sueldos y asistencia",
                ],
              },
              {
                icon: Users,
                title: "Responsable Inscripto",
                items: [
                  "Inscripción AFIP",
                  "IVA y Ganancias",
                  "Bienes Personales",
                  "Soporte contable",
                ],
              },
              {
                icon: FileText,
                title: "Monotributo",
                items: [
                  "Alta y recategorización",
                  "Ingresos Brutos",
                  "Factura electrónica",
                  "Asistencia continua",
                ],
              },
              {
                icon: Calculator,
                title: "Contadores",
                items: [
                  "Tercerización sueldos",
                  "Paneles fiscales",
                  "Automatización",
                  "Gestión digital",
                ],
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="
            bg-white/90 backdrop-blur
            rounded-3xl p-8
            border border-slate-200
            shadow-[0_12px_40px_rgba(0,0,0,0.08)]
            hover:border-slate-900
            flex flex-col
            cursor-pointer
          "
              >
                {/* Icono */}
                <motion.div
                  whileHover={{ rotate: -3, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16 }}
                  className="w-16 h-16 rounded-2xl bg-slate-900/10 flex items-center justify-center mb-6"
                >
                  <card.icon size={30} className="text-slate-900" />
                </motion.div>

                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {card.title}
                </h3>

                <ul className="space-y-4 mb-10">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={16} className="text-slate-900 mt-1" />
                      <span className="text-slate-700 text-sm leading-6">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  Ver más
                  <ArrowRight size={16} />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactForm />
      <WhatsAppFloating />
      {/* ================= TESTIMONIOS ================= */}
      <section className="relative py-28 bg-earth-100 overflow-hidden">
        {/* transición suave desde arriba */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-earth-100" />

        <div className="relative max-w-7xl mx-auto px-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="text-4xl md:text-5xl font-extrabold text-earth-900 text-center mb-6"
          >
            Qué dicen nuestros clientes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-earth-700 text-center max-w-3xl mx-auto"
          >
            Experiencias reales de personas que confían en nuestro trabajo
          </motion.p>
        </div>

        {/* CARRUSEL */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="
            w-[320px] md:w-[380px]
            bg-earth-50/80
            backdrop-blur
            rounded-3xl p-8
            border border-earth-300
            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
            flex flex-col
          "
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-earth-300"
                  />

                  <span className="font-semibold text-earth-900">
                    {item.name}
                  </span>
                </div>

                {/* Comentario */}
                <p className="text-earth-700 text-base leading-relaxed">
                  “{item.comment}”
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
