import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Nav from "./Nav"; 


import { getMenus } from "../utils";
import Footer from "./Footer";




export default function Layout() {

  const postQuery = useQuery({
    queryKey: ["menusData"],
    queryFn: () => getMenus()
})

  return (
    <div className="app-content-wrap relative">
      <Nav  postQuery={postQuery} />
      <Outlet />
      <Footer />
    </div>
  );
}