// use axios instead of fetch

/* While most utilities like axios or 
graphql-request automatically throw errors for 
unsuccessful HTTP calls, some utilities like fetch 
do not throw errors by default. If that's the case, 
you'll need to throw them on your own. 
 */


async function getLang() {
    const res = await fetch("http://217.131.129.231:8086/api/Home/GetLanguagesList");
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    const langID = data[0].id;
    return langID;
}

export async function getMenus() {
    try {
        const langID = await getLang();
        const res = await fetch(`http://217.131.129.231:8086/api/Home/GetMenuList/${langID}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching menus:", error);
        throw error;
    }
}

export async function getDynamicContent(fnName) {
    try {
        const menus = await getMenus();
        const currentMenu = menus.filter(menu => menu.urlTitle === window.location.pathname.slice(1));
        const menuId = currentMenu[0].id || 1;
        const res = await fetch(`http://217.131.129.231:8086/api/Home/${fnName}/${menuId}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching dynamic content:", error);
        throw error;
    }
}

export async function getModuleContent(fnName) {
    try {
        const langID = await getLang();
        const res = await fetch(`http://217.131.129.231:8086/api/Home/${fnName}/${langID}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching module content:", error);
        throw error;
    }
}








