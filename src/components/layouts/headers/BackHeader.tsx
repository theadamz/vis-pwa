import { Button } from "@/components/shadcn/ui/button";
import { useBack } from "@refinedev/core";
import { ChevronLeftIcon } from "lucide-react";
import { ReactNode } from "react";

type BackHeaderProps = {
    title: string;
};

const BackHeader = ({ title }: BackHeaderProps): ReactNode => {
    return (
        <nav className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <div className="w-full flex justify-between">
                {/* Main navigation */}
                <nav className="flex text-lg font-medium items-center">
                    <Button
                        type="button"
                        variant={"ghost"}
                        className="mr-3 p-0"
                        onClick={useBack()}
                    >
                        <ChevronLeftIcon className="size-4" />
                    </Button>
                    {title}
                </nav>
            </div>
        </nav>
    );
};

export default BackHeader;
