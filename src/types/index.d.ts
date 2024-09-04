import { SignInRes, SignInSchema } from "./schema";

export type OutletContext = {
    mode: "header" | "back" | "none";
    title?: string;
};
export type User = {
    username: string;
    email: string;
    name: string;
    last_change_password_at: Date;
    last_login_at: Date;
};

export type SignIn = z.infer<typeof SignInSchema>;
export type SignInResponse = z.infer<typeof SignInRes>;
