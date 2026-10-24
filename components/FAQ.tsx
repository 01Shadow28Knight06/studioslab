'use client';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Los servicios son 100% confidenciales?',
    answer: 'Absolutamente. Todos tus datos personales, fragmentos de código y archivos de proyectos se manejan bajo estricta confidencialidad. Nunca se exponen públicamente ni se comparten con terceros.'
  },
  {
    question: '¿Hacen exámenes o pruebas técnicas en vivo?',
    answer: 'No. Por razones éticas y de cumplimiento académico, no realizamos exámenes ni suplantamos identidades en pruebas oficiales. Nuestro enfoque es 100% pedagógico: te preparamos, te explicamos los conceptos y te enseñamos a resolverlos por ti mismo.'
  },
  {
    question: '¿Cómo funcionan los pagos y qué moneda se utiliza?',
    answer: 'Los pagos se procesan de manera anticipada y segura a través de pasarelas internacionales (Stripe) utilizando USD o EUR. El sistema convierte automáticamente la moneda de tu país sin complicaciones ni cargos ocultos.'
  },
  {
    question: '¿Cuál es la política de reembolsos y cancelaciones?',
    answer: 'Las sesiones de mentoría 1 a 1 se pueden reprogramar o cancelar con al menos 6 horas de anticipación sin cargo. Los proyectos por encargo requieren un 50% de seña para iniciar y cuentan con políticas de revisión detalladas en los términos del servicio.'
  },
  {
    question: '¿Ofrecen soporte bilingüe (Español e Inglés)?',
    answer: 'Sí. Toda la plataforma, las sesiones de mentoría y la documentación del código se pueden coordinar perfectamente tanto en español como en inglés según tu preferencia global.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 lg:px-24 max-w-5xl mx-auto">
      {/* Encabezado */}
      <div className="mb-16 text-center">
        <span className="inline-block text-xs uppercase tracking-widest text-[#ccff00] font-mono mb-3 border border-[#ccff00]/20 px-3 py-1 rounded-full">
          Resolución de Dudas
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Preguntas <span className="italic font-serif font-normal text-zinc-400">frecuentes.</span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg font-light">
          Todo lo que necesitas saber sobre confidencialidad, pagos por adelantado, ética académica y modalidades de trabajo.
        </p>
      </div>

      {/* Lista del Acordeón */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
              >
                <span className="text-lg font-medium text-zinc-200">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-[#ccff00] font-mono text-xl ${isOpen ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'
                }`}
              >
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}