import { useState } from "react";
import InscricaoForm from "../components/inscricao/InscricaoForm";
import InscricaoSucesso from "../components/inscricao/InscricaoSucesso";
import type { InscricaoFormData } from "../components/inscricao/InscricaoForm";

export default function Inscricao() {
  const [dadosInscricao, setDadosInscricao] = useState<InscricaoFormData | null>(null);

  return (
    <main className="inscricao-page site-grid-background relative isolate min-h-screen overflow-hidden px-4 py-12 text-white sm:px-6 sm:py-16">
      {dadosInscricao ? (
        <InscricaoSucesso
          dados={dadosInscricao}
          onReset={() => setDadosInscricao(null)}
        />
      ) : (
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Título */}
          <header className="mb-10 text-center sm:mb-12">
            <p className="mb-4 text-xs font-bold tracking-[0.15em] text-[#e8719a]">
              INSCRIÇÕES
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Faça parte do <span className="text-[#e8719a]">INSPIRE</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#aebfe0] sm:text-base">
              Preencha o formulário com seus dados e sua motivação. Entraremos em
              contato nas próximas semanas para confirmar a sua participação.
            </p>
          </header>

          {/* Formulário */}
          <section className="mx-auto max-w-3xl rounded-[26px] border border-white/[0.07] bg-[#2d3447] p-5 shadow-xl shadow-black/10 sm:p-8 md:p-9">
            <InscricaoForm onSuccess={(dados) => setDadosInscricao(dados)} />
          </section>
        </div>
      )}
    </main>
  );
}
