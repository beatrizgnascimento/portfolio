import { useEffect, useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiGooglebigquery,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { BsFileBarGraphFill } from "react-icons/bs";
import { SiLooker } from "react-icons/si";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiScikitlearn } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScipy } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { TbBrandDatabricks } from "react-icons/tb";
import { SiKnime } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";

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
          icon: <SiPython className="text-catppuccin-blue" size={24} />,
        },
        {
          name: "SQL",
          level: 95,
          icon: <FaDatabase className="text-catppuccin-green" size={24} />,
        },
        {
          name: "JavaScript",
          level: 75,
          icon: <SiJavascript className="text-catppuccin-yellow" size={24} />,
        },
        {
          name: "TypeScript",
          level: 80,
          icon: <SiTypescript className="text-catppuccin-blue" size={24} />,
        },
      ],
    },
    {
      title: "Ferramentas de BI & Visualização",
      skills: [
        {
          name: "Power BI",
          level: 90,
          icon: (
            <BsFileBarGraphFill className="text-catppuccin-yellow" size={24} />
          ),
        },

        {
          name: "Looker Studio",
          level: 80,
          icon: <SiLooker className="text-catppuccin-blue" size={24} />,
        },
        {
          name: "Amplitude",
          level: 75,
          icon: (
            <TbBrandGoogleAnalytics
              className="text-catppuccin-blue"
              size={24}
            />
          ),
        },
      ],
    },
    {
      title: "Machine Learning & Estatística",
      skills: [
        {
          name: "Scikit-learn",
          level: 85,
          icon: <SiScikitlearn className="text-catppuccin-peach" size={24} />,
        },
        {
          name: "SciPy",
          level: 70,
          icon: <SiScipy className="text-catppuccin-blue" size={24} />,
        },
        {
          name: "Pandas",
          level: 95,
          icon: <SiPandas className="text-catppuccin-mauve" size={24} />,
        },
        {
          name: "NumPy",
          level: 90,
          icon: <SiNumpy className="text-catppuccin-blue" size={24} />,
        },
      ],
    },
    {
      title: "Bancos de Dados & Cloud",
      skills: [
        {
          name: "PostgreSQL",
          level: 85,
          icon: <BiLogoPostgresql className="text-catppuccin-blue" size={25} />,
        },
        {
          name: "BigQuery",
          level: 80,
          icon: <SiGooglebigquery className="text-catppuccin-blue" size={24} />,
        },
        {
          name: "MySQL",
          level: 75,
          icon: <GrMysql className="text-catppuccin-blue" size={24} />,
        },
        {
          name: "Databricks",
          level: 75,
          icon: (
            <TbBrandDatabricks className="text-catppuccin-peach" size={24} />
          ),
        },
      ],
    },
    {
      title: "Ferramentas de ETL & Orquestração",
      skills: [
        {
          name: "Knime",
          level: 80,
          icon: <SiKnime className="text-catppuccin-yellow" size={24} />,
        },
        {
          name: "Apache Spark",
          level: 75,
          icon: <SiApachespark className="text-catppuccin-peach" size={24} />,
        },
      ],
    },
    {
      title: "Outras Ferramentas",
      skills: [
        {
          name: "Git",
          level: 85,
          icon: <FaGitAlt className="text-catppuccin-red" size={24} />,
        },
        {
          name: "Jupyter",
          level: 90,
          icon: <SiJupyter className="text-catppuccin-peach" size={24} />,
        },
        {
          name: "Excel",
          level: 95,
          icon: (
            <RiFileExcel2Fill className="text-catppuccin-green" size={24} />
          ),
        },
        {
          name: "Google Analytics",
          level: 80,
          icon: (
            <SiGoogleanalytics className="text-catppuccin-yellow" size={24} />
          ),
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
                          <span>{skill.icon}</span>
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
