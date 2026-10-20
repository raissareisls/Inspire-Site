import { Link } from "react-router-dom";

export default function InscricaoMentoria() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              Inscreva-se na mentoria
            </h2>

            <p
              className="text-sm leading-relaxed max-w-md mb-4"
              style={{ color: "#9aa3be" }}
            >
              Preencha o formulário com seus dados e nos conte sua motivação.
              Entraremos em contato nas próximas semanas para confirmar sua
              participação.
            </p>

          </div>

          <div className="flex justify-center md:justify-end">
            <Link
              to="/inscricao"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white"
              style={{ backgroundColor: "#e8719a" }}
            >
              Quero me inscrever
          </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
