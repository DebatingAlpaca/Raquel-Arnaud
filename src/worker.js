// Cloudflare Worker — serve dados de Obras/Prateleiras a partir do Google Sheets
// Rotas: GET /obra/:id   |   GET /prateleira/:id

const OBRAS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhYmPxgT_QJ5GzLcKYSv3Zj_bFYcqxQAaZRf5ywcpIeZoGtMTUC7bydm79_VMhyYR1jFN4zugFyMyO/pub?gid=16308019&single=true&output=csv";
const PRATELEIRAS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhYmPxgT_QJ5GzLcKYSv3Zj_bFYcqxQAaZRf5ywcpIeZoGtMTUC7bydm79_VMhyYR1jFN4zugFyMyO/pub?gid=112070046&single=true&output=csv";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

// Parser de CSV que lida com campos entre aspas contendo vírgulas/quebras de linha
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

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const [, tipo, id] = url.pathname.split("/");

    try {
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

      return json({ erro: "Use /obra/:id ou /prateleira/:id" }, 400);
    } catch (e) {
      return json({ erro: e.message }, 500);
    }
  },
};
