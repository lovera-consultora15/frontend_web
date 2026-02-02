import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo2D.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-[#121212]/95 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center h-24">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Lovera Estudio Contable"
              className="
                h-22 md:h-24
                w-auto
                drop-shadow-md
                transition-transform duration-300
                hover:scale-105
              "
            />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-14 text-xl font-semibold text-[#e9eef0]">
            {["Inicio", "Servicios", "Noticias", "Contacto"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Inicio" ? "" : item.toLowerCase()}`}
                className="
                  relative
                  transition-all duration-300
                  hover:text-[#e9c579]
                  hover:scale-105
                "
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#e9eef0]"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* NAV MOBILE */}
        {isOpen && (
          <nav
            className="
              md:hidden
              mt-2 pb-6 pt-6
              flex flex-col gap-6
              text-lg font-semibold
              text-[#e9eef0]
              bg-[#121212]/95 backdrop-blur
              rounded-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            "
          >
            {["Inicio", "Servicios", "Noticias", "Contacto"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Inicio" ? "" : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#e9c579] transition"
              >
                {item}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
