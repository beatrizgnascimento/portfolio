import { useEffect, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Aqui você pode adicionar a lógica real de envio
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Mostrar mensagem de sucesso
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
  };

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
            <div className="w-24 h-1 bg-gradient-to-r from-catppuccin-mauve to-catppuccin-blue mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-catppuccin-subtext0 max-w-3xl mx-auto">
              Interessado em trabalhar juntos ou tem alguma pergunta? Entre em
              contato e vamos discutir como posso ajudar com seus projetos de
              dados.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-catppuccin-text mb-6">
                  Informações de Contato
                </h3>
                <p className="text-catppuccin-subtext0 leading-relaxed mb-8">
                  Estou sempre aberta a novas oportunidades e colaborações
                  interessantes. Se você tem um projeto de dados que gostaria de
                  discutir, ou simplesmente quer trocar ideias sobre tecnologia,
                  não hesite em entrar em contato!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-catppuccin-surface0 rounded-lg hover:bg-catppuccin-surface1 transition-all duration-300"
                  >
                    <div className={`${info.color} text-2xl`}>
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h4 className="text-catppuccin-text font-medium">
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

              {/* Availability */}
            </div>

            {/* Contact Form */}
            <div className="bg-catppuccin-surface0 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-catppuccin-text mb-6">
                Envie uma Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-catppuccin-subtext1 font-medium mb-2"
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-catppuccin-surface1 border border-catppuccin-surface2 rounded-lg text-catppuccin-text placeholder-catppuccin-subtext0 focus:outline-none focus:border-catppuccin-lavender focus:ring-2 focus:ring-catppuccin-lavender/20 transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-catppuccin-subtext1 font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-catppuccin-surface1 border border-catppuccin-surface2 rounded-lg text-catppuccin-text placeholder-catppuccin-subtext0 focus:outline-none focus:border-catppuccin-lavender focus:ring-2 focus:ring-catppuccin-lavender/20 transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-catppuccin-subtext1 font-medium mb-2"
                  >
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-catppuccin-surface1 border border-catppuccin-surface2 rounded-lg text-catppuccin-text focus:outline-none focus:border-catppuccin-lavender focus:ring-2 focus:ring-catppuccin-lavender/20 transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="projeto">Projeto de Dados</option>
                    <option value="colaboracao">Colaboração</option>
                    <option value="consulta">Consulta Técnica</option>
                    <option value="oportunidade">
                      Oportunidade de Trabalho
                    </option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-catppuccin-subtext1 font-medium mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-catppuccin-surface1 border border-catppuccin-surface2 rounded-lg text-catppuccin-text placeholder-catppuccin-subtext0 focus:outline-none focus:border-catppuccin-lavender focus:ring-2 focus:ring-catppuccin-lavender/20 transition-all duration-300 resize-none"
                    placeholder="Conte-me sobre seu projeto ou como posso ajudar..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-catppuccin-mauve to-catppuccin-blue text-catppuccin-base py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-catppuccin-mauve/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Enviando...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <span>Enviar Mensagem</span>
                      <i className="fas fa-paper-plane"></i>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
