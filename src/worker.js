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
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    background: #f7f5f2;
    color: #1c1c1c;
    min-height: 100vh;
    padding: 24px 16px 48px;
  }
  .container { max-width: 640px; margin: 0 auto; }
  .voltar {
    display: inline-block;
    font-family: sans-serif;
    font-size: 13px;
    color: #7a7a7a;
    text-decoration: none;
    margin-bottom: 20px;
  }
  .imagem {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    background: #e5e2dc;
    border-radius: 4px;
  }
  h1 {
    font-size: 28px;
    font-weight: normal;
    margin-top: 24px;
    line-height: 1.25;
  }
  .meta {
    font-family: sans-serif;
    font-size: 14px;
    color: #6b6b6b;
    margin-top: 8px;
  }
  .descricao {
    font-size: 17px;
    line-height: 1.6;
    margin-top: 20px;
  }
  .grupo-nome {
    font-family: sans-serif;
    font-size: 13px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #a37b3b;
    margin-top: 24px;
  }
  .lista-obras {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .obra-card {
    display: flex;
    gap: 14px;
    text-decoration: none;
    color: inherit;
    background: #fff;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  }
  .obra-card img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 4px;
    background: #e5e2dc;
    flex-shrink: 0;
  }
  .obra-card-info { font-family: sans-serif; }
  .obra-card-nome { font-size: 15px; font-weight: 600; }
  .obra-card-tecnica { font-size: 12px; color: #7a7a7a; margin-top: 2px; }
  .erro {
    font-family: sans-serif;
    text-align: center;
    margin-top: 80px;
    color: #7a7a7a;
  }
`;

function paginaObra(obra) {
  const metaPartes = [obra.ano, obra.tecnica, obra.dimensoes]
    .filter(Boolean)
    .map(escapeHtml);
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(obra.nome)} — Galeria Raquel Arnaud</title>
<style>${PAGE_STYLE}</style>
</head>
<body>
<div class="container">
<img class="imagem" src="${escapeHtml(obra.imagem_url)}" alt="${escapeHtml(obra.nome)}">
<h1>${escapeHtml(obra.nome)}</h1>
<div class="meta">${metaPartes.join(" · ")}</div>
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
<div class="obra-card-tecnica">${escapeHtml(o.tecnica)}${o.ano ? " · " + escapeHtml(o.ano) : ""}</div>
</div>
</a>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(prateleira.nome)} — Galeria Raquel Arnaud</title>
<style>${PAGE_STYLE}</style>
</head>
<body>
<div class="container">
<div class="grupo-nome">Prateleira</div>
<h1>${escapeHtml(prateleira.nome)}</h1>
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
<style>${PAGE_STYLE}</style>
</head>
<body>
<div class="container">
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
