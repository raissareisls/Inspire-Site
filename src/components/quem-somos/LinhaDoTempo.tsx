export default function LinhaDoTempo() {
  const eventos = [
    {
      id: 1,
      ano: "2024",
      desc: "Fundação do INSPIRE com 12 alunas participantes, 2 coordenadoras e 2 colaboradoras externas.",
    },
    {
      id: 2,
      ano: "2024",
      desc: "Primeiros workshops, palestras, rodas de conversa, painéis e visitas técnicas.",
    },
    {
      id: 3,
      ano: "2024",
      desc: "Visita ao Laboratório da HUAWEI ICT Academy, participação na SECOMP, no COMSOLID e no evento ElaTech.",
    },
    {
      id: 4,
      ano: "2025",
      desc: "Criação e realização de 3 encontros do 'Café com Mulheres'.",
    },
    {
      id: 5,
      ano: "2025",
      desc: "Primeiro desenvolvimento de trabalhos científicos.",
    },
    {
      id: 6,
      ano: "2026",
      desc: "Aumento do número de bolsistas no projeto.",
    },
    {
      id: 7,
      ano: "2026",
      desc: "Criação do 'INSPIRE: Conexões em Tecnologia', com um total de 68 inscrições, e criação do site oficial do projeto.",
    },
  ];

  return (
    <section style={{ borderLeft: 0, borderRight: 0 }}>
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Cabeçalho da seção */}
        <div className="text-center mb-8">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#e8719a" }}
          >
            Nossa trajetória
          </p>

          <h2 className="font-display text-3xl font-bold text-white">
            Linha do tempo
          </h2>
        </div>

        {/* Linha do tempo */}
        <div className="max-w-2xl mx-auto relative">

          {/* Linha vertical */}
          <div
            className="absolute top-2 bottom-2 left-[6px] w-px"
            style={{ backgroundColor: "#e8719a40" }}
          />

          <div className="space-y-5">
            {eventos.map((evento) => (
              <div key={evento.id} className="flex gap-4 relative">
                {/* Marcador */}
                <div
                  className="w-[13px] h-[13px] rounded-full border-[3px] shrink-0 mt-1 relative z-10"
                  style={{
                    borderColor: "#e8719a",
                    backgroundColor: "#343c50",
                  }}
                />

                <div className="-mt-0.5">
                  <h3
                    className="font-display text-sm font-bold mb-1"
                    style={{ color: "#e8719a" }}
                  >
                    {evento.ano}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#b8c0d8" }}
                  >
                    {evento.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
