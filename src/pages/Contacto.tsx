import { motion } from "framer-motion";
import { fadeUp } from "../animation/motionVariants";
import { ArrowRight } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";

const buttonMotion = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 20px 45px rgba(233,197,121,0.6)",
  },
  tap: {
    scale: 0.96,
  },
};

export default function ContactForm() {
  const WHATSAPP_NUMBER = "5493704084186";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
Hola 👋  
Quiero realizar una consulta desde la web de Lovera Consultoría.

Nombre: ${formData.name}
Teléfono: +54 ${formData.phone}
Email: ${formData.email || "No informado"}
    `;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative w-full py-32 overflow-hidden bg-earth-100">
      {/* BLOBS */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-400/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-300/30 rounded-full blur-3xl" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-[1400px] mx-auto px-6"
      >
        <div
          className="
            grid lg:grid-cols-2 gap-20 items-center
            bg-earth-50/80 backdrop-blur
            rounded-[3rem]
            px-10 py-20 md:px-20
            shadow-[0_40px_120px_rgba(0,0,0,0.15)]
          "
        >
          {/* TEXTO */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-earth-900 mb-8 leading-tight">
              Empecemos a ordenar tu negocio
            </h2>

            <p className="text-xl text-slate-700 leading-relaxed max-w-xl">
              Un primer contacto claro puede ahorrarte problemas futuros.
              Analizamos tu situación y te acompañamos con criterio profesional.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-semibold text-earth-900 mb-2">
                Nombre y apellido *
              </label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                placeholder="Juan Pérez"
                className="
                  w-full rounded-xl
                  bg-white
                  border-2 border-brand-400/40
                  px-6 py-4
                  text-slate-800
                  focus:border-brand-600
                  focus:ring-2 focus:ring-brand-400/40
                  outline-none transition
                "
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-semibold text-earth-900 mb-2">
                Teléfono *
              </label>
              <div className="flex">
                <span
                  className="
                    flex items-center px-5
                    rounded-l-xl
                    bg-brand-600 text-white
                    font-semibold
                  "
                >
                  +54
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  onChange={handleChange}
                  placeholder="9 11 2345 6789"
                  className="
                    w-full rounded-r-xl
                    bg-white
                    border-2 border-brand-400/40
                    px-6 py-4
                    focus:border-brand-600
                    focus:ring-2 focus:ring-brand-400/40
                    outline-none transition
                  "
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-earth-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="correo@email.com"
                className="
                  w-full rounded-xl
                  bg-white
                  border-2 border-brand-400/40
                  px-6 py-4
                  focus:border-brand-600
                  focus:ring-2 focus:ring-brand-400/40
                  outline-none transition
                "
              />
            </div>

            {/* CTA */}
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonMotion}
              type="submit"
              className="
                w-full mt-6
                inline-flex items-center justify-center gap-3
                bg-brand-500 text-earth-900
                px-12 py-6 rounded-full
                text-lg font-bold
                tracking-wide
              "
            >
              Consultar por WhatsApp
              <ArrowRight size={20} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
