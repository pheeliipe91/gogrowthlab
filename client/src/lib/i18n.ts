export type Language = "pt" | "en" | "zh";

export const translations = {
  pt: {
    nav: {
      experiments: "Experimentos",
      experience: "Experiência",
      frameworks: "Recursos",
      contact: "Contato",
    },
    hero: {
      location: "Kunshan, Jiangsu, China",
      name: "Phelipe Xavier",
      tagline1: "Empreendedor",
      tagline1Italic: "serial",
      tagline2: "transformado em",
      tagline2Italic: "fundador.",
      tagline3: "Construindo o",
      tagline3Italic: "gogrowth",
      tagline3End: "lab.",
      bio: "Sou um empreendedor serial com background em startups — de aceleradoras a grandes empresas de tecnologia. Já mentorei fundadores no Google, BTG e Braskem Labs.",
      bio2: "Atualmente, moro na China e construo experimentos de negócios. Também escrevo frameworks para empreendedores e compartilho aprendizados no meu newsletter.",
      cta: "Saiba mais",
    },
    experiments: {
      title: "EXPERIMENTOS",
      subtitle: "Ventures & Projetos",
      status: {
        active: "Ativo",
        building: "Construindo",
        idea: "Ideia",
      },
    },
    experience: {
      title: "EXPERIÊNCIA",
      subtitle: "Mentoria & Consultoria",
      present: "Presente",
    },
    frameworks: {
      title: "RECURSOS",
      subtitle: "Frameworks gratuitos para empreendedores",
      download: "Baixar",
      comingSoon: "Em breve",
      via: "via Gumroad",
    },
    newsletter: {
      title: "NEWSLETTER",
      subtitle: "Receba insights sobre startups, China e empreendedorismo",
      placeholder: "seu@email.com",
      button: "Inscrever",
      success: "Inscrito com sucesso!",
      error: "Erro ao inscrever. Tente novamente.",
    },
    footer: {
      copyright: "Todos os direitos reservados",
      lab: "gogrowth lab",
      from: "Kunshan, China",
    },
  },
  en: {
    nav: {
      experiments: "Experiments",
      experience: "Experience",
      frameworks: "Resources",
      contact: "Contact",
    },
    hero: {
      location: "Kunshan, Jiangsu, China",
      name: "Phelipe Xavier",
      tagline1: "Serial",
      tagline1Italic: "entrepreneur",
      tagline2: "turned",
      tagline2Italic: "founder.",
      tagline3: "Building the",
      tagline3Italic: "gogrowth",
      tagline3End: "lab.",
      bio: "I'm a serial entrepreneur with a background in startups — from accelerators to large tech companies. I've mentored founders at Google, BTG, and Braskem Labs.",
      bio2: "Currently, I live in China building business experiments. I also write frameworks for entrepreneurs and share learnings in my newsletter.",
      cta: "Learn more",
    },
    experiments: {
      title: "EXPERIMENTS",
      subtitle: "Ventures & Projects",
      status: {
        active: "Active",
        building: "Building",
        idea: "Idea",
      },
    },
    experience: {
      title: "EXPERIENCE",
      subtitle: "Mentoring & Consulting",
      present: "Present",
    },
    frameworks: {
      title: "RESOURCES",
      subtitle: "Free frameworks for entrepreneurs",
      download: "Download",
      comingSoon: "Coming soon",
      via: "via Gumroad",
    },
    newsletter: {
      title: "NEWSLETTER",
      subtitle: "Get insights on startups, China, and entrepreneurship",
      placeholder: "your@email.com",
      button: "Subscribe",
      success: "Successfully subscribed!",
      error: "Error subscribing. Try again.",
    },
    footer: {
      copyright: "All rights reserved",
      lab: "gogrowth lab",
      from: "Kunshan, China",
    },
  },
  zh: {
    nav: {
      experiments: "实验项目",
      experience: "经验",
      frameworks: "资源",
      contact: "联系",
    },
    hero: {
      location: "中国江苏省昆山市",
      name: "Phelipe Xavier",
      tagline1: "连续",
      tagline1Italic: "创业者",
      tagline2: "转型为",
      tagline2Italic: "创始人。",
      tagline3: "正在建设",
      tagline3Italic: "gogrowth",
      tagline3End: "实验室。",
      bio: "我是一名连续创业者，拥有创业公司背景——从加速器到大型科技公司。我曾在谷歌、BTG和布拉斯科实验室指导创始人。",
      bio2: "目前，我住在中国，从事商业实验。我也为企业家编写框架，并在我的通讯中分享学习心得。",
      cta: "了解更多",
    },
    experiments: {
      title: "实验项目",
      subtitle: "创业 & 项目",
      status: {
        active: "活跃",
        building: "构建中",
        idea: "想法",
      },
    },
    experience: {
      title: "经验",
      subtitle: "导师 & 顾问",
      present: "至今",
    },
    frameworks: {
      title: "资源",
      subtitle: "为企业家提供的免费框架",
      download: "下载",
      comingSoon: "即将推出",
      via: "通过 Gumroad",
    },
    newsletter: {
      title: "通讯",
      subtitle: "获取关于创业、中国和创业精神的见解",
      placeholder: "your@email.com",
      button: "订阅",
      success: "订阅成功！",
      error: "订阅出错，请重试。",
    },
    footer: {
      copyright: "版权所有",
      lab: "gogrowth 实验室",
      from: "中国昆山",
    },
  },
} as const;

export function getTranslation(lang: Language) {
  return translations[lang];
}
