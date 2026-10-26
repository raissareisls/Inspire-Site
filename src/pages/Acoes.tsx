import { useState } from 'react';
import AcoesHead from '../components/acoes/AcoesHead';
import Filtro from '../components/acoes/Filtro'
import ListaAcoes from '../components/acoes/ListaAcoes'

export default function Acoes() {
  const [filtro, setFiltro] = useState('Todas');
  return (
    <main className="w-full bg-[#2A2438] text-white min-h-screen">
      <AcoesHead />
      <Filtro ativo={filtro} onSelecionar={setFiltro}/>
      <ListaAcoes filtro={filtro} />
    </main>
  );
}