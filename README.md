# ⚽ Live Match Feed

Aplicação web de cobertura ao vivo de partidas de futebol, desenvolvida com **Next.js**, **TailwindCSS** e **TypeScript**, com foco em performance, interatividade e responsividade. O projeto simula uma transmissão ao vivo com eventos, comentários do narrador, cronômetro controlável e placar em tempo real.

---

## 📸 Preview

https://live-match-feed-39on.vercel.app/

---

## 🚀 Funcionalidades

- ✅ Lista de eventos com filtro por tipo
- ✅ Comentários do narrador sincronizados com o tempo do jogo
- ✅ Cronômetro com controle manual, automático, velocidade e persistência com `localStorage`
- ✅ Placar ao vivo com atualização em tempo real
- ✅ Exibição de informações do jogo (times, escudos, campeonato, estádio e data)
- ✅ Escalação dos times com base em dados do JSON (não feito ainda)
- ✅ Dark Mode com toggle
- ✅ Design Mobile-First responsivo
- ✅ Animações suaves e interações amigáveis
- ✅ Deploy com **Vercel**

---

## 🧰 Tecnologias utilizadas

- [Next.js 15+](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4.x](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Vercel](https://vercel.com/) para deploy

---

## 📁 Estrutura de pastas

/app
├─ page.tsx # Página principal
├─ layout.tsx # Layout base
/components
├─ GameClock.tsx # Cronômetro com controle
├─ EventList.tsx # Lista de eventos
├─ EventFilter.tsx # Filtros por tipo
├─ NarratorComments.tsx # Comentários do narrador
├─ LiveScore.tsx # Placar ao vivo
├─ Lineup.tsx # Escalação dos times (não feito ainda)
├─ ThemeToggle.tsx # Botão de modo escuro
├─ Header.tsx / Footer.tsx # Cabeçalho e rodapé
/data
├─ flamengo_juventude_with_events.json
/public
└─ preview.jpg # Imagem de preview

---

## 🛠️ Instalação local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/live-match-feed.git

# Acesse a pasta do projeto
cd live-match-feed

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

Acesse em: http://localhost:3000

☁️ Deploy na Vercel
1. Acesse: https://vercel.com
2. Clique em "New Project" e conecte com seu GitHub
3. Escolha o repositório live-match-feed
4. Configure:
Framework Preset: Next.js

Root Directory: (deixe vazio, padrão)

Build Command: npm run build

Output Directory: .next

5. Clique em Deploy
✅ A Vercel cuidará automaticamente do build, deploy e hospedagem do seu projeto com HTTPS incluso.

✍️ Observações
O projeto foi desenvolvido com foco educacional, para simulação de partidas fictícias

Os dados estão mockados em um arquivo JSON

Pode ser facilmente adaptado para receber dados reais via API

📄 Licença
MIT © Seu Nome ou @github

📬 Contato
📧 Email: s_th@live.com
🐙 GitHub: https://github.com/ThiagoTHS
```
