import { Button } from "@/components/shadcn/ui/button";
import { HomeIcon } from "lucide-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = (): ReactNode => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen content-center">
            <div className="bg-white shadow-md rounded-lg mx-4 py-4">
                <div className="flex flex-col items-center">
                    <p className="text-3xl">404</p>
                    <p className="font-medium mb-5">Page Not found</p>
                    <Button onClick={() => navigate("/")}>
                        <HomeIcon className="size-4 mr-2" />
                        Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
