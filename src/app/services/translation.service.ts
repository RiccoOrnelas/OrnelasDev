import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { GalleryItem } from '../models/gallery-item.model';

export type Lang = 'pt' | 'en' | 'es';

// ── Textos gerais ──────────────────────────────────────────────
const STRINGS: Record<Lang, Record<string, any>> = {
  pt: {
    nav: { home: 'Home', contact: 'Contato', about: 'Sobre mim', cv: 'CV' },
    home: {
      role: 'Desenvolvedor Full Stack',
      aboutTitle: 'Sobre mim',
      bio: `Sou Henrique Ornelas, desenvolvedor fullstack com cerca de 4 anos de experiência construindo produtos de ponta a ponta — de interfaces responsivas em React e Next.js a APIs robustas em Node.js e Python.
Sou apaixonado por código que resolve problemas reais. Pra mim, a parte mais interessante de programar não é a stack em si — é o que ela destrava: um fluxo que ficou mais simples, um time que entrega mais rápido, um produto que cresce. Por isso gosto de entender o problema antes de escrever a primeira linha, e gosto ainda mais quando consigo acompanhar a solução até ela estar rodando em produção.
Hoje busco oportunidades remotas com times internacionais, contribuindo com código, ideias e as perguntas certas pra destravar entregas. Se você tem um projeto, um time ou uma ideia em mente — vamos conversar e construir algo incrível juntos.`},
    sections: {
      technologies: '⚡ Stacks',
      projects: '🚀 Projetos',
      automations: '🤖 Automações',
      automationsSubtitle: 'Bots e scripts que automatizam tarefas do dia a dia'
    },
    common: {
      comingSoon: '⏳ Em Breve',
      online: '🟢 Online',
      viewDetails: '🔍 Ver detalhes',
      visit: '→ Visitar',
      github: '⌥ GitHub'
    },
    about: {
      title: 'Sobre mim',
      p1: `Minha história com tecnologia começou cedo, mas deu uma volta longa antes de virar carreira. Comecei a trabalhar aos 17 como vendedor — tímido, com dificuldade pra me expressar, mas com vontade de aprender que compensava o resto. O varejo me deu, ao longo de 6 anos, o que faculdade nenhuma daria: comunicação, negociação, e o privilégio de liderar times ainda jovem.`,
      p2: `Em paralelo, me formei em Gestão de TI aos 21. O mercado dev não estava receptivo a novatos na época, então segui no comércio até 2017, quando dei início a uma jornada no empreendedorismo com a RT Polimento Técnico, oferecendo soluções em estética automotiva em São Paulo. Foram anos que me ensinaram resiliência, foco em resolução de problemas, e a noção clara de que processo bom é o que entrega valor pro cliente — não o que parece bonito por dentro.`,
      p3: `Em 2021 meu coração se inclinou pra programação, e desde então não parei mais. Hoje, com cerca de 4 anos como desenvolvedor fullstack, trabalho com React e Next.js no front, Node.js e Python no back, e construo produtos de ponta a ponta. Trago pro código tudo que aprendi antes: o vendedor que escuta o cliente antes de propor, o líder que pensa em time, o empreendedor que entende que software existe pra resolver algo real.`,
      p4: `Minha meta é simples — ser um desenvolvedor cada vez melhor, aplicando melhoria contínua não só nas aplicações, mas na vida. Acredito que tudo coopera pro bem, e que cada acerto e erro até aqui formou o profissional que sou hoje.`,
      p5: `Fora do código, gosto de treinar, ler e escutar podcasts sobre assuntos que me edificam espiritual e pessoalmente. Sou violonista amador e surfista iniciante — duas coisas que me lembram que melhorar leva tempo, e que tudo bem.`
    },
    footer: { message: 'Tecnologia com Propósito' }
  },

  en: {
    nav: { home: 'Home', contact: 'Contact', about: 'About me', cv: 'CV' },
    home: {
      role: 'Full Stack Developer',
      aboutTitle: 'About me',
      bio: `A Full Stack Developer! Passionate about programming, delivering end-to-end software development solutions. From responsive pages using leading Frameworks like Angular and ReactJS with JavaScript, to Back-End APIs using NodeJS or Python!    My mission is to help people and companies create innovative solutions through technology — let's build something incredible together. It would be a great joy to contribute to your team or project!`
    },
    sections: {
      technologies: '⚡ Stacks',
      projects: '🚀 My Projects',
      automations: '🤖 Automations',
      automationsSubtitle: 'Bots and scripts that automate day-to-day tasks'
    },
    common: {
      comingSoon: '⏳ Coming Soon',
      online: '🟢 Online',
      viewDetails: '🔍 View details',
      visit: '→ Visit',
      github: '⌥ GitHub'
    },
    about: {
      title: 'About me',
      p1: `My journey with technology started early, but took a long detour before becoming a career. I started working at 17 as a salesperson — shy, struggling to express myself, but with a hunger to learn that made up for everything else. Over 6 years in retail, I gained what no college could give me: communication, negotiation, and the privilege of leading teams while still young.`,
      p2: `In parallel, I graduated in IT Management at 21. The dev market wasn't welcoming to newcomers back then, so I stayed in commerce until 2017, when I started an entrepreneurial journey with RT Polimento Técnico, offering automotive detailing solutions in São Paulo. Those years taught me resilience, problem-solving focus, and the clear understanding that a good process is one that delivers value to the client — not one that just looks good on the inside.`,
      p3: `In 2021 my heart turned to programming, and I haven't stopped since. Today, with around 4 years as a fullstack developer, I work with React and Next.js on the front-end, Node.js and Python on the back-end, and I build products end-to-end. I bring to my code everything I learned before: the salesperson who listens before proposing, the leader who thinks as a team, the entrepreneur who understands that software exists to solve something real.`,
      p4: `My goal is simple — to be an ever-better developer, applying continuous improvement not just to applications, but to life. I believe everything works together for good, and that every success and mistake up to now has shaped the professional I am today.`,
      p5: `Outside of code, I enjoy working out, reading, and listening to podcasts on topics that build me up spiritually and personally. I'm an amateur guitarist and beginner surfer — two things that remind me that improvement takes time, and that's okay.`
    },
    footer: { message: 'Technology with Purpose' }
  },

  es: {
    nav: { home: 'Inicio', contact: 'Contacto', about: 'Sobre mí', cv: 'CV' },
    home: {
      role: 'Desarrollador Full Stack',
      aboutTitle: 'Sobre mí',
      bio: `¡Un Desarrollador Full Stack! Apasionado por la programación, ofreciendo soluciones de desarrollo de software de extremo a extremo. Desde páginas responsivas usando los principales Frameworks del mercado como Angular y ReactJS con JavaScript, hasta APIs en el Back-End usando NodeJS o Python!    Mi misión es ayudar a personas y empresas a crear soluciones innovadoras a través de la tecnología — construyamos algo increíble juntos. Para mí sería una gran alegría contribuir con tu equipo o proyecto.`
    },
    sections: {
      technologies: '⚡ Stacks',
      projects: '🚀 Mis Proyectos',
      automations: '🤖 Automatizaciones',
      automationsSubtitle: 'Bots y scripts que automatizan tareas del día a día'
    },
    common: {
      comingSoon: '⏳ Próximamente',
      online: '🟢 Online',
      viewDetails: '🔍 Ver detalles',
      visit: '→ Visitar',
      github: '⌥ GitHub'
    },
    about: {
      title: 'Sobre mí',
      p1: `Mi historia con la tecnología comenzó temprano, pero dio una larga vuelta antes de convertirse en carrera. Empecé a trabajar a los 17 como vendedor — tímido, con dificultad para expresarme, pero con ganas de aprender que compensaban lo demás. El comercio me dio, a lo largo de 6 años, lo que ninguna universidad daría: comunicación, negociación, y el privilegio de liderar equipos siendo aún joven.`,
      p2: `En paralelo, me gradué en Gestión de TI a los 21. El mercado dev no era receptivo con los novatos en esa época, así que seguí en el comercio hasta 2017, cuando inicié un emprendimiento con RT Polimento Técnico, ofreciendo soluciones de estética automotriz en São Paulo. Fueron años que me enseñaron resiliencia, enfoque en la resolución de problemas, y la noción clara de que un buen proceso es el que entrega valor al cliente — no el que parece bonito por dentro.`,
      p3: `En 2021 mi corazón se inclinó hacia la programación, y desde entonces no paré. Hoy, con cerca de 4 años como desarrollador fullstack, trabajo con React y Next.js en el front-end, Node.js y Python en el back-end, y construyo productos de extremo a extremo. Traigo al código todo lo que aprendí antes: el vendedor que escucha al cliente antes de proponer, el líder que piensa en equipo, el emprendedor que entiende que el software existe para resolver algo real.`,
      p4: `Mi meta es simple — ser un desarrollador cada vez mejor, aplicando la mejora continua no solo en las aplicaciones, sino en la vida. Creo que todo coopera para bien, y que cada acierto y error hasta aquí formó al profesional que soy hoy.`,
      p5: `Fuera del código, me gusta entrenar, leer y escuchar podcasts sobre temas que me edifican espiritual y personalmente. Soy guitarrista aficionado y surfista principiante — dos cosas que me recuerdan que mejorar lleva tiempo, y que está bien.`
    },
    footer: { message: 'Tecnología con Propósito' }
  }
};

