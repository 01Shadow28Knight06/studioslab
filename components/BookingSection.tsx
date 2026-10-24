'use client';
import { useEffect } from 'react';

export default function BookingSection() {
  useEffect(() => {
    // Si utilizas el SDK de Cal.com, puedes inicializar los scripts de incrustación aquí.
  }, []);

  return (
    <section id="booking" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
      {/* Encabezado de la sección */}
      <div className="mb-16 text-center">
        <span className="inline-block text-xs uppercase tracking-widest text-[#ccff00] font-mono mb-3 border border-[#ccff00]/20 px-3 py-1 rounded-full">
          Disponibilidad en Tiempo Real
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Reserva tu <span className="italic font-serif font-normal text-zinc-400">espacio directo.</span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg font-light">
          Selecciona el día y la hora que mejor se acomoden a tu agenda. El sistema detectará automáticamente tu zona horaria local.
        </p>
      </div>

      {/* Contenedor del Calendario con Estética de Alta Gama */}
      <div className="relative bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-4 md:p-8 backdrop-blur-sm shadow-2xl overflow-hidden">
        <div className="w-full min-h-162.5 flex flex-col items-center justify-center">
          {/* 
            Reemplaza el atributo 'src' con tu enlace de Cal.com o Calendly configurado en modo oscuro (?theme=dark)
          */}
          <iframe
            src="https://cal.com/tu-usuario/asesoria?embed=true&theme=dark"
            width="100%"
            height="650px"
            frameBorder="0"
            className="rounded-2xl bg-transparent border-0"
            title="Agenda tu mentoría académica"
          />
        </div>
      </div>
    </section>
  );
}