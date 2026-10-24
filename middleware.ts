import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Coincide con todas las rutas excepto archivos estáticos internos y APIs
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};