// ── Dados de Projetos por idioma ───────────────────────────────
const PROJECTS: Record<Lang, GalleryItem[]> = {
  pt: [
    {
      title: 'Bible is Open',
      description: 'Uma aplicação no estilo de blog para compartilhar reflexões bíblicas. Desenvolvida com Angular no front-end e NodeJS no back-end, com banco de dados para armazenar os conteúdos publicados. Projeto em fase final de produção.',
      image: 'assets/bibleisopen.png',
      tags: ['Angular', 'NodeJS'],
      comingSoon: true
    },
    {
      title: 'RT Polimento Técnico',
      description: 'Site desenvolvido com foco em SEO para um negócio de estética automotiva delivery. Otimizado para ranqueamento orgânico nos mecanismos de busca, com layout responsivo e informações completas sobre os serviços.',
      image: 'assets/rtAsset.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
      demoUrl: 'https://www.rtpolimentotecnicodelivery.com.br/'
    },
    {
      title: 'Tela de Cadastro',
      description: 'Micro solução de tela de cadastro com pré-validação de dados em tempo real. Verifica campos como e-mail e senha antes do envio, proporcionando uma melhor experiência ao usuário e reduzindo erros no formulário.',
      image: 'assets/Tela de Cadastro.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://riccoornelas.github.io/Validador-de-dados/'
    },
    {
      title: 'Em breve um novo Projeto',
      description: 'Novos projetos estão sendo desenvolvidos. Fique atento às atualizações!',
      image: 'assets/Carimbo-em-Breve.png',
      comingSoon: true
    }
  ],

  en: [
    {
      title: 'Bible is Open',
      description: 'A blog-style application for sharing biblical reflections. Built with Angular on the front-end and NodeJS on the back-end, with a database to store published content. Project in final production phase.',
      image: 'assets/bibleisopen.png',
      tags: ['Angular', 'NodeJS'],
      comingSoon: true
    },
    {
      title: 'RT Technical Polishing',
      description: 'Website developed with an SEO focus for an automotive detailing delivery business. Optimized for organic ranking on search engines, with a responsive layout and complete information about the services offered.',
      image: 'assets/rtAsset.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
      demoUrl: 'https://www.rtpolimentotecnicodelivery.com.br/'
    },
    {
      title: 'Registration Form',
      description: 'Micro solution for a registration form with real-time data pre-validation. Validates fields like email and password before submission, providing a better user experience and reducing form errors.',
      image: 'assets/Tela de Cadastro.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://riccoornelas.github.io/Validador-de-dados/'
    },
    {
      title: 'Coming soon...',
      description: 'New projects are being developed. Stay tuned for updates!',
      image: 'assets/Carimbo-em-Breve.png',
      comingSoon: true
    }
  ],

  es: [
    {
      title: 'Bible is Open',
      description: 'Una aplicación estilo blog para compartir reflexiones bíblicas. Desarrollada con Angular en el front-end y NodeJS en el back-end, con base de datos para almacenar el contenido publicado. Proyecto en fase final de producción.',
      image: 'assets/bibleisopen.png',
      tags: ['Angular', 'NodeJS'],
      comingSoon: true
    },
    {
      title: 'RT Pulido Técnico',
      description: 'Sitio web desarrollado con enfoque en SEO para un negocio de estética automotriz delivery. Optimizado para el posicionamiento orgánico en los motores de búsqueda, con diseño responsivo e información completa sobre los servicios.',
      image: 'assets/rtAsset.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
      demoUrl: 'https://www.rtpolimentotecnicodelivery.com.br/'
    },
    {
      title: 'Formulario de Registro',
      description: 'Micro solución de formulario de registro con pre-validación de datos en tiempo real. Verifica campos como email y contraseña antes del envío, proporcionando una mejor experiencia al usuario y reduciendo errores.',
      image: 'assets/Tela de Cadastro.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://riccoornelas.github.io/Validador-de-dados/'
    },
    {
      title: 'Próximamente...',
      description: '¡Nuevos proyectos están en desarrollo. ¡Estén atentos a las novedades!',
      image: 'assets/Carimbo-em-Breve.png',
      comingSoon: true
    }
  ]
};

