import { useEffect, useState } from "react";

const Contact = () => {
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

    const element = document.getElementById("contato");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "beatrizgnascimento1@gmail.com",
      link: "mailto:beatrizgnascimento1@gmail.com",
      color: "text-catppuccin-green",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/beatriz-gnascimento",
      link: "https://www.linkedin.com/in/beatriz-gnascimento/",
      color: "text-catppuccin-blue",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/beatrizgnascimento",
      link: "https://github.com/beatrizgnascimento",
      color: "text-catppuccin-mauve",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Localização",
      value: "Minas Gerais, Brasil",
      link: null,
      color: "text-catppuccin-peach",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-catppuccin-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-catppuccin-lavender mb-4">
              Vamos Conversar
            </h2>
            
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold text-catppuccin-text mb-6">
                  Informações de Contato
                </h3>
                <p className="text-catppuccin-subtext0 leading-relaxed">
                  Estou sempre aberta a novas oportunidades e colaborações
                  interessantes. Se você tem um projeto de dados que gostaria de
                  discutir, ou simplesmente quer trocar ideias sobre tecnologia,
                  não hesite em entrar em contato!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-6 bg-catppuccin-surface0 rounded-lg hover:bg-catppuccin-surface1 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className={`${info.color} text-3xl`}>
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h4 className="text-catppuccin-text font-medium text-lg">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={
                            info.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-catppuccin-subtext1 hover:text-catppuccin-lavender transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-catppuccin-subtext1">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Available for work indicator */}
              <div className="text-center mt-12 p-6 bg-gradient-to-r from-catppuccin-surface0 to-catppuccin-surface1 rounded-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-catppuccin-green rounded-full animate-pulse"></div>
                  <span className="text-catppuccin-green font-medium">
                    Disponível para projetos
                  </span>
                </div>
                <p className="text-catppuccin-subtext0">
                  Aberta a novas oportunidades e colaborações interessantes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
