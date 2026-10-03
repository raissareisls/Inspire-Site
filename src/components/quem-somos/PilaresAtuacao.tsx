export default function PilaresAtuacao() {
  return (
    <section className="glass-panel" style={{ borderLeft: 0, borderRight: 0 }}>

      {/*Cabeçalho da seção*/}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3 text-center"
          style={{ color: "#e8719a" }}
        >
          Pilares de atuação
        </p>

        <h2 className="font-display text-3xl font-bold text-center text-white mb-12">
          Como atuamos
        </h2>
        
        {/*Grid de cartões*/}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            {
              icon: "01",
              title: "Educação",
              desc: "Formação técnica acessível com foco em software e qualidade.",
            },
            {
              icon: "02",
              title: "Comunidade",
              desc: "Rede ativa de estudantes, mentoras e profissionais de tech.",
            },
            {
              icon: "03",
              title: "Empregabilidade",
              desc: "Preparação real para o mercado: portfólio, entrevistas e vagas.",
            },
            {
              icon: "04",
              title: "Impacto",
              desc: "Pesquisa sobre gênero e tecnologia com publicações acadêmicas.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="glass-card rounded-xl p-6 text-center bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div
                className="font-display text-sm font-bold tracking-widest mb-3"
                style={{ color: "#e8719a" }}
              >
                {p.icon}
              </div>

              <div className="font-display font-bold text-white mb-2">
                {p.title}
              </div>

              <div className="text-sm" style={{ color: "#9aa3be" }}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
