'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 h-20 flex items-center justify-between">
        <a href="#" className="text-zinc-100 font-semibold text-lg tracking-tight flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
          <span>TuNombre<span className="text-zinc-500 font-mono text-sm ml-1">.dev</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-light">
          <a href="#pricing" className="hover:text-zinc-100 transition-colors">Servicios</a>
          <a href="#booking" className="hover:text-zinc-100 transition-colors">Agenda</a>
          <a href="#faq" className="hover:text-zinc-100 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3.5 py-1.5 rounded-full border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-zinc-700 transition-colors cursor-pointer uppercase"
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>

          <a
            href="#booking"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#ccff00] text-black font-medium text-sm hover:bg-[#b3e600] transition-colors"
          >
            {locale === 'es' ? 'Agendar Sesión' : 'Book Session'}
          </a>
        </div>
      </div>
    </header>
  );
}