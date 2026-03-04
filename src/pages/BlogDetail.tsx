import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import WhatsAppFloating from "../components/WhatsAppFloating";
import { getPostById, Post } from "../api/posts";
import ArticleContact from "../components/ArticleContact";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (id) {
          const data = await getPostById(id);
          setPost(data);
        }
      } catch (error) {
        console.error("Error cargando noticia:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (loading) {
    return (
      <main className="bg-slate-900 text-slate-100 min-h-screen flex items-center justify-center">
        <p className="text-slate-400 text-lg">Cargando noticia...</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="bg-slate-900 text-slate-100 min-h-screen flex items-center justify-center">
        <p className="text-red-400 text-lg">Noticia no encontrada</p>
      </main>
    );
  }

  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-32">
        {/* Botón volver */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-12"
        >
          <ArrowLeft size={18} />
          Volver a noticias
        </Link>

        {/* Imagen principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-[450px] object-cover"
          />
        </motion.div>

        {/* Fecha */}
        <div className="flex items-center gap-2 text-slate-400 mb-6">
          <Calendar size={16} />
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
        </div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight"
        >
          {post.title}
        </motion.h1>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-slate-300 text-lg leading-relaxed space-y-6"
        >
          <p className="whitespace-pre-line">{post.content}</p>
        </motion.div>
      </div>
      <ArticleContact />
      <WhatsAppFloating />
    </main>
  );
}
