import ErrorDialog, { ErrorDialogRef } from "@/components/ErrorDialog";
import CheckField from "@/components/forms/CheckField";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/shadcn/ui/button";
import { Form } from "@/components/shadcn/ui/form";
import { Toaster } from "@/components/shadcn/ui/sonner";
import Toast from "@/components/Toast";
import { SignIn } from "@/types";
import { SignInSchema } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@refinedev/core";
import { Loader2 } from "lucide-react";
import { ReactNode, useRef } from "react";
import { useForm } from "react-hook-form";

const SignInPage = (): ReactNode => {
    /*** refine hooks ***/
    const { isLoading, mutateAsync } = useLogin();

    /*** references ***/
    const errorDialog = useRef<ErrorDialogRef>(null);

    /*** form validation ***/
    const form = useForm<SignIn>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "dev",
            password: "123456",
            remember: false,
        },
    });

    const submitForm = async (data: SignIn) => {
        // mutate(data);
        const response = await mutateAsync(data);

        if (!response.success) {
            Toast({ variant: "warning", description: <>{response.message}</> });
        }
    };

    return (
        <Form {...form}>
            {/* error dialog */}
            <ErrorDialog ref={errorDialog} />

            {/* hook */}
            <Toaster />

            <form onSubmit={form.handleSubmit(submitForm)}>
                <div className="w-full h-screen content-center">
                    <div className="flex items-center justify-center my-auto ">
                        <div className="w-full mx-auto px-5 grid gap-6">
                            <div className="grid gap-2 text-center">
                                <h1 className="text-3xl font-bold">
                                    {import.meta.env.VITE_APP_TITLE}
                                </h1>
                                <p className="text-balance text-muted-foreground">
                                    Inspector Only
                                </p>
                            </div>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <InputField
                                        name="email"
                                        type="text"
                                        placeholder="me@email.com / myusername"
                                        label="Email / Username"
                                        form={form}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <InputField
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        label="Password"
                                        form={form}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <CheckField
                                        name="remember"
                                        label="Remember Me"
                                        form={form}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    ) : null}
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default SignInPage;
