import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="w-full bg-[#272e3fd1] text-white px-8 py-4 flex items-center justify-between font-sans shadow-md">
      {/* Lado Esquerdo: Logo no círculo rosa e Título */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img src="public\inspireAtivo 1@2x-Photoroom.png-Photoroom.png" alt="Logo INSPIRE" className="w-full h-full object-cover p-1" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-wide">INSPIRE</span>
          <span className="text-[#e8719a] text-[10px] font-semibold tracking-widest uppercase">UFC - Extensão</span>
        </div>
      </div>

      {/* Lado Direito: Links de Navegação */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-[#e8719a] transition-colors">Início</Link>
        <Link to="/quem-somos" className="hover:text-[#e8719a] transition-colors">Quem Somos</Link>
        <Link to="/acoes" className="hover:text-[#e8719a] transition-colors">Ações</Link>
        <Link to="/mentoria" className="hover:text-[#e8719a] transition-colors">Mentorias</Link>
        <Link to="/vagas" className="hover:text-[#e8719a] transition-colors">Vagas</Link>
        <Link to="/inscricao" className="bg-[#e8719a] text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors ml-2">
          Inscrever-se
        </Link>
      </div>
    </nav>
  );
}