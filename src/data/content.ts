export type Locale = 'pt' | 'en';

export const skills = ['SQL', 'Databricks', 'Python', 'PySpark', 'dbt', 'MLFlow', 'Git', 'Gitlab', 'Apache Airflow'];

export const content = {
  pt: {
    greeting: 'olá, eu sou a',
    role: 'Analista de Dados',
    description: 'Beatriz Nascimento, Analista de Dados. Experiência profissional, skills, certificações, formação e contato.',
    contacts: 'Redes e contato',
    email: 'E-mail',
    experience: 'Experiência',
    skills: 'Skills',
    certifications: 'Certificações',
    education: 'Formação',
    degree: 'Sistemas de Informação',
    current: 'atual',
    until: ' até ',
    jobs: [
      {
        company: 'iFood Pago', role: 'Analista de Dados - Pricing',
        start: 'ago 2025', startDate: '2025-08', end: 'atual', endDate: null,
        details: [
          'Desenvolvimento de agentes baseados em LLMs para automatizar consultas SQL, apoiar sua execução confiável, acelerar a extração de insights e automatizar relatórios executivos.',
          'Análise de Pricing e rentabilidade de produtos de capital de giro, cartões PJ, multicategorias e FGBS, com construção e manutenção de políticas de preço.',
          'Construção e manutenção de painéis de monitoramento de indicadores, integrando pipelines de dados e soluções de IA generativa.',
          'Automação e orquestração de pipelines e processos de ETL com Databricks e Apache Airflow, incluindo transformação e modelagem de dados com dbt e migração de bases para essa arquitetura.',
          'Padronização de métricas e bases analíticas para avaliar estratégias com testes A/B, campanhas promocionais e projeções de rentabilidade.',
          'Uso de MLflow no Databricks para acompanhamento e gestão de modelos.',
        ],
      },
      {
        company: 'NexAtlas', role: 'Analista de Dados & QA',
        start: 'jan 2024', startDate: '2024-01', end: 'jul 2025', endDate: '2025-07',
        details: [
          'Análises e acompanhamento de métricas de engajamento, churn e retenção de clientes.',
          'Integração do Amplitude, bancos de dados internos e APIs com SQL e Python para criar bases analíticas e dashboards estratégicos.',
          'Apoio a testes manuais e automatizados para garantir a qualidade dos dados, a estabilidade do produto e o rastreamento de eventos.',
        ],
      },
    ],
    blog: {
      title: 'Blog — Beatriz Nascimento',
      description: 'Anotações de Beatriz Nascimento sobre dados, tecnologia e aprendizado.',
      eyebrow: 'um espaço para compartilhar',
      introduction: 'Anotações sobre dados, tecnologia e o que aprendo pelo caminho.',
      publications: 'Publicações',
      empty: 'Ainda não há textos publicados por aqui.',
    },
    nav: { home: 'Início', label: 'Navegação principal', language: 'Idioma', theme: 'Aparência', light: 'Tema claro', dark: 'Tema escuro' },
  },
  en: {
    greeting: "hi, I'm",
    role: 'Data Analyst',
    description: 'Beatriz Nascimento, Data Analyst. Professional experience, skills, certifications, education and contact.',
    contacts: 'Social links and contact',
    email: 'Email',
    experience: 'Experience',
    skills: 'Skills',
    certifications: 'Certifications',
    education: 'Education',
    degree: 'Information Systems',
    current: 'current',
    until: ' to ',
    jobs: [
      {
        company: 'iFood Pago', role: 'Data Analyst - Pricing',
        start: 'Aug 2025', startDate: '2025-08', end: 'present', endDate: null,
        details: [
          'Developed LLM-based agents to automate SQL queries, support reliable execution, accelerate insight generation and automate executive reporting.',
          'Analyzed pricing and profitability across working capital, business cards, multicategory products and FGBS, and developed and maintained pricing policies.',
          'Built and maintained dashboards to monitor key indicators, integrating data pipelines and generative AI solutions.',
          'Automated and orchestrated pipelines and ETL workflows with Databricks and Apache Airflow, including data transformation and modeling with dbt and dataset migration to this architecture.',
          'Standardized metrics and analytical datasets to evaluate strategies through A/B testing, promotional campaigns and profitability forecasting.',
          'Used MLflow in Databricks to track and manage models.',
        ],
      },
      {
        company: 'NexAtlas', role: 'Data Analyst & QA',
        start: 'Jan 2024', startDate: '2024-01', end: 'Jul 2025', endDate: '2025-07',
        details: [
          'Analyzed and monitored customer engagement, churn and retention metrics.',
          'Integrated Amplitude, internal databases and APIs using SQL and Python to build analytical datasets and strategic dashboards.',
          'Supported manual and automated testing to ensure data quality, product stability and reliable event tracking.',
        ],
      },
    ],
    blog: {
      title: 'Blog — Beatriz Nascimento',
      description: 'Notes by Beatriz Nascimento on data, technology and learning.',
      eyebrow: 'a space to share',
      introduction: 'Notes on data, technology and what I learn along the way.',
      publications: 'Posts',
      empty: 'No posts published here yet.',
    },
    nav: { home: 'Home', label: 'Main navigation', language: 'Language', theme: 'Appearance', light: 'Light theme', dark: 'Dark theme' },
  },
};
