import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Textos e Botões */}
      <div className="flex flex-col max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Mulheres que <br />
          <span className="text-[#e8719a]">transformam a tecnologia</span>
        </h1>
        
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          O INSPIRE incentiva a participação feminina na área de software — por meio de mentorias, workshops e conexões reais que constroem carreiras na tecnologia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/inscricao" 
            className="bg-[#e8719a] text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-all text-center shadow-lg"
          >
            Quero participar
          </Link>
          <Link 
            to="/quem-somos" 
            className="border border-[#e8719a] text-[#e8719a] px-8 py-3 rounded-full font-semibold hover:bg-[#e8719a]/10 transition-all text-center"
          >
            Conheça o projeto
          </Link>
        </div>
      </div>

      {/* Imagem de Destaque */}
      <div className="w-full md:w-1/2 flex justify-center">
         <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-0 border-[#e8719a]/30 shadow-2xl bg-white/5">
            <img src="public/inspireAtivo 1@2x.png" alt="Equipe INSPIRE" className="w-full h-full object-cover" />
         </div>
      </div>
    </section>
  );
}