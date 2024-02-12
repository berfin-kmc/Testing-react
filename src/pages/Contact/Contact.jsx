import { useLoaderData } from "react-router-dom"

import { getDynamicContent } from "../../utils"
import MapComponent from "./MapComponent"
import FormComponent from "./FormComponent"

export async function loader() {
    const loaderData = {
        map: await getDynamicContent("GetMapAddress"),
        form: await getDynamicContent("GetMessageItems")
    }
    return loaderData
}

export default function Contact() {
   const data = useLoaderData()

    return <>
    <MapComponent map={data.map.mapAddresses} />
    <FormComponent formData={data.form} />
    </>
}