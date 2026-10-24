'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-element',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#ccff00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl z-10">
        <span className="hero-element inline-block text-xs uppercase tracking-widest text-[#ccff00] font-mono mb-4 border border-[#ccff00]/20 px-3 py-1 rounded-full">
          {t('badge')}
        </span>

        <h1 className="hero-element text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
          {t('title')} <span className="italic font-serif font-normal text-zinc-400">{t('titleHighlight')}</span>
        </h1>

        <p className="hero-element text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light">
          {t('description')}
        </p>

        <div className="hero-element flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#ccff00] text-black font-medium hover:bg-[#b3e600] transition-colors"
          >
            {t('ctaPricing')}
          </a>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium hover:bg-zinc-800 transition-colors"
          >
            {t('ctaBooking')}
          </a>
        </div>
      </div>
    </section>
  );
}