export default function AcoesHead() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-20 pb-10 flex flex-col items-center text-center">
      {/* Textos */}
      <p className="text-[#e8719a] text-sm font-bold tracking-widest uppercase mb-4">
        O que fazemos
      </p>
      <div className="flex flex-col items-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Nossas <span className="text-[#e8719a]">Ações</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
          Quatro frentes que se conectam para formar, conectar e impulsionar mulheres na engenharia de software.
        </p>
      </div>
    </section>
  );
}