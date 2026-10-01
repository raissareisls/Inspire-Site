import Hero from '../components/home/Hero';
import Pilares from '../components/home/Pilares';

export default function Inicio() {
  return (
    <main className="w-full bg-[#2A2438] text-white min-h-screen">
      <Hero />
      <Pilares />
    </main>
  );
}