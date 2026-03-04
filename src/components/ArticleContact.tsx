import { useState } from "react";
import { motion } from "framer-motion";
import API_URL from "../api/config";

export default function ArticleContact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false); // 👈 importante resetear

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar");
      }

      setSuccess(true);

      setFormData({
        nombre: "",
        telefono: "",
        email: "",
      });
    } catch (error) {
      console.error(error);
      alert("Hubo un error al enviar el formulario ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-24 bg-[#1a1a1a] border border-white/10 rounded-3xl p-10 shadow-xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          ¿Necesitás asesoramiento profesional?
        </h2>

        <p className="text-slate-400 mb-10">
          Nuestro equipo puede ayudarte a optimizar tu situación fiscal y
          contable. Dejanos tus datos y nos contactamos a la brevedad.
        </p>

        {success ? (
          <p className="text-green-400 font-semibold">
            ¡Consulta enviada correctamente! Nos pondremos en contacto pronto.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y Apellido"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3 text-slate-100 focus:outline-none focus:border-yellow-500 transition"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              required
              value={formData.telefono}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3 text-slate-100 focus:outline-none focus:border-yellow-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3 text-slate-100 focus:outline-none focus:border-yellow-500 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Consultar"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
