import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importando todas as páginas que você acabou de criar
import Inicio from './pages/Inicio';
import QuemSomos from './pages/QuemSomos';
import Acoes from './pages/Acoes';
import Mentoria from './pages/Mentoria';
import Vagas from './pages/Vagas';
import Inscricao from './pages/Inscricao';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/inscricao" element={<Inscricao />} />
      </Routes>
    </BrowserRouter>
  );
}