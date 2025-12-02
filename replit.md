# GoGrowth.me - Phelipe Xavier Portfolio

## Overview
Portfolio pessoal de Phelipe Xavier, serial empreendedor baseado em Kunshan, Jiangsu, China. O site segue estética editorial inspirada em balajmarius.com, apresentando o gogrowth lab com experimentos/ventures, experiência profissional, frameworks para download, e newsletter.

## Estado Atual
- **Status**: MVP funcional e completo
- **Última Atualização**: Dezembro 2025
- **Stack**: React + Express + TypeScript
- **Design**: Editorial single-column (balajmarius.com style)

## Arquitetura

### Frontend (client/)
```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Nome + localização + seletor de idioma
│   │   ├── HeroSection.tsx       # Tagline editorial com bio
│   │   ├── ExperimentsSection.tsx # 10 ventures numerados
│   │   ├── ExperienceSection.tsx  # 8 empresas atendidas
│   │   ├── FrameworksSection.tsx  # Cards de frameworks (Gumroad)
│   │   ├── NewsletterSection.tsx  # Formulário de newsletter
│   │   └── Footer.tsx             # Rodapé minimalista
│   ├── lib/
│   │   ├── i18n.ts               # Traduções PT/EN/ZH
│   │   ├── data.ts               # Dados (experiments, companies, frameworks)
│   │   └── LanguageContext.tsx   # Contexto de idioma
│   ├── pages/
│   │   └── Home.tsx              # Página principal
│   └── App.tsx                   # Router e providers
```

### Backend (server/)
```
server/
├── routes.ts      # API endpoints (/api/subscribe)
├── storage.ts     # In-memory storage para subscribers
└── index.ts       # Express server
```

## Design System

### Paleta de Cores
- **Background**: HSL(38, 33%, 95%) - Parchment/cream quente
- **Foreground**: HSL(20, 10%, 15%) - Charcoal escuro
- **Primary**: HSL(340, 75%, 32%) - Wine accent
- **Muted**: HSL(35, 15%, 90%) - Warm gray

### Tipografia
- **Headlines**: Playfair Display (serif, bold)
- **Body**: Space Grotesk (sans-serif)
- **Mono**: JetBrains Mono

### Layout
- Single-column editorial
- Max width: 4xl (max-w-4xl)
- Generous spacing: py-16 lg:py-24

## Seções

### 1. Hero
- Tagline: "Serial entrepreneur turned founder. Building the gogrowth lab."
- Palavras em itálico serif para ênfase
- Bio curta (2 parágrafos)

### 2. Experiments (10)
1. 3things.space - Journaling experimental
2. amaratonanopulso.com - Evento de corrida
3. byebyewp.com.br - Migração WordPress
4. chinato.watch - Observatório China
5. AmbientFood.AI - IA culinária
6. hooks.cool - Marketing hooks
7. IconJobs.com - Jobs criativos
8. tdah.english - Inglês para TDAH
9. devotion.run - Espiritualidade
10. chinadailymarketing.com - Blog marketing

### 3. Experience (8)
1. bt.créditos - Mentoria
2. Fotop - Consultoria
3. BTG Boostlab - Mentor
4. Braskem Labs - Mentor
5. Google - Consultoria
6. Ace Startups - Mentor
7. Tera - Expert
8. HQ Beds - Consultoria

### 4. Resources (3 Frameworks)
- Idea Validation Framework
- MVP Template
- Growth Hacking Guide

### 5. Newsletter
- Email subscription
- Suporte trilíngue

## Funcionalidades

### i18n
- **Idiomas**: Português, English, 中文
- **Persistência**: localStorage
- **Toggle**: Botões de texto no header

### Animações
- Framer Motion fade-ins
- Hover states sutis
- Scroll-triggered reveals

### API
- `POST /api/subscribe` - Newsletter

## Próximos Passos
1. Configurar Resend API para emails
2. Adicionar analytics
3. Links reais do Gumroad
4. Mais frameworks para download

## Comandos
```bash
npm run dev     # Desenvolvimento
npm run build   # Produção
```
