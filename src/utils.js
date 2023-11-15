async function getLang() {
    const res =  await fetch("http://192.168.1.170:8070/api/Home/GetLanguagesList")
    const data = await res.json();
    const langID = data[0].id
    return langID;
}

export async function getMenus() {
    const langID = await getLang();
    const res = await fetch(`http://192.168.1.170:8070/api/Home/GetMenuList/${langID}`)
    const data = await res.json();
    return data;
}

export async function getServices() {
    const langID = await getLang();
    const res = await fetch(`http://192.168.1.170:8070/api/Home/GetServices/${langID}`)
    const data = await res.json();
    return data;
}

export async function getProducts() {
    const langID = await getLang();
    const res = await fetch(`http://192.168.1.170:8070/api/Home/GetProducts/${langID}`)
    const data = await res.json();
    return data;
}

