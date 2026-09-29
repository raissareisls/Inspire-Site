import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importando o Menu, Footer e as Páginas
import Menu from './components/Menu';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import QuemSomos from './pages/QuemSomos';
import Acoes from './pages/Acoes';
import Mentoria from './pages/Mentoria';
import Vagas from './pages/Vagas';
import Inscricao from './pages/Inscricao';

export default function App() {
  return (
    <BrowserRouter>
      <Menu /> {/* O Menu fica fixo no topo */}
      
      {/* Esta div garante que o conteúdo ocupe a tela toda, empurrando o Footer para baixo */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/acoes" element={<Acoes />} />
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/vagas" element={<Vagas />} />
          <Route path="/inscricao" element={<Inscricao />} />
        </Routes>
      </div>

      <Footer /> {/* O Footer entra aqui, fixo no final de todas as páginas! */}
    </BrowserRouter>
  );
}