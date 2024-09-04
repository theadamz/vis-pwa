import { Checkbox } from "@/components/shadcn/ui/checkbox";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn/ui/form";
import { cn } from "@/lib/shadcn/utils";
import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

type CheckFieldProps = {
    className?: string;
    label: string;
    name: string;
    description?: string;
    form: UseFormReturn;
};

const CheckField = ({
    className,
    label,
    name,
    description,
    form,
}: CheckFieldProps): ReactNode => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <div className="flex items-center space-x-2">
                        <FormControl>
                            <Checkbox
                                {...field}
                                defaultChecked={field.value}
                                className={cn(
                                    className,
                                    form.formState.errors[name]
                                        ? "border-red-500"
                                        : ""
                                )}
                                onCheckedChange={(checked) =>
                                    form.setValue(
                                        name,
                                        checked === "indeterminate"
                                            ? false
                                            : checked
                                    )
                                }
                            />
                        </FormControl>
                        <FormLabel>{label}</FormLabel>
                    </div>
                    {description && (
                        <FormDescription>{description}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default CheckField;
