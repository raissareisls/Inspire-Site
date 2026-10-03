export default function NossaHistoria() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      
      {/* Texto sobre a história do INSPIRE */}
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-[#e8719a]">
          Nossa história
        </p>

        <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Um projeto nascido da universidade, para{" "}
          <span className="text-[#e8719a]">transformar</span> o mundo real
        </h1>

        <p className="text-base leading-relaxed mb-4 text-[#b8c0d8]">
          O INSPIRE surgiu em 2020, dentro da Universidade Federal do Ceará,
          diante de um dado preocupante: mulheres representam menos de 20% dos
          profissionais de tecnologia no Brasil.
        </p>

        <p className="text-base leading-relaxed text-[#9aa3be]">
          Nossa resposta foi criar um ambiente seguro de aprendizado, conexão e
          empoderamento — onde estudantes encontram mentoras, habilidades
          técnicas e oportunidades reais de entrar na área de desenvolvimento
          de software.
        </p>
      </div>

      {/* Imagem representando mulheres na tecnologia */}
      <div className="h-[360px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=700&h=500&fit=crop&auto=format"
          alt="Mulheres em evento de tecnologia"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}