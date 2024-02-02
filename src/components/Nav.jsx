import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getMenus } from "../utils";


import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function Nav({ postQuery }) {

   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  

    if (postQuery.isLoading) return <h1>Loading...</h1>
    if (postQuery.isError) return <h1>Error!!!</h1>

    const menus = postQuery.data.reduce((acc, menuItem) => {

        const parentMenu = acc[menuItem.id_Parent] || [];
        parentMenu.push(menuItem);
        acc[menuItem.id_Parent] = parentMenu;
        return acc;
    }, {});

    const mainMenus = menus[0]

    const mainMenuElements = mainMenus.map(mainMenu => {

        if (menus[mainMenu.id]) {
            return <Popover className="relative flex items-center" key={mainMenu.id}>
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                    {mainMenu.title}
                    <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="false" />
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            {menus[mainMenu.id].map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >

                                    <div className="flex-auto">
                                        <NavLink to={item.urlTitle} className="block font-semibold text-gray-900" key={item.id}>
                                            {item.title}
                                            <span className="absolute inset-0" />
                                        </NavLink>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

        } else {

            return <NavLink key={mainMenu.id}
                to={mainMenu.urlTitle}
                className={ menus[mainMenu.id] ? "text-red-500" : " " + "text-sm font-semibold leading-6 text-white  flex items-center"}  >
                {mainMenu.title}
            </NavLink>
        }
    });


    const mobileMenuElements = mainMenus.map(mainMenu => {
        if (menus[mainMenu.id]) {
            return <Disclosure as="div" className="-mx-3" key={mainMenu.id}>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            {mainMenu.title}
                            <ChevronDownIcon
                                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                aria-hidden="true"
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                            {menus[mainMenu.id].map((item) => (
                                <Disclosure.Button
                                    key={item.id}
                                    as="a"
                                    href={item.urlTitle}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {item.title}
                                </Disclosure.Button>
                            ))}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        } else {
            return <NavLink key={mainMenu.id}
                to={mainMenu.urlTitle}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
                {mainMenu.title}
            </NavLink>
        }
    })



    return (


        <header className="absolute">
            <nav className="mx-auto flex w-screen items-center justify-between p-6" aria-label="Global">
                <div className="flex h-full">
                    <NavLink to={"/"} className="-m-1.5 p-1.5 w-full flex items-center">
                        <span className="sr-only">Manufactorinx</span>
                        <img className="h-full w-auto" src="src\assets\logo.png" alt="" />
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>


                <Popover.Group className="hidden lg:flex lg:gap-x-8 px-3">

                    {mainMenuElements}
                </Popover.Group>




            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Manufactronix</span>
                            <img
                                className="h-8 w-auto"
                                src="src\assets\logo.png"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">

                            {mobileMenuElements}


                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}