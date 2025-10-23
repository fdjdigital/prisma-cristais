# Guia de Padrões - Prisma Cristais

## Identidade Visual

### Paleta de Cores (Não Alterar)
- **Turmalina Paraíba (Principal)**: `#15B6B8`
- **Turmalina Secundária**: `#099D7F`
- **Prisma Black**: `#000000`
- **Crystal White**: `#FFFFFF`
- **Graphite**: `#2C2C2C`
- **Slate**: `#6B6B6B`
- **Pearl**: `#F5F5F5`
- **Mist**: `#FAFAFA`

### Tipografia (Não Alterar)
- **Fonte Principal**: Montserrat (headings, títulos, navegação)
- **Fonte Secundária**: Inter (corpo de texto, parágrafos)

## Padrões de Layout para Blogs

### Estrutura Obrigatória de Post

```html
<!-- Breadcrumb -->
<div class="article-breadcrumb">
    <a href="/home/">Home</a> / <a href="/blog/">Blog</a> / Título do Post
</div>

<!-- Cabeçalho do Artigo -->
<h1 class="article-title">Título Principal do Post</h1>

<!-- Metadados -->
<div class="article-meta">
    <span>📅 DD de MMM de AAAA</span>
    <span>📖 X minutos de leitura</span>
    <span>✍️ Equipe Prisma Cristais</span>
</div>

<!-- Imagem Destaque -->
<img
    src="../../images/nome-do-arquivo.webp"
    alt="Descrição SEO completa"
    title="Título descritivo"
    width="900"
    height="500"
    loading="eager"
    decoding="async"
    class="article-featured-image">

<!-- Conteúdo -->
<div class="article-content">
    <p class="article-intro">Parágrafo introdutório destacado...</p>

    <h2>Título de Seção</h2>
    <p>Conteúdo...</p>

    <h3>Subtítulo</h3>
    <p>Conteúdo...</p>
</div>

<!-- CTA dentro do Artigo -->
<div class="article-cta">
    <h3>Título do CTA</h3>
    <p style="margin-bottom: 2rem;">Descrição do CTA</p>
    <div class="btn-group">
        <a href="#" class="btn btn-primary">Ação Principal</a>
        <a href="#" class="btn btn-outline">Ação Secundária</a>
    </div>
</div>

<!-- Posts Relacionados -->
<div class="related-posts">
    <h2 class="text-center">Leia Também</h2>
    <div class="blog-grid">
        <!-- 3 cards de posts relacionados -->
    </div>
</div>
```

### Hierarquia de Títulos
- **H1**: Apenas 1 por página - título principal do post
- **H2**: Seções principais do conteúdo
- **H3**: Subseções dentro de H2
- **H4-H6**: Uso esporádico conforme necessidade

### Espaçamentos Padrão
- Entre H2 e conteúdo: `margin-bottom: var(--spacing-lg)` (2rem)
- Entre parágrafos: `margin-bottom: var(--spacing-md)` (1.5rem)
- Entre seções: `margin-top: var(--spacing-3xl)` (6rem)

### Largura de Conteúdo
- Container do artigo: `max-width: 900px`
- Conteúdo de texto: `max-width: 720px`
- Centrado com `margin: 0 auto`

## Checklist de SEO para Imagens

### Atributos Obrigatórios
```html
<img
    src="caminho/para/imagem.webp"
    alt="Descrição detalhada em português com palavras-chave naturais"
    title="Título descritivo curto e objetivo"
    width="XXX"
    height="YYY"
    loading="lazy"
    decoding="async"
    class="classe-apropriada">
```

### Diretrizes para ALT Text
- ✅ Descrição clara e objetiva
- ✅ Incluir palavras-chave naturalmente
- ✅ Mencionar a marca quando relevante ("Prisma Cristais")
- ✅ PT-BR, sem caracteres especiais
- ❌ Não usar "imagem de", "foto de"
- ❌ Não fazer keyword stuffing

**Exemplo bom**:
```
alt="Esfera de obsidiana preta premium - cristal vulcânico raro para decoração sofisticada"
```

