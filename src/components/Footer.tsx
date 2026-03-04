import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logo from "../assets/logo2D.png";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#e9eef0] py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-3 gap-16">
          {/* LOGO + DESCRIPCIÓN */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Lovera Estudio Contable"
                className="
                  h-20
                  w-auto
                  drop-shadow-md
                  transition-transform duration-300
                  hover:scale-105
                "
              />
            </Link>

            <p className="mt-6 text-slate-400 leading-relaxed max-w-sm">
              Asesoramiento contable, impositivo y financiero con criterio
              profesional y visión estratégica.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#e9c579]">
              Navegación
            </h3>

            <ul className="space-y-4">
              {["Inicio", "Servicios", "Noticias", "Contacto"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === "Inicio" ? "" : item.toLowerCase()}`}
                    className="hover:text-[#e9c579] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO CON ICONOS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#e9c579]">
              Contacto
            </h3>

            <ul className="space-y-5 text-slate-400">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-[#e9c579]" />
                Formosa, Argentina
              </li>

              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#e9c579]" />
                +54 9 3704 31-9277
              </li>

              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#e9c579]" />
                geronimolovera@gmail.com
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle size={20} className="text-[#e9c579]" />
                WhatsApp directo
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Lovera Consultora Contable. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
