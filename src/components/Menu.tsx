import { NavLink } from 'react-router-dom';
import inspireSymbol from '../assets/inspire-symbol.png';

export default function Menu() {
  return (
    <nav className="w-full bg-[#272e3fd1] text-white px-8 py-4 flex items-center justify-between font-sans shadow-md">
      {/* Lado Esquerdo: Logo no círculo rosa e Título */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img src={inspireSymbol} alt="Símbolo INSPIRE" className="h-full w-full -translate-y-[15%] object-cover object-center" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-wide">INSPIRE</span>
          <span className="text-[#e8719a] text-[10px] font-semibold tracking-widest uppercase">UFC - Extensão</span>
        </div>
      </div>

      {/* Lado Direito: Links de Navegação */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <NavLink to="/" end className={({ isActive }) => `${isActive ? 'text-[#e8719a]' : ''} hover:text-[#e8719a] transition-colors`}>Início</NavLink>
        <NavLink to="/quem-somos" className={({ isActive }) => `${isActive ? 'text-[#e8719a]' : ''} hover:text-[#e8719a] transition-colors`}>Quem Somos</NavLink>
        <NavLink to="/acoes" className={({ isActive }) => `${isActive ? 'text-[#e8719a]' : ''} hover:text-[#e8719a] transition-colors`}>Ações</NavLink>
        <NavLink to="/mentoria" className={({ isActive }) => `${isActive ? 'text-[#e8719a]' : ''} hover:text-[#e8719a] transition-colors`}>Mentorias</NavLink>
        <NavLink to="/vagas" className={({ isActive }) => `${isActive ? 'text-[#e8719a]' : ''} hover:text-[#e8719a] transition-colors`}>Vagas</NavLink>
        <NavLink to="/inscricao" className="bg-[#e8719a] text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors ml-2">
          Inscrever-se
        </NavLink>
      </div>
    </nav>
  );
}
