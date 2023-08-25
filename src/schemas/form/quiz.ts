import { z } from "zod";

export const quizCreationSchema = z.object({
  topic: z
    .string()
    .min(4, { message: "Tópico precisa ter no mínimo 4 caracteres." }),
  type: z.enum(["mcq", "open_ended"]),
  amount: z.number().min(1).max(10),
});
