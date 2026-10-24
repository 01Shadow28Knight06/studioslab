// i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A añade los idiomas que soporte tu plataforma
  locales: ['en', 'es'],
  defaultLocale: 'es',
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);