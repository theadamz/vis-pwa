import { axiosCustom } from "@/lib/http/axios";
import { SignIn, SignInResponse } from "@/types";
import { AuthProvider } from "@refinedev/core";
import { HttpStatusCode } from "axios";

export const authProvider: AuthProvider = {
    check: async () => {
        const token = localStorage.getItem("access_token");

        return { authenticated: Boolean(token) };
    },
    login: async ({ email, password, remember }: SignIn) => {
        // send request
        const response = await axiosCustom({
            url: "/sign-in",
            method: "post",
            data: { email, password, remember },
        });

        // if status not what expect
        if (![HttpStatusCode.Ok].includes(response.status)) {
            return { success: false, message: response.data.message };
        }

        // get the data
        const data: SignInResponse = response.data;

        // set token
        localStorage.setItem("access_token", data.access_token);

        return { success: true, message: data.message };
    },
    logout: async () => {
        // send request
        const response = await axiosCustom({
            url: "/sign-out",
            method: "post",
        });

        // if status not what expect
        if (![HttpStatusCode.Ok].includes(response.status)) {
            return { success: false, message: response.data.message };
        }

        // remove token
        localStorage.removeItem("access_token");

        return { success: true, message: response.data.message };
    },
    onError: async (error) => {
        if (error?.status === 401) {
            return {
                logout: true,
                error: { message: "Unauthorized" },
            };
        }

        return {};
    },
    // optional methods
    register: async (params) => {
        throw new Error("Not implemented");
    },
    forgotPassword: async (params) => {
        throw new Error("Not implemented");
    },
    updatePassword: async (params) => {
        throw new Error("Not implemented");
    },
    getIdentity: async () => {
        // send request
        const response = await axiosCustom({
            url: "/profile",
        });

        // if status not what expect
        if (![HttpStatusCode.Ok].includes(response.status)) {
            return { success: false, message: response.data.message };
        }

        return response.data;
    },
    getPermissions: async () => {
        throw new Error("Not implemented");
    },
};
