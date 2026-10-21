import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 md:px-8 md:py-20 lg:flex-row lg:gap-16">
      {/* Textos e Botões */}
      <div className="flex max-w-2xl flex-col">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Mulheres que <br />
          <span className="text-[#e8719a]">transformam a tecnologia</span>
        </h1>
        
        <p className="mb-10 text-lg leading-relaxed text-gray-300">
          O INSPIRE incentiva a participação feminina na área de software — por meio de mentorias, workshops e conexões reais que constroem carreiras na tecnologia.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
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
      <div className="flex w-full justify-center lg:w-1/2">
         <div className="h-72 w-72 overflow-hidden rounded-full bg-white/5 ring-1 ring-[#82949a]/45 shadow-[0_0_0_8px_rgba(87,113,123,0.10),0_20px_60px_rgba(232,113,154,0.12)] md:h-80 md:w-80 lg:h-96 lg:w-96">
            <img src="/inspireAtivo 1@2x.png" alt="Equipe INSPIRE" className="h-full w-full object-cover" />
         </div>
      </div>
    </section>
  );
}
