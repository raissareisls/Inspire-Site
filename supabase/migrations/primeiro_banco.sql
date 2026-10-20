-- Inscrições do INSPIRE + lista de quem administra o dashboard
-- Já rodado no projeto do Supabase em 20/10/2026. Não rodar de novo,
-- se precisar mudar algo cria uma migration nova.


-- Administradoras
-- Só quem tem o user_id aqui consegue ver as inscrições no painel.
-- Pra adicionar alguém: cria a conta em Authentication > Users e depois
--   insert into public.administradoras (user_id)
--   select id from auth.users where email = 'email@exemplo.com';

create table public.administradoras (
  user_id   uuid primary key references auth.users (id) on delete cascade,
  criado_em timestamptz not null default now()
);

alter table public.administradoras enable row level security;

revoke all on public.administradoras from anon, authenticated;
grant select on public.administradoras to authenticated;

-- cada uma só enxerga a própria linha, é o suficiente pra checar se é admin
create policy "admin ve o proprio registro"
  on public.administradoras
  for select
  to authenticated
  using (user_id = (select auth.uid()));


-- Inscrições
-- Os nomes das colunas batem com os campos do formulário do site.

create table public.inscricoes (
  id                  uuid primary key default gen_random_uuid(),
  criado_em           timestamptz not null default now(),

  tipo_inscricao      text not null
                        check (char_length(tipo_inscricao) between 1 and 50),
  nome_completo       text not null
                        check (char_length(btrim(nome_completo)) between 3 and 150),
  email               text not null
                        check (char_length(email) <= 254
                               and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  instituicao         text not null
                        check (char_length(btrim(instituicao)) between 2 and 150),
  nivel_escolaridade  text not null
                        check (char_length(nivel_escolaridade) between 1 and 50),
  area_interesse      text not null
                        check (char_length(area_interesse) between 1 and 80),
  motivacao           text
                        check (motivacao is null or char_length(motivacao) <= 2000),

  -- checkbox da política de privacidade (LGPD), sem marcar não salva
  aceite_privacidade  boolean not null
                        check (aceite_privacidade = true),

  -- controle interno da equipe, quem se inscreve não mexe nisso
  status              text not null default 'nova'
                        check (status in ('nova', 'contatada', 'confirmada', 'descartada'))
);

-- mesmo e-mail não se inscreve duas vezes no mesmo tipo
-- (no front isso chega como erro 23505)
create unique index inscricoes_email_tipo_unq
  on public.inscricoes (lower(email), tipo_inscricao);

-- o painel lista das mais novas pras mais antigas
create index inscricoes_criado_em_idx
  on public.inscricoes (criado_em desc);

alter table public.inscricoes enable row level security;


-- Permissões
-- Quem visita o site só consegue enviar, e só os campos do formulário.
-- Leitura, mudança de status e exclusão ficam pra quem está logada,
-- e as policies logo abaixo limitam isso às administradoras.

revoke all on public.inscricoes from anon, authenticated;

grant insert (tipo_inscricao, nome_completo, email, instituicao,
              nivel_escolaridade, area_interesse, motivacao, aceite_privacidade)
  on public.inscricoes to anon, authenticated;

grant select, delete on public.inscricoes to authenticated;
grant update (status) on public.inscricoes to authenticated;


-- Policies

create policy "publico envia inscricao"
  on public.inscricoes
  for insert
  to anon, authenticated
  with check (aceite_privacidade = true and status = 'nova');

create policy "admins leem inscricoes"
  on public.inscricoes
  for select
  to authenticated
  using (exists (
    select 1 from public.administradoras a
    where a.user_id = (select auth.uid())
  ));

create policy "admins atualizam status"
  on public.inscricoes
  for update
  to authenticated
  using (exists (
    select 1 from public.administradoras a
    where a.user_id = (select auth.uid())
  ))
  with check (exists (
    select 1 from public.administradoras a
    where a.user_id = (select auth.uid())
  ));

-- exclusão serve principalmente pra quando alguém pedir pra apagar os dados
create policy "admins apagam inscricoes"
  on public.inscricoes
  for delete
  to authenticated
  using (exists (
    select 1 from public.administradoras a
    where a.user_id = (select auth.uid())
  ));