**Exemplo ruim**:
```
alt="imagem de cristal"
```

### Diretrizes para TITLE
- Complementar o ALT, não repetir
- Mais conciso que o ALT
- Foco em benefício ou contexto

**Exemplo**:
```
title="Esfera de Obsidiana Preta Premium - Cristal Vulcânico Natural"
```

### Figcaption (quando aplicável)
```html
<figure>
    <img ... >
    <figcaption>Legenda descritiva que contextualiza a imagem no conteúdo</figcaption>
</figure>
```

### Nomes de Arquivo SEO-Friendly
**Padrão**: `descrição-com-hífens-marca-prisma-cristais.webp`

**Exemplos**:
- ✅ `esfera-obsidiana-preta-cristal-premium-prisma-cristais.webp`
- ✅ `como-decorar-com-cristais-guia-completo-prisma-cristais.webp`
- ❌ `IMG_1234.jpg`
- ❌ `foto-cristal.png`

### Dimensões e Performance
- Sempre definir `width` e `height` para evitar CLS
- Cards: `400x250` ou `400x220`
- Imagem destacada de post: `900x500`
- Formato preferencial: **WebP**
- Compressão: balancear qualidade visual e tamanho (~20-60KB)
- `loading="lazy"` para todas, exceto above-the-fold
- `loading="eager"` apenas para imagem principal do post
- `decoding="async"` sempre que possível

### Sizes e Srcset (quando aplicável)
Para imagens responsivas críticas:
```html
<img
    src="imagem.webp"
    srcset="imagem-400.webp 400w,
            imagem-800.webp 800w,
            imagem-1200.webp 1200w"
    sizes="(max-width: 768px) 100vw, 50vw"
    alt="...">
```

## Rotas e Redirecionamentos

### Regra de Migração /produtos → /loja
- ❌ **Não existe** `/produtos/` no site
- ✅ **Usar sempre** `https://prismacristais.com/loja/` (loja externa)
- ✅ Links devem incluir `target="_blank" rel="noopener"`

### Redirect 308 (Permanente)
Se implementar roteamento server-side:
```
/produtos -> https://prismacristais.com/loja/ [308]
/produtos/* -> https://prismacristais.com/loja/ [308]
```

Preservar query strings:
```
/produtos?id=123 -> https://prismacristais.com/loja/?id=123
```

## Padrão de Datas

### Formato de Exibição (PT-BR)
- **Completo**: `DD de MMM de AAAA` (ex: "10 de outubro de 2025")
- **Curto**: `DD MMM AAAA` (ex: "10 out 2025")
- **Meta tag**: `DD de mmmm de AAAA` (ex: "10 de outubro de 2025")

### Schema.org JSON-LD
```json
{
  "datePublished": "2025-10-10",
  "dateModified": "2025-10-10"
}
```

### Timezone
- **Brasil/Brasília**: UTC-3
- Usar timezone explícito quando necessário: `2025-10-10T10:00:00-03:00`

### Meses Abreviados em PT-BR
```
jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez
```

### Atualização de Datas
- `datePublished`: Data original de publicação (não alterar após publicado)
- `dateModified`: Data da última modificação substancial
- Manter coerência entre HTML visível e JSON-LD

## Schema.org para Articles

