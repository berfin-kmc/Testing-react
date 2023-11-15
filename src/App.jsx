import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [languagesList, setLanguagesList] = useState()
  const [menuList, setMenuList] = useState()
  const [mainMenuList, setMainMenuList] = useState()


  function mainMenus(menus) {
    const mains = menus.filter(menu => menu.id_Parent === 0)
    setMainMenuList(mains)
    console.log(mains)
  }

  function fetchMenuList(id) {
    fetch(`http://192.168.1.170:8070/api/Home/GetMenuList/${id}`)
      .then(res => res.json())
      .then(data => {
        setMenuList(data)
        mainMenus(data)
      })
  }

  useEffect(() => {
    fetch("http://192.168.1.170:8070/api/Home/GetLanguagesList")
      .then(res => res.json())
      .then(data => {
        setLanguagesList(data[0])
        console.log(data[0])
        fetchMenuList(data[0].id)
      })
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold " >hello world</h1>
    </>
  )
}

export default App
