
export default function ComoFunciona() {
  const etapas = [
    {
      numero: "01",
      titulo: "Inscrição",
      descricao:
        "No período de inscrição preencha o formulário.",
    },
    {
      numero: "02",
      titulo: "Conexão",
      descricao:
        "Nossa equipe se conecta diretamente com você pelas redes sociais, e-mail ou contato.",
    },
    {
      numero: "03",
      titulo: "Subgrupos",
      descricao:
        "Cada participante é designada para um subgrupo controlada por uma dupla de organizadoras.",
    },
    {
      numero: "04",
      titulo: "Interações",
      descricao:
        "Ao decorrer do mês os subgrupos são movimentados com assuntos diversas para que permaneçam atualizadas e os debates ativos.",
    },
    {
      numero: "05",
      titulo: "Mentoria",
      descricao:
        "Ao fim do mês um tema é escolhido de acordo com o interesse das discentes e discutido na reunião ",
    },
  ];

  return (
    <section style={{ backgroundColor: "#2a3143" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="font-display text-2xl font-bold text-white text-center mb-8">
          Como funciona
        </h2>

        <div className="relative">
          <div
            className="hidden md:block absolute h-px"
            style={{
              backgroundColor: "#e8719a40",
              top: "14px",
              left: "10%",
              right: "10%",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            {etapas.map((etapa) => (
              <div
                key={etapa.numero}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mb-3 relative z-10"
                  style={{ backgroundColor: "#e8719a" }}
                >
                  {etapa.numero}
                </div>

                <h3 className="font-display text-sm font-bold text-white mb-2">
                  {etapa.titulo}
                </h3>

                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#9aa3be" }}
                >
                  {etapa.descricao}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
