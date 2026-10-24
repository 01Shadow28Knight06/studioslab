import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm">
        <span className="w-12 h-12 rounded-full bg-[#ccff00]/10 text-[#ccff00] flex items-center justify-center mx-auto text-xl mb-6 font-mono">
          ✓
        </span>
        <h1 className="text-3xl font-bold tracking-tight mb-4">¡Pago completado con éxito!</h1>
        <p className="text-zinc-400 text-sm mb-8 leading-relaxed font-light">
          Tu transacción se ha procesado de forma segura. Revisa tu correo electrónico para ver el recibo y los detalles para confirmar tu horario en el calendario.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center w-full py-3.5 rounded-full bg-[#ccff00] text-black font-medium text-sm hover:bg-[#b3e600] transition-colors"
        >
          Volver al Inicio
        </Link>
      </div>
    </main>
  );
}