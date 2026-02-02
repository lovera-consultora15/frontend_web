import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SobreNosotros() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-earth-900 mb-6 text-center">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto">
            Profesionales matriculados con años de experiencia en asesoramiento
            contable.
          </p>
        </section>

        <section className="py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-6">
              Quiénes somos
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              Somos un estudio contable conformado por profesionales
              matriculados con amplia experiencia en gestión fiscal, contable y
              financiera.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Nuestro compromiso es brindar un servicio de calidad,
              personalizado y confiable a nuestros clientes, asesorándolos en
              todas sus necesidades contables e impositivas.
            </p>
            <p className="text-lg text-slate-600">
              Trabajamos con ética profesional, respetando la confidencialidad y
              la privacidad de todos nuestros clientes.
            </p>
          </div>

          <div className="flex-1">
            <div className="bg-gradient-to-br from-earth-300 to-earth-400 rounded-2xl h-80 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <Award
                  size={80}
                  className="text-earth-900 mx-auto mb-4 opacity-70"
                />
                <p className="text-earth-900 font-semibold">
                  Profesionales certificados
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-12 text-center">
            Nuestros Valores
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Profesionalismo",
                description:
                  "Atención experta y de calidad en cada servicio que brindamos.",
              },
              {
                icon: Heart,
                title: "Confianza",
                description:
                  "Confidencialidad total y relación honesta con nuestros clientes.",
              },
              {
                icon: Target,
                title: "Excelencia",
                description:
                  "Compromiso con los más altos estándares de calidad profesional.",
              },
              {
                icon: Users,
                title: "Servicio",
                description:
                  "Dedicación total a las necesidades y satisfacción de nuestros clientes.",
              },
            ].map((valor, idx) => {
              const Icon = valor.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl text-center">
                  <div className="w-16 h-16 bg-earth-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-earth-900" />
                  </div>
                  <h3 className="text-xl font-bold text-earth-900 mb-3">
                    {valor.title}
                  </h3>
                  <p className="text-slate-600">{valor.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-20 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-12 text-center">
            Nuestro Equipo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Contador Público",
                role: "Especialista en Impuestos",
                email: "contador@example.com",
              },
              {
                name: "Licenciado en Administración",
                role: "Especialista en Finanzas",
                email: "admin@example.com",
              },
              {
                name: "Contador Público",
                role: "Especialista en Sueldos",
                email: "sueldos@example.com",
              },
            ].map((member, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-earth-300 to-earth-400 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-earth-500 font-semibold mb-4">
                  {member.role}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-slate-600 hover:text-earth-500 transition"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-earth-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-3xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-6">
              ¿Necesitas asesoramiento?
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Nuestro equipo está disponible para ayudarte con todas tus
              necesidades contables.
            </p>
            <Link
              to="/contacto"
              className="bg-earth-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-earth-600 transition inline-flex items-center gap-2"
            >
              Contactar ahora <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
