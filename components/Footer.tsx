export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090b] text-zinc-400 py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Columna 1: Marca y Propósito */}
        <div className="md:col-span-2">
          <a href="#" className="text-zinc-100 font-semibold text-lg tracking-tight flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
            <span>TuNombre<span className="text-zinc-500 font-mono text-sm ml-1">.dev</span></span>
          </a>
          <p className="text-sm text-zinc-400 max-w-sm font-light leading-relaxed">
            Mentoría académica y desarrollo de proyectos universitarios de alto rendimiento. Enfoque 100% ético, confidencial y orientado a resultados globales.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-zinc-200 font-mono mb-4">Navegación</h4>
          <ul className="space-y-3 text-sm font-light">
            <li><a href="#pricing" className="hover:text-zinc-100 transition-colors">Servicios y Precios</a></li>
            <li><a href="#booking" className="hover:text-zinc-100 transition-colors">Agenda Interactiva</a></li>
            <li><a href="#faq" className="hover:text-zinc-100 transition-colors">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Columna 3: Legal y Privacidad */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-zinc-200 font-mono mb-4">Legal & Ética</h4>
          <ul className="space-y-3 text-sm font-light">
            <li><a href="#terms" className="hover:text-zinc-100 transition-colors">Términos de Servicio</a></li>
            <li><a href="#privacy" className="hover:text-zinc-100 transition-colors">Política de Privacidad</a></li>
            <li><a href="#ethics" className="hover:text-zinc-100 transition-colors">Compromiso Ético</a></li>
          </ul>
        </div>
      </div>

      {/* Barra inferior: Copyright y Redes */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
        <p>&copy; {new Date().getFullYear()} TuNombre. Todos los derechos reservados.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
          <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">WhatsApp Directo</a>
        </div>
      </div>
    </footer>
  );
}