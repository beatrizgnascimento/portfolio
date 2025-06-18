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
    { id: "visualizacao", name: "Visualização", icon: "fas fa-chart-bar" },
    { id: "ml", name: "Machine Learning", icon: "fas fa-brain" },
    { id: "estatistica", name: "Estatística", icon: "fas fa-calculator" },
    { id: "bi", name: "Business Intelligence", icon: "fas fa-chart-line" },
  ];

  const projects = [
    {
      id: 1,
      title: "Dashboard de Análise de Desmatamento de Biomas",
      description:
        "Dashboard interativo para análise de vendas online com métricas de conversão, segmentação de clientes e previsões de demanda.",
      category: "bi",
      image: "/api/placeholder/400/250",
      technologies: ["Power BI", "SQL", "Knime", "Excel"],
      link: "/projetos/dashboard-vendas",
      github: "https://github.com/beatriz/dashboard-vendas",
      featured: true,
      tags: ["Dashboard", "Meio Ambiente"],
    },
    {
      id: 2,
      title: "Análise dos Candidatos a Prefeito em São Paulo (2024)",
      description:
        "Sistema de machine learning para prever cancelamento de assinaturas usando algoritmos de classificação e análise de comportamento.",
      category: "ml",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      link: "/projetos/churn-prediction",
      github: "https://github.com/beatriz/churn-prediction",
      featured: true,
      tags: ["Python", "Estatística", "Classificação"],
    },
    {
      id: 3,
      title: "Análise de Sentimento - Redes Sociais",
      description:
        "Análise de sentimentos de posts em redes sociais usando NLP e visualização de tendências temporais.",
      category: "ml",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "NLTK", "TensorFlow", "Plotly"],
      link: "/projetos/sentiment-analysis",
      github: "https://github.com/beatriz/sentiment-analysis",
      featured: false,
      tags: ["NLP", "Análise de Sentimento", "Redes Sociais"],
    },
    {
      id: 4,
      title: "Relatório de Performance de Marketing",
      description:
        "Relatório automatizado de performance de campanhas de marketing com análise de ROI e otimização de budget.",
      category: "estatistica",
      image: "/api/placeholder/400/250",
      technologies: ["R", "Shiny", "ggplot2", "dplyr"],
      link: "/projetos/marketing-performance",
      github: "https://github.com/beatriz/marketing-performance",
      featured: false,
      tags: ["Marketing", "ROI", "Análise Estatística"],
    },
    {
      id: 5,
      title: "Visualização de Dados Climáticos",
      description:
        "Dashboard interativo para análise de dados climáticos com gráficos temporais e mapas de calor.",
      category: "visualizacao",
      image: "/api/placeholder/400/250",
      technologies: ["Tableau", "Python", "Folium", "Pandas"],
      link: "/projetos/climate-data",
      github: "https://github.com/beatriz/climate-data",
      featured: false,
      tags: ["Clima", "Visualização", "Geodados"],
    },
    {
      id: 6,
      title: "Sistema de Recomendação de Produtos",
      description:
        "Algoritmo de recomendação baseado em colaboração e conteúdo para e-commerce.",
      category: "ml",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Surprise", "NumPy", "Streamlit"],
      link: "/projetos/recommendation-system",
      github: "https://github.com/beatriz/recommendation-system",
      featured: false,
      tags: ["Recomendação", "E-commerce", "Algoritmos"],
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
              Projetos que demonstram minha expertise em análise de dados,
              machine learning e business intelligence
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

          {/* Featured Projects */}
          {selectedCategory === "todos" && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-catppuccin-text mb-8 text-center">
                Projetos em Destaque
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {projects
                  .filter((p) => p.featured)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="bg-catppuccin-surface0 rounded-lg overflow-hidden hover:bg-catppuccin-surface1 transition-all duration-300 group"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-catppuccin-mauve/20 to-catppuccin-blue/20 flex items-center justify-center">
                        <i className="fas fa-chart-line text-6xl text-catppuccin-mauve/30"></i>
                        <div className="absolute top-4 right-4">
                          <span className="bg-catppuccin-mauve text-catppuccin-base px-2 py-1 rounded-full text-xs font-medium">
                            Destaque
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-catppuccin-text mb-3 group-hover:text-catppuccin-lavender transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-catppuccin-subtext0 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-catppuccin-surface1 text-catppuccin-subtext1 px-3 py-1 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {project.technologies
                              .slice(0, 3)
                              .map((tech, index) => (
                                <span
                                  key={index}
                                  className="text-catppuccin-blue text-sm font-mono"
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
                              <i className="fab fa-github"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-catppuccin-subtext0 mb-6">
              Interessado em ver mais detalhes sobre algum projeto específico?
            </p>
            <a
              href="#contato"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-catppuccin-mauve to-catppuccin-blue text-catppuccin-base px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-catppuccin-mauve/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Vamos Conversar</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
