import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_URL from "../../api/config";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_URL}/api/posts/${id}`);

        if (!res.ok) {
          throw new Error("Error al obtener el post");
        }

        const data = await res.json();

        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        console.error("Error cargando post:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`${API_URL}/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ title, content }),
    });

    navigate("/admin");
  };

  return (
    <main className="bg-slate-900 min-h-screen text-slate-100 p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8">
          Editar Noticia
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            className="w-full p-3 rounded-2xl bg-slate-800"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            rows={10}
            className="w-full p-3 rounded-2xl bg-slate-800"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition">
            Guardar Cambios
          </button>
        </form>
      </div>
    </main>
  );
}
