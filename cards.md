

Este documento organiza o desenvolvimento de um **backlog pessoal de jogos**, inspirado no Backloggd, com foco em **aprendizado prático de Next.js (App Router)** e evolução incremental.

Cada item é um **card de desenvolvimento**, pensado para funcionar como Issue (GitHub / Jira / Linear).

---

## 🧱 EPIC 1 – Setup & Fundamentos do Projeto

### 🟦 Card 1 – Criar projeto base Next.js

**Objetivo:** Inicializar o projeto e entender a base do App Router

**Tarefas:**

- Criar projeto com `create-next-app`
    
- Ativar TypeScript
    
- Configurar Tailwind CSS
    
- Remover boilerplate desnecessário
    

**Aprendizados:**

- Estrutura do App Router
    
- Server Components por padrão
    

---

### 🟦 Card 2 – Layout raiz e landing page

**Objetivo:** Criar identidade inicial do projeto

**Tarefas:**

- Implementar `app/layout.tsx`
    
- Criar landing page pública
    
- Configurar metadata básica (SEO)
    

**Aprendizados:**

- Layout persistente
    
- Metadata no Next
    

---

## 🧭 EPIC 2 – Estrutura Pública e Privada

### 🟩 Card 3 – Separar áreas pública e privada

**Objetivo:** Organizar rotas por contexto

**Tarefas:**

- Criar route groups `(public)` e `(private)`
    
- Definir layouts distintos
    

**Aprendizados:**

- Route Groups
    
- Organização por domínio
    

---

### 🟩 Card 4 – Navegação entre páginas

**Objetivo:** Implementar navegação fluida

**Tarefas:**

- Criar menu principal
    
- Usar `Link` do Next
    
- Validar prefetch automático
    

**Aprendizados:**

- Client Navigation
    
- Prefetch
    

---

## 🎮 EPIC 3 – Backlog de Jogos (Core do Sistema)

### 🟨 Card 5 – Modelo de jogo e status

**Objetivo:** Definir o domínio principal

**Tarefas:**

- Definir tipo `Game`
    
- Definir status (Backlog, Jogando, Finalizado, Dropado)
    
- Definir plataformas
    

**Aprendizados:**

- Modelagem de domínio simples
    

---

### 🟨 Card 6 – API interna de jogos

**Objetivo:** Criar backend no próprio Next

**Tarefas:**

- Criar `app/api/games/route.ts`
    
- Implementar GET (mock)
    
- Separar lógica em `services/`
    

**Aprendizados:**

- Route Handlers
    
- Backend no Next
    

---

### 🟨 Card 7 – Listagem do backlog

**Objetivo:** Exibir jogos usando Server Components

**Tarefas:**

- Criar página `/backlog`
    
- Buscar dados via `fetch` no servidor
    
- Renderizar lista de jogos
    

**Aprendizados:**

- Data Fetching em Server Components
    
- SSR automático
    

---

### 🟨 Card 8 – Detalhe do jogo

**Objetivo:** Criar rota dinâmica

**Tarefas:**

- Criar `/games/[id]/page.tsx`
    
- Exibir informações do jogo
    

**Aprendizados:**

- Dynamic Routes
    
- Parametrização
    

---

## ⚙️ EPIC 4 – Interações e Client Components

### 🟪 Card 9 – Filtros e ordenação

**Objetivo:** Introduzir Client Components de forma controlada

**Tarefas:**

- Criar componente com `"use client"`
    
- Filtrar por status e plataforma
    

**Aprendizados:**

- Boundary server/client
    
- Estado local
    

---

### 🟪 Card 10 – Atualização de status do jogo

**Objetivo:** Alterar estado do jogo

**Tarefas:**

- Criar ação (PUT/PATCH)
    
- Atualizar status do jogo
    
- Revalidar cache
    

**Aprendizados:**

- Mutations
    
- Revalidate
    

---

## 📊 EPIC 5 – Dashboard Pessoal

### 🟧 Card 11 – Métricas básicas

**Objetivo:** Criar dashboard inicial

**Tarefas:**

- Total de jogos
    
- Jogos finalizados
    
- Jogos em andamento
    

**Aprendizados:**

- Agregações no backend
    

---

### 🟧 Card 12 – Gráficos e visualizações

**Objetivo:** Visualizar dados de forma clara

**Tarefas:**

- Criar gráficos simples
    
- Separar componentes de dashboard
    

**Aprendizados:**

- Server Components + Charts
    

---

## 🤖 EPIC 6 – Ferramenta de Sugestões

### 🟥 Card 13 – Regras simples de sugestão

**Objetivo:** Criar lógica inicial de recomendação

**Tarefas:**

- Analisar backlog
    
- Criar regras baseadas em tempo e gênero
    

**Aprendizados:**

- Lógica de negócio
    
- Services
    

---

### 🟥 Card 14 – Página de sugestões

**Objetivo:** Exibir sugestões ao usuário

**Tarefas:**

- Criar página `/suggestions`
    
- Mostrar jogos recomendados
    

**Aprendizados:**

- Server-side logic
    

---

## 🚀 EPIC 7 – Performance & UX

### ⬛ Card 15 – Loading e Error UI

**Objetivo:** Melhorar experiência do usuário

**Tarefas:**

- Criar `loading.tsx`
    
- Criar `error.tsx`
    

**Aprendizados:**

- Suspense
    
- Streaming
    

---

### ⬛ Card 16 – Cache e revalidação

**Objetivo:** Controlar comportamento de dados

**Tarefas:**

- Usar `revalidate`
    
- Testar cache por rota
    

**Aprendizados:**

- ISR
    
- Cache no Next
    

---

## 🔐 EPIC 8 – Autenticação (Opcional)

### 🟫 Card 17 – Auth básica

**Objetivo:** Proteger área privada

**Tarefas:**

- Middleware
    
- Simular login
    

**Aprendizados:**

- Middleware no App Router
    

---

## 🔗 EPIC 9 – Evoluções Futuras

### 🔵 Card 18 – Integração com API externa

**Objetivo:** Enriquecer dados dos jogos

**Tarefas:**

- Integrar RAWG / IGDB
    
- Cachear respostas
    

**Aprendizados:**

- Integração externa
    
- Cache avançado
    

---

## ✅ Definição de Pronto (DoD)

- Funcionalidade completa
    
- Conceito do Next compreendido
    
- Uso consciente de Server/Client Components
    
- Código simples e legível
    

---

📌 **Dica final:** este projeto é pessoal. Evolua no seu ritmo. Quanto mais você usar, melhor ele fica — e mais Next.js você aprende.