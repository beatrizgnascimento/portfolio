import { useEffect, useState } from "react";

const Skills = () => {
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

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: [
        {
          name: "Python",

          icon: "fab fa-python",
          color: "text-catppuccin-blue",
        },

        {
          name: "SQL",
          level: 95,
          icon: "fas fa-database",
          color: "text-catppuccin-green",
        },
        {
          name: "JavaScript",
          level: 75,
          icon: "fab fa-js-square",
          color: "text-catppuccin-yellow",
        },
        {
          name: "TypeScript",
          level: 80,
          icon: "fas fa-chart-line",
          color: "text-catppuccin-mauve",
        },
      ],
    },
    {
      title: "Ferramentas de BI & Visualização",
      skills: [
        {
          name: "Power BI",
          level: 90,
          icon: "fas fa-chart-bar",
          color: "text-catppuccin-yellow",
        },

        {
          name: "Looker Studio",
          level: 80,
          icon: "fas fa-eye",
          color: "text-catppuccin-green",
        },
        {
          name: "Amplitude",
          level: 75,
          icon: "fas fa-chart-line",
          color: "text-catppuccin-mauve",
        },
      ],
    },
    {
      title: "Machine Learning & Estatística",
      skills: [
        {
          name: "Scikit-learn",
          level: 85,
          icon: "fas fa-brain",
          color: "text-catppuccin-orange",
        },
        {
          name: "TensorFlow",
          level: 70,
          icon: "fas fa-network-wired",
          color: "text-catppuccin-red",
        },
        {
          name: "Pandas",
          level: 95,
          icon: "fas fa-table",
          color: "text-catppuccin-blue",
        },
        {
          name: "NumPy",
          level: 90,
          icon: "fas fa-calculator",
          color: "text-catppuccin-green",
        },
      ],
    },
    {
      title: "Bancos de Dados & Cloud",
      skills: [
        {
          name: "PostgreSQL",
          level: 85,
          icon: "fas fa-server",
          color: "text-catppuccin-blue",
        },
        {
          name: "BigQuery",
          level: 80,
          icon: "fas fa-cloud",
          color: "text-catppuccin-green",
        },
        {
          name: "MySQL",
          level: 75,
          icon: "fab fa-aws",
          color: "text-catppuccin-orange",
        },
        {
          name: "Databricks",
          level: 75,
          icon: "fab fa-aws",
          color: "text-catppuccin-orange",
        },
      ],
    },
    {
      title: "Ferramentas de ETL & Orquestração",
      skills: [
        {
          name: "Knime",
          level: 80,
          icon: "fas fa-wind",
          color: "text-catppuccin-teal",
        },
        {
          name: "PySpark",
          level: 75,
          icon: "fas fa-cube",
          color: "text-catppuccin-mauve",
        },
      ],
    },
    {
      title: "Outras Ferramentas",
      skills: [
        {
          name: "Git",
          level: 85,
          icon: "fab fa-git-alt",
          color: "text-catppuccin-red",
        },
        {
          name: "Jupyter",
          level: 90,
          icon: "fas fa-book",
          color: "text-catppuccin-yellow",
        },
        {
          name: "Excel",
          level: 95,
          icon: "fas fa-file-excel",
          color: "text-catppuccin-green",
        },
        {
          name: "Google Analytics",
          level: 80,
          icon: "fas fa-chart-area",
          color: "text-catppuccin-blue",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-catppuccin-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-catppuccin-lavender mb-4">
              Skills & Tecnologias
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-catppuccin-mauve to-catppuccin-blue mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-catppuccin-subtext0 max-w-3xl mx-auto">
              Tecnologias e ferramentas que utilizo para transformar dados em
              insights valiosos
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-catppuccin-surface0 rounded-lg p-6 hover:bg-catppuccin-surface1 transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-catppuccin-text mb-6 flex items-center">
                  <i className="fas fa-star text-catppuccin-yellow mr-3"></i>
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <i
                            className={`${skill.icon} ${skill.color} text-lg`}
                          ></i>
                          <span className="text-catppuccin-subtext1 font-medium">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 bg-catppuccin-surface0 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-catppuccin-text mb-6 text-center">
              Habilidades Complementares
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Análise Exploratória de Dados",
                "Modelagem de Dados",
                "Storytelling com Dados",
                "A/B Testing",
                "Análise Preditiva",
                "Product Analytics",
                "Business Analytics",
                "Data Governance",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-catppuccin-surface1 rounded-lg hover:bg-catppuccin-surface2 transition-colors duration-300"
                >
                  <i className="fas fa-check text-catppuccin-green"></i>
                  <span className="text-catppuccin-subtext1 text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-catppuccin-text mb-4">
              Sempre Aprendendo
            </h3>
            <p className="text-catppuccin-subtext0 mb-6">
              Atualmente explorando novas tecnologias e metodologias
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  name: "Apache Kafka",
                  icon: "fas fa-stream",
                  color: "text-catppuccin-red",
                },
                {
                  name: "Kubernetes",
                  icon: "fas fa-dharmachakra",
                  color: "text-catppuccin-blue",
                },
                {
                  name: "GraphQL",
                  icon: "fas fa-project-diagram",
                  color: "text-catppuccin-mauve",
                },
                {
                  name: "Rust",
                  icon: "fas fa-cog",
                  color: "text-catppuccin-orange",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-catppuccin-surface0 rounded-full border border-catppuccin-surface1"
                >
                  <i className={`${tech.icon} ${tech.color}`}></i>
                  <span className="text-catppuccin-subtext1 text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
