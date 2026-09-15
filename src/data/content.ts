export const profile = {
  name: "Flávia Fogaça",
  role: "Desenvolvedora Full Stack em formação",
  tagline:
    "Engenheira Ambiental, em transição estruturada para desenvolvimento de software.",
  location: "Dourados, MS",
  email: "flaviamariafogaca@gmail.com",
  linkedin: "https://www.linkedin.com/in/flaviafogaca",
  github: "https://github.com/flaviafogaca",
};

export const about = {
  paragraphs: [
    "Sou Engenheira Ambiental com mais de cinco anos de experiência profissional em gestão de projetos, análise de dados e documentação técnica. Hoje estou construindo uma segunda especialização, em Tecnologia da Informação, unindo o raciocínio analítico da engenharia ao desenvolvimento de software.",
    "Essa trajetória não é um recomeço — é uma continuidade. Já sei lidar com problemas reais, requisitos, prazos, conformidade e responsabilidade por entregas. O que estou construindo agora é a capacidade técnica para transformar esse tipo de problema em soluções digitais, com projetos práticos em front-end, back-end e integração com bancos de dados.",
    "Quero usar tecnologia para gerar impacto real — sempre com foco em quem vai usar a solução no dia a dia. Por isso, antes de escolher a ferramenta, procuro entender o problema e o cliente por trás dele. Uso IA generativa de forma consciente: como acelerador do desenvolvimento, não como substituto do entendimento.",
  ],
  facts: [
    { label: "Anos de experiência profissional", value: "5+" },
    { label: "Graduação em TI (UFMS)", value: "2024–2026" },
    { label: "Projetos práticos em desenvolvimento", value: "3" },
  ],
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Front-end",
    items: ["JavaScript", "HTML5", "CSS3", "React", "TypeScript (em estudo)"],
  },
  {
    title: "Back-end & Dados",
    items: ["Python", "Java", "Node.js (em estudo)", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Design & Prototipagem",
    items: ["Figma (alta fidelidade)", "UI/UX"],
  },
  {
    title: "Ferramentas & IA",
    items: ["Git", "GitHub", "Android Studio", "ChatGPT", "Lovable", "Claude Code"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "Live" | "Em desenvolvimento" | "Privado";
  demoUrl?: string;
  codeUrl?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Landing Page — Desafio Furia",
    description:
      "Landing page full stack responsiva, integrada a um banco de dados para captura de leads e com automação de e-mail marketing. Prototipada no Figma antes da implementação.",
    tags: ["HTML", "CSS", "JavaScript", "Banco de Dados", "Figma"],
    status: "Live",
    demoUrl: "https://flaviafogaca.github.io/desafio-lp/",
    codeUrl: "https://github.com/flaviafogaca/desafio-lp",
  },
  {
    title: "Sistema de Controle de Biblioteca — Cristópolis",
    description:
      "Sistema de gestão de acervo e empréstimos para a Biblioteca Municipal de Cristópolis (BA), desenvolvido em dupla como Projeto Integrador (UFMS) ao longo de três semestres: levantamento de requisitos, desenvolvimento e testes.",
    tags: ["Python", "Flask", "SQLite", "pywebview", "HTML/CSS/JS"],
    status: "Em desenvolvimento",
    codeUrl: "https://github.com/pi-ti-flavia-antonio/biblioteca-cristopolis",
  },
  {
    title: "Landing Page Athomic — Projeto de Extensão (NalaMinds)",
    description:
      "Prototipagem UI/UX no Figma e desenvolvimento assistido por IA generativa (Lovable), em colaboração direta com a empresa parceira NalaMinds, simulando um ambiente real de entrega de software.",
    tags: ["Figma", "Lovable", "IA Generativa", "UI/UX"],
    status: "Privado",
    note: "Projeto corporativo — código e demo não são públicos.",
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
    place: "Universidade Estadual de Mato Grosso do Sul — UEMS",
    period: "2019 — atualmente",
    bullets: [
      "Coordenação de fluxos de trabalho em 15 unidades universitárias, com metodologias de organização, controle de cronogramas e gestão de stakeholders.",
      "Levantamento de requisitos e desenvolvimento de projetos técnicos com foco em análise de dados para otimização de recursos e conformidade normativa.",
      "Redação de relatórios técnicos e documentos para órgãos reguladores (IMASUL).",
      "Execução de auditorias e automonitoramento para garantia de conformidade com padrões técnicos.",
      "Liderança de ações de conscientização e organização de eventos, articulando áreas técnicas e público acadêmico.",
    ],
  },
  {
    role: "Estagiária — Gerência de Meio Ambiente",
    place: "SANESUL",
    period: "ago 2017 — nov 2017",
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
    place: "Universidade Federal de Mato Grosso do Sul — UFMS",
    period: "2024 — 2026",
  },
  {
    degree: "Engenharia Ambiental",
    place: "Universidade Estadual de Mato Grosso do Sul — UEMS",
    period: "2013 — 2017",
  },
];

export const languages = ["Inglês Técnico (leitura e documentação)"];
