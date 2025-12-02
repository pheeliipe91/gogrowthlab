# GoGrowth.me - Portfolio de Solo Empreendedor

## Overview
Portfolio pessoal para um Solo Empreendedor baseado em Kunshan, Jiangsu, China. O site apresenta startups/experimentos em construção, empresas atendidas como mentor e consultor, frameworks disponíveis para download via Gumroad, e seção de estudos atuais.

## Estado Atual
- **Status**: MVP funcional e completo
- **Última Atualização**: Dezembro 2025
- **Stack**: React + Express + TypeScript

## Arquitetura

### Frontend (client/)
```
client/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx       # Navegação + seletor de idioma
│   │   ├── HeroPoem.tsx     # Poema animado (destaque: confiar/aprender)
│   │   ├── StartupsList.tsx # Lista de startups à esquerda
│   │   ├── CompaniesList.tsx # Lista de empresas à direita
│   │   ├── FrameworksSection.tsx # Cards de frameworks (Gumroad)
│   │   ├── StudySection.tsx # O que estou estudando
│   │   ├── NewsletterSection.tsx # Formulário de newsletter
│   │   └── Footer.tsx       # Rodapé
│   ├── lib/
│   │   ├── i18n.ts          # Traduções PT/EN/ZH
│   │   ├── data.ts          # Dados estáticos (startups, companies)
│   │   └── LanguageContext.tsx # Contexto de idioma
│   ├── pages/
│   │   └── Home.tsx         # Página principal
│   └── App.tsx              # Router e providers
```

### Backend (server/)
```
server/
├── routes.ts      # API endpoints (/api/subscribe)
├── storage.ts     # In-memory storage para subscribers
└── index.ts       # Express server
```

## Funcionalidades

### Internacionalização (i18n)
- **Idiomas**: Português, English, 中文
- **Persistência**: localStorage
- **Detecção automática**: baseada no browser

### Layout Responsivo
- **Desktop**: 3 colunas (startups | poema | empresas)
- **Mobile**: Stack vertical

### Animações (Framer Motion)
- Fade-in do poema linha por linha
- Highlight das palavras "confiar" e "aprender"
- Hover states suaves nos cards
- Transições de página

### API Endpoints
- `POST /api/subscribe` - Inscrição na newsletter
- `GET /api/subscribers` - Lista de inscritos (admin)

## Dados

### Startups (10)
1. 3things.space
2. amaratonanopulso.com
3. byebyewp.com.br
4. chinato.watch
5. AmbientFood.AI
6. hooks.cool
7. IconJobs.com
8. tdah.english
9. devotion.run
10. chinadailymarketing.com (blog)

### Empresas Atendidas (8)
1. bt.créditos
2. Fotop
3. BTG Boostlab
4. Braskem Labs
5. Google
6. Ace Startups
7. Tera
8. HQ Beds

## Design System

### Cores
- **Primary (Wine)**: HSL 340° 75% 32% (light) / 42% (dark)
- **Background**: Cinza claro/escuro
- **Accent**: Variações de wine

### Tipografia
- **Sans**: Space Grotesk, Inter
- **Serif**: Playfair Display (poema)
- **Mono**: JetBrains Mono

## SEO
- Meta tags OpenGraph configuradas
- Twitter Cards
- Schema.org Person structured data
- Suporte multilíngue (hreflang)

## Próximos Passos
1. Configurar Resend para emails transacionais
2. Adicionar analytics
3. Conectar Gumroad com links reais
4. Adicionar mais frameworks para download

## Comandos de Desenvolvimento
```bash
npm run dev     # Inicia servidor de desenvolvimento
npm run build   # Build para produção
```
