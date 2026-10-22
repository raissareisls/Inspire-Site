import { useState, type SubmitEvent } from "react";

export type TipoInscricao = "Mentoria" | "Voluntária" | "Workshop";

export interface InscricaoFormData {
  tipoInscricao: TipoInscricao;
  nomeCompleto: string;
  email: string;
  instituicao: string;
  nivelEscolaridade: string;
  areaInteresse: string;
  motivacao: string;
}

type FormErrors = Partial<Record<keyof InscricaoFormData, string>>;

const NIVEIS = [
  "Ensino médio",
  "Ensino técnico",
  "Graduação em andamento",
  "Graduação completa",
  "Pós-graduação",
  "Mestrado",
  "Doutorado",
  "Outro",
];

const AREAS = [
  "Desenvolvimento de Software",
  "Inteligência Artificial e Ciência de Dados",
  "Cibersegurança",
  "Redes e Infraestrutura",
  "UX/UI Design",
  "Computação Gráfica",
  "Gestão de Projetos e Tecnologia",
  "Outra área",
];

const INITIAL_DATA: InscricaoFormData = {
  tipoInscricao: "Mentoria",
  nomeCompleto: "",
  email: "",
  instituicao: "",
  nivelEscolaridade: "",
  areaInteresse: "",
  motivacao: "",
};

const labelClasses = "mb-2 block text-xs font-semibold text-[#a6aec2]";

const getInputClasses = (hasError: boolean) =>
  `w-full rounded-xl border bg-[#242b3c] px-4 py-3 text-sm text-white placeholder:text-[#858b9a] outline-none transition ${
    hasError
      ? "border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
      : "border-[#41495b] focus:border-[#e8719a] focus:ring-2 focus:ring-[#e8719a]/20"
  }`;

function FieldError({ message, id }: { message?: string; id: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
      <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      {message}
    </p>
  );
}

