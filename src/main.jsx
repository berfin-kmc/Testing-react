import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Layout from './components/Layout'
import PagesLayout from './components/PagesLayout'

import Home, { loader as sliderLoader } from './pages/Home/Home'
import Contact, {loader as contactLoader} from './pages/Contact/Contact'
import Services, { loader as serviceLoader } from './pages/Services'
import ComponyProfile, {loader as ComponyProfileLoader} from './pages/About/ComponyProfile'
import Products, { loader as productsLoader } from './pages/Products'
import Error from './components/Error'

import './App.css'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const queryClient = new QueryClient()

function App() {

  const HomeElement = ['home', 'Home', '/'].map((path, i) => <Route key={i} path={path} element={<Home />} loader={sliderLoader} />)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<Error />} >
        {HomeElement}
        <Route element={<PagesLayout />} >
          <Route path="Compony-Profile" element={<ComponyProfile />} loader={ComponyProfileLoader} />
          <Route path="Services" element={<Services />} loader={serviceLoader} />
          <Route path="machines-accessories" element={<Products />} loader={productsLoader} />
          <Route path="Contact" element={<Contact />} loader={contactLoader} />
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
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

