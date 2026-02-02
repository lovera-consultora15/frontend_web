import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Variants } from "framer-motion";
import { articulos } from "../data/articulos";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const articulo = articulos.find(
    (a: (typeof articulos)[0]) => a.id === Number(id)
  );

  if (!articulo) {
    return (
      <>
        <Header />
        <main className="bg-[#121212] min-h-screen flex items-center justify-center text-slate-300">
          Artículo no encontrado
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="bg-[#121212] text-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-yellow-400 mb-8 hover:text-yellow-300 transition"
            >
              <ArrowLeft size={18} />
              Volver al blog
            </Link>

            <img
              src={articulo.image}
              alt={articulo.title}
              className="w-full h-[420px] object-cover rounded-3xl mb-10"
            />

            <div className="flex items-center gap-6 mb-6">
              <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                {articulo.category}
              </span>
              <span className="text-slate-400 text-sm flex items-center gap-1">
                <Calendar size={14} />
                {articulo.date}
              </span>
            </div>

            <h1 className="text-4xl font-extrabold mb-6">{articulo.title}</h1>

            <p className="text-slate-300 text-lg leading-relaxed">
              {articulo.content}
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
