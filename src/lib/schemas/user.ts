// import { z } from './ja-zod'
import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(1),
})
export const deleteSchema = z.object({
  id: z.number().int().positive(),
})

export type RegisterSchema = typeof registerSchema
export type DeleteSchema = typeof deleteSchema
