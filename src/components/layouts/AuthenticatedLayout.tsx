import { Toaster } from "@/components/shadcn/ui/sonner";
import { PropsWithChildren, ReactNode } from "react";

const AuthenticatedLayout = ({
    children,
}: Readonly<PropsWithChildren>): ReactNode => {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            {children}
            <Toaster />
        </div>
    );
};

export default AuthenticatedLayout;
