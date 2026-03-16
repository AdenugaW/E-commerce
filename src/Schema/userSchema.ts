import { email, z } from "zod";
export const createUserSchema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3" }),
  email: z.email({ message: "Please enter a valid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password msut be at least 8 characters" }),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(2),
});

export type createUserInput = z.infer<typeof createUserSchema>;
