import { z } from 'zod';

export const step1Schema = z.object({
  serviceType: z.string().min(1, 'Selecciona un tipo de servicio'),
});

export const step2Schema = z.object({
  technology: z.string().min(2, 'Especifica la materia, lenguaje o tecnología (mínimo 2 caracteres)'),
});

export const step3Schema = z.object({
  name: z.string().min(2, 'El nombre completo es obligatorio'),
  email: z.string().email('Correo electrónico corporativo o personal inválido'),
  description: z.string().min(10, 'Por favor detalla tu requerimiento (mínimo 10 caracteres)'),
});