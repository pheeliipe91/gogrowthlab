// Resend integration for sending transactional emails
import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return {
    apiKey: connectionSettings.settings.api_key, 
    fromEmail: connectionSettings.settings.from_email
  };
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
export async function getResendClient() {
  const { apiKey, fromEmail } = await getCredentials();
  return {
    client: new Resend(apiKey),
    fromEmail
  };
}

// Send newsletter welcome email
export async function sendNewsletterWelcomeEmail(to: string, language: string) {
  try {
    const { client, fromEmail } = await getResendClient();
    
    const subjects: Record<string, string> = {
      pt: "Bem-vindo à newsletter do gogrowth lab!",
      en: "Welcome to the gogrowth lab newsletter!",
      zh: "欢迎订阅 gogrowth lab 通讯！"
    };
    
    const bodies: Record<string, string> = {
      pt: `
        <h2>Olá!</h2>
        <p>Obrigado por se inscrever na newsletter do <strong>gogrowth lab</strong>.</p>
        <p>Você vai receber insights sobre startups, China e empreendedorismo diretamente no seu email.</p>
        <p>Até breve!</p>
        <p>— Phelipe Xavier</p>
      `,
      en: `
        <h2>Hello!</h2>
        <p>Thank you for subscribing to the <strong>gogrowth lab</strong> newsletter.</p>
        <p>You'll receive insights on startups, China, and entrepreneurship directly in your inbox.</p>
        <p>See you soon!</p>
        <p>— Phelipe Xavier</p>
      `,
      zh: `
        <h2>您好！</h2>
        <p>感谢您订阅 <strong>gogrowth lab</strong> 通讯。</p>
        <p>您将直接在邮箱中收到关于创业、中国和创业精神的见解。</p>
        <p>期待与您的交流！</p>
        <p>— Phelipe Xavier</p>
      `
    };

    const result = await client.emails.send({
      from: fromEmail,
      to: [to],
      subject: subjects[language] || subjects.en,
      html: bodies[language] || bodies.en,
    });

    console.log("Newsletter welcome email sent:", result);
    return result;
  } catch (error) {
    console.error("Failed to send newsletter email:", error);
    throw error;
  }
}

// Send mentorship application confirmation email
export async function sendMentorshipConfirmationEmail(
  to: string, 
  name: string,
  language: string = "pt"
) {
  try {
    const { client, fromEmail } = await getResendClient();
    
    const subjects: Record<string, string> = {
      pt: "Recebemos sua aplicação para o Projeto Mergulho!",
      en: "We received your application for Project Dive!",
      zh: "我们收到了您的深潜项目申请！"
    };
    
    const bodies: Record<string, string> = {
      pt: `
        <h2>Olá, ${name}!</h2>
        <p>Recebi sua aplicação para o <strong>Projeto Mergulho</strong> e estou muito feliz com seu interesse!</p>
        <p>Vou analisar seu perfil com carinho e entrarei em contato em breve para os próximos passos.</p>
        <p>Enquanto isso, fique à vontade para me acompanhar no <a href="https://www.linkedin.com/in/phelipexavier/">LinkedIn</a>.</p>
        <p>Até breve!</p>
        <p>— Phelipe Xavier</p>
      `,
      en: `
        <h2>Hello, ${name}!</h2>
        <p>I received your application for <strong>Project Dive</strong> and I'm very happy about your interest!</p>
        <p>I'll carefully review your profile and will be in touch soon about the next steps.</p>
        <p>In the meantime, feel free to follow me on <a href="https://www.linkedin.com/in/phelipexavier/">LinkedIn</a>.</p>
        <p>See you soon!</p>
        <p>— Phelipe Xavier</p>
      `,
      zh: `
        <h2>您好，${name}！</h2>
        <p>我收到了您的<strong>深潜项目</strong>申请，非常高兴您的兴趣！</p>
        <p>我会仔细审核您的资料，并尽快与您联系下一步事宜。</p>
        <p>在此期间，欢迎在 <a href="https://www.linkedin.com/in/phelipexavier/">LinkedIn</a> 上关注我。</p>
        <p>期待与您的交流！</p>
        <p>— Phelipe Xavier</p>
      `
    };

    const result = await client.emails.send({
      from: fromEmail,
      to: [to],
      subject: subjects[language] || subjects.pt,
      html: bodies[language] || bodies.pt,
    });

    console.log("Mentorship confirmation email sent:", result);
    return result;
  } catch (error) {
    console.error("Failed to send mentorship email:", error);
    throw error;
  }
}

// Send notification to Phelipe about new mentorship application
export async function sendMentorshipNotificationEmail(application: {
  name: string;
  email: string;
  linkedin: string;
  currentRole: string;
  experience: string;
  challenge: string;
  expectations: string;
  referral: string;
}) {
  try {
    const { client, fromEmail } = await getResendClient();
    
    const result = await client.emails.send({
      from: fromEmail,
      to: [fromEmail], // Send to yourself
      subject: `Nova aplicação para Projeto Mergulho: ${application.name}`,
      html: `
        <h2>Nova aplicação para o Projeto Mergulho!</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Nome:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${application.name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${application.email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>LinkedIn:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="${application.linkedin}">${application.linkedin}</a></td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Cargo:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${application.currentRole}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Experiência:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${application.experience}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Desafio:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${application.challenge}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Expectativas:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${application.expectations}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Referência:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${application.referral}</td></tr>
        </table>
      `,
    });

    console.log("Mentorship notification email sent:", result);
    return result;
  } catch (error) {
    console.error("Failed to send notification email:", error);
    throw error;
  }
}
