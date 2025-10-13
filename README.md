# Refrigeração Profissional — Catálogo/One‑Page

Site estático para divulgação de serviços de assistência técnica em refrigeração (Porto Alegre e região).  
Feito com **HTML + Tailwind via CDN + JS vanilla** e sem build tools. Ideal para hospedar em qualquer serviço de _static hosting_.

---

## ✅ O que este repositório contém

- Página principal (`index.html`) com:
  - Hero + CTA único (WhatsApp)
  - Seção “Nossos Serviços” com cards
  - Seção “Por que escolher a gente?”
  - Depoimentos
  - Bloco de contato + mapa
  - Header com **menu mobile (drawer)**
- Páginas de serviços em `/servicos/`
- Página “Sobre” (opcional)
- Logos originais (icon + wordmark) e favicon em SVG
- PWA básico via `manifest.json`
- Script `assets/js/main.js` para:
  - efeito de sombra do header ao rolar
  - abertura/fechamento do drawer mobile
  - destaque de links do menu por seção
  - envio simulado de formulário legado (se existir)

---

## 🌳 Estrutura de pastas (compatível com o seu projeto)

```
assets/
  css/
    style.css
  icons/
    snowflake.svg
    whatsapp.svg
  img/
    banner.png
    geladeira.jpg
    lavadora.jpg
    microondas.jpg
    ar-condicionado.jpg
    servicos/              # (imagens extras, se precisar)
  js/
    main.js
  logo/
    favicon.svg
    refrigpro-icon.svg
    refrigpro-wordmark.svg
servicos/
  ar-condicionado.html
  geladeiras.html
  lavadoras.html
  micro-ondas.html
index.html
sobre.html               # (se estiver usando)
manifest.json
```

> **Observação:** Se algum arquivo/pasta não existir no seu ambiente, basta criar ou ajustar os caminhos conforme acima.

---

## ▶️ Como rodar localmente

Não requer nenhuma instalação especial. Abra o arquivo `index.html` no navegador.
- Dica: com VS Code, use a extensão **Live Server** para _reload_ automático.

---

## 🧩 Personalização rápida

### 1) Atualizar WhatsApp e telefone
Procure por `wa.me/5551999999999` e substitua pelo seu número real no formato internacional.  
Ex.: `https://wa.me/5551999123456?text=Olá!%20Quero%20um%20orçamento.`

O telefone exibido no bloco de informações fica em `index.html` (seção **Informações**) e também pode estar na página **sobre.html**.

### 2) Cores da marca
As cores primárias estão configuradas no **Tailwind inline config** dentro do `<head>` do `index.html`:
```js
tailwind.config = {
  theme: { extend: {
    colors: {
      primary: "#0ea5e9",   // azul (sky-500)
      secondary: "#14b8a6", // teal-500
      surface: { soft:"#eef2f6", ring:"#e2e8f0" },
      cream: { DEFAULT:"#FFF4DC", soft:"#FFF9EF", bold:"#FFE8B3" }
    }
  }}
}
```
Altere esses hexadecimais para ajustar o visual.

### 3) Logos e favicon
- **Logo (wordmark)**: `assets/logo/refrigpro-wordmark.svg`
- **Ícone (quadrado)**: `assets/logo/refrigpro-icon.svg`
- **Favicon**: `assets/logo/favicon.svg` (link já está no `<head>`)

Se trocar os arquivos, **mantenha os nomes** ou atualize os caminhos em `index.html`.

### 4) Textos de SEO e Schema
No `<head>` do `index.html` há:
- `<title>` e `<meta name="description">`
- JSON‑LD com `@type: LocalBusiness`  
Atualize **nome, telefone, cidade** e **URL**.

### 5) Serviços
As páginas em `/servicos` possuem o conteúdo por aparelho. Altere conforme a sua oferta.

---

## 📱 Menu mobile (drawer)

O menu lateral usa estes IDs e classes (importante para que não “vaze” por trás do conteúdo):
- `#mobileDrawer` → **cobertura total** com `z-[80]`
- `#drawerOverlay` → backdrop opaco (`bg-black/60`)
- `#drawerPanel` → painel que desliza (tem `translateX(100%)` por padrão)
- `#openMenu` e `#closeMenu` → botões

O JS em `assets/js/main.js` controla:
- Abertura/fechamento com **trava de scroll** (`body { overflow: hidden }`)
- Troca do ícone “hambúrguer/fechar”
- Esconde o drawer apenas **após** a animação terminar (300ms)

Se o drawer ficar “transparente” ou atrás do conteúdo, confira:
- `z-index` maior que o do header/hero `z-50` → usamos `z-[80]` no drawer
- o overlay é um **button** cobrindo `inset-0`
- o painel tem `position: absolute` e está dentro do `#mobileDrawer`

---

## 🖼️ Prints do projeto

Crie a pasta `docs/screenshots/` e adicione imagens como:
```
docs/screenshots/01-hero.png
docs/screenshots/02-servicos.png
docs/screenshots/03-drawer-mobile.png
```
Depois, referencie no README:
```md
![Hero](docs/screenshots/01-hero.png)
![Serviços](docs/screenshots/02-servicos.png)
![Menu Mobile](docs/screenshots/03-drawer-mobile.png)
```

---

## 🚀 Deploy

Qualquer hospedagem estática serve:
- **GitHub Pages**: publique a raiz do projeto.  
- **Vercel/Netlify**: arraste a pasta ou conecte o repositório (build = none).  
- **CPanel**: suba os arquivos para `public_html`.

> Se usar domínio próprio, lembre-se de atualizar a `url` do JSON‑LD e conferir o **favicon**.

---

## 🔍 Boas práticas incluídas

- **AOS** para animações suaves (pode desabilitar removendo os `<script>`/`<link>`).
- Títulos e `meta description` configuráveis por página.
- `manifest.json` para ícone em atalho e cor do tema móvel.
- Sem dependências de build: simples e direto.

---

## 🧪 Testes rápidos antes de publicar

1. Todos os links de **WhatsApp** funcionam?  
2. O número de telefone está correto?  
3. O menu mobile abre/fecha sem “vazar” por trás do conteúdo?  
4. As imagens carregam bem no celular (tente 360px)?  
5. SEO básico: título e descrição coerentes na aba do navegador.

---

## 📄 Licença

Uso livre para este projeto. Se reutilizar em outro cliente, recomendo manter ou adaptar os créditos visuais.

---

## 👋 Suporte/ajustes

Se quiser, crie um _issue_ descrevendo:
- qual seção quer alterar (ex.: “Serviços → card 3”);
- o texto/arte nova;
- screenshots ou referência.

Isso acelera a entrega e evita ruído entre layout e conteúdo.
