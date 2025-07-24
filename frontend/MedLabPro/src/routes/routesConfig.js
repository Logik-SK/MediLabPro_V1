// src/config/appRoutes.js
import { routePageConfig } from './routePageConfig';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import LogoutPopup from '../components/auth/LogoutPopup';
import UnifiedAuthForm from '../pages/UnifiedAuthForm';

// Static mapping for special routes
const staticPages = {
  Home,
  Dashboard,
  LogoutPopup,
  UnifiedAuthForm,
};

// Use Vite's import.meta.glob to import all pages in /pages
const pageModules = import.meta.glob('../pages/**/*.jsx', { eager: true });

// Normalize filenames to match keys like "LabBillingPage"
const extractPageMap = () => {
  const map = {};
  for (const path in pageModules) {
    const fileName = path.split('/').pop().replace('.jsx', '');
    map[fileName] = pageModules[path].default;
  }
  return map;
};

const pageMap = extractPageMap();

// Extract protected routes from routePageConfig
const protectedRoutes = routePageConfig
  .flatMap((section) =>
    section.items.flatMap((item) => {
      const mainRoute = item.page && pageMap[item.page]
        ? [{ path: item.path, page: pageMap[item.page] }]
        : [];

      const subRoutes = (item.subItems || []).map((sub) => ({
        path: sub.path,
        page: pageMap[sub.page] || null,
      }));

      return [...mainRoute, ...subRoutes];
    })
  )
  .filter((route) => route.page); // Only keep valid routes

// Public routes (static)
const publicRoutes = [
  { path: '/', page: staticPages.Home },
  {path:'/auth',page:staticPages.UnifiedAuthForm}
];

// Append static protected routes
protectedRoutes.push(
  { path: '/app', page: staticPages.Dashboard },
  { path: '/dashboard', page: staticPages.Dashboard },
  { path: '/logout', page: staticPages.LogoutPopup }
);

export { protectedRoutes, publicRoutes, Layout };
