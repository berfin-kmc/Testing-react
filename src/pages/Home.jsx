import SwiperComponent from "./SwiperComponent";
import { getSliders } from "../utils";

import { useLoaderData } from "react-router-dom";

export async function loader() {
    return getSliders()
}

export default function Home() {

    const slidersData = useLoaderData();

    return <div className="flex flex-col justify-center items-center" >
        <SwiperComponent sliderData={slidersData} />
    </div>
}