'use client';
import { createCheckoutSession } from '@/app/actions/stripe';

const services = [
  {
    id: 'mentorship',
    title: 'Mentoría 1 a 1 (Por Hora)',
    price: 45, // Valor numérico para Stripe
    priceDisplay: '$45 USD',
    period: 'por hora',
    description: 'Resolución de dudas en vivo, revisión de código y guía paso a paso.',
    features: [
      'Videollamada en alta definición (Google Meet)',
      'Explicación conceptual detallada',
      'Grabación de la sesión incluida'
    ],
    finePrint: 'Requiere reserva con al menos 24 horas de anticipación. Cancelaciones con menos de 6 horas no son reembolsables.'
  },
  {
    id: 'project',
    title: 'Desarrollo de Proyectos y Prácticas',
    price: 150,
    priceDisplay: 'Desde $150 USD',
    period: 'según alcance',
    description: 'Construcción limpia, estructurada y comentada de soluciones técnicas o laboratorios.',
    features: [
      'Código fuente limpio y documentado (GitHub)',
      'Estructura modular optimizada',
      'Explicación técnica de la arquitectura'
    ],
    finePrint: 'Requiere 50% de pago por adelantado para iniciar y 50% al finalizar la entrega.'
  },
  {
    id: 'retainer',
    title: 'Acompañamiento Integral (Tesis / Semestre)',
    price: 350,
    priceDisplay: '$350 USD',
    period: 'mensual (Cupos limitados)',
    description: 'Soporte continuo, revisiones de arquitectura y mentorías semanales fijas.',
    features: [
      '4 sesiones de mentoría privada al mes',
      'Soporte prioritario por canal directo',
      'Auditoría y revisión constante de avances'
    ],
    finePrint: 'Suscripción mensual renovable o cancelación anticipada con aviso previo de 7 días. Cupos limitados.'
  }
];

export default function Services() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="inline-block text-xs uppercase tracking-widest text-[#ccff00] font-mono mb-3 border border-[#ccff00]/20 px-3 py-1 rounded-full">
          Inversión y Transparencia
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Servicios claros, precios <span className="italic font-serif font-normal text-zinc-400">sin sorpresas.</span>
        </h2>
        <p className="text-zinc-400 max-w-xl text-lg font-light">
          Selecciona el formato de ayuda que mejor se adapte a tu objetivo académico. Pagos seguros procesados globalmente en USD.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative flex flex-col justify-between bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-zinc-100">{service.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-zinc-100">{service.priceDisplay}</span>
                  <span className="text-sm text-zinc-400 font-mono">{service.period}</span>
                </div>
              </div>

              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-zinc-300">
                    <span className="text-[#ccff00] mr-2">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="border-t border-zinc-800/60 pt-4 mb-6">
                <p className="text-xs text-zinc-500 leading-normal font-mono">
                  {service.finePrint}
                </p>
              </div>

              {/* Formulario conectado a la Server Action de Stripe */}
              <form action={createCheckoutSession}>
                <input type="hidden" name="serviceName" value={service.title} />
                <input type="hidden" name="amount" value={service.price} />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full bg-zinc-800 hover:bg-[#ccff00] hover:text-black text-zinc-200 font-medium text-sm transition-all duration-300 cursor-pointer"
                >
                  Pagar por Adelantado y Agendar
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}