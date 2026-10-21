import { Link } from 'react-router-dom';

const opportunities = [
  {
    format: 'Online',
    title: 'Bolsistas Voluntárias',
    organization: 'Projeto INSPIRE · UFC',
    description:
      'Faça parte do time INSPIRE e ajude a construir um futuro mais diverso na tecnologia.',
    requirements: [
      'Ser estudante de graduação em área de Computação ou correlatas',
      'Interesse em promover diversidade e inclusão na tecnologia',
      'Disponibilidade de algumas horas semanais para atividades do projeto',
    ],
  },
  {
    format: 'Híbrido',
    title: 'Aluna Mentoreada',
    organization: 'Programa de Mentoria · INSPIRE',
    description:
      'Receba acompanhamento de uma profissional de tecnologia durante um ciclo de desenvolvimento de carreira.',
    requirements: [
      'Ser estudante do ensino médio, técnico ou graduação',
      'Ter interesse em iniciar ou desenvolver uma carreira em tecnologia',
      'Participar dos encontros mensais com a mentora',
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-0.5 h-5 w-5 shrink-0 text-[#e8719a]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m8.5 12.2 2.2 2.2 4.8-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function Vagas() {
  return (
    <main
      className="site-grid-background relative isolate min-h-screen overflow-hidden px-6 py-12 text-white md:px-8 md:py-16"
    >
      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#f078a4]">
            Faça parte
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Vagas &amp; <span className="text-[#e8719a]">Oportunidades</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#b7c5df] md:text-xl">
            Faça parte do time INSPIRE ou encontre a sua próxima oportunidade na tecnologia.
          </p>
        </header>

        <section
          aria-label="Oportunidades abertas"
          className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6"
        >
          {opportunities.map((opportunity) => (
            <article
              key={opportunity.title}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:p-7"
            >
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#c7d4ec]">
                  Oportunidade em destaque
                </span>
                <span className="text-sm text-[#9fb2d6]">{opportunity.format}</span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {opportunity.title}
              </h2>
              <p className="mt-2 text-base text-[#aebddd]">{opportunity.organization}</p>
              <p className="mt-4 leading-relaxed text-[#d0d9e9]">
                {opportunity.description}
              </p>

              <div className="mt-6">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#c7d4ec]">
                  Requisitos básicos
                </h3>
                <ul className="space-y-2.5">
                  {opportunity.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-3 text-sm leading-relaxed text-[#c5d1e5] md:text-base">
                      <CheckIcon />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/inscricao"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-[#e8719a] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-950/20 transition-colors hover:bg-[#f083a8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb4d0]"
              >
                Quero participar
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
