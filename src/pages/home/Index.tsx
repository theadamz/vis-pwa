import Card from "@/components/Card";
import ErrorDialog, { ErrorDialogRef } from "@/components/ErrorDialog";
import DefaultHeader from "@/components/layouts/headers/DefaultHeader";
import Spinner from "@/components/Spinner";
import { useLogout } from "@refinedev/core";
import {
    CircleUserRoundIcon,
    LogOutIcon,
    ScanSearchIcon,
    ScrollIcon,
} from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Index = (): ReactNode => {
    /*** refine hooks ***/
    const { mutate, isLoading, failureReason } = useLogout();

    /*** effect ***/
    useEffect(() => {
        if (failureReason) {
            errorDialog.current?.show({ message: failureReason.message });
        }
    }, [failureReason]);

    /*** references ***/
    const errorDialog = useRef<ErrorDialogRef>(null);

    /*** events ***/
    const handleSignOut = () => {
        mutate();
    };

    return (
        <>
            {/* Header */}
            <DefaultHeader />

            {/* error dialog */}
            <ErrorDialog ref={errorDialog} />

            {/* main content */}
            <main className="flex flex-1 flex-col">
                <div className="w-full mt-60">
                    <div className="p-4 grid grid-cols-2 gap-4">
                        <Link to={"/about"}>
                            <Card
                                label="Inspection"
                                icon={<ScanSearchIcon className="size-10" />}
                            />
                        </Link>
                        <Link to={"/about"}>
                            <Card
                                label="About"
                                icon={<ScrollIcon className="size-10" />}
                            />
                        </Link>
                        <Link to={"/profile"}>
                            <Card
                                label="Profile"
                                icon={
                                    <CircleUserRoundIcon className="size-10" />
                                }
                            />
                        </Link>
                        {isLoading ? (
                            <div className="flex justify-center items-center">
                                <Spinner />
                            </div>
                        ) : (
                            <Card
                                onClick={handleSignOut}
                                label="Sign Out"
                                icon={<LogOutIcon className="size-10" />}
                            />
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Index;
