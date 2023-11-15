
import { useLoaderData } from "react-router-dom";

import { getServices } from "../utils";

export async function loader() {
    return getServices()
}


export default function Services() {

    const services = useLoaderData();



    const serviceElements = services.map(service => {
        return <div className="py-5 service-box  px-2 flex flex-col justify-start h-full" key={service.id}>
            <div className="service-icon pt-2 pb-5">
                <img src="http://217.131.129.231:8089/Images/Services/Gallery/60a42762-5ca6-4cfb-8719-03815e049ebaicon5.png" alt="" />
            </div>
            <div className="">
            <h1 className="text-white capitalize font-bold my-2">{service.title}</h1>
            <p className="text-white">{service.description}</p>

            </div>
        </div>
    });


    return (
        <div className="grid grid-cols-2 gap-4 p-20 justify-center items-center ">
            {serviceElements}
        </div>
    );
}