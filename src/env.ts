import { z } from 'zod'

export const envSchema = z.object({
  API_URL: z.string().url(),
  API_KEY: z.string(),
})

export const env = envSchema.parse(process.env)
