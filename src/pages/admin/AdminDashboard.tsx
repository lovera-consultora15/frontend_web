import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calendar, Pencil, Trash2, Plus, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import API_URL from "../../api/config";

interface Post {
  id: number;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const postsPerPage = 6;

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      const res = await fetch(`${API_URL}/api/posts/admin/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("token");
          navigate("/admin/login");
          return;
        }
        throw new Error("Error al obtener los posts");
      }

      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error cargando posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro que deseas eliminar esta noticia?",
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_URL}/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Error al eliminar");
      }

      fetchPosts();
    } catch (error) {
      console.error("Error eliminando:", error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  /* ------------------ PAGINACIÓN ------------------ */

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ----------------------------------------------- */

  return (
    <main className="bg-slate-900 min-h-screen text-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-4xl font-extrabold text-yellow-400">
            Panel Administrativo
          </h1>

          <div className="flex gap-4">
            <Link
              to="/admin/create"
              className="flex items-center gap-2 bg-yellow-400 text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition"
            >
              <Plus size={18} />
              Nueva Noticia
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 px-6 py-3 rounded-2xl font-semibold hover:bg-red-400 transition"
            >
              <LogOut size={18} />
              Cerrar sesión
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentPosts.length === 0 ? (
            <p className="text-slate-400">No hay noticias creadas.</p>
          ) : (
            currentPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -6 }}
                className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="h-56 w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-black bg-yellow-500 px-3 py-1 rounded-full">
                      Admin
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>

                  <p className="text-slate-400 text-sm mb-6">
                    {post.content?.slice(0, 100)}...
                  </p>

                  <div className="flex justify-between">
                    <Link
                      to={`/admin/edit/${post.id}`}
                      className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-400 transition"
                    >
                      <Pencil size={16} />
                      Editar
                    </Link>

                    <button
                      onClick={() => handleDelete(post.id)}
                      className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-xl hover:bg-red-400 transition"
                    >
                      <Trash2 size={16} />
                      Eliminar
                    </button>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>

        {/* PAGINACIÓN */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
            <button
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              className="px-4 py-2 bg-slate-700 rounded-xl disabled:opacity-40"
            >
              Anterior
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded-xl font-semibold ${
                    currentPage === page
                      ? "bg-yellow-400 text-black"
                      : "bg-slate-700"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              className="px-4 py-2 bg-slate-700 rounded-xl disabled:opacity-40"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
