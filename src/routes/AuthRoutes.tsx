import SignInPage from "@/pages/auth/SignIn";
import { Authenticated } from "@refinedev/core";
import { ReactNode } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

const AuthRoutes = (): ReactNode => {
    return (
        <Routes>
            <Route
                element={
                    <Authenticated key="auth-routes" fallback={<Outlet />}>
                        <Navigate to="/" />
                    </Authenticated>
                }
            >
                <Route path="/login" element={<SignInPage />} />
            </Route>
        </Routes>
    );
};

export default AuthRoutes;
