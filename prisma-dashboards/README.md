# SISTEMA DE DASHBOARDS - PRISMA CRISTAIS

**Versão:** 1.0  
**Data:** Novembro 2025  
**Desenvolvido por:** FDJ Digital  
**Cliente:** Prisma Cristais

---

## 📋 ESTRUTURA DO PROJETO

```
prisma-dashboards/
│
├── images/
│   └── logo-prisma-cristais.png (ADICIONAR LOGO AQUI)
│
└── login/
    ├── index.html (Página de login com senha)
    │
    └── painel/
        ├── index.html (Página de seleção de dashboards)
        │
        ├── trafego-pago/
        │   └── index.html (Dashboard de tráfego pago)
        │
        └── geral/
            └── index.html (Dashboard geral)
```

---

## 🎨 IDENTIDADE VISUAL APLICADA

### Cores Utilizadas
- **Turmalina Paraíba (Principal):** #15B6B8
- **Turmalina Secundária:** #099D7F
- **Prisma Black:** #000000
- **Crystal White:** #FFFFFF
- **Graphite:** #2C2C2C
- **Slate:** #6B6B6B
- **Pearl:** #F5F5F5
- **Mist:** #FAFAFA

### Tipografia
- **Fonte Principal:** Montserrat (títulos, botões, elementos de marca)
- **Fonte Secundária:** Inter (textos corridos, descrições)

---

## 🔐 CONFIGURAÇÃO DE SENHA

**Localização:** `/login/index.html` - Linha 365

```javascript
const CORRECT_PASSWORD = 'prismacristais2025';
```

**Para alterar a senha:**
1. Abra o arquivo `/login/index.html`
2. Localize a linha 365
3. Substitua `'prismacristais2025'` pela senha desejada
4. Salve o arquivo

**Senha Padrão Atual:** `prismacristais2025`

---

## 📊 ADICIONAR CÓDIGOS DE INCORPORAÇÃO

### Dashboard de Tráfego Pago

**Arquivo:** `/login/painel/trafego-pago/index.html`

**Localização:** Linha 179-190

**Substituir:**
```html
<div class="coming-soon-container">
    <!-- Mensagem "Em Breve" -->
</div>
```

**Por:**
```html
<iframe 
    src="SEU_LINK_LOOKER_STUDIO_AQUI"
    class="dashboard-frame"
    loading="lazy"
    allowfullscreen>
</iframe>
```

### Dashboard Geral

**Arquivo:** `/login/painel/geral/index.html`

**Localização:** Linha 179-190

**Substituir:**
```html
<div class="coming-soon-container">
    <!-- Mensagem "Em Breve" -->
</div>
```

**Por:**
```html
<iframe 
    src="SEU_LINK_REPORTEI_AQUI"
    class="dashboard-frame"
    loading="lazy"
    allowfullscreen>
</iframe>
```

---

## 🖼️ ADICIONAR LOGO

1. Salve a logo da Prisma Cristais com o nome: `logo-prisma-cristais.png`
2. Coloque o arquivo na pasta: `/images/`
3. Formato recomendado: PNG com fundo transparente
4. Dimensões recomendadas: Altura 120-150px (largura proporcional)

---

## 🚀 ESTRUTURA DE URLs

- **Login:** `/login/` ou `/login/index.html`
- **Painel:** `/login/painel/` ou `/login/painel/index.html`
- **Tráfego Pago:** `/login/painel/trafego-pago/` ou `/login/painel/trafego-pago/index.html`
- **Dashboard Geral:** `/login/painel/geral/` ou `/login/painel/geral/index.html`

---

## 🔒 SISTEMA DE AUTENTICAÇÃO

### Funcionamento
- Autenticação baseada em senha simples
- Sessão armazenada em `sessionStorage` do navegador
- Duração da sessão: **24 horas**
- Após 24 horas, usuário precisa fazer login novamente

### Segurança
- Senha validada no cliente (JavaScript)
- SessionStorage limpo ao fazer logout
- Verificação automática em todas as páginas internas
- Redirecionamento automático se não autenticado

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### ☑️ Concluído
- [x] Estrutura de diretórios criada
- [x] Página de login (`/login/`)
- [x] Página de painel (`/login/painel/`)
- [x] Página de tráfego pago (`/login/painel/trafego-pago/`)
- [x] Página de dashboard geral (`/login/painel/geral/`)
- [x] Identidade visual Prisma Cristais aplicada
- [x] Sistema de autenticação por senha
- [x] Botões "Voltar" nas páginas internas
- [x] Botão "Sair" na página do painel
- [x] Responsividade mobile/desktop
- [x] Animações e transições suaves
- [x] Headers com logo em todas as páginas
- [x] Footers padronizados

### 🔲 Pendente (Ação do Cliente)
- [ ] **URGENTE:** Adicionar logo (`logo-prisma-cristais.png`) na pasta `/images/`
- [ ] Adicionar código de incorporação do Looker Studio (Tráfego Pago)
- [ ] Adicionar código de incorporação do Reportei (Dashboard Geral)
- [ ] (Opcional) Alterar senha padrão
- [ ] Testar acesso completo após adicionar logo e dashboards
- [ ] Upload para servidor/hospedagem

---

## 📱 RESPONSIVIDADE

O sistema foi desenvolvido para funcionar perfeitamente em:

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** 360px - 767px

Testado em resoluções comuns:
- 1920x1080 (Desktop Full HD)
- 1440x900 (Desktop)
- 1024x768 (Tablet Landscape)
- 768x1024 (Tablet Portrait)
- 375x812 (iPhone X/11/12)
- 360x640 (Android padrão)

---

## 🎯 PRÓXIMOS PASSOS

1. **Adicionar Logo** (PRIORIDADE MÁXIMA)
   - Colocar arquivo `logo-prisma-cristais.png` na pasta `/images/`

2. **Configurar Dashboards**
   - Obter link de incorporação do Looker Studio
   - Obter link de incorporação do Reportei
   - Substituir placeholders "Em Breve" pelos iframes

3. **Testar Sistema Completo**
   - Testar login com senha
   - Verificar navegação entre páginas
   - Confirmar carregamento dos dashboards
   - Testar responsividade em diferentes dispositivos

4. **Deploy**
   - Fazer upload dos arquivos para servidor
   - Configurar domínio/subdomínio
   - Testar acesso em produção

---

## 🛠️ SUPORTE TÉCNICO

Para dúvidas ou ajustes:

**FDJ Digital**  
**Desenvolvedor:** Mateus  
**Projeto:** Prisma Cristais - Sistema de Dashboards

---

## 📝 NOTAS IMPORTANTES

- Sistema desenvolvido seguindo identidade visual oficial da Prisma Cristais
- Todas as cores, fontes e estilos estão de acordo com o brand book
- URLs sem `index.html` funcionam automaticamente (script de limpeza incluído)
- Sistema de sessão expira em 24 horas por questões de segurança
- Mensagens "Em Breve" serão exibidas até os códigos de incorporação serem adicionados

---

**© 2025 FDJ Digital - Desenvolvido exclusivamente para Prisma Cristais**
