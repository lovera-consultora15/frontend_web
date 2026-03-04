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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Error enviando formulario");
      }

      setSuccess(true);
      setFormData({ name: "", phone: "", email: "" });
    } catch (error) {
      console.error(error);
      alert("Hubo un error al enviar la consulta ❌");
    } finally {
      setLoading(false);
    }
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-earth-900 mb-8 leading-tight">
              Contáctanos
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
              <label className="block text-base font-semibold text-earth-900 mb-2">
                Nombre y apellido *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Juan Pérez"
                className="w-full rounded-xl bg-white border-2 border-brand-400/40 px-6 py-4 text-slate-800 focus:border-brand-600 focus:ring-2 focus:ring-brand-400/40 outline-none transition"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-base font-semibold text-earth-900 mb-2">
                Teléfono *
              </label>
              <div className="flex">
                <span className="flex items-center px-5 rounded-l-xl bg-brand-600 text-white font-semibold">
                  +54
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9 11 2345 6789"
                  className="w-full rounded-r-xl bg-white border-2 border-brand-400/40 px-6 py-4 focus:border-brand-600 focus:ring-2 focus:ring-brand-400/40 outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-base font-semibold text-earth-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@email.com"
                className="w-full rounded-xl bg-white border-2 border-brand-400/40 px-6 py-4 focus:border-brand-600 focus:ring-2 focus:ring-brand-400/40 outline-none transition"
              />
            </div>

            {/* MENSAJE DE ÉXITO */}
            {success && (
              <p className="text-green-600 font-semibold">
                ✅ Consulta enviada correctamente. Te responderemos pronto.
              </p>
            )}

            {/* CTA */}
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonMotion}
              type="submit"
              disabled={loading}
              className="w-full mt-4 inline-flex items-center justify-center gap-3 bg-brand-500 text-earth-900 px-10 py-4 rounded-full text-base font-bold tracking-wide disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar consulta"}
              <ArrowRight size={18} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
