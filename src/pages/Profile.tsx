import BackHeader from "@/components/layouts/headers/BackHeader";
import { Label } from "@/components/shadcn/ui/label";
import { User } from "@/types";
import { dateTimeJSFormat } from "@/utils/dateHandler";
import { useGetIdentity } from "@refinedev/core";
import { ReactNode } from "react";

const Profile = (): ReactNode => {
    const { data: user } = useGetIdentity<User>();

    return (
        <>
            {/* Header */}
            <BackHeader title="Profile" />

            {/* main content */}
            <section className="p-4">
                <div className="p-4 bg-white shadow-sm rounded-lg">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label className="font-bold">Username</Label>
                            <Label>{user?.username}</Label>
                        </div>
                        <div className="grid gap-2">
                            <Label className="font-bold">Email</Label>
                            <Label>{user?.email}</Label>
                        </div>
                        <div className="grid gap-2">
                            <Label className="font-bold">Name</Label>
                            <Label>{user?.name}</Label>
                        </div>
                        <div className="grid gap-2">
                            <Label className="font-bold">
                                Last Change Password At
                            </Label>
                            <Label>
                                {user &&
                                    dateTimeJSFormat(
                                        new Date(user.last_change_password_at)
                                    )}
                            </Label>
                        </div>
                        <div className="grid gap-2">
                            <Label className="font-bold">Last Login At</Label>
                            <Label>
                                {user &&
                                    dateTimeJSFormat(
                                        new Date(user.last_login_at)
                                    )}
                            </Label>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
