import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { navbarLeftButtons, createNavbarRightIcons } from "../../config/navbarConfig";

const Navbar = ({ toggleSidebar }) => {
    const location = useLocation();
    const { user, isAuthenticated } = useAuth0();
    const navbarRightIcons = createNavbarRightIcons({ user, isAuthenticated });

    const renderNavbarItem = (item, idx) => {
        if (item.type === "user") {
            return (
                <div key={idx} className="flex items-center gap-2 text-green-500 text-sm">
                    <span className="bg-green-200 text-green-800 rounded-full px-2 py-0.5 text-xs">●</span>
                    <span className="font-semibold">{item.userName}</span>
                </div>
            );
        }

        if (item.type === "component") {
            const Component = item.component;
            return (
                <div key={idx} className="flex items-center gap-2 text-purple-500 text-sm">
                    <Component />
                </div>
            );
        }

        const iconElement = (
            <FontAwesomeIcon
                icon={item.icon}
                className={`${item.color || "text-white"} cursor-pointer`}
                title={item.title}
                onClick={item.onClick}
            />
        );

        return item.path ? (
            <Link key={idx} to={item.path} title={item.title}>
                {iconElement}
            </Link>
        ) : (
            <span key={idx}>{iconElement}</span>
        );
    };

    return (
        <nav className="fixed top-0 left-0 w-full h-14 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-4 flex items-center z-50 shadow-md">
            {/* Sidebar Toggle Button */}
            {location.pathname !== "/" && (
                <button
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                    className="text-white text-2xl mr-4 hover:text-blue-300 focus:outline-none"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            )}

            <div className="flex items-center justify-between w-full overflow-x-auto whitespace-nowrap">
                {/* Left Navigation */}
                <div className="flex items-center gap-4 text-sm font-medium">
                    {navbarLeftButtons.map((btn, idx) => (
                        <Link
                            key={idx}
                            to={btn.path}
                            className={`${btn.color} ${btn.sizeClass || 'text-sm'} flex items-center gap-1`}
                        >
                            <FontAwesomeIcon icon={btn.icon} /> {btn.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side Icons */}
                <div className="flex items-center gap-4 text-lg">
                    {navbarRightIcons.map(renderNavbarItem)}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
