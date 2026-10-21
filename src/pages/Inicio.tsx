import Hero from '../components/home/Hero';
import Pilares from '../components/home/Pilares';
import CTA from "../components/home/CTA";
import Parceiros from "../components/home/Parceiros";

export default function Inicio() {
  return (
    <main className="text-white">
      <Hero />
      <Pilares />
      <CTA />
      <Parceiros />
    </main>
  );
}