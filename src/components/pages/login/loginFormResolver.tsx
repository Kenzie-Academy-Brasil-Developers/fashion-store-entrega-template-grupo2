import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().min(1, {message:"E-mail valido e obrigatorio"}),
    password: z.string().min(8, {message:"Ensira uma senha valida"}),
})

export type TLoginFormValues = z.infer<typeof loginFormSchema>