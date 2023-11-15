import { Outlet, useLoaderData } from "react-router-dom";

import Nav from "./Nav"; 


import { getMenus } from "../utils";


export async function loader() {
  return await getMenus()
}


export default function Layout() {

  const menusData = useLoaderData();

  return (
    <div className="app-content-wrap relative">
      <Nav menusData={menusData} />
      <Outlet />
    </div>
  );
}