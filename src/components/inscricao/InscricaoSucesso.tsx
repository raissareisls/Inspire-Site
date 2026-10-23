import { Link } from "react-router-dom";
import type { InscricaoFormData } from "./InscricaoForm";
import { useEffect, useRef } from "react";

interface InscricaoSucessoProps {
  dados: InscricaoFormData;
  onReset: () => void;
}

// Tela de confirmação
export default function InscricaoSucesso({ dados, onReset }: InscricaoSucessoProps) {
  const primeiroNome = dados.nomeCompleto.trim().split(/\s+/)[0];
  const tituloRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    tituloRef.current?.focus();
  }, []);
  
  return (
    <div className="relative z-10 mx-auto max-w-2xl">
      <section className="rounded-[26px] border border-white/[0.07] bg-[#2d3447] p-8 text-center shadow-2xl shadow-black/20 sm:p-12">
        {/* Ícone de Sucesso*/}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e8719a]/15 text-[#e8719a] ring-8 ring-[#e8719a]/10">
          <svg
            aria-hidden="true"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#e8719a]">
          Inscrição Concluída
        </p>

        <h1
          ref={tituloRef}
          tabIndex={-1}
          className="text-2xl font-extrabold outline-none sm:text-3xl md:text-4xl"
        >
          Tudo pronto, {primeiroNome}!
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#aebfe0] sm:text-base">
          Recebemos seu pedido de participação para a modalidade{" "}
          <strong className="font-semibold text-white">
            {dados.tipoInscricao}
          </strong>
          .
        </p>

        {/* Caixa com próximos passos */}
        <div className="my-8 rounded-xl border border-white/[0.06] bg-[#242b3c] p-5 text-left text-xs leading-relaxed text-[#a6aec2]">
          <p className="mb-2 font-semibold text-white">O que acontece agora?</p>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>
              Fique atento(a) à caixa de entrada (e spam) do e-mail:{" "}
              <span className="font-medium text-[#e8719a]">{dados.email}</span>.
            </li>
            <li>
              Nossa equipe analisará sua candidatura e entrará em contato em breve!
            </li>
          </ul>
        </div>

        {/* Ações pós-inscrição */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={onReset}
            className="rounded-xl border border-[#41495b] bg-[#242b3c] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#e8719a] hover:bg-[#2b3347]"
          >
            Fazer outra inscrição
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#e8719a] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#e8719a]/20 transition hover:bg-[#df608c]"
          >
            Voltar ao Início
          </Link>
        </div>
      </section>
    </div>
  );
}
