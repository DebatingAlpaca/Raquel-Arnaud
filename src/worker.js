const OBRAS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhYmPxgT_QJ5GzLcKYSv3Zj_bFYcqxQAaZRf5ywcpIeZoGtMTUC7bydm79_VMhyYR1jFN4zugFyMyO/pub?gid=16308019&single=true&output=csv";
const PRATELEIRAS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhYmPxgT_QJ5GzLcKYSv3Zj_bFYcqxQAaZRf5ywcpIeZoGtMTUC7bydm79_VMhyYR1jFN4zugFyMyO/pub?gid=112070046&single=true&output=csv";

const LOGO_SRC = "data:image/png;base64,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";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        row.push(field);
        field = "";
      } else if (char === "\n" || char === "\r") {
        if (field !== "" || row.length > 0) {
          row.push(field);
          rows.push(row);
          row = [];
          field = "";
        }
        if (char === "\r" && next === "\n") i++;
      } else {
        field += char;
      }
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const [headers, ...dataRows] = rows;
  return dataRows
    .filter((r) => r.length === headers.length)
    .map((r) =>
      Object.fromEntries(headers.map((h, i) => [h.trim(), r[i]?.trim() ?? ""])),
    );
}

async function fetchTable(url) {
  const res = await fetch(url, { cf: { cacheTtl: 60, cacheEverything: true } });
  if (!res.ok) throw new Error(`Falha ao buscar planilha: ${res.status}`);
  const text = await res.text();
  return parseCSV(text);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...CORS_HEADERS,
    },
  });
}

function html(content, status = 200) {
  return new Response(content, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", ...CORS_HEADERS },
  });
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const PAGE_STYLE = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  @keyframes surgir {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
  body {
    font-family: 'EB Garamond', 'Times New Roman', serif;
    background: #faf8f5;
    color: #232120;
    min-height: 100vh;
    padding: 56px 24px 80px;
    animation: surgir 0.5s ease-out;
  }
  .container { max-width: 620px; margin: 0 auto; }
  .marca {
    margin-bottom: 40px;
  }
  .marca img {
    height: 30px;
    width: auto;
    display: block;
  }
  .voltar {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    letter-spacing: 0.03em;
    color: #8a6a3f;
    text-decoration: none;
    margin-bottom: 36px;
  }
  .voltar:hover { color: #5f4826; }
  .autor {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: 17px;
    color: #6b6259;
    margin-top: 6px;
  }
  .eyebrow {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #a68752;
    margin-bottom: 10px;
  }
  .imagem-wrap {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #ece8e1;
  }
  .imagem-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  h1 {
    font-weight: 400;
    font-size: 34px;
    line-height: 1.25;
    letter-spacing: 0.005em;
    margin-top: 32px;
  }
  .meta {
    font-family: 'Inter', sans-serif;
    font-size: 12.5px;
    letter-spacing: 0.03em;
    color: #8f867c;
    margin-top: 10px;
  }
  .divisor {
    width: 36px;
    height: 1px;
    background: #cbbfa9;
    margin: 28px 0;
  }
  .descricao {
    font-size: 19px;
    line-height: 1.7;
    color: #34302c;
  }
  .lista-obras {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
  }
  .obra-card {
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    color: inherit;
    padding: 20px 0;
    border-bottom: 1px solid #e7e1d8;
  }
  .obra-card:first-child { border-top: 1px solid #e7e1d8; }
  .obra-card img {
    width: 76px;
    height: 76px;
    object-fit: cover;
    background: #ece8e1;
    flex-shrink: 0;
  }
  .obra-card-info { font-family: 'Inter', sans-serif; }
  .obra-card-nome {
    font-family: 'EB Garamond', serif;
    font-size: 19px;
    color: #232120;
  }
  .obra-card-tecnica {
    font-size: 12px;
    color: #9a9188;
    margin-top: 4px;
    letter-spacing: 0.02em;
  }
  .obra-card-seta {
    margin-left: auto;
    color: #c9bfae;
    font-size: 18px;
  }
  .erro {
    font-family: 'Inter', sans-serif;
    text-align: center;
    margin-top: 100px;
    color: #9a9188;
    font-size: 14px;
    letter-spacing: 0.02em;
  }
`;

const FONTS_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">`;

function paginaObra(obra) {
  const metaPartes = [obra.ano, obra.tecnica, obra.dimensoes]
    .filter(Boolean)
    .map(escapeHtml);
  const linkVoltar = obra.prateleira_id
    ? `<a class="voltar" href="/visualizar/prateleira/${escapeHtml(obra.prateleira_id)}">&larr; Voltar à prateleira</a>`
    : "";
  const autorHtml = obra.autor
    ? `<div class="autor">${escapeHtml(obra.autor)}</div>`
    : "";
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(obra.nome)} — Galeria Raquel Arnaud</title>
${FONTS_LINK}
<style>${PAGE_STYLE}</style>
</head>
<body>
<div class="container">
<div class="marca"><img src="${LOGO_SRC}" alt="Galeria Raquel Arnaud"></div>
${linkVoltar}
<div class="imagem-wrap"><img src="${escapeHtml(obra.imagem_url)}" alt="${escapeHtml(obra.nome)}"></div>
<h1>${escapeHtml(obra.nome)}</h1>
${autorHtml}
<div class="meta">${metaPartes.join("  ·  ")}</div>
<div class="divisor"></div>
<p class="descricao">${escapeHtml(obra.descricao)}</p>
</div>
</body>
</html>`;
}

function paginaPrateleira(prateleira, obras) {
  const cards = obras
    .map(
      (o) => `<a class="obra-card" href="/visualizar/obra/${escapeHtml(o.id)}">
<img src="${escapeHtml(o.imagem_url)}" alt="${escapeHtml(o.nome)}">
<div class="obra-card-info">
<div class="obra-card-nome">${escapeHtml(o.nome)}</div>
<div class="obra-card-tecnica">${o.autor ? escapeHtml(o.autor) + "  ·  " : ""}${escapeHtml(o.tecnica)}${o.ano ? "  ·  " + escapeHtml(o.ano) : ""}</div>
</div>
<span class="obra-card-seta">&rarr;</span>
</a>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(prateleira.nome)} — Galeria Raquel Arnaud</title>
${FONTS_LINK}
<style>${PAGE_STYLE}</style>
</head>
<body>
<div class="container">
<div class="marca"><img src="${LOGO_SRC}" alt="Galeria Raquel Arnaud"></div>
<div class="eyebrow">Prateleira</div>
<h1>${escapeHtml(prateleira.nome)}</h1>
<div class="meta">${obras.length} ${obras.length === 1 ? "obra" : "obras"}</div>
<div class="divisor"></div>
<p class="descricao">${escapeHtml(prateleira.descricao_grupo)}</p>
<div class="lista-obras">${cards}</div>
</div>
</body>
</html>`;
}

function paginaErro(mensagem) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Não encontrado — Galeria Raquel Arnaud</title>
${FONTS_LINK}
<style>${PAGE_STYLE}</style>
</head>
<body>
<div class="container">
<div class="marca"><img src="${LOGO_SRC}" alt="Galeria Raquel Arnaud"></div>
<p class="erro">${escapeHtml(mensagem)}</p>
</div>
</body>
</html>`;
}

/* ==========================================================================
   ÁREA ADMINISTRATIVA  (/admin)
   Tudo abaixo é novo. Nada acima foi alterado.
   Requer o secret ADMIN_PASSWORD:  npx wrangler secret put ADMIN_PASSWORD
   Opcional: variável PUBLIC_BASE_URL (ex.: https://galeria.exemplo.com)
   para forçar o domínio gravado nos QR Codes.
   ========================================================================== */

const SESSAO_COOKIE = "galeria_admin";
const SESSAO_SEGUNDOS = 8 * 60 * 60; // 8 horas

// Respostas do admin: sem CORS, sem cache, fora de buscadores.
const ADMIN_HEADERS = {
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow",
  "Referrer-Policy": "same-origin",
  "X-Frame-Options": "DENY",
};

function adminHtml(content, status = 200, extra = {}) {
  return new Response(content, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      ...ADMIN_HEADERS,
      ...extra,
    },
  });
}

function redirecionar(destino, extra = {}) {
  return new Response(null, {
    status: 303,
    headers: { Location: destino, ...ADMIN_HEADERS, ...extra },
  });
}

async function hmacHex(chave, mensagem) {
  const enc = new TextEncoder();
  const k = await crypto.subtle.importKey(
    "raw",
    enc.encode(chave),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", k, enc.encode(mensagem));
  return [...new Uint8Array(sig)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Comparação em tempo constante (compara os hashes SHA-256 das duas strings).
async function iguais(a, b) {
  const enc = new TextEncoder();
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(a)),
    crypto.subtle.digest("SHA-256", enc.encode(b)),
  ]);
  return crypto.subtle.timingSafeEqual(ha, hb);
}

async function criarSessao(senha) {
  const exp = Math.floor(Date.now() / 1000) + SESSAO_SEGUNDOS;
  return `${exp}.${await hmacHex(senha, "admin:" + exp)}`;
}

function lerCookie(request, nome) {
  const cookies = request.headers.get("Cookie") || "";
  for (const parte of cookies.split(";")) {
    const [k, ...v] = parte.trim().split("=");
    if (k === nome) return v.join("=");
  }
  return "";
}

async function sessaoValida(request, senha) {
  const token = lerCookie(request, SESSAO_COOKIE);
  const [exp, assinatura] = token.split(".");
  if (!exp || !assinatura) return false;
  if (!(Number(exp) > Math.floor(Date.now() / 1000))) return false;
  return iguais(assinatura, await hmacHex(senha, "admin:" + exp));
}