// ── Dados de Automações por idioma ─────────────────────────────
const AUTOMATIONS: Record<Lang, GalleryItem[]> = {
  pt: [
    {
      title: 'Daily Planner Bot',
      description: 'Bot pessoal de produtividade que lê tarefas semanais de uma planilha Excel e envia um briefing diário formatado no Telegram às 7h da manhã (horário de Brasília). Organiza as tarefas por categoria com emojis e roda 100% gratuito via GitHub Actions — sem servidor.',
      image: 'assets/brainOrganization.png',
      tags: ['Python', 'Telegram API', 'GitHub Actions', 'openpyxl'],
      githubUrl: 'https://github.com/RiccoOrnelas/brainOrganization'
    },
    {
      title: 'HackerNews Daily Bot',
      description: 'Bot que coleta e entrega diariamente as 5 principais histórias do Hacker News + 15 vagas de emprego diretamente no Telegram às 6h30 (horário de Brasília). Sem algoritmos, sem feeds curados — só o que importa. Funciona via GitHub Actions ou Railway, sem custo de servidor.',
      image: 'assets/dailynews.png',
      tags: ['Node.js', 'Telegram API', 'GitHub Actions', 'axios'],
      githubUrl: 'https://github.com/RiccoOrnelas/hackerNews_telegram_automation'
    },
    {
      title: 'Em breve...',
      description: 'Novas automações estão sendo desenvolvidas. Fique atento às novidades!',
      image: 'assets/Carimbo-em-Breve.png',
      comingSoon: true
    }
  ],

  en: [
    {
      title: 'Daily Planner Bot',
      description: 'Personal productivity bot that reads weekly tasks from an Excel spreadsheet and sends a formatted daily briefing on Telegram at 7am (Brasília time). Organizes tasks by category with emojis and runs 100% free via GitHub Actions — no server needed.',
      image: 'assets/brainOrganization.png',
      tags: ['Python', 'Telegram API', 'GitHub Actions', 'openpyxl'],
      githubUrl: 'https://github.com/RiccoOrnelas/brainOrganization'
    },
    {
      title: 'HackerNews Daily Bot',
      description: 'Bot that daily collects and delivers the top 5 Hacker News stories + 15 job listings directly on Telegram at 6:30am (Brasília time). No algorithms, no curated feeds — just what matters. Works via GitHub Actions or Railway with no server cost.',
      image: 'assets/dailynews.png',
      tags: ['Node.js', 'Telegram API', 'GitHub Actions', 'axios'],
      githubUrl: 'https://github.com/RiccoOrnelas/hackerNews_telegram_automation'
    },
    {
      title: 'Coming soon...',
      description: 'New automations are being developed. Stay tuned for updates!',
      image: 'assets/Carimbo-em-Breve.png',
      comingSoon: true
    }
  ],

  es: [
    {
      title: 'Daily Planner Bot',
      description: 'Bot personal de productividad que lee tareas semanales de una hoja de cálculo Excel y envía un briefing diario formateado en Telegram a las 7am (hora de Brasilia). Organiza las tareas por categoría con emojis y funciona 100% gratis vía GitHub Actions — sin servidor.',
      image: 'assets/brainOrganization.png',
      tags: ['Python', 'Telegram API', 'GitHub Actions', 'openpyxl'],
      githubUrl: 'https://github.com/RiccoOrnelas/brainOrganization'
    },
    {
      title: 'HackerNews Daily Bot',
      description: 'Bot que recopila y entrega diariamente las 5 principales historias de Hacker News + 15 ofertas de empleo en Telegram a las 6:30am (hora de Brasilia). Sin algoritmos, sin feeds curados — solo lo que importa. Funciona vía GitHub Actions o Railway sin costo de servidor.',
      image: 'assets/dailynews.png',
      tags: ['Node.js', 'Telegram API', 'GitHub Actions', 'axios'],
      githubUrl: 'https://github.com/RiccoOrnelas/hackerNews_telegram_automation'
    },
    {
      title: 'Próximamente...',
      description: '¡Nuevas automatizaciones están en desarrollo. ¡Estén atentos!',
      image: 'assets/Carimbo-em-Breve.png',
      comingSoon: true
    }
  ]
};

// ── Serviço ────────────────────────────────────────────────────
@Injectable({ providedIn: 'root' })
export class TranslationService {
  private _lang = new BehaviorSubject<Lang>('pt');
  readonly lang$ = this._lang.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang') as Lang | null;
      if (saved && ['pt', 'en', 'es'].includes(saved)) {
        this._lang.next(saved);
      }
    }
  }

  get currentLang(): Lang {
    return this._lang.value;
  }

  setLang(lang: Lang): void {
    this._lang.next(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }

  /** Resolve chave com notação de ponto, ex: 'common.comingSoon' */
  t(key: string): string {
    const keys = key.split('.');
    let result: any = STRINGS[this._lang.value];
    for (const k of keys) {
      result = result?.[k];
    }
    return typeof result === 'string' ? result : key;
  }

  getProjects(): GalleryItem[] {
    return PROJECTS[this._lang.value];
  }

  getAutomations(): GalleryItem[] {
    return AUTOMATIONS[this._lang.value];
  }
}
