'use server';

import Stripe from 'stripe';
import { redirect } from 'next/navigation';

// Inicializar Stripe con la llave secreta del servidor
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-28.acacia', // Usa la versión estándar actual de la API de Stripe
});

export async function createCheckoutSession(formData: FormData) {
  const serviceName = formData.get('serviceName') as string;
  const amountStr = formData.get('amount') as string;
  const amountInCents = Math.round(parseFloat(amountStr) * 100);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  let checkoutUrl = '';

  try {
    // En app/actions/stripe.ts
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [
    {
      price_data: {
        currency: 'usd',
        product_data: { name: serviceName },
        unit_amount: amountInCents,
      },
      quantity: 1,
    },
  ],
  mode: 'payment',
  // Actualiza estas dos líneas para incluir el idioma (/es/):
  success_url: `${baseUrl}/es/success?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${baseUrl}/es/#pricing`,
});

    if (session.url) {
      checkoutUrl = session.url;
    }
  } catch (error) {
    console.error('Error al crear la sesión de Stripe:', error);
    throw new Error('No se pudo procesar la pasarela de pagos.');
  }

  // La redirección debe ejecutarse fuera del bloque try/catch en Next.js App Router
  if (checkoutUrl) {
    redirect(checkoutUrl);
  }
}