import React, {useState} from 'react'

import {Outlet} from 'react-router-dom'
import Navbar from './Navbar';
import Sidbar from './Sidbar';
import Footer from './Footer';

function Layout() {
    const [isSidebarCollapsed,
        setSidebarCollapsed] = useState(true);

    const sidebarWidth = isSidebarCollapsed
        ? "ml-16"
        : "ml-64";

    return (
        <div
            className="min-h-screen w-full flex flex-col bg-gray-100 text-gray-800 overflow-x-hidden">
            <Navbar toggleSidebar={() => setSidebarCollapsed(prev => !prev)}/>

            <div className="flex flex-1 pt-14">
                <div
                    onMouseEnter={() => setSidebarCollapsed(false)}
                    onMouseLeave={() => setSidebarCollapsed(true)}
                    className="transition-all duration-300">
                    <Sidbar collapsed={isSidebarCollapsed}/>
                </div>

                <main
                    className={`flex-1 p-6 overflow-auto overflow-x-hidden transition-all duration-300 ${sidebarWidth}`}>
                    <Outlet/>
                </main>
            </div>

            <div className={`transition-all duration-300 ${sidebarWidth}`}>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout
