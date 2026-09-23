const OBRAS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhYmPxgT_QJ5GzLcKYSv3Zj_bFYcqxQAaZRf5ywcpIeZoGtMTUC7bydm79_VMhyYR1jFN4zugFyMyO/pub?gid=16308019&single=true&output=csv";
const PRATELEIRAS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhYmPxgT_QJ5GzLcKYSv3Zj_bFYcqxQAaZRf5ywcpIeZoGtMTUC7bydm79_VMhyYR1jFN4zugFyMyO/pub?gid=112070046&single=true&output=csv";

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
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #9a9188;
    margin-bottom: 40px;
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
<div class="marca">Galeria Raquel Arnaud</div>
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
<div class="marca">Galeria Raquel Arnaud</div>
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
<div class="marca">Galeria Raquel Arnaud</div>
<p class="erro">${escapeHtml(mensagem)}</p>
</div>
</body>
</html>`;
}

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const partes = url.pathname.split("/").filter(Boolean);

    try {
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
