import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sidebarConfig } from '../../config/sidebarConfig';
import { Link, useLocation } from 'react-router-dom';
import { faFlask } from "@fortawesome/free-solid-svg-icons";

// Section title
const SidebarSection = ({ title, collapsed }) => (
    <div className={`p-2 text-lg font-semibold text-yellow-400 ${collapsed ? 'hidden' : 'block'}`}>
        {title}
    </div>
);

// Sidebar item with optional sub-items
const SidebarItem = ({ icon, label, path, subItems = [], collapsed }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const isCollapsible = subItems.length > 0;

    const isActive = path === location.pathname;

    return (
        <div className="px-2">
            <button
                onClick={() => isCollapsible ? setOpen(!open) : null}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full
          hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 
          transition shadow hover:shadow-lg 
          ${collapsed ? 'justify-center' : 'justify-between'} 
          ${isActive ? 'bg-blue-600 bg-opacity-30 font-medium' : ''}`}
            >
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={icon} className="text-white text-xl min-w-[1.5rem]" />
                    {!collapsed && (
                        isCollapsible ? <span>{label}</span> :
                            <Link to={path} className="w-full text-left">{label}</Link>
                    )}
                </div>
                {!collapsed && isCollapsible && <span>{open ? '▾' : '▸'}</span>}
            </button>

            {/* Sub-items */}
            {!collapsed && isCollapsible && open && (
                <div className="ml-6 mt-1 text-sm text-gray-300 space-y-1">
                    {subItems.map((sub, index) => (
                        <Link
                            key={index}
                            to={sub.path}
                            className={`block hover:text-white px-2 py-1 rounded-md 
                ${location.pathname === sub.path ? 'text-white font-medium bg-blue-600 bg-opacity-20' : ''}`}
                        >
                            {sub.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

// Full Sidebar component
export default function Sidebar({ collapsed }) {
    return (
        <aside
            className={`fixed top-14 left-0 h-[calc(100vh-3.5rem)] 
        ${collapsed ? 'w-16' : 'w-64'} 
        bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 
        text-white flex flex-col justify-between z-40 
        shadow-2xl shadow-black/70 rounded-r-2xl 
        transition-all duration-300 ease-in-out 
        ${collapsed ? 'overflow-y-hidden' : 'overflow-y-auto'} pb-6`}
        >


            <div className="pt-6 space-y-1">

                <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 flex items-center justify-center h-14">
                    <FontAwesomeIcon icon={faFlask} className="text-2xl text-white mr-2" />
                    {!collapsed && (
                        <span className="text-2xl font-bold text-white tracking-wide">
                            MediLabPro

                        </span>
                    )}
                </div>

                {sidebarConfig.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        <SidebarSection title={section.section} collapsed={collapsed} />
                        {section.items.map((item, itemIndex) => (
                            <SidebarItem
                                key={itemIndex}
                                icon={item.icon}
                                label={item.label}
                                path={item.path}
                                subItems={item.subItems || []}
                                collapsed={collapsed}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </aside>
    );
}
