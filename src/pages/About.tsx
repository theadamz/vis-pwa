import BackHeader from "@/components/layouts/headers/BackHeader";
import { ReactNode } from "react";

const About = (): ReactNode => {
    return (
        <>
            {/* Header */}
            <BackHeader title="About" />

            {/* main content */}
            <section className="p-4">
                <div className="p-4 bg-white shadow-sm rounded-lg">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Inspector App, This is a PWA (Progressive Web
                        Application) for vehicle inspection.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Only authorize user only can access this App.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Use your account info to authenticate and access the
                        application, if you don't remember your password. Please
                        contact your administrator.
                    </p>
                    <p className="mt-5">IT CAS</p>
                </div>
            </section>
        </>
    );
};

export default About;
