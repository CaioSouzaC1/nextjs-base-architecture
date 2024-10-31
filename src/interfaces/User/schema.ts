import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, "E-mail obrigatório.")
    .email("Formato de e-mail incorreto.")
    .transform((email) => email.toLocaleLowerCase()),
  password: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres."),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;
