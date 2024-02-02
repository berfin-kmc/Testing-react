import { Outlet, useLocation } from 'react-router-dom';

export default function PagesLayout() {

    let location = useLocation();

    return <>
        <div className="relative isolate page-banner flex items-center justify-center">
            <div className="absolute page-banner-bg"></div>

            <div className="mx-auto max-w-4xl">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center items-center">

                </div>
                <div className="text-center">
                    <h3 className="text-3xl font-bold tracking-tight text-white sm:text-5xl capitalize">
                        {location.pathname.replace("/", "").replace("-" , " ")}
                    </h3>
                </div>
            </div>
        </div>
        <Outlet />
    </>

}