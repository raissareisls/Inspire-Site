import fotoEvento from "../../assets/fotoEvento.png";

export default function BeneficiosMentoria() {
  const beneficios = [
    "Acompanhamento individual e em grupo com mentoras experientes",
    "Rede de apoio entre estudantes, professoras e profissionais",
    "Permitirá exergar a tecnologia além do óbvio, explorando diferentes caminhos",
    "Ficará por dentro de assuntos em altas no universo na tecnologia",
    "Oportunidade de fazer Networking",
  ];

  return (
    <section style={{ borderLeft: 0, borderRight: 0 }}>
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
            O que você ganha participando
          </h2>

          <ul className="space-y-3">
            {beneficios.map((beneficio) => (
              <li
                key={beneficio}
                className="flex items-start gap-3 text-sm leading-relaxed"
                style={{ color: "#b8c0d8" }}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    backgroundColor: "rgba(232, 113, 154, 0.2)",
                    color: "#e8719a",
                  }}
                >
                  <span className="text-[9px]">✓</span>
                </span>

                {beneficio}
              </li>
            ))}
          </ul>
        </div>

        {/* Imagem ilustrativa */}
        <div className="h-[260px] md:h-[300px] rounded-xl overflow-hidden">
          <img
            src={fotoEvento}
            alt="Ambiente de trabalho colaborativo"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
