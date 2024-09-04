import { z } from "zod";

export const SignInSchema = z.object({
    email: z.string().min(3).max(255),
    password: z.string().min(3),
    remember: z.boolean(),
});

export const SignInRes = z.object({
    message: z.string(),
    access_token: z.string(),
    token_type: z.string(),
});
