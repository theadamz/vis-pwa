import About from "@/pages/About";
import HomeIndex from "@/pages/home/Index";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

const MainRoutes = (): ReactNode => (
    <Routes>
        <Route path="/" index element={<HomeIndex />} />
        <Route path="/about" index element={<About />} />
        <Route path="/profile" index element={<Profile />} />
        <Route path="/*" index element={<NotFound />} />
    </Routes>
);

export default MainRoutes;
