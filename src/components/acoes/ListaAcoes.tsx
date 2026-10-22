export default function ListaAcoes({ filtro }: { filtro: string }) {
  const mostrar = (categoria: string) => filtro === 'Todas' || filtro === categoria;

  return (
    <section className="max-w-7xl mx-auto px-8 pb-20">
      {/*Cards*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/*card 1*/}
        {mostrar('Workshop') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">WS</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Prática</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Workshop</span>
            <h3 className="text-lg font-bold leading-snug mb-3">I Workshop INSPIRE</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Diversas atividades, como minicursos, rodas de conversas e palestras ministrada por mulheres referência na computação
            </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>Agosto, 2024</span>
              <span>Híbrido · GREat/Google Meet</span>
            </div>
          </div>
        )}

        {mostrar('Workshop') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">WS</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Prática</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Workshop</span>
            <h3 className="text-lg font-bold leading-snug mb-3">II Workshop INSPIRE</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Diversas atividades, como minicursos, rodas de conversas e palestras ministrada por mulheres referência na computação
            </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>Novembro, 2024</span>
              <span>Híbrido · GREat/Google Meet</span>
            </div>
          </div>
        )}

        {mostrar('Minicurso') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">MC</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Técnico</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Minicurso</span>
            <h3 className="text-lg font-bold leading-snug mb-3">Tranformando Ideias em Protótipos: Aplicando Design Thinking para Desenvolver Interfaces de Usuário</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
               Uma oportunidade de explorar técnicas avançadas e transformar ideias em protótipos inovadores
             </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>Ministrado por Lavínia Freitas</span>
              <span>10 de julho, 2024</span>
              <span>Presencial · Laboratório GREat</span>
            </div>
          </div>
        )}

        {mostrar('Minicurso') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">MC</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Técnico</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Minicurso</span>
            <h3 className="text-lg font-bold leading-snug mb-3">Introdução à Qualidade e Testes de Software</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
               Minicurso de conceitos básicos sobre Qualidade e Testes de Software
             </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>Ministrado por Fabiana Gomes e Valéria Lelli</span>
              <span>23 de agosto, 2024</span>
              <span>Presencial · Laboratório GREat</span>
            </div>
          </div>
        )}

        {mostrar('Minicurso') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">MC</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Técnico</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Minicurso</span>
            <h3 className="text-lg font-bold leading-snug mb-3">Introdução ao Aprendizado de Máquina: Classificação e Regressão de Dados</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
               Minicurso de conceitos básicos sobre Machine Learning
             </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>Ministrado por Joyce Quintino</span>
              <span>27 de novembro, 2024</span>
              <span>Online · Google Meet</span>
            </div>
          </div>
        )}

        {mostrar('Palestra') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">PL</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Inspiração</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Palestra</span>
            <h3 className="text-lg font-bold leading-snug mb-3">Mercado Feminino na TI: Desafios e Oportunidades - Case do Serpro</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Dscussão acerca da baixa participação feminina na TI e o papel do Serpro em promover a igualdade de gênero com políticas e práticas inclusivas.
            </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>Ministrado por Márcia Gomes</span>
              <span>21 de agosto, 2024</span>
              <span>Presencial · Auditório do GREat</span>
            </div>
          </div>
        )}

        {mostrar('Networking') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">NT</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Comunidade</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Networking</span>
            <h3 className="text-lg font-bold leading-snug mb-3">Semana de Integração Científica</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              O INSPIRE esteve com um stande de apresentação do projeto e participou de uma roda de conversa sobre a presença feminina na computação
            </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>Participação de alunas e professoras do INSPIRE </span>
              <span>08 de outubro, 2026</span>
              <span>Presecial · IFCE Maracanaú</span>
            </div>
          </div>
        )}

        {mostrar('Networking') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">NT</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Comunidade</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Networking</span>
            <h3 className="text-lg font-bold leading-snug mb-3">Roda de Conversa</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Apresentação do projeto INSPIRE: Incentivo à Participação Feminina - Liderança e Inovação em Desenvolvimento e Qualidade de Software
            </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>Ministrado pelas professoras e alunas participantes do INSPIRE</span>
              <span>20 de agosto, 2024</span>
              <span>Online · Google Meet</span>
            </div>
          </div>
        )}

        {mostrar('Networking') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">NT</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Comunidade</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Networking</span>
            <h3 className="text-lg font-bold leading-snug mb-3">Roda de Conversa Comsolid</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Superando Desafios em Ambientes de Trabalho Predominantemente Masculinos
            </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>Ministrado pelas professoras e alunas participantes do INSPIRE</span>
              <span>28 de novembro, 2024</span>
              <span>Presencial · IFCE Maracanaú</span>
            </div>
          </div>
        )}

        {mostrar('Networking') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">NT</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Comunidade</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Networking</span>
            <h3 className="text-lg font-bold leading-snug mb-3">Painel Inspirador</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                Mulheres Empreendedoras TRansformando o Mercado de TI
            </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>Ministrado pelas professoras e alunas participantes do INSPIRE</span>
              <span>04 de dezembro, 2024</span>
              <span>Online · Google Meet</span>
            </div>
          </div>
        )}

        {mostrar('Networking') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">NT</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Comunidade</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Networking</span>
            <h3 className="text-lg font-bold leading-snug mb-3">ElaTech</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                As alunas participantes do INSPIRE participaram do ElaTech, onde puderam trocar experiências com as outras participantes
            </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>23 de novembro, 2024</span>
              <span>Presencial · NINNA Hub</span>
            </div>
          </div>
        )}

        {mostrar('Networking') && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">NT</div>
              <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">Comunidade</span>
            </div>
            <span className="text-gray-400 text-xs mb-1">Networking</span>
            <h3 className="text-lg font-bold leading-snug mb-3">Café com Mulheres</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                Mulheres na COmputação: Vivências, Desafios e Trajetórias Profissionais
            </p>
            <div className="border-t border-white/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-gray-500">
              <span>02 de julho, 2025</span>
              <span> Online · Google Meet</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}