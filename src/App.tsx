import AuthenticatedLayout from "@/components/layouts/AuthenticatedLayout";
import SignInPage from "@/pages/auth/SignIn";
import { authProvider } from "@/providers/auth-provider";
import { dataProvider } from "@/providers/data-provider";
import MainRoutes from "@/routes/MainRoutes";
import { Authenticated, Refine } from "@refinedev/core";
import routerProvider from "@refinedev/react-router-v6";
import { ReactNode } from "react";
import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";

const App = (): ReactNode => {
    return (
        <BrowserRouter>
            <Refine
                dataProvider={dataProvider}
                authProvider={authProvider}
                routerProvider={routerProvider}
            >
                <Routes>
                    {/* main routes */}
                    <Route
                        element={
                            <Authenticated
                                key="main-routes"
                                redirectOnFail="/sign-in"
                            >
                                <AuthenticatedLayout>
                                    <Outlet />
                                </AuthenticatedLayout>
                            </Authenticated>
                        }
                    >
                        <Route path="/*" index element={<MainRoutes />} />
                    </Route>

                    {/* auth routes */}
                    <Route
                        element={
                            <Authenticated
                                key="auth-routes"
                                fallback={<Outlet />}
                            >
                                <Navigate to="/" />
                            </Authenticated>
                        }
                    >
                        <Route path="/sign-in" element={<SignInPage />} />
                    </Route>
                </Routes>
            </Refine>
        </BrowserRouter>
    );
};

export default App;
