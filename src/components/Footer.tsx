import { Mail, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#e9eef0]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 border border-[#ac8043] rounded-lg flex items-center justify-center">
                <span className="text-[#e9c579] font-semibold text-lg">L</span>
              </div>
              <span className="text-xl font-medium tracking-wide">
                Lovera Consultoría
              </span>
            </div>

            <p className="text-[#bfc5c8] text-sm leading-relaxed max-w-xs">
              Acompañamiento contable y estratégico para personas, empresas y
              profesionales que buscan orden y claridad.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h3 className="font-semibold mb-5 text-[#e9c579] tracking-wide">
              Navegación
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { label: "Inicio", to: "/" },
                { label: "Servicios", to: "/servicios" },
                { label: "Noticias", to: "/noticias" },
                { label: "Contacto", to: "/contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[#bfc5c8] hover:text-[#e9c579] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HORARIO */}
          <div>
            <h3 className="font-semibold mb-5 text-[#e9c579] tracking-wide">
              Horario de atención
            </h3>

            <div className="flex items-start gap-3 text-sm text-[#bfc5c8]">
              <Clock size={16} className="text-[#ac8043] mt-0.5" />
              <span>
                Lunes a viernes
                <br />
                9:00 a 18:00 hs
              </span>
            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="font-semibold mb-5 text-[#e9c579] tracking-wide">
              Contacto
            </h3>

            <div className="space-y-4 text-sm text-[#bfc5c8]">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#ac8043]" />
                <a
                  href="mailto:info@loveraconsultoria.com"
                  className="hover:text-[#e9c579] transition-colors"
                >
                  info@loveraconsultoria.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#ac8043]" />
                <a
                  href="tel:+5493704084186"
                  className="hover:text-[#e9c579] transition-colors"
                >
                  +54 9 370 408-4186
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-[#8f9599] text-sm">
            © {new Date().getFullYear()} Lovera Consultoría. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
