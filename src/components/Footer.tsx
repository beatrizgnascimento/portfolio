import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://linkedin.com/in/beatriz",
      color: "hover:text-catppuccin-blue",
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/beatriz",
      color: "hover:text-catppuccin-mauve",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "https://twitter.com/beatriz",
      color: "hover:text-catppuccin-sky",
    },
    {
      name: "Medium",
      icon: "fab fa-medium",
      url: "https://medium.com/@beatriz",
      color: "hover:text-catppuccin-green",
    },
  ];

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-catppuccin-crust border-t border-catppuccin-surface0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-catppuccin-lavender mb-2">
                Beatriz
              </h3>
              <p className="text-catppuccin-subtext0 leading-relaxed">
                Analista de Dados e Business Intelligence apaixonada por
                transformar dados em insights valiosos. Especializada em machine
                learning, visualização de dados e análise estatística.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-catppuccin-subtext1 ${social.color} transition-colors duration-300 text-xl`}
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-catppuccin-text mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-catppuccin-subtext1 hover:text-catppuccin-lavender transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-catppuccin-text mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-catppuccin-subtext0">
              <p className="flex items-center space-x-2">
                <i className="fas fa-envelope text-catppuccin-green"></i>
                <span>beatrizgnascimento1@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-catppuccin-peach"></i>
                <span>Minas Gerais, Brasil</span>
              </p>
              <p className="flex items-center space-x-2">
                <i className="fas fa-clock text-catppuccin-yellow"></i>
                <span>Disponível para projetos</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-catppuccin-surface0 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-catppuccin-subtext0 text-sm">
              <p>
                © {currentYear} Beatriz Nascimento. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8 pt-8 border-t border-catppuccin-surface0">
          <p className="text-catppuccin-subtext0 text-sm">
            Feito com <i className="fas fa-heart text-catppuccin-red"></i>{" "}
            usando <span className="text-catppuccin-mauve">Astro</span>,{" "}
            <span className="text-catppuccin-blue">React</span> e{" "}
            <span className="text-catppuccin-teal">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
