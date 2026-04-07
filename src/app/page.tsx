"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { BentoCard } from "@/components/ui/BentoCard";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ChevronRightIcon, TimerIcon, ComponentInstanceIcon } from "@radix-ui/react-icons";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none w-full mix-blend-difference">
      <nav className="flex items-center justify-between py-6 text-white w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 pointer-events-auto">
        {/* Left */}
        <div className="w-[150px] flex items-center gap-2">
          <span className="font-semibold tracking-tight text-xl lowercase">oberg.</span>
        </div>
        
        {/* Center */}
        <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-wide text-zinc-400">
          <a href="#diagnostico" className="hover:text-white transition-colors">Diagnóstico</a>
          <a href="#engine" className="hover:text-white transition-colors">Serviços</a>
          <a href="#specs" className="hover:text-white transition-colors">Estrutura</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </div>

        {/* Right */}
        <div className="w-[150px] flex justify-end">
          <MagneticButton className="bg-white text-black px-6 py-2.5 rounded-sm tracking-tight hover:scale-105 active:scale-95 transition-transform font-bold text-xs" magneticIntensity={0.2}>
            Agendar
          </MagneticButton>
        </div>
      </nav>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-[#0A0A0A] text-zinc-100">
      
      {/* Background Image coming from the right */}
      <div className="absolute top-0 right-0 w-full md:w-[65%] h-[100dvh] pointer-events-none">
        <Image
          src="/imagens/hero.jpg"
          alt="Oberg Garage Hero Image"
          fill
          priority
          quality={100}
          sizes="(max-w-768px) 100vw, 65vw"
          className="object-cover object-bottom md:object-right grayscale-[0.3] opacity-80 md:opacity-100 [-webkit-mask-image:none] [mask-image:none] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_80%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_80%)]"
        />
        <div className="absolute inset-0 bg-[#0A0A0A] mix-blend-color z-10 opacity-70 md:opacity-40" />
        
        {/* Mobile gradients to improve text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent md:hidden z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent md:hidden z-20" />
        
        {/* Desktop gradient */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-20" />
        
        {/* Noise Layer */}
        <div className="absolute inset-0 opacity-[0.03] z-30 mix-blend-overlay bg-repeat" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')", backgroundSize: "128px 128px" }} />
      </div>

      {/* Content Container */}
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-12 lg:px-16 h-full relative z-30 flex flex-col justify-start md:justify-center pt-[22vh] md:pt-[10vh] pb-[5vh] min-h-[100dvh]">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
           className="flex flex-col items-start w-full md:w-[60%]"
        >
          {/* Badge */}
          <div className="inline-flex items-center border border-zinc-700/50 rounded-full px-4 py-1 mb-8">
             <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.15em]">Oficina Premium</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-[6.5rem] lg:text-[7.5rem] tracking-tighter leading-[0.95] text-white font-medium mb-6">
            Mecânica <br />
            <span className="text-zinc-400 italic font-light tracking-tight">Avançada.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-[45ch] mb-12 font-light">
            Desenhamos soluções e entregamos performance utilizando diagnóstico de ponta. Rejeitando a manutenção genérica em prol de um serviço cirúrgico e transparente.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-12 md:mb-16 w-full sm:w-auto">
            <MagneticButton className="bg-white text-black px-8 py-3.5 rounded-sm flex items-center justify-center hover:bg-zinc-200 transition-colors w-full sm:w-auto">
              <span className="font-semibold text-sm tracking-tight">Ver Reparos</span>
            </MagneticButton>
            <a href="#metodologia" className="text-sm font-medium text-white hover:text-zinc-400 transition-colors">
              Nossa Metodologia
            </a>
          </div>
        </motion.div>

        {/* Bottom content */}
        <div className="absolute bottom-10 left-8 md:left-12 lg:left-16 right-8 md:right-12 lg:right-16 flex flex-col md:flex-row justify-between items-start md:items-end z-20 gap-8">
          <div className="flex flex-col">
            <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight mb-2">Diagnósticos Precisos.</h3>
            <p className="text-zinc-500 font-light text-sm max-w-[40ch]">
              Peças originais e metodologias das montadoras. Não apenas troca de peças, mas tecnologia automotiva.
            </p>
          </div>

          <a href="#agendar" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#E6E6E6] hover:text-white transition-colors">
            Agendar Avaliação
            <div className="w-8 h-8 rounded-full border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-800 transition-colors">
               <ChevronRightIcon className="w-4 h-4 text-zinc-400" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// Infinite Data Marquee
function DataMarquee() {
  return (
    <div className="w-full bg-zinc-900 border-y border-zinc-800 py-4 overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex gap-16 uppercase font-mono text-xs tracking-[0.2em] text-zinc-500"
      >
        <span>+ Diagnóstico Computadorizado</span>
        <span>+ Suspensão e Freios</span>
        <span>+ Injeção Eletrônica</span>
        <span>+ Troca de Óleo Especial</span>
        <span>+ Mecânica Geral</span>
        <span>+ Revisão Preventiva</span>
        {/* Duplicate for seamless loop */}
        <span>+ Diagnóstico Computadorizado</span>
        <span>+ Suspensão e Freios</span>
        <span>+ Injeção Eletrônica</span>
        <span>+ Troca de Óleo Especial</span>
        <span>+ Mecânica Geral</span>
        <span>+ Revisão Preventiva</span>
      </motion.div>
    </div>
  );
}

const mockDiagnostics = [
  { id: 1, name: "Revisão de Freios e ABS", status: "Em Progresso", time: "AGORA" },
  { id: 2, name: "Escaneamento de Injeção", status: "Concluído", time: "11:15 AM" },
  { id: 3, name: "Limpeza de Bicos", status: "Aguardando", time: "14:30 PM" },
  { id: 4, name: "Alinhamento 3D Computadorizado", status: "Aguardando", time: "16:00 PM" },
];

function IntelligentList() {
  const [items, setItems] = useState(mockDiagnostics);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const next = [...prev];
        const first = next.shift();
        if (first) next.push(first);
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-6 h-full items-start justify-center w-full">
      <div className="font-mono text-xs text-zinc-500 mb-2 uppercase tracking-[0.2em]">Fluxo de Oficina</div>
      <div className="w-full flex-1 relative flex items-center h-full min-h-[220px]">
        <AnimatePresence>
          <div className="w-full flex flex-col gap-3">
            {items.slice(0, 3).map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="flex items-center justify-between py-4 border-b border-zinc-800 last:border-0 w-full"
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-2 h-2 rounded-full", item.status === "Em Progresso" ? "bg-white animate-pulse" : item.status === "Concluído" ? "bg-zinc-500" : "bg-zinc-700")} />
                  <span className="text-[15px] font-medium text-zinc-200">{item.name}</span>
                </div>
                <span className="text-xs text-zinc-500 font-mono tracking-widest">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function GridSection() {
  return (
    <section id="engine" className="w-full bg-black py-24 md:py-32 px-4 md:px-8 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 mt-16 md:mt-0 pl-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">Trabalho <br/><span className="text-zinc-600">Transparente.</span></h2>
            <p className="text-zinc-400 max-w-[45ch] text-lg leading-relaxed">Não somos apenas trocadores de peças. Operamos focados no Brasil, servindo clientes exigentes todos os dias que buscam o mais alto nível de diagnóstico.</p>
          </div>
          <MagneticButton className="bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-sm tracking-tight hover:bg-zinc-800 transition-colors shrink-0">
             Nossos Serviços
          </MagneticButton>
        </motion.div>

        {/* Bento Row 1: 50/50 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BentoCard delay={0.1} className="min-h-[350px] md:min-h-[450px] p-0 group rounded-sm">
             <div className="absolute inset-0">
               <Image 
                src="/assets/oberg_tablet_diagnostic_1775419085830.png" 
                fill 
                alt="Diagnostic" 
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out brightness-75" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-10 left-6 md:left-10 z-10 pr-6 md:pr-10">
              <h3 className="text-white text-3xl font-medium tracking-tight mb-4">Mapeamento em Tempo Real.</h3>
              <p className="text-zinc-300 font-light text-base max-w-[35ch]">
                Visualização detalhada do sistema eletrônico do carro com scanners originais de montadora para identificar falhas com máxima assertividade.
              </p>
            </div>
          </BentoCard>

          <BentoCard delay={0.2} className="min-h-[350px] md:min-h-[450px] flex flex-col justify-between rounded-sm">
            <div className="w-14 h-14 rounded-sm border border-zinc-700 bg-zinc-800 flex items-center justify-center mb-8">
              <ComponentInstanceIcon className="w-6 h-6 text-zinc-300" />
            </div>
            <IntelligentList />
          </BentoCard>
        </div>

        {/* Bento Row 2: 30/70 */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
          <BentoCard delay={0.3} className="min-h-[250px] md:min-h-[400px] flex flex-col justify-between rounded-sm">
             <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-sm border border-zinc-700 bg-zinc-800 flex items-center justify-center relative shadow-sm">
                <TimerIcon className="w-6 h-6 text-zinc-100" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium tracking-tighter text-white mb-2">Transparência Total.</h3>
              <p className="text-zinc-500 font-light text-sm max-w-[25ch]">
                Trocaremos apenas o que for estritamente necessário. Orçamentos diretos, com explicação clara da manutenção exigida pelo fabricante.
              </p>
            </div>
          </BentoCard>

          <BentoCard delay={0.4} className="min-h-[350px] md:min-h-[400px] group relative overflow-hidden bg-zinc-950 p-0 border-zinc-800 rounded-sm">
             <div className="absolute inset-0">
               <Image 
                src="/assets/oberg_abstract_metal_1775419097588.png" 
                fill 
                alt="Peças Premium" 
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-[3s]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            
            <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-center max-w-[90%] md:max-w-[60%]">
              <h3 className="text-white text-4xl font-medium tracking-tight mb-4 leading-tight">Uso de Peças Premium.</h3>
              <p className="text-zinc-300 font-light text-lg mb-8">
                Operamos sempre com itens originais ou linhas premium de reposição, cobrindo com garantia integral todas as peças trocadas.
              </p>
              <MagneticButton className="self-start text-xs font-bold uppercase tracking-widest text-zinc-900 bg-white hover:bg-zinc-200 px-8 py-4 rounded-sm transition-colors flex items-center gap-2">
                Conheça a Metodologia
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </MagneticButton>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function ExtendedPerformanceSection() {
  return (
    <section id="specs" className="w-full bg-black pt-24 pb-12 md:py-32 relative z-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[300px] md:h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden border border-zinc-800 group"
          >
            <Image 
              src="/assets/br_dyno_civic_1775420060495.png" 
              fill 
              alt="Civic Oficina Manutenção" 
              className="object-cover group-hover:scale-105 transition-all duration-[3s] ease-out brightness-90 grayscale-[0.2]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">
              Teste Sob <br/><span className="text-zinc-500">Condições de Pista.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-[40ch]">
              Utilizamos dinamômetros de tração e equipamentos de correção para verificar falhas antes mesmo delas darem dores de cabeça na rua. 
            </p>
            
            <MagneticButton className="self-start mt-2 text-sm font-bold uppercase tracking-widest text-zinc-100 bg-transparent border border-zinc-600 hover:bg-zinc-800 px-8 py-4 rounded-sm transition-colors">
              Falar com Mecânico
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LaboratorioSection() {
  return (
    <section className="w-full bg-black pt-8 pb-8 md:py-32 relative z-20 overflow-hidden">
      <div className="max-w-[100vw] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-between max-w-7xl mx-auto relative">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/3 flex flex-col justify-center md:sticky md:top-32 h-fit relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
              O Padrão <br/><span className="text-zinc-600">Cirúrgico.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 md:mb-12">
              Bancadas limpas, mecânicos uniformizados e organização impecável. Tratamos o coração do seu carro com controle absoluto do ambiente. Sem amadorismo.
            </p>
            <div className="flex flex-col gap-6">
               <div className="flex items-center gap-4 text-zinc-300 font-mono text-sm tracking-widest border-b border-zinc-900 pb-4">
                 <span className="text-zinc-500">01</span> Desmontagem Organizada
               </div>
               <div className="flex items-center gap-4 text-zinc-500 font-mono text-sm tracking-widest border-b border-zinc-900 pb-4 hover:text-zinc-300 transition-colors cursor-default">
                 <span className="text-zinc-700">02</span> Limpeza Técnica
               </div>
               <div className="flex items-center gap-4 text-zinc-500 font-mono text-sm tracking-widest border-b border-zinc-900 pb-4 hover:text-zinc-300 transition-colors cursor-default">
                 <span className="text-zinc-700">03</span> Montagem Precisa
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-2/3 h-[55vw] min-h-[220px] md:h-[700px] relative rounded-sm overflow-hidden group"
          >
            <Image 
              src="/imagens/padrao-cirurgico.jpg" 
              fill 
              alt="O Padrão Cirúrgico" 
              className="object-cover group-hover:scale-110 transition-transform duration-[4s]" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-[3s]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ChassisSection() {
  const cardContent = (
    <>
      <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
        Suspensão <br/><span className="text-zinc-500">e Freios.</span>
      </h2>
      <p className="text-zinc-400 text-lg leading-relaxed mb-10">
        A segurança de condução é indispensável nas vias públicas. Realizamos troca técnica de fluidos e pastilhas originais de cerâmica com sangria profissional.
      </p>
      <ul className="flex flex-col gap-5 border-t border-zinc-900 pt-8">
        <li className="flex justify-between items-center">
          <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Fluido</span>
          <span className="text-white font-mono">Sangria Completa</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Reposição</span>
          <span className="text-white font-mono">Linha Premium OEM</span>
        </li>
      </ul>
    </>
  );

  return (
    <section className="w-full bg-black py-12 md:py-32 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── MOBILE: card acima, imagem abaixo ── */}
        <div className="flex flex-col gap-6 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-zinc-950 border border-zinc-800 p-8 rounded-sm shadow-2xl w-full"
          >
            {cardContent}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[60vw] min-h-[240px] rounded-sm overflow-hidden group"
          >
            <Image
              src="/assets/oberg_brakes_1775419566120.png"
              fill
              alt="Manutenção de Freios"
              className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* ── DESKTOP: imagem à esquerda sobreposta, card à direita ── */}
        <div className="hidden lg:grid lg:grid-cols-[1.5fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[700px] w-[110%] rounded-sm overflow-hidden z-10 group"
          >
            <Image
              src="/assets/oberg_brakes_1775419566120.png"
              fill
              alt="Manutenção de Freios"
              className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out brightness-75 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative z-20 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 p-16 rounded-sm -ml-12 shadow-2xl"
          >
            {cardContent}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function LogisticsSection() {
  return (
    <section className="w-full bg-black py-24 md:py-32 relative z-20 border-t border-zinc-900">
      <div className="max-w-[100vw] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-4 md:px-8 mt-16 md:mt-0 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">
              Leva e Traz <span className="text-zinc-600 font-light italic tracking-tight">Premium.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-[35ch] text-lg leading-relaxed">
            Coleta e entrega exclusiva através de plataforma sider fechada. Levamos nossa excelência até você com total segurança e comodidade, sem que seu carro precise rodar.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[40vh] md:h-[80vh] relative group overflow-hidden"
        >
          <Image 
            src="/imagens/transporte.jpg" 
            fill 
            alt="Leva e Traz Premium" 
            className="object-cover object-center group-hover:scale-105 transition-transform duration-[6s] ease-out opacity-80 group-hover:opacity-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mix-blend-overlay opacity-30 pointer-events-none">
             <span className="text-[10vw] md:text-[8vw] font-bold tracking-tighter uppercase text-white whitespace-nowrap">SEU VEÍCULO SEGURO</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-24 md:pt-32 pb-16 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        <div className="w-full flex justify-between items-end">
          <div className="text-[18vw] sm:text-[9vw] leading-[0.8] tracking-tighter font-medium lowercase text-zinc-100">
            oberg.
          </div>
          <div className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-none border border-zinc-800 hover:bg-zinc-900 cursor-pointer transition-colors mb-2 md:mb-4 shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <ArrowRightIcon className="w-6 h-6 md:w-8 md:h-8 -rotate-90 text-zinc-500" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-16 border-t border-zinc-900 pt-12">
          <div className="text-zinc-500 max-w-[35ch] text-base md:text-lg">
            Sua confiança tem valor. Traga seu carro para uma revisão completa e detalhada num ambiente de ponta.
          </div>
          
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 font-mono text-xs tracking-[0.2em] uppercase text-zinc-400">
            <div className="flex flex-col gap-4">
               <span className="text-white hover:text-zinc-300 transition-colors cursor-pointer">Telemetria</span>
               <span className="text-white hover:text-zinc-300 transition-colors cursor-pointer">Dinamômetro</span>
               <span className="text-white hover:text-zinc-300 transition-colors cursor-pointer">Contato</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="hover:text-white transition-colors cursor-default">+00 (00) 00000-0000</span>
              <span className="hover:text-white transition-colors cursor-default">Seu Endereço Aqui, 1000 - UF</span>
              <div className="flex flex-col gap-2 mt-4 normal-case tracking-normal font-sans">
                <span className="text-zinc-600 text-sm">© 2026 OBERG Automotivo.</span>
                <span className="text-zinc-600 text-xs">
                  Designed & Developed By{" "}
                  <a 
                    href="https://magsolutions.space" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-200 font-medium hover:text-white transition-colors border-b border-zinc-700 hover:border-zinc-400 pb-0.5"
                  >
                    Magno
                  </a>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="w-full flex-1 flex flex-col bg-black selection:bg-zinc-600 selection:text-white">
      <Navbar />
      <HeroSection />
      <DataMarquee />
      <GridSection />
      <ExtendedPerformanceSection />
      <LaboratorioSection />
      <ChassisSection />
      <LogisticsSection />
      <Footer />
    </main>
  );
}