function cookieSessao(valor, maxAge) {
  return `${SESSAO_COOKIE}=${valor}; Path=/admin; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;
}

const ADMIN_STYLE = `
  * { box-sizing: border-box; }
  [hidden] { display: none !important; }
  body { margin: 0; font-family: 'Inter', sans-serif; background: #faf8f5; color: #232120; }
  button, input { font: inherit; }
  code { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 11.5px; color: #6b6259; background: #ece8e1; padding: 2px 6px; border-radius: 4px; }
  .topo { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 20px 24px; background: #faf8f5; border-bottom: 1px solid #e7e1d8; }
  .topo-marca { display: flex; flex-direction: column; gap: 4px; }
  .marca { margin: 0; }
  .marca img { height: 20px; width: auto; display: block; }
  .login .marca { display: flex; justify-content: center; margin-bottom: 4px; }
  .login .marca img { height: 26px; }
  .topo h1 { font-family: 'EB Garamond', serif; font-weight: 400; font-size: 22px; margin: 0; letter-spacing: 0.005em; }
  .topo form { margin: 0; }
  .link { background: none; border: 0; color: #8a6a3f; cursor: pointer; padding: 4px 8px; font-family: 'Inter', sans-serif; font-size: 12.5px; letter-spacing: 0.02em; }
  .link:hover { color: #5f4826; }
  main { max-width: 860px; margin: 0 auto; padding: 28px 20px 130px; }
  .tabs { display: flex; gap: 8px; margin-bottom: 16px; }
  .tab { padding: 9px 18px; border: 1px solid #d5cfc5; background: #fff; border-radius: 999px; cursor: pointer; letter-spacing: 0.06em; font-size: 11.5px; text-transform: uppercase; color: #6b6259; }
  .tab.ativa { background: #232120; color: #faf8f5; border-color: #232120; }
  #q { width: 100%; padding: 13px 16px; border: 1px solid #d5cfc5; border-radius: 8px; background: #fff; margin-bottom: 14px; font-size: 14px; }
  #q:focus { outline: none; border-color: #c9a35f; }
  .cabecalho-lista { display: flex; justify-content: space-between; align-items: center; padding: 4px 14px 10px; font-size: 12.5px; color: #8f867c; letter-spacing: 0.02em; }
  .cabecalho-lista label { display: flex; align-items: center; gap: 8px; cursor: pointer; }
  #lista { background: #fff; border: 1px solid #e7e1d8; border-radius: 10px; overflow: hidden; }
  .linha { display: flex; align-items: center; gap: 14px; padding: 13px 16px; border-bottom: 1px solid #eee9e2; cursor: pointer; }
  .linha:last-child { border-bottom: 0; }
  .linha:hover { background: #faf8f5; }
  .linha .nome { flex: 1 1 auto; min-width: 0; font-family: 'EB Garamond', serif; font-size: 16.5px; }
  .linha .sub { color: #8f867c; font-size: 13px; font-style: italic; flex: 0 1 30%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .vazio { padding: 36px; text-align: center; color: #9a9188; font-family: 'EB Garamond', serif; font-style: italic; font-size: 16px; }
  #paginacao { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; align-items: center; margin-top: 22px; font-size: 13px; }
  .pg { padding: 6px 12px; border: 1px solid #d5cfc5; background: #fff; border-radius: 6px; cursor: pointer; color: #232120; }
  .pg.atual { background: #232120; color: #faf8f5; border-color: #232120; }
  .pg:disabled { opacity: 0.4; cursor: default; }
  .reticencias { color: #9a9188; padding: 0 4px; }
  .barra { position: fixed; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; gap: 16px; padding: 16px; background: #232120; color: #faf8f5; box-shadow: 0 -6px 20px rgba(0,0,0,.15); }
  .barra button { border: 1px solid #55504a; background: transparent; color: #faf8f5; padding: 9px 16px; border-radius: 6px; cursor: pointer; font-size: 13px; }
  .barra .primario, .primario { background: #c9a35f; border-color: #c9a35f; color: #1a1815; font-weight: 600; }
  .login { max-width: 320px; margin: 16vh auto 0; background: #fff; padding: 32px 28px; border: 1px solid #e7e1d8; border-radius: 12px; display: flex; flex-direction: column; gap: 14px; text-align: center; }
  .login h1 { font-family: 'EB Garamond', serif; font-weight: 400; font-size: 21px; margin: 0 0 6px; }
  .login .marca { text-align: center; }
  .login input { padding: 11px 14px; border: 1px solid #d5cfc5; border-radius: 6px; text-align: center; }
  .login button { padding: 11px; border: 1px solid #c9a35f; border-radius: 6px; cursor: pointer; }
  .msg-erro { color: #a33; font-size: 13px; }
  .aviso { max-width: 420px; margin: 20vh auto 0; text-align: center; color: #6b6259; padding: 0 20px; font-family: 'EB Garamond', serif; font-size: 17px; }
`;

function paginaAdminBase(titulo, corpo) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${escapeHtml(titulo)}</title>
${FONTS_LINK}
<style>${ADMIN_STYLE}</style>
</head>
<body>
${corpo}
</body>
</html>`;
}

function paginaAdminMensagem(mensagem) {
  return paginaAdminBase(
    "Admin",
    `<p class="aviso">${escapeHtml(mensagem)}</p>`,
  );
}

function paginaAdminLogin(erro = "") {
  return paginaAdminBase(
    "Entrar — Admin",
    `<form class="login" method="post" action="/admin">
<div class="marca"><img src="${LOGO_SRC}" alt="Galeria Raquel Arnaud"></div>
<h1>Área administrativa</h1>
<input type="password" name="senha" placeholder="Senha" autocomplete="current-password" autofocus required>
<button class="primario" type="submit">Entrar</button>
${erro ? `<div class="msg-erro">${escapeHtml(erro)}</div>` : ""}
</form>`,
  );
}

// JavaScript do painel (busca, paginação e seleção rodam no navegador,
// com os dados que o Worker já leu do Google Sheets).
const PAINEL_SCRIPT = String.raw`
(function () {
  var DADOS = window.__DADOS__;
  var POR_PAGINA = 50;
  var estado = { aba: "obras", q: "", pagina: 1 };
  var sel = { obras: new Set(), prateleiras: new Set() };
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function norm(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  DADOS.obras.forEach(function (o) { o._b = norm(o.nome + " " + o.autor + " " + o.id); });
  DADOS.prateleiras.forEach(function (p) { p._b = norm(p.nome + " " + p.id); });

  function filtrados() {
    var t = norm(estado.q).trim();
    var lista = DADOS[estado.aba];
    if (!t) return lista;
    return lista.filter(function (i) { return i._b.indexOf(t) !== -1; });
  }

  function paginaAtual() {
    var lista = filtrados();
    var ini = (estado.pagina - 1) * POR_PAGINA;
    return lista.slice(ini, ini + POR_PAGINA);
  }

  function botoesPaginacao(p, total) {
    var marcados = {};
    [1, p - 1, p, p + 1, total].forEach(function (n) {
      if (n >= 1 && n <= total) marcados[n] = 1;
    });
    var nums = Object.keys(marcados).map(Number).sort(function (a, b) { return a - b; });
    var out = [];
    var ultimo = 0;
    nums.forEach(function (n) {
      if (ultimo && n - ultimo > 1) out.push('<span class="reticencias">…</span>');
      out.push('<button type="button" class="pg' + (n === p ? ' atual' : '') + '" data-p="' + n + '">' + n + '</button>');
      ultimo = n;
    });
    return '<button type="button" class="pg" data-p="' + (p - 1) + '"' + (p <= 1 ? ' disabled' : '') + '>← Anterior</button>' +
      out.join("") +
      '<button type="button" class="pg" data-p="' + (p + 1) + '"' + (p >= total ? ' disabled' : '') + '>Próxima →</button>';
  }

  function render() {
    var lista = filtrados();
    var total = lista.length;
    var paginas = Math.max(1, Math.ceil(total / POR_PAGINA));
    if (estado.pagina > paginas) estado.pagina = paginas;
    var ini = (estado.pagina - 1) * POR_PAGINA;
    var pagina = lista.slice(ini, ini + POR_PAGINA);
    var s = sel[estado.aba];

    $("tab-obras").className = "tab" + (estado.aba === "obras" ? " ativa" : "");
    $("tab-prateleiras").className = "tab" + (estado.aba === "prateleiras" ? " ativa" : "");
    $("q").placeholder = estado.aba === "obras"
      ? "🔍 Buscar obras por nome, autor ou ID…"
      : "🔍 Buscar prateleiras por nome ou ID…";

    $("info").textContent = total
      ? "Mostrando " + (ini + 1) + "–" + (ini + pagina.length) + " de " + total
      : "Nenhum resultado";

    $("todos").disabled = pagina.length === 0;
    $("todos").checked = pagina.length > 0 && pagina.every(function (i) { return s.has(i.id); });

    $("lista").innerHTML = pagina.length
      ? pagina.map(function (i) {
          return '<label class="linha"><input type="checkbox" data-id="' + esc(i.id) + '"' + (s.has(i.id) ? ' checked' : '') + '>' +
            '<span class="nome">' + esc(i.nome || "(sem nome)") + '</span>' +
            '<span class="sub">' + esc(i.autor || "") + '</span>' +
            '<code>' + esc(i.id) + '</code></label>';
        }).join("")
      : '<div class="vazio">Nada encontrado.</div>';

    $("paginacao").innerHTML = paginas > 1 ? botoesPaginacao(estado.pagina, paginas) : "";

    var n = s.size;
    $("barra").hidden = n === 0;
    $("contagem").textContent = n + (n === 1 ? " item selecionado" : " itens selecionados");
  }

  $("tab-obras").addEventListener("click", function () { estado.aba = "obras"; estado.q = ""; $("q").value = ""; estado.pagina = 1; render(); });
  $("tab-prateleiras").addEventListener("click", function () { estado.aba = "prateleiras"; estado.q = ""; $("q").value = ""; estado.pagina = 1; render(); });

  $("q").addEventListener("input", function (e) { estado.q = e.target.value; estado.pagina = 1; render(); });

  $("lista").addEventListener("change", function (e) {
    var id = e.target.getAttribute("data-id");
    if (!id) return;
    if (e.target.checked) sel[estado.aba].add(id); else sel[estado.aba].delete(id);
    render();
  });

  $("todos").addEventListener("change", function (e) {
    var s = sel[estado.aba];
    paginaAtual().forEach(function (i) { if (e.target.checked) s.add(i.id); else s.delete(i.id); });
    render();
  });

  $("paginacao").addEventListener("click", function (e) {
    var p = e.target.getAttribute && e.target.getAttribute("data-p");
    if (!p) return;
    estado.pagina = Number(p);
    render();
    window.scrollTo(0, 0);
  });

  $("limpar").addEventListener("click", function () { sel[estado.aba].clear(); render(); });

  $("gerar").addEventListener("click", function () {
    var f = $("form-qr");
    f.innerHTML = "";
    var t = document.createElement("input");
    t.type = "hidden"; t.name = "tipo";
    t.value = estado.aba === "obras" ? "obra" : "prateleira";
    f.appendChild(t);
    sel[estado.aba].forEach(function (id) {
      var i = document.createElement("input");
      i.type = "hidden"; i.name = "ids"; i.value = id;
      f.appendChild(i);
    });
    f.submit();
  });

  render();
})();
`;

function paginaAdminPainel(obras, prateleiras) {
  const dados = {
    obras: obras
      .filter((o) => o.id)
      .map((o) => ({ id: o.id, nome: o.nome, autor: o.autor })),
    prateleiras: prateleiras
      .filter((p) => p.id)
      .map((p) => ({ id: p.id, nome: p.nome })),
  };
  // "<" escapado para que nenhum valor da planilha feche a tag <script>.
  const dadosJson = JSON.stringify(dados).replace(/</g, "\\u003c");

  return paginaAdminBase(
    "Admin — Galeria Raquel Arnaud",
    `<header class="topo">
<div class="topo-marca">
<div class="marca"><img src="${LOGO_SRC}" alt="Galeria Raquel Arnaud"></div>
<h1>Administração</h1>
</div>
<form method="post" action="/admin/logout"><button class="link" type="submit">Sair</button></form>
</header>
<main>
<div class="tabs">
<button type="button" id="tab-obras" class="tab">OBRAS (${dados.obras.length})</button>
<button type="button" id="tab-prateleiras" class="tab">PRATELEIRAS (${dados.prateleiras.length})</button>
</div>
<input id="q" type="search" autocomplete="off">
<div class="cabecalho-lista">
<label><input type="checkbox" id="todos"> Selecionar todos (desta página)</label>
<span id="info"></span>
</div>
<div id="lista"></div>
<nav id="paginacao"></nav>
</main>
<div id="barra" class="barra" hidden>
<span id="contagem"></span>
<button type="button" id="limpar">Limpar</button>
<button type="button" id="gerar" class="primario">GERAR QR CODES</button>
</div>
<form id="form-qr" method="post" action="/admin/qr" target="_blank"></form>
<script>window.__DADOS__ = ${dadosJson};</script>
<script>${PAINEL_SCRIPT}</script>`,
  );
}

// Desenha os QR Codes no navegador (biblioteca qrcode-generator via cdnjs).
const QR_SCRIPT = String.raw`
(function () {
  if (typeof qrcode === "undefined") {
    document.getElementById("aviso-lib").hidden = false;
    return;
  }
  var M = 4; // margem (zona silenciosa) em módulos
  document.querySelectorAll(".qr").forEach(function (el) {
    var qr = qrcode(0, "M");
    qr.addData(el.getAttribute("data-url"));
    qr.make();
    var n = qr.getModuleCount();
    var d = "";
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        if (qr.isDark(r, c)) d += "M" + (c + M) + " " + (r + M) + "h1v1h-1z";
      }
    }
    var t = n + 2 * M;
    el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + t + ' ' + t + '" shape-rendering="crispEdges">' +
      '<rect width="' + t + '" height="' + t + '" fill="#fff"/><path d="' + d + '" fill="#000"/></svg>';
  });
  document.getElementById("colunas").addEventListener("change", function (e) {
    document.documentElement.style.setProperty("--cols", e.target.value);
  });
})();
`;

const QR_STYLE = `
  :root { --cols: 3; }
  * { box-sizing: border-box; }
  [hidden] { display: none !important; }
  body { margin: 0; padding: 28px; font-family: 'Inter', sans-serif; color: #232120; background: #faf8f5; }
  .barra-topo { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 26px; padding-bottom: 18px; border-bottom: 1px solid #e7e1d8; }
  .barra-topo .marca { margin-right: auto; }
  .barra-topo .marca img { height: 20px; width: auto; display: block; }
  .barra-topo strong { font-family: 'EB Garamond', serif; font-weight: 400; font-size: 18px; color: #232120; }
  .barra-topo button { padding: 10px 18px; border: 1px solid #c9a35f; background: #c9a35f; color: #1a1815; border-radius: 6px; font-weight: 600; font-size: 13px; cursor: pointer; }
  .barra-topo select { padding: 7px 10px; border: 1px solid #d5cfc5; border-radius: 6px; background: #fff; }
  #aviso-lib { color: #a33; font-size: 13px; }
  .grade { display: grid; grid-template-columns: repeat(var(--cols), 1fr); gap: 18px; }
  .card { margin: 0; padding: 20px 16px; border: 1px solid #e7e1d8; border-radius: 10px; background: #fff; text-align: center; break-inside: avoid; page-break-inside: avoid; }
  .qr svg { width: 100%; height: auto; display: block; }
  .qr { padding: 6px; }
  figcaption { margin-top: 12px; padding-top: 12px; border-top: 1px dashed #d5cfc5; }
  figcaption strong { display: block; font-family: 'EB Garamond', serif; font-weight: 400; font-size: 16px; line-height: 1.3; color: #232120; }
  figcaption small { display: block; margin-top: 4px; color: #9a9188; font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; }
  @page { margin: 12mm; }
  @media print {
    body { padding: 0; background: #fff; }
    .barra-topo { display: none; }
    .card { border: 1px dashed #bbb; border-radius: 0; }
  }
`;

function paginaAdminQr(tipo, itens, base) {
  const rotulo = tipo === "obra" ? "obra" : "prateleira";
  const cards = itens
    .map((i) => {
      const alvo = `${base}/visualizar/${tipo}/${encodeURIComponent(i.id)}`;
      return `<figure class="card">
<div class="qr" data-url="${escapeHtml(alvo)}"></div>
<figcaption><strong>${escapeHtml(i.nome)}</strong><small>${escapeHtml(i.id)}</small></figcaption>
</figure>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>QR Codes — ${itens.length} ${rotulo}${itens.length === 1 ? "" : "s"}</title>
${FONTS_LINK}
<style>${QR_STYLE}</style>
</head>
<body>
<div class="barra-topo">
<span class="marca"><img src="${LOGO_SRC}" alt="Galeria Raquel Arnaud"></span>
<strong>${itens.length} QR Code${itens.length === 1 ? "" : "s"}</strong>
<label>Colunas: <select id="colunas"><option>2</option><option selected>3</option><option>4</option></select></label>
<button type="button" onclick="window.print()">Imprimir / Salvar como PDF</button>
<span id="aviso-lib" hidden>Não foi possível carregar a biblioteca de QR Code. Verifique a conexão e recarregue.</span>
</div>
<div class="grade">
${cards}
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"></script>
<script>${QR_SCRIPT}</script>
</body>
</html>`;
}

async function handleAdmin(request, env, url, partes) {
  if (!env.ADMIN_PASSWORD) {
    return adminHtml(
      paginaAdminMensagem(
        "Área administrativa não configurada (secret ADMIN_PASSWORD ausente).",
      ),
      503,
    );
  }

  const sub = partes[1];
  const logado = await sessaoValida(request, env.ADMIN_PASSWORD);

  // /admin — login (POST) ou painel (GET)
  if (!sub) {
    if (request.method === "POST") {
      const form = await request.formData();
      const senha = String(form.get("senha") || "");
      if (await iguais(senha, env.ADMIN_PASSWORD)) {
        const token = await criarSessao(env.ADMIN_PASSWORD);
        return redirecionar("/admin", {
          "Set-Cookie": cookieSessao(token, SESSAO_SEGUNDOS),
        });
      }
      return adminHtml(paginaAdminLogin("Senha incorreta."), 401);
    }
    if (!logado) return adminHtml(paginaAdminLogin());
    const [obras, prateleiras] = await Promise.all([
      fetchTable(OBRAS_CSV_URL),
      fetchTable(PRATELEIRAS_CSV_URL),
    ]);
    return adminHtml(paginaAdminPainel(obras, prateleiras));
  }

  // /admin/logout
  if (sub === "logout") {
    return redirecionar("/admin", { "Set-Cookie": cookieSessao("", 0) });
  }

  // /admin/qr — página de impressão (recebe a seleção por POST)
  if (sub === "qr") {
    if (!logado || request.method !== "POST") return redirecionar("/admin");
    const form = await request.formData();
    const tipo = String(form.get("tipo") || "");
    const ids = new Set(form.getAll("ids").map(String));
    if ((tipo !== "obra" && tipo !== "prateleira") || ids.size === 0) {
      return adminHtml(paginaAdminMensagem("Nenhum item selecionado."), 400);
    }
    const tabela = await fetchTable(
      tipo === "obra" ? OBRAS_CSV_URL : PRATELEIRAS_CSV_URL,
    );
    const itens = tabela.filter((i) => i.id && ids.has(i.id));
    if (itens.length === 0) {
      return adminHtml(paginaAdminMensagem("Itens não encontrados."), 404);
    }
    const base = (env.PUBLIC_BASE_URL || url.origin).replace(/\/+$/, "");
    return adminHtml(paginaAdminQr(tipo, itens, base));
  }

  return adminHtml(paginaAdminMensagem("Página não encontrada."), 404);
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const partes = url.pathname.split("/").filter(Boolean);

    try {
      if (partes[0] === "admin") {
        return await handleAdmin(request, env, url, partes);
      }

      if (partes[0] === "visualizar" && partes[1] === "obra" && partes[2]) {
        const obras = await fetchTable(OBRAS_CSV_URL);
        const obra = obras.find((o) => o.id === partes[2]);
        return obra
          ? html(paginaObra(obra))
          : html(paginaErro("Obra não encontrada"), 404);
      }

      if (
        partes[0] === "visualizar" &&
        partes[1] === "prateleira" &&
        partes[2]
      ) {
        const [prateleiras, obras] = await Promise.all([
          fetchTable(PRATELEIRAS_CSV_URL),
          fetchTable(OBRAS_CSV_URL),
        ]);
        const prateleira = prateleiras.find((p) => p.id === partes[2]);
        if (!prateleira)
          return html(paginaErro("Prateleira não encontrada"), 404);
        const obrasDaPrateleira = obras.filter(
          (o) => o.prateleira_id === partes[2],
        );
        return html(paginaPrateleira(prateleira, obrasDaPrateleira));
      }

      const [tipo, id] = partes;

      if (tipo === "obra" && id) {
        const obras = await fetchTable(OBRAS_CSV_URL);
        const obra = obras.find((o) => o.id === id);
        return obra ? json(obra) : json({ erro: "Obra não encontrada" }, 404);
      }

      if (tipo === "prateleira" && id) {
        const [prateleiras, obras] = await Promise.all([
          fetchTable(PRATELEIRAS_CSV_URL),
          fetchTable(OBRAS_CSV_URL),
        ]);
        const prateleira = prateleiras.find((p) => p.id === id);
        if (!prateleira)
          return json({ erro: "Prateleira não encontrada" }, 404);
        const obrasDaPrateleira = obras.filter((o) => o.prateleira_id === id);
        return json({ ...prateleira, obras: obrasDaPrateleira });
      }

      return json(
        {
          erro: "Use /obra/:id, /prateleira/:id, /visualizar/obra/:id ou /visualizar/prateleira/:id",
        },
        400,
      );
    } catch (e) {
      return json({ erro: e.message }, 500);
    }
  },
};
