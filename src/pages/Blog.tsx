import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import WhatsAppFloating from "../components/WhatsAppFloating";
import { articulos } from "../data/articulos";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Blog() {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const totalPages = Math.ceil(articulos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = articulos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <main className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* HERO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Noticias & Artículos
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 max-w-3xl mx-auto text-lg"
          >
            Economía, impuestos y contabilidad explicados claro.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <motion.section
          key={currentPage} // 👈 CLAVE
          variants={stagger}
          initial="hidden"
          animate="visible" // 👈 NO whileInView
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {currentArticles.map((art) => (
            <motion.article
              key={art.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 shadow-xl"
            >
              {/* Imagen */}
              <div className="overflow-hidden">
                <motion.img
                  src={art.image}
                  alt={art.title}
                  className="h-56 w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Contenido */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-black bg-yellow-500 px-3 py-1 rounded-full">
                    {art.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar size={14} />
                    {art.date}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3">{art.title}</h2>
                <p className="text-slate-300 mb-4">{art.excerpt}</p>

                <Link
                  to={`/blog/${art.id}`}
                  className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 group"
                >
                  Leer artículo
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.section>

        {/* ✅ PAGINACIÓN VA ACÁ, FUERA DEL GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center gap-3 mt-20"
        >
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            const isActive = page === currentPage;

            return (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full border
          ${
            isActive
              ? "bg-yellow-500 text-black border-yellow-500"
              : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
          }`}
              >
                {page}
              </motion.button>
            );
          })}

          <motion.button
            whileHover={{ backgroundColor: "#eab308", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="flex items-center gap-2 px-5 h-10 rounded-full border border-yellow-500 text-yellow-500 disabled:opacity-40"
          >
            Next
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>

      <WhatsAppFloating />
    </main>
  );
}
