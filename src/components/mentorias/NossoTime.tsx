
export default function NossoTime() {
  const mentoras = [
    {
      nome: "Valéria Lelli",
      area: "",
      instituicao: "UFC",
      foto: "",
    },
    {
      nome: "Fabiana Marinho",
      area: "",
      instituicao: "IFCE",
      foto: "",
    },
    {
      nome: "Rossana Andrade",
      area: "",
      instituicao: "UFC",
      foto: "",
    },
    {
      nome: "Amanda Pires",
      area: "",
      instituicao: "UFC",
      foto: "",
    },
  ];

  return (
    <section style={{ backgroundColor: "#2a3143" }}>
      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="text-center mb-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#e8719a" }}
          >
            Nosso time
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            Conheça as mentoras
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mentoras.map((mentora) => (
            <div
              key={mentora.nome}
              className="glass-card rounded-xl p-3 flex items-center gap-3"
            >
              {/* Foto */}
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/20">
                {mentora.foto && (
                  <img
                    src={mentora.foto}
                    alt={mentora.nome}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-bold text-white">
                  {mentora.nome}
                </h3>

                <p
                  className="text-[10px] font-medium"
                  style={{ color: "#e8719a" }}
                >
                  {mentora.area}
                </p>

                <p
                  className="text-[10px]"
                  style={{ color: "#9aa3be" }}
                >
                  {mentora.instituicao}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
