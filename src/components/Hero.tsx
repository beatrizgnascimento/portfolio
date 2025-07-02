import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-catppuccin-mauve via-catppuccin-blue to-catppuccin-teal"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-catppuccin-mauve/10 rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-catppuccin-blue/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-catppuccin-teal/10 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-catppuccin-mauve to-catppuccin-blue p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-catppuccin-surface0 flex items-center justify-center overflow-hidden">
                {/* 
                  Para adicionar sua foto:
                  1. Coloque sua foto na pasta public/images/ (ex: public/images/beatriz.jpg)
                  2. Descomente a tag <img> abaixo e comente o div placeholder
                  3. Ajuste o nome do arquivo conforme necessário
                */}

                {
                  <img
                    src="/images/image.png"
                    alt="Beatriz Nascimento"
                    className="w-full h-full object-cover rounded-full"
                  />
                }
              </div>
            </div>
          </div>

          {/* Greeting */}
          <p className="text-catppuccin-mauve font-mono text-lg mb-4 animate-fade-in">
            Olá, eu sou a
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-catppuccin-lavender">Beatriz Nascimento</span>
          </h1>

          {/* Title */}
          <h2
            className="text-2xl md:text-3xl text-catppuccin-subtext1 mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Analista de Dados & Business Intelligence
          </h2>

          {/* Description */}
          <p
            className="text-lg text-catppuccin-subtext0 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Transformando dados em insights valiosos através de visualizações
            interativas, machine learning e análise estatística. Apaixonada por
            descobrir padrões e criar soluções baseadas em dados.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#projetos"
              className="bg-gradient-to-r from-catppuccin-mauve to-catppuccin-blue text-catppuccin-base px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-catppuccin-mauve/25 transition-all duration-300 transform hover:scale-105"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="border-2 border-catppuccin-surface1 text-catppuccin-text px-8 py-3 rounded-lg font-semibold hover:border-catppuccin-lavender hover:text-catppuccin-lavender transition-all duration-300"
            >
              Entre em Contato
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 mt-12 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://www.linkedin.com/in/beatriz-gnascimento/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-catppuccin-subtext1 hover:text-catppuccin-blue transition-colors duration-300 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/beatrizgnascimento"
              target="_blank"
              rel="noopener noreferrer"
              className="text-catppuccin-subtext1 hover:text-catppuccin-mauve transition-colors duration-300 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:beatrizgnascimento1@gmail.com"
              className="text-catppuccin-subtext1 hover:text-catppuccin-green transition-colors duration-300 text-2xl"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#sobre"
          className="text-catppuccin-subtext1 hover:text-catppuccin-lavender transition-colors duration-300"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
