export const profile = {
  name: "Flávia Fogaça",
  role: "Desenvolvedora Full-Stack",
  tagline:
    "Uso a tecnologia para resolver os seus problemas e tirar do papel projetos que trazem impacto real, com foco total nas necessidades do usuário.",
  location: "Dourados, MS",
  cvUrl: "" as string,
  email: "flaviamariafogaca@gmail.com",
  whatsapp: "https://wa.me/5567996850156",
  linkedin: "https://www.linkedin.com/in/flaviafogaca",
  github: "https://github.com/flaviafogaca",
};

export const about = {
  paragraphs: [
    "Sou Engenheira Ambiental e atuo há mais de cinco anos com gestão de projetos, análise de dados e documentação técnica. Hoje estou cursando uma segunda graduação, em Tecnologia da Informação, para migrar de vez para o desenvolvimento de software.",
    "Não estou começando do zero. Já sei lidar com prazo, requisito, norma e responsabilidade por entrega real, e isso ajuda bastante na hora de aprender a programar. O que mudou foi a ferramenta: hoje trabalho com código, front end, back end e banco de dados no lugar de relatório e planilha.",
    "Gosto de tecnologia que resolve problema de verdade, pensada para quem vai usar. Antes de escolher qualquer ferramenta, procuro entender bem o problema e o usuário por trás dele. Também uso IA generativa no processo, mas como apoio para acelerar o trabalho, não como substituto do entendimento do que estou fazendo.",
  ],
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Front-end",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "React", "SEO"],
  },
  {
    title: "Back-end & Dados",
    items: ["Python", "Flask", "Node.js", "Java", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Design & Prototipagem",
    items: ["Figma", "UI/UX"],
  },
  {
    title: "Ferramentas & IA",
    items: ["Git", "GitHub", "Cloudflare Pages", "pywebview", "Android Studio", "ChatGPT", "Lovable", "Claude Code"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "Concluído" | "Em desenvolvimento" | "Privado";
  category: string;
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Menu de links da Thaiane Ferreira",
    description:
      "Página de links, no estilo link na bio, para a Thaiane Ferreira, consultora Natura e Avon. Reúne em um só lugar as lojas, produtos a pronta entrega, presentes, pedidos, atendimento pelo WhatsApp e os serviços de papelaria, em um layout responsivo.",
    tags: ["HTML", "CSS", "JavaScript", "Cloudflare Pages"],
    status: "Concluído",
    category: "Projeto real",
    image: "/projects/menu-thaiane.png",
    demoUrl: "https://thaianeferreira.pages.dev/",
  },
  {
    title: "Landing Page do Studio Maria Arte",
    description:
      "Landing page para um estúdio de balé clássico de Dourados (MS). Apresenta o método, as professoras, as turmas por fase, o espetáculo de fim de ano e os depoimentos, com contato direto pelo WhatsApp para agendar aula experimental e consultar vagas.",
    tags: ["HTML", "CSS", "JavaScript", "SEO"],
    status: "Em desenvolvimento",
    category: "Projeto real",
    image: "/projects/maria-arte.png",
    demoUrl: "https://studiomariaarte.pages.dev/",
  },
  {
    title: "Sistema de Controle de Biblioteca de Cristópolis",
    description:
      "Sistema de gestão de acervo e empréstimos para a Biblioteca Municipal de Cristópolis (BA), desenvolvido em dupla como Projeto Integrador (UFMS) ao longo de três semestres: levantamento de requisitos, desenvolvimento e testes.",
    tags: ["Python", "Flask", "SQLite", "pywebview", "HTML/CSS/JS"],
    status: "Em desenvolvimento",
    category: "Projeto integrador",
    image: "/projects/biblioteca.png",
    codeUrl: "https://github.com/pi-ti-flavia-antonio/biblioteca-cristopolis",
  },
];

export type ExperienceItem = {
  role: string;
  place: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Engenheira Ambiental",
    place: "Universidade Estadual de Mato Grosso do Sul (UEMS)",
    period: "2019 até o momento",
    bullets: [
      "Coordenação de fluxos de trabalho em 15 unidades universitárias, com metodologias de organização, controle de cronogramas e gestão de stakeholders.",
      "Levantamento de requisitos e desenvolvimento de projetos técnicos com foco em análise de dados para otimização de recursos e conformidade normativa.",
      "Redação de relatórios técnicos e documentos para órgãos reguladores (IMASUL).",
      "Execução de auditorias e automonitoramento para garantia de conformidade com padrões técnicos.",
      "Liderança de ações de conscientização e organização de eventos, articulando áreas técnicas e público acadêmico.",
    ],
  },
  {
    role: "Estagiária de Gerência de Meio Ambiente",
    place: "SANESUL",
    period: "ago 2017 a nov 2017",
    bullets: [
      "Apoio técnico aos processos de licenciamento ambiental, incluindo elaboração de relatórios para o CAR e verificação de conformidade documental.",
      "Auxílio na emissão de outorgas de direito de uso de recursos hídricos e suporte às rotinas de automonitoramento ambiental.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  place: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Tecnologia da Informação (em andamento)",
    place: "Universidade Federal de Mato Grosso do Sul (UFMS)",
    period: "2024 a 2026",
  },
  {
    degree: "Engenharia Ambiental",
    place: "Universidade Estadual de Mato Grosso do Sul (UEMS)",
    period: "2013 a 2017",
  },
];
