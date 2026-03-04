import API_URL from "./config";

export interface Post {
  id: number;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_URL}/api/posts`);

  if (!response.ok) {
    throw new Error("Error al obtener noticias");
  }

  return response.json();
};

export const getPostById = async (id: string): Promise<Post> => {
  const response = await fetch(`${API_URL}/api/posts/${id}`);

  if (!response.ok) {
    throw new Error("Noticia no encontrada");
  }

  return response.json();
};
