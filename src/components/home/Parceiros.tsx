import ufcLogo from "../../assets/ufc.png";
import ifceLogo from "../../assets/ifce.png";
import greatLogo from "../../assets/great.png";

const parceiros = [
  { nome: "Universidade Federal do Ceará", sigla: "UFC", logo: ufcLogo },
  { nome: "IFCE - Maracanaú", sigla: "IFCE - Maracanaú", logo: ifceLogo },
  { nome: "GREAT", sigla: "GREAT", logo: greatLogo },
];

export default function Parceiros() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-2 md:pb-20">
      <div className="mb-7 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#e8719a]">
          Nossos parceiros
        </p>
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
          Instituições que apoiam o <span className="text-[#e8719a]">INSPIRE</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[#9aa3be] md:text-base">
          Construímos nossa trajetória em parceria com instituições que acreditam na
          transformação por meio da tecnologia e da educação.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.045] px-6 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:flex-row md:divide-x md:divide-y-0">
        {parceiros.map((parceiro) => (
          <div
            key={parceiro.sigla}
            className="flex w-full items-center justify-center gap-3 px-6 py-3 opacity-85 transition-opacity duration-300 hover:opacity-100 md:w-auto"
          >
            <div className="flex h-10 w-10 items-center justify-center">
              <img
                src={parceiro.logo}
                alt={`Logo ${parceiro.nome}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-white">
              {parceiro.sigla}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
