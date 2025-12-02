export type Language = "pt" | "en" | "zh";

export const translations = {
  pt: {
    nav: {
      startups: "Startups",
      experience: "Experiência",
      frameworks: "Frameworks",
      studying: "Estudando",
      contact: "Contato",
    },
    hero: {
      location: "Kunshan, Jiangsu, China",
      role: "Solo Empreendedor",
      poem: {
        line1: "O pensamento flerta com o abismo",
        line2: "Às vezes eu me jogo a pensar",
        line3: "Viver é",
        line3Highlight: "confiar",
        line3End: "no vento",
        line4: "Antes de",
        line4Highlight: "aprender",
        line4End: "a voar",
      },
    },
    startups: {
      title: "Minhas Startups",
      subtitle: "Experimentos & Projetos",
      viewProject: "Visitar",
    },
    companies: {
      title: "Empresas Atendidas",
      subtitle: "Mentoria & Consultoria",
    },
    frameworks: {
      title: "Frameworks",
      subtitle: "Recursos gratuitos para empreendedores",
      download: "Baixar",
      comingSoon: "Em breve",
    },
    studying: {
      title: "O que estou estudando",
      subtitle: "Aprendizado contínuo",
      current: "Estudando agora",
      completed: "Concluído",
      planned: "Planejado",
    },
    newsletter: {
      title: "Fique por dentro",
      subtitle: "Receba novidades sobre meus experimentos e frameworks",
      placeholder: "seu@email.com",
      button: "Inscrever-se",
      success: "Inscrito com sucesso!",
      error: "Erro ao inscrever. Tente novamente.",
    },
    footer: {
      copyright: "Todos os direitos reservados",
      madeWith: "Feito com",
      from: "de Kunshan, China",
    },
  },
  en: {
    nav: {
      startups: "Startups",
      experience: "Experience",
      frameworks: "Frameworks",
      studying: "Studying",
      contact: "Contact",
    },
    hero: {
      location: "Kunshan, Jiangsu, China",
      role: "Solo Entrepreneur",
      poem: {
        line1: "Thought flirts with the abyss",
        line2: "Sometimes I throw myself to think",
        line3: "Living is",
        line3Highlight: "trusting",
        line3End: "the wind",
        line4: "Before",
        line4Highlight: "learning",
        line4End: "to fly",
      },
    },
    startups: {
      title: "My Startups",
      subtitle: "Experiments & Projects",
      viewProject: "Visit",
    },
    companies: {
      title: "Companies Served",
      subtitle: "Mentoring & Consulting",
    },
    frameworks: {
      title: "Frameworks",
      subtitle: "Free resources for entrepreneurs",
      download: "Download",
      comingSoon: "Coming soon",
    },
    studying: {
      title: "What I'm studying",
      subtitle: "Continuous learning",
      current: "Studying now",
      completed: "Completed",
      planned: "Planned",
    },
    newsletter: {
      title: "Stay updated",
      subtitle: "Get news about my experiments and frameworks",
      placeholder: "your@email.com",
      button: "Subscribe",
      success: "Successfully subscribed!",
      error: "Error subscribing. Try again.",
    },
    footer: {
      copyright: "All rights reserved",
      madeWith: "Made with",
      from: "from Kunshan, China",
    },
  },
  zh: {
    nav: {
      startups: "创业项目",
      experience: "经验",
      frameworks: "框架",
      studying: "学习中",
      contact: "联系",
    },
    hero: {
      location: "中国江苏省昆山市",
      role: "独立创业者",
      poem: {
        line1: "思想与深渊调情",
        line2: "有时我纵身思考",
        line3: "生活是",
        line3Highlight: "信任",
        line3End: "风",
        line4: "在学会",
        line4Highlight: "飞翔",
        line4End: "之前",
      },
    },
    startups: {
      title: "我的创业项目",
      subtitle: "实验与项目",
      viewProject: "访问",
    },
    companies: {
      title: "服务过的公司",
      subtitle: "导师与顾问",
    },
    frameworks: {
      title: "框架",
      subtitle: "为企业家提供的免费资源",
      download: "下载",
      comingSoon: "即将推出",
    },
    studying: {
      title: "我正在学习什么",
      subtitle: "持续学习",
      current: "正在学习",
      completed: "已完成",
      planned: "计划中",
    },
    newsletter: {
      title: "保持更新",
      subtitle: "获取关于我的实验和框架的新闻",
      placeholder: "your@email.com",
      button: "订阅",
      success: "订阅成功！",
      error: "订阅出错，请重试。",
    },
    footer: {
      copyright: "版权所有",
      madeWith: "用心制作",
      from: "来自中国昆山",
    },
  },
} as const;

export function getTranslation(lang: Language) {
  return translations[lang];
}
