const categorias = ['Todas', 'Workshop', 'Minicurso', 'Palestra', 'Networking'];

interface FiltroAcoesProps {
  ativo: string;
  onSelecionar: (categoria: string) => void;
}

export default function FiltroAcoes({ ativo, onSelecionar }: FiltroAcoesProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-12 flex flex-wrap justify-center gap-3">
      {/* Botões de filtro */}
      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          onClick={() => onSelecionar(categoria)}
          className={
            categoria === ativo
              ? 'bg-[#e8719a] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors'
              : 'bg-white/5 border border-white/15 text-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-white/10 hover:text-white transition-colors'
          }
        >
          {categoria}
        </button>
      ))}
    </section>
  );
} 