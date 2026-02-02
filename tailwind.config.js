/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* ================= FUENTES ================= */
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "sans-serif"],
        sans: ["'Nunito Sans'", "system-ui", "sans-serif"],
      },

      /* ================= COLORES ================= */
      colors: {
        /* 🎯 MARCA PRINCIPAL (DORADO) */
        brand: {
          600: "#db9214",
          500: "#daa755",
          400: "#e9c579",
        },

        /* 🌍 PALETA TIERRA */
        earth: {
          900: "#3d2d1f",
          800: "#4a3f33",
          700: "#6b5d4f",
          600: "#8b7d6f",
          300: "#e8d5b7",
          200: "#f5ead6",
          100: "#faf6f0",
        },

        slate: {
          900: "#2d2d2d",
          800: "#4a4a4a",
          700: "#6b6b6b",
          600: "#888888",
          500: "#a0a0a0",
          400: "#c0c0c0",
          300: "#d9d9d9",
          200: "#e8e8e8",
          100: "#f5f5f5",
        },
      },

      /* ================= ANIMACIONES ================= */
      keyframes: {
        whatsappFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        whatsappPulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(219,146,20,0.5)" },
          "70%": { boxShadow: "0 0 0 18px rgba(219,146,20,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(219,146,20,0)" },
        },
      },

      animation: {
        "whatsapp-float": "whatsappFloat 3.5s ease-in-out infinite",
        "whatsapp-pulse": "whatsappPulse 2.8s infinite",
      },
    },
  },
  plugins: [],
};
