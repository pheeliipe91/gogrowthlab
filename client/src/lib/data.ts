import type { Startup, Company, Framework, StudyTopic } from "@shared/schema";

export const startups: Startup[] = [
  {
    id: "1",
    name: "3things.space",
    url: "https://3things.space",
    description: {
      pt: "Foque em 3 coisas por dia",
      en: "Focus on 3 things per day",
      zh: "每天专注3件事",
    },
    status: "active",
  },
  {
    id: "2",
    name: "amaratonanopulso.com",
    url: "https://amaratonanopulso.com",
    description: {
      pt: "Acompanhe suas maratonas",
      en: "Track your marathons",
      zh: "追踪你的马拉松",
    },
    status: "active",
  },
  {
    id: "3",
    name: "byebyewp.com.br",
    url: "https://byebyewp.com.br",
    description: {
      pt: "Migre do WordPress",
      en: "Migrate from WordPress",
      zh: "从WordPress迁移",
    },
    status: "active",
  },
  {
    id: "4",
    name: "chinato.watch",
    url: "https://chinato.watch",
    description: {
      pt: "Acompanhe a China",
      en: "Watch China",
      zh: "关注中国",
    },
    status: "active",
  },
  {
    id: "5",
    name: "musicto.food",
    url: "https://musicto.food",
    description: {
      pt: "Música para cozinhar",
      en: "Music to cook",
      zh: "烹饪音乐",
    },
    status: "experiment",
  },
  {
    id: "6",
    name: "hooks.cool",
    url: "https://hooks.cool",
    description: {
      pt: "Hooks para desenvolvedores",
      en: "Hooks for developers",
      zh: "开发者Hooks",
    },
    status: "experiment",
  },
  {
    id: "7",
    name: "iconto.art",
    url: "https://iconto.art",
    description: {
      pt: "Ícones para artistas",
      en: "Icons for artists",
      zh: "艺术家图标",
    },
    status: "experiment",
  },
  {
    id: "8",
    name: "inglescomtdah.com",
    url: "https://inglescomtdah.com",
    description: {
      pt: "Inglês para TDAH",
      en: "English for ADHD",
      zh: "ADHD英语学习",
    },
    status: "experiment",
  },
  {
    id: "9",
    name: "devotion.run",
    url: "https://devotion.run",
    description: {
      pt: "Devocionais diários",
      en: "Daily devotionals",
      zh: "每日灵修",
    },
    status: "experiment",
  },
  {
    id: "10",
    name: "chinadailymarketing.com",
    url: "https://chinadailymarketing.com",
    description: {
      pt: "Meu blog sobre marketing",
      en: "My marketing blog",
      zh: "我的营销博客",
    },
    status: "blog",
  },
];

export const companies: Company[] = [
  {
    id: "1",
    name: "bt.créditos",
    role: {
      pt: "Mentoria",
      en: "Mentoring",
      zh: "导师",
    },
  },
  {
    id: "2",
    name: "Fotop",
    role: {
      pt: "Consultoria",
      en: "Consulting",
      zh: "咨询",
    },
  },
  {
    id: "3",
    name: "BTG Boostlab",
    role: {
      pt: "Mentor",
      en: "Mentor",
      zh: "导师",
    },
  },
  {
    id: "4",
    name: "Braskem Labs",
    role: {
      pt: "Mentor",
      en: "Mentor",
      zh: "导师",
    },
  },
  {
    id: "5",
    name: "Google",
    role: {
      pt: "Consultoria",
      en: "Consulting",
      zh: "咨询",
    },
  },
  {
    id: "6",
    name: "Ace Startups",
    role: {
      pt: "Mentor",
      en: "Mentor",
      zh: "导师",
    },
  },
  {
    id: "7",
    name: "Tera",
    role: {
      pt: "Expert",
      en: "Expert",
      zh: "专家",
    },
  },
  {
    id: "8",
    name: "HQ Beds",
    role: {
      pt: "Consultoria",
      en: "Consulting",
      zh: "咨询",
    },
  },
];

export const frameworks: Framework[] = [
  {
    id: "1",
    title: {
      pt: "Framework de Validação de Ideias",
      en: "Idea Validation Framework",
      zh: "创意验证框架",
    },
    description: {
      pt: "Valide suas ideias antes de construir",
      en: "Validate your ideas before building",
      zh: "在构建之前验证您的想法",
    },
    gumroadUrl: "https://gumroad.com",
    category: "validation",
  },
  {
    id: "2",
    title: {
      pt: "Template de MVP",
      en: "MVP Template",
      zh: "MVP模板",
    },
    description: {
      pt: "Lance seu MVP em 30 dias",
      en: "Launch your MVP in 30 days",
      zh: "30天内推出您的MVP",
    },
    gumroadUrl: "https://gumroad.com",
    category: "product",
  },
  {
    id: "3",
    title: {
      pt: "Guia de Growth Hacking",
      en: "Growth Hacking Guide",
      zh: "增长黑客指南",
    },
    description: {
      pt: "Estratégias de crescimento para startups",
      en: "Growth strategies for startups",
      zh: "创业公司的增长策略",
    },
    gumroadUrl: "https://gumroad.com",
    category: "growth",
  },
];

export const studyTopics: StudyTopic[] = [
  {
    id: "1",
    title: {
      pt: "Inteligência Artificial",
      en: "Artificial Intelligence",
      zh: "人工智能",
    },
    description: {
      pt: "LLMs, RAG, e aplicações práticas",
      en: "LLMs, RAG, and practical applications",
      zh: "LLMs、RAG和实际应用",
    },
    status: "current",
    icon: "Brain",
  },
  {
    id: "2",
    title: {
      pt: "Mandarim",
      en: "Mandarin Chinese",
      zh: "普通话",
    },
    description: {
      pt: "HSK 4 em progresso",
      en: "HSK 4 in progress",
      zh: "HSK 4进行中",
    },
    status: "current",
    icon: "Languages",
  },
  {
    id: "3",
    title: {
      pt: "Product-Led Growth",
      en: "Product-Led Growth",
      zh: "产品驱动增长",
    },
    description: {
      pt: "Crescimento orientado por produto",
      en: "Product-driven growth strategies",
      zh: "产品驱动的增长策略",
    },
    status: "current",
    icon: "TrendingUp",
  },
];
