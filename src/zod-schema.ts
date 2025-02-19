import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(2).max(50),
    description: z.string().min(10).max(200)
  })