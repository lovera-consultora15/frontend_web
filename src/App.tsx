import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import SobreNosotros from "./pages/SobreNosotros";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreatePost from "./pages/admin/CreatePost";
import EditPost from "./pages/admin/EditPost";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./components/ContactForm";

/* =========================
   LAYOUT PÚBLICO
========================= */
function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

/* =========================
   LAYOUT ADMIN
========================= */
function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* 🔐 ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLogin />} />

          <Route
            index
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="create"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />

          <Route
            path="edit/:id"
            element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* 🌎 PÚBLICO */}
        <Route path="/" element={<PublicLayout />}>
          {/* 👇 Esto hace que "/" cargue Home */}
          <Route index element={<Home />} />

          <Route path="home" element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
          <Route path="noticias" element={<Blog />} />
          <Route path="noticia/:id" element={<BlogDetail />} />
          <Route path="contacto" element={<ContactForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
