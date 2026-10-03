import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section
      className="relative mx-6 mb-20 max-w-6xl overflow-hidden rounded-3xl md:mx-auto"
      style={{
        background: "linear-gradient(120deg, #4a3158, #e8719a22)",
      }}
    >
      {/*Chamada principal*/}
      <div
        className="flex flex-col items-center justify-between gap-6 px-10 py-14 md:flex-row"
        style={{
          border: "1px solid #e8719a33",
          borderRadius: "inherit",
        }}
      >
        <div>
          <h2 className="mb-2 font-display text-2xl font-black text-white md:text-3xl">
            Pronta para dar o próximo passo?
          </h2>

          <p style={{ color: "#c5cde8" }}>
            Inscrições abertas para a turma de 2026.
          </p>
        </div>

        {/*Botão de inscrição*/}
        <Link
            to="/inscricao"
            className="shrink-0 rounded-full px-8 py-4 text-lg font-bold text-white transition-all hover:opacity-90"
            style={{
                background: "#e8719a",
                boxShadow: "0 8px 32px #e8719a55",
            }}
        >
            Inscrever-se agora
        </Link>
      </div>
    </section>
  );
}