'use client';
import { useState } from 'react';
import { useIntakeStore } from '@/store/useIntakeStore';
import { step1Schema, step2Schema, step3Schema } from '@/lib/validations/intake';

export default function IntakeWizard() {
  const { step, serviceType, technology, name, email, description, setField, nextStep, prevStep, resetStore } = useIntakeStore();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleNext = () => {
    setError(null);
    try {
      if (step === 1) {
        step1Schema.parse({ serviceType });
      } else if (step === 2) {
        step2Schema.parse({ technology });
      }
      nextStep();
    } catch (err: any) {
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      step3Schema.parse({ name, email, description });
      setIsSubmitted(true);
    } catch (err: any) {
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message);
      }
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 lg:px-24 max-w-3xl mx-auto text-center">
        <div className="bg-zinc-900/40 border border-zinc-800/80 p-10 rounded-3xl backdrop-blur-sm">
          <span className="w-14 h-14 rounded-full bg-[#ccff00]/10 text-[#ccff00] flex items-center justify-center mx-auto text-2xl mb-6 font-mono">
            ✓
          </span>
          <h3 className="text-3xl font-bold tracking-tight mb-4">Perfil validado correctamente</h3>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed font-light">
            Hemos registrado tu información. Tu perfil encaja perfectamente con nuestros servicios de mentoría técnica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="px-8 py-3.5 rounded-full bg-[#ccff00] text-black font-medium text-sm hover:bg-[#b3e600] transition-colors"
            >
              Continuar a la Agenda
            </a>
            <button
              onClick={() => {
                resetStore();
                setIsSubmitted(false);
              }}
              className="px-8 py-3.5 rounded-full bg-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              Reiniciar Cuestionario
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="wizard" className="py-24 px-6 lg:px-24 max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <span className="inline-block text-xs uppercase tracking-widest text-[#ccff00] font-mono mb-3 border border-[#ccff00]/20 px-3 py-1 rounded-full">
          Filtro Inteligente de Admisión
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Diseña tu ruta de <span className="italic font-serif font-normal text-zinc-400">asesoría ideal.</span>
        </h2>
        <p className="text-zinc-400 text-sm font-light">
          Paso {step} de 3 — Completa el asistente para verificar disponibilidad.
        </p>
      </div>

      <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
        {/* Barra de Progreso */}
        <div className="w-full bg-zinc-800 h-1 rounded-full mb-8 overflow-hidden">
          <div
            className="bg-[#ccff00] h-full transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
            {error}
          </div>
        )}

        {/* Paso 1: Tipo de Servicio */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-zinc-200">¿Qué formato de servicio necesitas?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Mentoría 1 a 1', 'Desarrollo de Proyecto', 'Acompañamiento Integral'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setField('serviceType', type)}
                  className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
                    serviceType === type
                      ? 'border-[#ccff00] bg-[#ccff00]/5 text-zinc-100'
                      : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <span className="block font-medium text-sm text-zinc-200 mb-1">{type}</span>
                  <span className="text-xs text-zinc-500 font-mono">Seleccionar opción</span>
                </button>
              ))}
            </div>
            <div className="flex justify-end pt-6">
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3.5 rounded-full bg-[#ccff00] text-black font-medium text-sm hover:bg-[#b3e600] transition-colors cursor-pointer"
              >
                Siguiente Paso →
              </button>
            </div>
          </div>
        )}

        {/* Paso 2: Materia o Tecnología */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-zinc-200">¿Cuál es la materia, lenguaje o tecnología principal?</h3>
            <div>
              <input
                type="text"
                value={technology}
                onChange={(e) => setField('technology', e.target.value)}
                placeholder="Ej. React, Python, Cálculo II, Arquitectura de Software..."
                className="w-full bg-zinc-950/60 border border-zinc-800 rounded-2xl px-6 py-4 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] transition-colors text-sm"
              />
            </div>
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-8 py-3.5 rounded-full bg-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                ← Atrás
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3.5 rounded-full bg-[#ccff00] text-black font-medium text-sm hover:bg-[#b3e600] transition-colors cursor-pointer"
              >
                Siguiente Paso →
              </button>
            </div>
          </div>
        )}

        {/* Paso 3: Datos de Contacto y Descripción */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-medium text-zinc-200">Cuéntanos sobre tu caso y cómo contactarte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">NOMBRE COMPLETO</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setField('name', e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-2xl px-6 py-3.5 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">CORREO ELECTRÓNICO</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setField('email', e.target.value)}
                  placeholder="tucorreo@universidad.edu"
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-2xl px-6 py-3.5 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2">DESCRIPCIÓN BREVE DEL RETO O PROYECTO</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setField('description', e.target.value)}
                placeholder="Explica brevemente qué necesitas resolver o desarrollar..."
                className="w-full bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] text-sm"
              />
            </div>
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-8 py-3.5 rounded-full bg-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                ← Atrás
              </button>
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-[#ccff00] text-black font-medium text-sm hover:bg-[#b3e600] transition-colors cursor-pointer"
              >
                Validar y Enviar Perfil
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}