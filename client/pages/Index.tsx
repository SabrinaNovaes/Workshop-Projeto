import React from "react";
import Layout from "@/components/Layout";
import {
  Zap,
  Brain,
  Code,
  Lightbulb,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Cpu,
  Wand2,
  Cog,
} from "lucide-react";

const Index = () => {
  const curricula = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Fundamentos de IA e Machine Learning com aplicações práticas",
    },
    {
      icon: Wand2,
      title: "Prompt Engineering",
      description: "Técnicas avançadas para potencializar modelos de IA",
    },
    {
      icon: Cog,
      title: "Automação",
      description: "Automação de processos e workflows inteligentes",
    },
    {
      icon: Code,
      title: "Google Apps Script",
      description: "Desenvolvendo soluções no ecossistema Google",
    },
    {
      icon: Lightbulb,
      title: "Low-Code",
      description: "Plataformas low-code para desenvolvimento rápido",
    },
    {
      icon: Cpu,
      title: "Tecnologias Modernas",
      description: "Stack moderno e tendências do mercado",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20"
      >
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="section-container text-center space-y-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-400/10">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">
              Transforme sua Carreira em Tech
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            <span className="block text-white">Participe do</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Workshop de Tecnologia
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Aprenda as tecnologias mais demandadas do mercado com instrutores
            experientes. Desde Inteligência Artificial até Low-Code, tudo em um
            único workshop transformador.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#inscricao"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Garantir minha vaga
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#sobre"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Saber mais
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-12 border-t border-border/40">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-400">200+</div>
              <p className="text-sm text-foreground/60">Inscritos</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-500">6</div>
              <p className="text-sm text-foreground/60">Módulos</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-500">20h</div>
              <p className="text-sm text-foreground/60">Conteúdo</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent">
        <div className="section-container space-y-12">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">Sobre o Workshop</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Um programa completo e prático para profissionais que desejam se
              atualizar nas tecnologias mais procuradas do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 bg-card rounded-2xl border border-border/40 p-8 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Público-Alvo</h3>
                <p className="text-foreground/60">
                  Ideal para iniciantes e profissionais intermediários que desejam
                  aprender tecnologias modernas e se manter competitivos no
                  mercado.
                </p>
              </div>
            </div>

            <div className="space-y-6 bg-card rounded-2xl border border-border/40 p-8 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Objetivo</h3>
                <p className="text-foreground/60">
                  Proporcionar conhecimento prático e aplicável em tecnologias
                  emergentes, focando em IA, automação e desenvolvimento low-code.
                </p>
              </div>
            </div>

            <div className="space-y-6 bg-card rounded-2xl border border-border/40 p-8 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Formato</h3>
                <p className="text-foreground/60">
                  Workshop intensivo e prático com aulas interativas, exercícios
                  reais e mentoria personalizada dos instrutores.
                </p>
              </div>
            </div>

            <div className="space-y-6 bg-card rounded-2xl border border-border/40 p-8 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Resultado</h3>
                <p className="text-foreground/60">
                  Saiba os conceitos fundamentais e avançados para aplicar
                  imediatamente em seus projetos profissionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="programacao" className="py-20">
        <div className="section-container space-y-12">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">Programação</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Confira o conteúdo completo que você aprenderá no workshop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curricula.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border/40 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-foreground/60">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="inscricao" className="py-20 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent">
        <div className="section-container space-y-12">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">Inscreva-se Agora</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Preencha o formulário abaixo e garanta sua vaga no workshop.
              Vagas limitadas!
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl bg-card border border-border/40 rounded-2xl p-8">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfxfJP2lur9RGEJP83ddyWpMdWQbw6JajvWQSjReneMcMYX5A/viewform?embedded=true"
                width="100%"
                height="985"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
              >
                Carregando…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold">Localização</h3>
              <p className="text-foreground/60">Rio de Janeiro, RJ</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mx-auto">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold">Email</h3>
              <p className="text-foreground/60">contato@workshoptech.com</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold">Telefone</h3>
              <p className="text-foreground/60">(11) 9999-9999</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
