import SwiperComponent from "./SwiperComponent";
import { getDynamicContent} from "../../utils";


import { useLoaderData } from "react-router-dom";
import HomeServices from "./HomeServices";
import Features from "./Features";
import DiscoverArea from "./DiscoverArea";


export async function loader() {
    const loaderData = {
        sliders: await getDynamicContent("GetSliders"),
        content: await getDynamicContent("GetContents")
    }
    return loaderData
}

export default function Home() {

    const slidersData = useLoaderData().sliders;
    const contentsData = useLoaderData().content;

    const firstContent = contentsData.filter(contentsData => contentsData.orders === 1)

    const secondContent = contentsData.filter(contentsData => contentsData.orders === 2)

    const thirdContent = contentsData.filter(contentsData => contentsData.orders === 3)

    return <div className="flex flex-col justify-center items-center" >
        <SwiperComponent sliderData={slidersData} />
        <Features content={firstContent} />
        <HomeServices content={secondContent} />
        <DiscoverArea content={thirdContent} />

    </div>
}