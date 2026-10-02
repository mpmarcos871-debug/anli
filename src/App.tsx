import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Check,
  ChevronDown,
  Code2,
  Compass,
  Instagram,
  Layers3,
  Menu,
  PenTool,
  Sparkles,
  X,
} from "lucide-react";
import { TextScanner } from "./components/ui/animated-text-10";

const marcosMessage = `Olá, Marcos! Vim pelo site da ANLI e gostaria de conhecer melhor os serviços da agência.\n\nPara vocês entenderem melhor o que eu preciso:\n\nNome:\nEmpresa/negócio:\nInstagram ou site:\nQual serviço você procura:\nO que você gostaria de melhorar ou criar:\nPrazo aproximado:\n\nObrigado!`;
const arthurMessage = `Olá, Arthur! Vim pelo site da ANLI e gostaria de conhecer melhor os serviços da agência.\n\nPara vocês entenderem melhor o que eu preciso:\n\nNome:\nEmpresa/negócio:\nInstagram ou site:\nQual serviço você procura:\nO que você gostaria de melhorar ou criar:\nPrazo aproximado:\n\nObrigado!`;
const whatsApp = (phone: string, message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const services = [
  { number: "01", icon: PenTool, title: "Sites institucionais", text: "Apresente sua empresa com clareza, fortaleça a confiança na sua marca e ajude o cliente a dar o próximo passo." },
  { number: "02", icon: Layers3, title: "Landing pages", text: "Uma página focada em uma oferta, campanha ou lançamento, com conteúdo organizado para transformar interesse em contato." },
  { number: "03", icon: Compass, title: "Lojas virtuais", text: "Mostre seus produtos, conte a história da marca e crie um caminho de compra simples para seus clientes." },
  { number: "04", icon: Sparkles, title: "Redesign e evolução", text: "Atualize um site que já não representa o seu negócio e melhore sua experiência em celular e computador." },
  { number: "05", icon: Code2, title: "Projetos personalizados", text: "Uma solução digital desenhada em conjunto quando sua ideia pede uma estrutura própria e mais específica." },
];

const principles = [
  ["Design", "Uma identidade digital coerente, reconhecível e alinhada ao jeito da sua marca."],
  ["Experiência", "Navegação simples, conteúdo bem organizado e leitura confortável em qualquer tela."],
  ["Responsividade", "Um site preparado para funcionar bem no celular, tablet e computador."],
  ["Estratégia", "Cada página tem um propósito: apresentar, orientar e facilitar o contato com o seu negócio."],
] as const;

const questions = [
  ["Que tipo de projeto a ANLI desenvolve?", "Criamos sites institucionais, landing pages e lojas virtuais. Também fazemos redesign e projetos digitais personalizados, conforme a necessidade de cada negócio."],
  ["Como começa um projeto?", "A primeira conversa é pelo WhatsApp. Queremos conhecer sua empresa, entender seus objetivos e ouvir o que você precisa antes de sugerir um caminho."],
  ["O que preciso enviar para pedir uma proposta?", "Conte um pouco sobre sua empresa, compartilhe seu site ou Instagram se tiver e explique o que gostaria de criar ou melhorar. Com essas informações, alinhamos os próximos passos."],
  ["Quanto tempo leva para criar um site?", "O prazo depende do escopo, do conteúdo e das etapas de aprovação. Depois de entender o projeto, alinhamos um cronograma realista antes de começar."],
  ["A ANLI atende empresas de outras cidades?", "Sim. O trabalho pode ser feito de forma remota, com conversas e aprovações online ao longo do projeto."],
] as const;

const navigation = [
  ["Soluções", "#servicos"],
  ["Diferenciais", "#diferenciais"],
  ["Processo", "#processo"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
] as const;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="ANLI Agency, início">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">ANLI<span>AGENCY</span></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Navegação principal">
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4" type="video/mp4" />
          </video>
          <div className="hero-atmosphere" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-grid" />
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-line" /><TextScanner text="ANLI" className="eyebrow-scanner" /><span className="eyebrow-label">AGÊNCIA DIGITAL <span className="eyebrow-dot">/</span> BELÉM · PA</span></div>
            <h1>Seu negócio merece<br className="hero-break" />{" "}uma presença digital<br className="hero-break" />{" "}<span className="gradient-word">à altura.</span></h1>
            <p className="hero-copy">Criamos sites profissionais, modernos e estratégicos para empresas que querem apresentar seu valor, conquistar confiança e crescer no digital.</p>
            <p className="hero-services">SITES INSTITUCIONAIS · LANDING PAGES · E-COMMERCE</p>
            <div className="hero-actions">
              <a className="button button--primary" href={whatsApp("5591981241481", marcosMessage)} target="_blank" rel="noopener noreferrer">Falar com Marcos <ArrowUpRight size={17} /></a>
              <a className="button button--glass" href={whatsApp("5591986089166", arthurMessage)} target="_blank" rel="noopener noreferrer">Falar com Arthur <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-bottom"><span>ESTRATÉGIA · DESIGN · DESENVOLVIMENTO</span><a href="#manifesto">DESCUBRA A ANLI <ArrowDown size={13} /></a><span>FEITO NO BRASIL</span></div>
          <div className="hero-orb hero-orb--one" /><div className="hero-orb hero-orb--two" />
        </section>

        <section className="manifesto section-pad" id="manifesto">
          <div className="section-kicker"><span>01 / POSICIONAMENTO</span><span className="kicker-rule" /><span className="kicker-note">MAIS QUE UM SITE. UMA MARCA PRESENTE.</span></div>
          <div className="positioning-grid">
            <div className="positioning-copy">
              <h2>Não criamos apenas sites. <span>Criamos percepção de valor.</span></h2>
              <p>Antes de conversar com a sua empresa, muita gente conhece sua marca pela internet. Um site bem pensado apresenta o seu trabalho, transmite confiança e mostra por que escolher você.</p>
              <p>Na ANLI, juntamos estratégia, design e desenvolvimento para construir uma presença digital profissional, organizada e feita para a realidade do seu negócio.</p>
              <a className="text-link" href="#servicos">Conheça nossas soluções <ArrowUpRight size={15} /></a>
            </div>
            <div className="presence-art" aria-label="Composição tipográfica: Digital presence">
              <span className="presence-art__label">ANLI / DIREÇÃO DIGITAL</span>
              <span className="presence-art__title">Digital<br /><i>presence.</i></span>
              <span className="presence-art__foot">CLAREZA · PRESENÇA · VALOR</span>
              <span className="presence-art__circle" />
            </div>
          </div>
        </section>

        <section className="services section-pad" id="servicos">
          <div className="section-kicker"><span>02 / O QUE FAZEMOS</span><span className="kicker-rule" /><span className="kicker-note">SOLUÇÕES PARA CADA MOMENTO DA SUA MARCA.</span></div>
          <div className="section-heading"><h2>Tudo começa com uma<br /><span>presença digital profissional.</span></h2><p>Escolha o que faz sentido para o seu momento. A gente ajuda a transformar a necessidade em um projeto claro e bem construído.</p></div>
          <div className="service-cards">{services.map(({ number, icon: Icon, title, text }) => <article className="service-card" key={number}><div className="service-card__top"><span>{number} / 05</span><Icon size={18} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><a href="#contato" aria-label={`Conversar sobre ${title}`}><ArrowUpRight size={16} /></a></article>)}</div>
        </section>

        <section className="value section-pad" id="diferenciais">
          <div className="section-kicker"><span>03 / O QUE FAZ A DIFERENÇA</span><span className="kicker-rule" /><span className="kicker-note">CADA DETALHE CONTA.</span></div>
          <div className="value-grid">
            <div className="value-copy"><h2>Seu site fala sobre a sua empresa <span>antes mesmo de você falar.</span></h2><p>Em poucos instantes, quem chega ao seu site forma uma impressão sobre o seu negócio. Por isso, cada escolha precisa trabalhar a favor da sua marca: do conteúdo ao último detalhe da navegação.</p><p>Desenvolvemos experiências digitais que tornam sua proposta mais fácil de entender e seu próximo passo mais simples de encontrar.</p></div>
            <div className="principle-list">{principles.map(([title, text], index) => <article className="principle-row" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><Check size={16} strokeWidth={1.5} /></article>)}</div>
          </div>
        </section>

        <section className="process section-pad" id="processo">
          <div className="process-glow" /><div className="section-kicker"><span>04 / COMO A GENTE FAZ</span><span className="kicker-rule" /><span className="kicker-note">UM PROCESSO CLARO, DO INÍCIO AO FIM.</span></div>
          <div className="section-heading"><h2>Do conceito à<br /><span>presença digital.</span></h2><p>Você participa das decisões e acompanha o projeto de perto. Cada etapa tem um objetivo e prepara o caminho para a próxima.</p></div>
          <div className="process-steps">{[["01", "Conversa", "Entendemos sua empresa, seu momento e o que o projeto precisa resolver."], ["02", "Estratégia", "Organizamos objetivos, conteúdo e prioridades antes de partir para o visual."], ["03", "Desenvolvimento", "Desenhamos e construímos o site com atenção ao conteúdo, à navegação e aos dispositivos."], ["04", "Entrega", "Revisamos tudo com você, publicamos o projeto e orientamos os próximos passos." ]].map(([number, title, text]) => <article className="step" key={number}><span className="step-number">{number}</span><span className="step-symbol"><Asterisk size={21} strokeWidth={1.4} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="about section-pad" id="sobre">
          <div className="section-kicker"><span>05 / QUEM ESTÁ POR TRÁS</span><span className="kicker-rule" /><span className="kicker-note">MARCOS E ARTHUR · ANLI AGENCY</span></div>
          <div className="about-grid"><div className="about-copy"><p className="about-lead">Duas perspectivas.<br /><span>Uma mesma visão.</span></p><p>A ANLI nasceu da parceria entre estratégia, tecnologia e visão de negócio. Marcos e Arthur trabalham juntos para transformar ideias em experiências digitais que representem cada marca com clareza e personalidade.</p><p>Em cada projeto, vocês conversam diretamente com quem pensa e constrói a solução — com proximidade, transparência e cuidado em cada etapa.</p></div><div className="founders"><article className="founder-card"><h3>Marcos</h3><ArrowUpRight size={17} /></article><article className="founder-card"><h3>Arthur</h3><ArrowUpRight size={17} /></article></div></div>
        </section>

        <section className="social section-pad"><div className="social-card"><div className="social-mark"><Instagram size={21} strokeWidth={1.5} /></div><div className="social-copy"><span className="social-kicker">ACOMPANHE A ANLI</span><h2>Ideias, projetos e presença<br />digital em construção.</h2><p>Acompanhe nosso trabalho e conheça mais sobre o universo da ANLI.</p></div><a href="https://www.instagram.com/anliagency/" target="_blank" rel="noopener noreferrer" aria-label="Abrir o Instagram da ANLI, @anliagency" className="social-link"><span>@anliagency</span><ArrowUpRight size={18} /></a><div className="social-decoration">A<span>.</span></div></div></section>

        <section className="manifesto-close section-pad"><div className="section-kicker"><span>06 / SUA MARCA EM EVIDÊNCIA</span></div><h2>A sua marca já existe.<br /><span>Agora ela precisa ser percebida.</span></h2><p>Uma presença digital consistente aproxima sua empresa das pessoas certas e ajuda o seu trabalho a ser reconhecido pelo valor que entrega.</p><a className="text-link" href="#contato">Vamos conversar sobre o próximo passo <ArrowUpRight size={15} /></a></section>

        <section className="faq section-pad" id="faq"><div className="section-kicker"><span>07 / TIRE SUAS DÚVIDAS</span><span className="kicker-rule" /><span className="kicker-note">TUDO BEM PERGUNTAR.</span></div><div className="faq-grid"><div><h2>Perguntas<br /><span>frequentes.</span></h2><p>Se ainda ficou alguma dúvida, fale diretamente com Marcos ou Arthur.</p><a className="text-link" href="#contato">Conversar com a ANLI <ArrowUpRight size={15} /></a></div><div className="faq-list">{questions.map(([question, answer], index) => <article className={openFaq === index ? "faq-item faq-item--open" : "faq-item"} key={question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span><i>0{index + 1}</i>{question}</span><ChevronDown size={17} /></button>{openFaq === index && <p className="faq-answer">{answer}</p>}</article>)}</div></div></section>

        <section className="contact section-pad" id="contato"><div className="contact-glow" /><div className="section-kicker"><span>08 / VAMOS CONVERSAR</span><span className="kicker-rule" /><span className="kicker-note">DIRETO COM A GENTE, PELO WHATSAPP.</span></div><div className="contact-content"><span className="contact-star"><Sparkles size={18} /></span><h2>Pronto para transformar<br />a presença digital <span>do seu negócio?</span></h2><p>Conte o que você está planejando. Vamos entender seu momento e conversar sobre uma solução feita para a sua marca.</p><div className="contact-actions"><a className="button button--primary" href={whatsApp("5591981241481", marcosMessage)} target="_blank" rel="noopener noreferrer">Falar com Marcos <ArrowUpRight size={17} /></a><a className="button button--glass" href={whatsApp("5591986089166", arthurMessage)} target="_blank" rel="noopener noreferrer">Falar com Arthur <ArrowUpRight size={17} /></a></div></div><div className="contact-bottom"><span>MARCOS & ARTHUR · ANLI AGENCY</span><span>FEITO COM INTENÇÃO, NO BRASIL.</span></div></section>
      </main>

      <footer className="site-footer" id="rodape"><a href="#inicio" className="brand" aria-label="ANLI Agency, voltar ao início"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ANLI<span>AGENCY</span></span></a><nav aria-label="Links do rodapé"><a href="#servicos">Soluções</a><a href="#processo">Processo</a><a href="#sobre">Sobre nós</a><a href="https://www.instagram.com/anliagency/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={13} /></a></nav><span className="site-footer__copyright">© 2026 ANLI AGENCY · BELÉM, PARÁ</span></footer>
    </>
  );
}

export default App;
