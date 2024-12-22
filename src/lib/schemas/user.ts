import { z } from './ja-zod'

export const deleteSchema = z.object({
  id: z.number().int().positive(),
})

export type DeleteSchema = typeof deleteSchema
