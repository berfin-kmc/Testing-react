import { useLoaderData } from "react-router-dom";

import DOMPurify from 'dompurify';


import { getModuleContent } from "../utils";

export async function loader() {
    return getModuleContent("GetProducts")
}


export default function Products() {

    const products = useLoaderData();


    const productElements = products.map(product => {

        const clean = DOMPurify.sanitize(product.details);

        return <li className=""
            key={product.id}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="">
                    <div className="ml-about-img">
                        <img src={product.imageUrl} alt="image" />
                    </div>
                </div>

                <div className="text-white">
                    <div className="ml-about-content">

                        <h4 className="text-3xl	mb-3">{product.productName}</h4>

                        <p className="mb-8">{product.discription}</p>


                        <a href={product.code}
                            className="web-page-btn ">Web Page</a>
                    </div>
                </div>



            </div>
            <div className="text-white w-full flex justify-center my-16 table-wrapper" dangerouslySetInnerHTML={{ __html: clean }} />
        </li>
    });


    return (
        <ul className="grid grid-cols-1 gap-4 p-20 justify-center items-center ">
            {productElements}
        </ul>
    );
}