import React from 'react'
import ReactDOM from 'react-dom/client'

import Layout, { loader as menuLoader } from './components/Layout'
import PagesLayout from './components/PagesLayout'

import Home from './pages/Home'
import Services, { loader as serviceLoader } from './pages/Services'
import Products, { loader as productsLoader } from './pages/Products'
import { ContextProvider } from "./Context"

import './App.css'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";





function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} loader={menuLoader}>
        <Route index path="Home" element={<Home />} />
        <Route element={<PagesLayout />} >
          <Route path="Services" element={<Services />} loader={serviceLoader} />
          <Route path="machines-accessories" element={<Products />} loader={productsLoader} />
        </Route>
      </Route>
    )
  );
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

