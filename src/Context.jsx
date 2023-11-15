import React, { useEffect, useState } from "react";

// import { getMenus } from "./utils.js"



const Context = React.createContext();

function ContextProvider({ children }) {

    const [menusData, setMenusData] = useState([])

    async function getLang() {
        const res = await fetch("http://192.168.1.170:8070/api/Home/GetLanguagesList")
        const data = await res.json();
        const langID = data[0].id
        return langID;
    }

    /*    export async function getMenus() {
           const langID = await getLang();
           const res = await fetch(`http://192.168.1.170:8070/api/Home/GetMenuList/${langID}`)
           const data = await res.json();
           return data;
       } */

    useEffect(() => {
        fetch(`http://192.168.1.170:8070/api/Home/GetMenuList/2`)
        .then((res) => res.json())
        .then((data) => {
            setMenusData(data)
        });
    }, [])


    return (
        <Context.Provider
            value={{
                menusData
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };