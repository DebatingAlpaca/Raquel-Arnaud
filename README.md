# Galeria QR

Sistema de QR codes para galerias de arte, desenvolvido para uma galeria de arte. O visitante escaneia o QR code de uma obra, ou de uma prateleira (um grupo de obras), e vê imagens e informações na tela do celular. A equipe da galeria atualiza todo o conteúdo em uma planilha, sem precisar programar.

O projeto roda 100% em serviços gratuitos, sem servidor para manter, e fica disponível 24 horas por dia.

## Como funciona

```
Google Sheets  ->  CSV público  ->  Cloudflare Worker  ->  Página no celular do visitante
(equipe edita)                      (busca, converte                 ^
                                     e renderiza)                    |
                                                                QR code impresso
```

1. A equipe cadastra obras e prateleiras em uma planilha do Google Sheets.
2. A planilha é publicada como CSV público.
3. Um Cloudflare Worker lê os CSVs, converte os dados e entrega a API e as páginas visuais.
4. Cada obra e cada prateleira tem um QR code que aponta para a sua página.

## Funcionalidades

- API REST com `GET /obra/:id` e `GET /prateleira/:id`, com CORS liberado
- Páginas visuais para o visitante: `/visualizar/obra/:id` e `/visualizar/prateleira/:id`
- Área administrativa em `/admin`, protegida por senha
  - Painel com busca, paginação e seleção de obras e prateleiras
  - Geração de QR codes em lote
  - Página de impressão dos QR codes
- Identidade visual alinhada à galeria (Garamond + Inter, paleta terrosa e dourada)
- Atualização de conteúdo direto pela planilha, sem novo deploy

## Estrutura dos dados

**Aba `Obras`**

| Coluna | Descrição |
|---|---|
| `id` | Identificador único da obra |
| `nome` | Título da obra |
| `autor` | Artista |
| `prateleira_id` | Prateleira à qual a obra pertence |
| `imagem_url` | Link da imagem |
| `descricao` | Texto descritivo |
| `ano` | Ano de criação |
| `tecnica` | Técnica utilizada |
| `dimensoes` | Dimensões da obra |

**Aba `Prateleiras`**

| Coluna | Descrição |
|---|---|
| `id` | Identificador único da prateleira |
| `nome` | Nome do grupo de obras |
| `descricao_grupo` | Texto descritivo do grupo |

## Tecnologias

- JavaScript
- Cloudflare Workers (free tier)
- Google Sheets (publicado como CSV)
- Wrangler
- GitHub

## Como usar este projeto

### 1. Pré-requisitos

- Conta gratuita na [Cloudflare](https://www.cloudflare.com/)
- Conta no Google com acesso ao Google Sheets
- [Node.js](https://nodejs.org/) instalado

### 2. Planilha

1. Crie uma planilha com as abas `Obras` e `Prateleiras`, usando as colunas descritas acima.
2. Em cada aba, vá em **Arquivo > Compartilhar > Publicar na web**, escolha o formato **CSV** e copie o link gerado.

### 3. Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/DebatingAlpaca/Raquel-Arnaud
   cd NOME_DO_REPOSITORIO
   npm install
   ```

2. Configure no `wrangler.toml` e nos secrets do Worker os links dos CSVs publicados e a senha da área administrativa.

### 4. Deploy

Pela linha de comando:

```bash
npx wrangler deploy
```

Ou conectando o repositório direto na Cloudflare, em **Workers & Pages > Create > Connect to Git**. Assim, cada atualização enviada ao GitHub publica automaticamente.

## Estrutura do repositório

```
.
├── worker.js
├── wrangler.toml
├── package.json
├── LICENSE
└── README.md
```

## Licença e créditos

Este projeto é distribuído sob a licença [MIT](LICENSE). Você pode usar, copiar, modificar e distribuir o código livremente, inclusive em projetos próprios ou comerciais, desde que **mantenha o crédito ao autor** e o aviso de copyright da licença.

Sugestão de crédito:

> Baseado no projeto Galeria QR, de João Pedro: https://github.com/DebatingAlpaca/Raquel-Arnaud
O nome, a marca e as obras da galeria de arte para a qual o sistema foi criado pertencem à galeria e aos respectivos artistas, e não são cobertos pela licença do código.

## Autor

**João Pedro**, estudante da FECAP, São Paulo.

Dúvidas, sugestões e contribuições são bem-vindas por meio de issues e pull requests.
