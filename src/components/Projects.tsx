import { useEffect, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("todos");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projetos");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const categories = [
    { id: "todos", name: "Todos", icon: "fas fa-th" },
    { id: "bd", name: "Banco de Dados", icon: "fas fa-database" },
    { id: "ml", name: "Machine Learning", icon: "fas fa-brain" },
    { id: "estatistica", name: "Estatística", icon: "fas fa-calculator" },
    { id: "bi", name: "Business Intelligence", icon: "fas fa-chart-line" },
  ];

  const projects = [
    {
      id: 1,
      title: "Dashboard de Análise de Desmatamento de Biomas",
      description:
        "Dashboard interativo para análise do desmatamento de biomas brasileiros e PIB, com visualização de tendências e insights.",
      category: "bi",
      image: "/api/placeholder/400/250",
      technologies: ["PowerBI", "SQL", "Knime"],
      link: "/projetos/dashboard-desmatamento",
      github:
        "https://app.powerbi.com/view?r=eyJrIjoiNDI5NjJlY2QtNGIwZi00NWE1LWE0NWUtMGUzZjFjOWQxMDNiIiwidCI6ImFkYWMzNzYyLWYzMWQtNDliNS1iYWI1LWY3NjcxNzZmZjQyNSJ9",
      featured: false,
      tags: ["Dashboard", "Meio Ambiente"],
    },
    {
      id: 2,
      title: "Análise dos Candidatos a Prefeito em São Paulo (2024)",
      description:
        "Análise estatística dos candidatos a prefeito de São Paulo, incluindo visualização de dados eleitorais e predições de resultados.",
      category: "estatistica",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "NumPy", "Pandas", "SciPy", "Matplotlib"],
      link: "/projetos/analise-candidatos",
      github: "https://github.com/beatrizgnascimento/candidatos-sp",
      featured: false,
      tags: ["Python", "Estatística"],
    },
    {
      id: 3,
      title: "Machine Learning para Classificação e Agrupamento de Sementes",
      description:
        "Modelo de machine learning para classificação e agrupamento de sementes com visualização de clusters",
      category: "ml",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Scikit-Learn"],
      link: "/projetos/machine-learning-sementes",
      github: "https://github.com/beatrizgnascimento/trabalho-ML",
      featured: false,
      tags: ["KNN", "K-Means"],
    },
    {
      id: 4,
      title:
        "Relatório Ad Hoc de Desmatamento de Biomas e suas características",
      description:
        "DBA de banco de dados para a criação de uma aplicação Ad Hoc sobre desmatamento",
      category: "bd",
      image: "/api/placeholder/400/250",
      technologies: ["PostgreSQL", "KNIME"],
      link: "/projetos/adhoc-desmatamento",
      featured: false,
      tags: ["ETL", "Modelagem de banco de dados"],
    },
    {
      id: 5,
      title: "Análise de Estratégias de Taxas de Comissionamento - iFood",
      description:
        "Projeções para otimização de taxas de comissão em clientes parceiros",
      category: "bi",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Pandas", "Matplotlib"],
      link: "/projetos/case_logistica",
      github: "https://github.com/beatrizgnascimento/case_logistica",
      featured: false,
      tags: ["Jupyter", "Projeções"],
    },
  ];

  const filteredProjects =
    selectedCategory === "todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 bg-catppuccin-mantle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-catppuccin-lavender mb-4">
              Meus Projetos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-catppuccin-mauve to-catppuccin-blue mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-catppuccin-subtext0 max-w-3xl mx-auto">
              Projetos que demonstram minha experiência em análise de dados,
              business intelligence, banco de dados, estatística e machine
              learning.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-catppuccin-mauve to-catppuccin-blue text-catppuccin-base shadow-lg"
                    : "bg-catppuccin-surface0 text-catppuccin-subtext1 hover:bg-catppuccin-surface1 hover:text-catppuccin-text"
                }`}
              >
                <i className={category.icon}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-catppuccin-surface0 rounded-lg overflow-hidden hover:bg-catppuccin-surface1 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 bg-gradient-to-br from-catppuccin-mauve/20 to-catppuccin-blue/20 flex items-center justify-center">
                  <i className="fas fa-chart-line text-4xl text-catppuccin-mauve/30"></i>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-catppuccin-text mb-3 group-hover:text-catppuccin-lavender transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-catppuccin-subtext0 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-catppuccin-surface1 text-catppuccin-subtext1 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span
                          key={index}
                          className="text-catppuccin-blue text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.link}
                        className="text-catppuccin-lavender hover:text-catppuccin-mauve transition-colors"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-catppuccin-subtext1 hover:text-catppuccin-mauve transition-colors"
                      >
                        {project.technologies.includes("PowerBI") ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 32 32"
                            fill="currentColor"
                          >
                            <rect x="2" y="18" width="4" height="10" rx="1" />
                            <rect x="8" y="12" width="4" height="16" rx="1" />
                            <rect x="14" y="8" width="4" height="20" rx="1" />
                            <rect x="20" y="4" width="4" height="24" rx="1" />
                            <rect x="26" y="14" width="4" height="14" rx="1" />
                          </svg>
                        ) : (
                          <i className="fab fa-github"></i>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
