import ProgramaDeMentoria from "../components/mentorias/ProgramaDeMentoria";
import ComoFunciona from "../components/mentorias/ComoFunciona";
import BeneficiosMentoria from "../components/mentorias/BeneficiosMentoria";
import NossoTime from "../components/mentorias/NossoTime";
import InscricaoMentoria from "../components/mentorias/InscricaoMentoria";

export default function Mentoria() {
  return (
    <main className="text-white">
      <ProgramaDeMentoria />
      <ComoFunciona />
      <BeneficiosMentoria />
      <NossoTime />
      <InscricaoMentoria />
    </main>
  );
}