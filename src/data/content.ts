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
    title: "Página de Vendas da Thaiane Ferreira",
    description:
      "Página criada para a consultora Thaiane Ferreira reunir em um só endereço o acesso às suas lojas virtuais Natura e Avon, aos produtos a pronta entrega (individuais, kits e lembrancinhas) e ao seu trabalho de papelaria. Pensada para o celular, deixa as informações à vista e dá autonomia para a cliente encontrar o que precisa e fazer o pedido com agilidade.",
    tags: ["HTML", "CSS", "JavaScript", "Cloudflare Pages"],
    status: "Concluído",
    category: "Projeto real",
    image: "/projects/menu-thaiane.png",
    demoUrl: "https://thaianeferreira.pages.dev/",
  },
  {
    title: "Landing Page do Studio Maria Arte",
    description:
      "Landing page do Studio Maria Arte, estúdio de balé clássico de Dourados (MS), feita para ficar na bio do Instagram. As informações, como métodos, turmas e matrículas, ficavam perdidas entre as postagens e geravam muitas dúvidas pelo WhatsApp. Agora ficam em um só lugar, e só quem realmente tem interesse entra em contato.",
    tags: ["HTML", "CSS", "JavaScript", "SEO"],
    status: "Concluído",
    category: "Projeto real",
    image: "/projects/maria-arte.png",
    demoUrl: "https://studiomariaarte.pages.dev/",
  },
  {
    title: "Sistema de Controle de Biblioteca de Cristópolis",
    description:
      "Sistema para automatizar os serviços da Biblioteca de Cristópolis, na Bahia, referentes ao controle do acervo e aos empréstimos, garantindo a integridade dos dados. Desenvolvido em dupla nas disciplinas de extensão Projeto Integrador I, II e III do curso de Tecnologia da Informação, com conclusão prevista para novembro de 2026.",
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
      "Redação de relatórios técnicos e documentos para órgãos ambientais reguladores.",
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
