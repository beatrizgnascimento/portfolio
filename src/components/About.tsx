import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("sobre");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const interests = [
    {
      icon: "fas fa-chart-line",
      title: "Análise de Dados",
      description:
        "Exploração e interpretação de dados para insights de negócio",
    },
    {
      icon: "fas fa-brain",
      title: "Machine Learning",
      description:
        "Desenvolvimento de modelos preditivos e algoritmos inteligentes",
    },
    {
      icon: "fas fa-chart-bar",
      title: "Visualização",
      description: "Criação de dashboards interativos e gráficos informativos",
    },
    {
      icon: "fas fa-calculator",
      title: "Estatística",
      description:
        "Aplicação de métodos estatísticos para validação de hipóteses",
    },
    {
      icon: "fas fa-database",
      title: "Business Intelligence",
      description: "Construção de soluções de BI para tomada de decisão",
    },
    {
      icon: "fas fa-code",
      title: "Programação",
      description: "Desenvolvimento de scripts e automação de processos",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-catppuccin-mantle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-catppuccin-lavender mb-4">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-catppuccin-mauve to-catppuccin-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-catppuccin-text mb-4">
                Analista de Dados apaixonada por transformar informações em
                valor
              </h3>

              <p className="text-catppuccin-subtext0 leading-relaxed">
                Entusiasta de dados e movida pela curiosidade desde pequena,
                sempre busquei entender o mundo através de números e padrões.
                Hoje, como Analista de Dados, minha missão é transformar dados
                brutos em insights valiosos que impulsionam decisões
                estratégicas.
              </p>

              <p className="text-catppuccin-subtext0 leading-relaxed">
                Com experiência em análise de dados, business intelligence,
                banco de dados, estatística e machine learning, estou sempre em
                busca de aprender e aplicar novas tecnologias para resolver
                problemas complexos. Atuo com todo o ecossistema de dados:
                pipelines ETL, modelagem, visualizações impactantes e até
                modelos de machine learning.
              </p>

              <p className="text-catppuccin-subtext0 leading-relaxed">
                Gosto de transformar complexidade em clareza e acredito que
                dados bem explorados transformam qualquer negócio.
              </p>

              {/* Key Highlights */}
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="p-6 bg-catppuccin-surface0 rounded-lg hover:bg-catppuccin-surface1 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <i
                        className={`${interest.icon} text-2xl text-catppuccin-mauve group-hover:text-catppuccin-lavender transition-colors duration-300`}
                      ></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-catppuccin-text mb-2">
                        {interest.title}
                      </h4>
                      <p className="text-sm text-catppuccin-subtext0 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-catppuccin-surface0 p-6 rounded-lg ">
              <h4 className="text-xl font-semibold text-catppuccin-text mb-4 flex items-center">
                <i className="fas fa-graduation-cap text-catppuccin-green mr-3"></i>
                Formação
              </h4>
              <div className="space-y-3 mt-8">
                <div className="mb-3">
                  <h5 className="font-medium text-catppuccin-subtext1">
                    Sistemas de Informação
                  </h5>
                  <p className="text-sm text-catppuccin-subtext0">
                    Universidade Federal de Itajubá - 2023-2026
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-catppuccin-surface0 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-catppuccin-text mb-4 flex items-center">
                <i className="fas fa-certificate text-catppuccin-yellow mr-3"></i>
                Certificações
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-catppuccin-subtext1">
                    <a
                      href="https://cert.efset.org/hzGvwE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-catppuccin-blue underline hover:text-catppuccin-lavender transition-colors"
                    >
                      EFSET English Certificate (C2 Proficient)
                    </a>
                  </h5>
                  <p className="text-sm text-catppuccin-subtext0">
                    EF SET - 2023
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-catppuccin-subtext1">
                    <a
                      href="https://drive.google.com/file/d/1bnFfWWnA4USR2sGC7Apt6k98JjBXe4d1/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-catppuccin-blue underline hover:text-catppuccin-lavender transition-colors"
                    >
                      DELE - International Spanish Certificate
                    </a>
                  </h5>
                  <p className="text-sm text-catppuccin-subtext0">
                    Instituto Cervantes - 2019
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mt-16">
            <h4 className="text-2xl font-bold text-catppuccin-lavender mb-8 text-center flex items-center justify-center">
              <i className="fas fa-briefcase text-catppuccin-mauve mr-3"></i>
              Experiências Profissionais
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-catppuccin-surface0 p-6 rounded-lg">
                <h5 className="text-lg font-semibold text-catppuccin-text mb-2">
                  Analista de Dados & QA
                </h5>
                <p className="text-catppuccin-subtext1 mb-1">
                  NexAtlas - Navegação Aérea
                </p>
                <p className="text-catppuccin-subtext0 text-sm mb-2">
                  Jan 2024 - Atual
                </p>
                <ul className="list-disc list-inside text-catppuccin-subtext0 text-sm space-y-1">
                  <li>
                    Única profissional de dados, responsável por estruturar e
                    implementar uma cultura data-driven do zero
                  </li>

                  <li>SQL, Google Sheets, Amplitude, Looker Studio</li>

                  <li>
                    Atuação como ponte entre dados, engenharia, growth e
                    marketing
                  </li>
                  <li>
                    Análise de métricas de produto, growth e performance de
                    campanhas
                  </li>
                </ul>
              </div>
              <div className="bg-catppuccin-surface0 p-6 rounded-lg">
                <h5 className="text-lg font-semibold text-catppuccin-text mb-2">
                  Assessora de Vendas e Product Owner
                </h5>
                <p className="text-catppuccin-subtext1 mb-1">
                  byron.solutions - Empresa Júnior de T.I
                </p>
                <p className="text-catppuccin-subtext0 text-sm mb-2">
                  Jan 2024 - Nov 2024
                </p>
                <ul className="list-disc list-inside text-catppuccin-subtext0 text-sm space-y-1">
                  <li>
                    Quebrou recordes de captação de leads, atingindo 130 leads
                    em uma única semana durante a Semana da Prospecção,
                    conduzindo reuniões estratégicas e fortalecendo o processo
                    de vendas;
                  </li>

                  <li>
                    PO em projetos de tecnologia, liderando o desenvolvimento de
                    soluções alinhadas às necessidades do negócio e priorização
                    de demandas
                  </li>
                  <li>
                    Diagnóstico e resolução de gargalos no processo de vendas,
                    implementando estratégias eficazes de abordagem e
                    qualificação de leads, resultando no aumento da taxa de
                    conversão
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
