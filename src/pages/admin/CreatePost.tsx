import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../../api/config";

export default function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (file: File | null) => {
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const res = await fetch(`${API_URL}/api/posts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Error al publicar");
      }

      navigate("/admin");
    } catch (error) {
      alert("Error al publicar la noticia");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-900 min-h-screen text-slate-100 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-slate-800 p-10 rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-yellow-400 mb-10">
          Crear Nueva Noticia
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Título */}
          <div>
            <label className="block mb-2 text-slate-300">Título</label>
            <input
              type="text"
              className="w-full p-3 rounded-2xl bg-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Contenido */}
          <div>
            <label className="block mb-2 text-slate-300">Contenido</label>
            <textarea
              rows={10}
              className="w-full p-4 rounded-2xl bg-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          {/* Imagen */}
          <div>
            <label className="block mb-2 text-slate-300">Imagen</label>
            <input
              type="file"
              onChange={(e) =>
                handleImageChange(e.target.files ? e.target.files[0] : null)
              }
              className="w-full text-slate-300"
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 rounded-2xl h-64 object-cover shadow-lg"
              />
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition disabled:opacity-60"
          >
            {loading ? "Publicando..." : "Publicar Noticia"}
          </button>
        </form>
      </div>
    </main>
  );
}
