# 🚀 GUIA RÁPIDO - DASHBOARDS PRISMA CRISTAIS

## ⚡ AÇÕES NECESSÁRIAS (Faça Agora!)

### 1️⃣ ADICIONAR LOGO
📁 **Onde:** Pasta `images/`  
📝 **Nome do arquivo:** `logo-prisma-cristais.png`  
📏 **Tamanho recomendado:** Altura 120-150px  
✅ **Formato:** PNG com fundo transparente

**Como fazer:**
- Salve sua logo com o nome exato: `logo-prisma-cristais.png`
- Coloque dentro da pasta `images/`
- Pronto! O sistema já vai exibir automaticamente

---

### 2️⃣ SENHA DE ACESSO
🔐 **Senha atual:** `prismacristais2025`

**Como alterar:**
1. Abra o arquivo: `login/index.html`
2. Procure por: `const CORRECT_PASSWORD = 'prismacristais2025';`
3. Troque por sua senha desejada
4. Salve o arquivo

---

### 3️⃣ ADICIONAR DASHBOARDS

#### 📊 Dashboard de Tráfego Pago
1. Abra: `login/painel/trafego-pago/index.html`
2. Procure por: `<div class="coming-soon-container">`
3. Apague todo o bloco (incluindo a div de fechamento)
4. Cole este código no lugar:

```html
<iframe 
    src="COLE_SEU_LINK_DO_LOOKER_STUDIO_AQUI"
    class="dashboard-frame"
    loading="lazy"
    allowfullscreen>
</iframe>
```

5. Substitua `COLE_SEU_LINK_DO_LOOKER_STUDIO_AQUI` pelo link real
6. Salve o arquivo

#### 📈 Dashboard Geral
1. Abra: `login/painel/geral/index.html`
2. Procure por: `<div class="coming-soon-container">`
3. Apague todo o bloco (incluindo a div de fechamento)
4. Cole este código no lugar:

```html
<iframe 
    src="COLE_SEU_LINK_DO_REPORTEI_AQUI"
    class="dashboard-frame"
    loading="lazy"
    allowfullscreen>
</iframe>
```

5. Substitua `COLE_SEU_LINK_DO_REPORTEI_AQUI` pelo link real
6. Salve o arquivo

---

## 🌐 COMO ACESSAR

1. Abra: `/login/` no seu navegador
2. Digite a senha: `prismacristais2025`
3. Clique em "ACESSAR DASHBOARDS"
4. Escolha qual dashboard quer ver

---

## 📁 ESTRUTURA SIMPLIFICADA

```
prisma-dashboards/
│
├── images/
│   └── ⚠️ COLOQUE A LOGO AQUI
│
└── login/
    ├── index.html (Página de Login)
    │
    └── painel/
        ├── index.html (Escolha o Dashboard)
        ├── trafego-pago/index.html (Dashboard Tráfego)
        └── geral/index.html (Dashboard Geral)
```

---

## ✅ CHECKLIST RÁPIDO

- [ ] Logo adicionada em `/images/logo-prisma-cristais.png`
- [ ] Senha configurada (ou mantida a padrão)
- [ ] Link do Looker Studio adicionado em tráfego-pago
- [ ] Link do Reportei adicionado em geral
- [ ] Testei o acesso completo
- [ ] Fiz upload para o servidor

---

## 🆘 PRECISA DE AJUDA?

**Contato:** Mateus - FDJ Digital  
**Projeto:** Prisma Cristais

---

**Dica:** Você pode testar localmente abrindo o arquivo `login/index.html` no seu navegador antes de fazer o upload para o servidor!