function InputField({
  id,
  label,
  placeholder,
  value,
  type = "text",
  autoComplete,
  error,
  onChange,
}: {
  id: keyof InscricaoFormData;
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={getInputClasses(!!error)}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  options,
  error,
  onChange,
}: {
  id: keyof InscricaoFormData;
  label: string;
  value: string;
  options: string[];
  error?: string;
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${getInputClasses(!!error)} cursor-pointer appearance-none pr-10 ${
            !value ? "text-[#858b9a]" : ""
          }`}
        >
          <option value="" disabled className="bg-[#242b3c] text-[#858b9a]">
            Selecione...
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#242b3c] text-white">
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[#858b9a]">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

export default function InscricaoForm({
  onSuccess,
}: {
  onSuccess: (dados: InscricaoFormData) => void;
}) {
  const [formData, setFormData] = useState<InscricaoFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange<K extends keyof InscricaoFormData>(campo: K, valor: InscricaoFormData[K]) {
    setFormData((prev) => ({ ...prev, [campo]: valor }));
    if (errors[campo]) {
      setErrors((prev) => {
        const novos = { ...prev };
        delete novos[campo];
        return novos;
      });
    }
  }

  function validate(): boolean {
    const errs: FormErrors = {};
    const nome = formData.nomeCompleto.trim();
    if (!nome) errs.nomeCompleto = "Por favor, informe seu nome completo.";
    else if (nome.split(/\s+/).length < 2) errs.nomeCompleto = "Digite ao menos nome e sobrenome.";

    const email = formData.email.trim();
    if (!email) errs.email = "Por favor, informe seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Informe um e-mail válido.";

    if (!formData.instituicao.trim()) errs.instituicao = "Informe sua instituição de ensino.";
    if (!formData.nivelEscolaridade) errs.nivelEscolaridade = "Selecione o nível de escolaridade.";
    if (!formData.areaInteresse) errs.areaInteresse = "Selecione uma área de interesse.";

    const motivacao = formData.motivacao.trim();
    if (!motivacao) errs.motivacao = "Por favor, compartilhe sua motivação.";
    else if (motivacao.length < 20) errs.motivacao = "Escreva um pouco mais (mínimo de 20 caracteres).";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");   //limpar erro de tentativas anteriores
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Inscrição validada e pronta para envio:", formData);
      onSuccess(formData);
    } catch (error) {
      console.error("Erro ao enviar:", error);
       setSubmitError("Não foi possível enviar sua inscrição. Tente novamente em instantes.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Tipo de inscrição */}
      <fieldset>
        <legend className={labelClasses}>Tipo de inscrição</legend>
        <div role="radiogroup" aria-label="Tipo de inscrição" className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {(["Mentoria", "Voluntária", "Workshop"] as const).map((tipo) => (
            <button
              key={tipo}
              type="button"
              role="radio"
              aria-checked={formData.tipoInscricao === tipo}
              onClick={() => handleChange("tipoInscricao", tipo)}
              className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                formData.tipoInscricao === tipo
                  ? "border-[#e8719a] bg-[#e8719a] text-white shadow-md shadow-[#e8719a]/20"
                  : "border-[#41495b] bg-[#242b3c] text-[#a6aec2] hover:border-[#e8719a] hover:text-white"
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>
      </fieldset>

      <InputField
        id="nomeCompleto"
        label="Nome completo"
        placeholder="Seu nome completo"
        autoComplete="name"
        value={formData.nomeCompleto}
        error={errors.nomeCompleto}
        onChange={(val) => handleChange("nomeCompleto", val)}
      />

      <InputField
        id="email"
        label="E-mail"
        type="email"
        placeholder="voce@email.com"
        autoComplete="email"
        value={formData.email}
        error={errors.email}
        onChange={(val) => handleChange("email", val)}
      />

      <InputField
        id="instituicao"
        label="Instituição de Ensino"
        placeholder="Ex.: UFC, IFCE, UECE..."
        value={formData.instituicao}
        error={errors.instituicao}
        onChange={(val) => handleChange("instituicao", val)}
      />

      <SelectField
        id="nivelEscolaridade"
        label="Nível de escolaridade"
        value={formData.nivelEscolaridade}
        options={NIVEIS}
        error={errors.nivelEscolaridade}
        onChange={(val) => handleChange("nivelEscolaridade", val)}
      />

      <SelectField
        id="areaInteresse"
        label="Área de interesse"
        value={formData.areaInteresse}
        options={AREAS}
        error={errors.areaInteresse}
        onChange={(val) => handleChange("areaInteresse", val)}
      />

      {/* Motivação */}
      <div>
        <label htmlFor="motivacao" className={labelClasses}>
          Por que deseja participar do INSPIRE?
        </label>
        <textarea
          id="motivacao"
          placeholder="Compartilhe suas expectativas, trajetória e por que quer participar..."
          value={formData.motivacao}
          onChange={(e) => handleChange("motivacao", e.target.value)}
          aria-invalid={!!errors.motivacao}
          aria-describedby={errors.motivacao ? "motivacao-error" : undefined}
          className={`${getInputClasses(!!errors.motivacao)} min-h-32 resize-y`}
          rows={4}
        />
        <FieldError id="motivacao-error" message={errors.motivacao} />
      </div>

      {submitError && (
        <p
          role="alert"
          className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300"
        >
          {submitError}
        </p>
      )}

      {/* Botão de envio com Loading State */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8719a] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#e8719a]/15 transition hover:bg-[#df608c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8719a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d3447] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            <span>Validando e enviando...</span>
          </>
        ) : (
          "Enviar inscrição"
        )}
      </button>

      <p className="text-center text-xs leading-relaxed text-[#858fa8]">
        Ao se inscrever, você concorda com nossa política de privacidade.
        Seus dados são usados apenas para fins do programa INSPIRE/UFC.
      </p>
    </form>
  );
}
