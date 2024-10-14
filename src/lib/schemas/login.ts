import { z } from './ja-zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type LoginSchema = typeof loginSchema
