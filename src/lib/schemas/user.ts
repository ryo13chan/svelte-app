// import { z } from './ja-zod'
import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email().nullish(),
  street: z.string().nullish(),
  suite: z.string().nullish(),
  city: z.string().nullish(),
  zipcode: z.string().nullish(),
  lat: z.string().nullish(),
  lng: z.string().nullish(),
  phone: z.string().nullish(),
  website: z.string().nullish(),
  companyName: z.string().nullish(),
  companyCatchPhrase: z.string().nullish(),
  companyBs: z.string().nullish(),
})
export const editSchema = registerSchema
export const deleteSchema = z.object({
  id: z.number().int().positive(),
})

export type RegisterSchema = typeof registerSchema
export type EditSchema = typeof editSchema
export type DeleteSchema = typeof deleteSchema