### Estrutura Padrão
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Título do Post (máx 110 caracteres)",
  "description": "Descrição concisa do conteúdo",
  "image": "https://prismacristais.com/images/imagem-post.webp",
  "datePublished": "2025-10-10",
  "dateModified": "2025-10-10",
  "author": {
    "@type": "Organization",
    "name": "Prisma Cristais"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Prisma Cristais",
    "logo": {
      "@type": "ImageObject",
      "url": "https://prismacristais.com/images/logo-horizontal.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://prismacristais.com/blog/nome-do-post/"
  }
}
```

### Campos Obrigatórios
- ✅ `headline`
- ✅ `image`
- ✅ `datePublished`
- ✅ `author`
- ✅ `publisher` (com logo)

### Campos Recomendados
- ✅ `description`
- ✅ `dateModified`
- ✅ `mainEntityOfPage`

## Mensagem Institucional de Entrega

### Texto Padrão
```
🚚 Entregamos para todo o Brasil por transportadora segura
```

### Onde Exibir
1. **Home**: Seção CTA "Pronto para Transformar Seu Espaço?"
2. **Sobre**: Seção CTA "Pronto para Conhecer Nossa Coleção?"
3. **Blog**: Seção CTA final
4. **Contato**: Abaixo do formulário (opcional)
5. **Footer**: Como badge institucional (opcional)

### Como Exibir
```html
<p style="margin: 0 auto 2rem auto; color: var(--turmalina-paraiba); font-weight: 500; font-size: 15px;">
    🚚 Entregamos para todo o Brasil por transportadora segura
</p>
```

### Variação com Badge
```html
<div class="footer-shipping-badge">
    🚚 Entregamos para todo o Brasil por transportadora segura
</div>
```

## WhatsApp Padrão

### Número Oficial
```
+55 31 99976-7916
```

### Link Formatado
```
https://wa.me/5531999767916?text=Vim%20do%20site%20e%20quero%20conhecer%20o%20que%20a%20Prisma%20tem%20a%20me%20oferecer
```

### Implementação
```html
<a href="https://wa.me/5531999767916?text=Vim%20do%20site%20e%20quero%20conhecer%20o%20que%20a%20Prisma%20tem%20a%20me%20oferecer"
   class="btn btn-primary"
   target="_blank"
   rel="noopener">
    Falar no WhatsApp
</a>
```

## Responsividade e Acessibilidade

### Critérios de Acessibilidade
- Contraste mínimo: **WCAG AA** (4.5:1 para texto normal)
- Todos os links e botões devem ter `aria-label` quando ícones
- Imagens decorativas: `alt=""` (vazio)
- Imagens informativas: `alt` descritivo
- Formulários: `<label>` associado a cada `<input>`
- Navegação por teclado funcional

### Breakpoints
```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

### Mobile-First
- Desenvolvimento mobile-first
- Logo centralizado no mobile
- Menu hamburguer à direita
- Botões full-width em mobile
- Espaçamentos proporcionais

## Performance

### Otimizações Obrigatórias
- ✅ Imagens WebP comprimidas
- ✅ Lazy loading (exceto above-the-fold)
- ✅ Width/height definidos (evitar CLS)
- ✅ Fontes com `font-display: swap`
- ✅ Preload de recursos críticos
- ✅ Minificação de CSS/JS em produção

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Checklist Pré-Deploy
- [ ] Todas as imagens otimizadas (WebP, <100KB)
- [ ] Alt text em todas as imagens
- [ ] Schema.org correto
- [ ] Links WhatsApp atualizados
- [ ] Datas corretas (Outubro 2025)
- [ ] Mensagem de entrega adicionada
- [ ] Links /produtos convertidos para /loja
- [ ] Responsividade testada
- [ ] Performance testada (Lighthouse >90)

## Contatos e Informações

### Localização
```
Nova Lima, Minas Gerais
Atendemos Nova Lima, Belo Horizonte e região metropolitana
```

### E-mail
```
contato@prismacristais.com
```

### Telefone/WhatsApp
```
(31) 99976-7916
```

### Redes Sociais
```
Instagram: @prismacristaisdecor
https://www.instagram.com/prismacristaisdecor/
```

### Loja Online
```
https://prismacristais.com/loja/
```

## Slogan e Posicionamento

### Slogan Principal
```
"Onde cada pedra revela sua luz única"
```

### Compromisso
```
"O cliente jamais será impedido de sonhar"
```

### Posicionamento
- Premium e profissional (não "lojinha mística")
- Cristais decorativos de alto padrão
- Exclusividade, sofisticação e autenticidade
- Credibilidade científica (fornecedor geólogo)
- Projetos personalizados sem limites
- Atendimento consultivo e personalizado

---

**Última atualização**: Outubro 2025
**Desenvolvido por**: FDJ Digital
