import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { cn } from "@/lib/shadcn/utils";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

type InputFieldProps = {
    className?: string;
    placeholder?: string;
    label: string;
    name: string;
    description?: string;
    form: UseFormReturn;
    type: HTMLInputTypeAttribute;
};

const InputField = ({
    className,
    label,
    placeholder,
    name,
    description,
    form,
    type,
}: InputFieldProps): ReactNode => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder ?? ""}
                            {...field}
                            className={cn(
                                className,
                                form.formState.errors[name]
                                    ? "border-red-500"
                                    : ""
                            )}
                        />
                    </FormControl>
                    {description && (
                        <FormDescription>{description}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default InputField;
