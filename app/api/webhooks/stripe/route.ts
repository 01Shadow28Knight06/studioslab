import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-28.acacia',
});

// El webhook necesita el body crudo (raw body) para verificar la firma de Stripe
export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`⚠️ Error de firma en el Webhook: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Manejar el evento cuando el pago se completa con éxito
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    console.log(`✅ Pago exitoso recibido para la sesión: ${session.id}`);
    console.log(`📧 Correo del cliente: ${session.customer_details?.email}`);

    // Aquí puedes integrar lógica de base de datos o enviar un correo de confirmación automático
  }

  return NextResponse.json({ received: true }, { status: 200 });
}