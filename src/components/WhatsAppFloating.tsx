import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  const message = encodeURIComponent(
    "Hola 👋 Me gustaría hacer una consulta sobre Lovera Consultora Contable.",
  );

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=5493704319277&text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-16 h-16
        rounded-full
        bg-[#9f691f]
        text-white
        shadow-[0_12px_30px_rgba(159,105,31,0.45)]
        transition-all duration-300
        hover:bg-[#462406]
        hover:scale-110
        animate-whatsapp-float
      "
    >
      <MessageCircle size={28} />
    </a>
  );
}
