export default function Equipe() {
  const integrantes = [
    {
      nome: "Valéria Lelli",
      funcao: "Coordenadora",
      foto: "",
    },
    {
      nome: "Fabiana Marinho",
      funcao: "Coordenadora",
      foto: "",
    },
    {
      nome: "Rossana Andrade",
      funcao: "Coordenadora",
      foto: "",
    },
    {
      nome: "Amanda Pires",
      funcao: "Coordenadora",
      foto: "",
    },
    {
      nome: "Thayná Guimarães",
      funcao: "Bolsista",
      foto: "",
    },
    {
      nome: "Raissa Reis",
      funcao: "Bolsista",
      foto: "",
    },
    {
      nome: "Lara Raquel",
      funcao: "Voluntária",
      foto: "",
    },
    {
      nome: "Isabella Lellis",
      funcao: "Voluntária",
      foto: "",
    },
    {
      nome: "Beatriz Sousa",
      funcao: "Voluntária",
      foto: "",
    },
    {
      nome: "Iasmim Saraiva",
      funcao: "Voluntária",
      foto: "",
    },
    {
      nome: "Victoria Tome",
      funcao: "Voluntária",
      foto: "",
    },
    {
      nome: "Yasmim Amorim",
      funcao: "Voluntária",
      foto: "",
    },
    {
      nome: "Emilly Oliveira",
      funcao: "Voluntária",
      foto: "",
    },
    {
      nome: "Ravena Carvalho",
      funcao: "Voluntária",
      foto: "",
    },
    {
      nome: "Luiza Mel",
      funcao: "Voluntária",
      foto: "",
    },
  ];

  return (
    <section className="glass-panel" style={{ borderLeft: 0, borderRight: 0 }}>
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Cabeçalho da seção */}
        <div className="text-center mb-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#e8719a" }}
          >
            Equipe
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            Quem faz o INSPIRE acontecer
          </h2>
        </div>

        {/* Grade de integrantes */}
        <div className="grid grid-cols-5 gap-3">
          {integrantes.map((integrante) => (
            <div
              key={integrante.nome}
              className="glass-card rounded-xl p-3 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2 border border-white/20">
                {integrante.foto && (
                  <img
                    src={integrante.foto}
                    alt={integrante.nome}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>

              <h3 className="text-xs font-bold text-white mb-1">
                {integrante.nome}
              </h3>

              <p className="text-xs" style={{ color: "#e8719a" }}>
                {integrante.funcao}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
