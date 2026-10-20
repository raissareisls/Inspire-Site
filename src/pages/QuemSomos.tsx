import NossaHistoria from "../components/quem-somos/NossaHistoria";
import PilaresAtuacao from "../components/quem-somos/PilaresAtuacao";
import LinhaDoTempo from "../components/quem-somos/LinhaDoTempo";
import Equipe from "../components/quem-somos/Equipe";

export default function QuemSomos() {
  return (
    <main className="text-white">
      <NossaHistoria />
      <PilaresAtuacao />
      <LinhaDoTempo />
      <Equipe />
    </main>
  );
}