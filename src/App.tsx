import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import SobreNosotros from "./pages/SobreNosotros";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/noticias" element={<Blog />} />
            <Route path="/noticia/:id" element={<BlogDetail />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
