import React, { useEffect, useState } from "react";

// import { getMenus } from "./utils.js"

const Context = React.createContext();

function ContextProvider({ children }) {

    const [menusData, setMenusData] = useState([])

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