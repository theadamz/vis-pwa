import { ReactNode } from "react";

const DefaultHeader = (): ReactNode => {
    return (
        <nav className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <div className="w-full flex justify-between">
                {/* Main navigation */}
                <nav className="flex gap-6 text-lg font-medium items-center">
                    {import.meta.env.VITE_APP_TITLE}
                </nav>
            </div>
        </nav>
    );
};

export default DefaultHeader;
