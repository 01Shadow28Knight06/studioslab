import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"] });
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export const metadata: Metadata = {
  title: "Academic & Tech Mentorship | Global Expert Services",
  description: "Asesorías y desarrollo de proyectos universitarios de alto rendimiento.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validar si el idioma es soportado
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Cargar los mensajes en el servidor
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} bg-[#09090b] text-zinc-100 antialiased selection:bg-[#ccff00] selection:text-black`}>
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

