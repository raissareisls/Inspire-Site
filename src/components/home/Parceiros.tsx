import ufcLogo from "../../assets/ufc.png";
import ifceLogo from "../../assets/ifce.png";
import greatLogo from "../../assets/great.png";

function Parceiros() {
  const parceiros = [
    {
      nome: "Universidade Federal do Ceará",
      sigla: "UFC",
      logo: ufcLogo,
    },
    {
      nome: "IFCE - Maracanaú",
      sigla: "IFCE - Maracanaú",
      logo: ifceLogo,
    },
    {
      nome: "GREAT",
      sigla: "GREAT",
      logo: greatLogo,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      {/* Título da seção */}
      <div className="text-center mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#e8719a] mb-3">
          Nossos parceiros
        </p>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
          Instituições que apoiam o <span className="text-[#e8719a]">INSPIRE</span>
        </h2>

        <p className="max-w-2xl mx-auto mt-3 text-sm md:text-base text-[#9aa3be]">
          Construímos nossa trajetória em parceria com instituições que
          acreditam na transformação por meio da tecnologia e da educação.
        </p>
      </div>

      {/* Faixa de instituições parceiras */}
      <div
        className="
          glass-panel
          rounded-2xl
          px-6 py-4
          flex flex-col sm:flex-row
          items-center justify-center
          divide-y sm:divide-y-0 sm:divide-x
          divide-white/10
        "
      >
        {parceiros.map((parceiro) => (
          <div
            key={parceiro.sigla}
            className="
              w-full sm:w-auto
              flex items-center justify-center
              gap-3
              px-6 py-3
              transition-opacity duration-300
              hover:opacity-100
              opacity-75
            "
          >
            {/* Logo da instituição */}
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src={parceiro.logo}
                alt={`Logo ${parceiro.nome}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Sigla da instituição */}
            <span className="text-sm font-semibold tracking-wide text-white whitespace-nowrap">
              {parceiro.sigla}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Parceiros;