import { Link } from 'react-router-dom';

export default function Pilares() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-16">
        <span className="text-[#e8719a] text-sm font-bold tracking-widest uppercase mb-2 block">
          O que fazemos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Três pilares, um propósito
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Cada frente do INSPIRE foi construída para apoiar mulheres em todos os estágios da jornada na tecnologia.
        </p>
      </div>

      {/* Grid de Cartões */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cartão 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
          <span className="text-[#e8719a] font-bold text-xl mb-4 block">01</span>
          <h3 className="text-xl font-bold mb-3">Formação técnica</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Workshops e minicursos práticos em desenvolvimento de software, qualidade, dados e mais — tudo 100% gratuito.
          </p>
          <Link to="/acoes" className="text-[#e8719a] text-sm font-semibold hover:underline">
            Ver ações →
          </Link>
        </div>

        {/* Cartão 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
          <span className="text-[#e8719a] font-bold text-xl mb-4 block">02</span>
          <h3 className="text-xl font-bold mb-3">Mentorias individuais</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Conexões mensais com mentoras experientes do mercado para orientação de carreira, portfólio e entrevistas.
          </p>
          <Link to="/mentoria" className="text-[#e8719a] text-sm font-semibold hover:underline">
            Saiba mais →
          </Link>
        </div>

        {/* Cartão 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
          <span className="text-[#e8719a] font-bold text-xl mb-4 block">03</span>
          <h3 className="text-xl font-bold mb-3">Oportunidades reais</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Um mural de vagas de estágio e emprego curado para a comunidade INSPIRE, com suporte para aplicação.
          </p>
          <Link to="/vagas" className="text-[#e8719a] text-sm font-semibold hover:underline">
            Ver vagas →
          </Link>
        </div>
      </div>
    </section>
  );
}