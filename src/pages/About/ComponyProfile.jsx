import {getDynamicContent } from "../../utils";

import { useLoaderData } from "react-router-dom";

export async function loader() {
    return getDynamicContent("GetContents")
}

export default function ComponyProfile() {

    const slidersData = useLoaderData()
    console.log(slidersData)

    return <h1>ComponyProfile</h1>
}