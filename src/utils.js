// use axios instead of fetch

/* While most utilities like axios or 
graphql-request automatically throw errors for 
unsuccessful HTTP calls, some utilities like fetch 
do not throw errors by default. If that's the case, 
you'll need to throw them on your own. 
 */

async function getLang() {
    const res =  await fetch("http://217.131.129.231:8086/api/Home/GetLanguagesList")
    const data = await res.json();
    const langID = data[0].id
    return langID;
}

export async function getMenus() {
    const langID = await getLang();
    const res = await fetch(`http://217.131.129.231:8086/api/Home/GetMenuList/${langID}`)
    const data = await res.json();
    return data;
}

 export async function getSliders() {
    const langID = await getLang();
    const res = await fetch(`http://217.131.129.231:8086/api/Home/GetSliders/1`)
    const data = await res.json();
    return data;
} 

export async function getServices() {
    const langID = await getLang();
    const res = await fetch(`http://217.131.129.231:8086/api/Home/GetServices/${langID}`)
    const data = await res.json();
    return data;
}

export async function getProducts() {
    const langID = await getLang();
    const res = await fetch(`http://217.131.129.231:8086/api/Home/GetProducts/${langID}`)
    const data = await res.json();
    return data;
}



