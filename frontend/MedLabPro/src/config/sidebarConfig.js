// sidebarConfig.js
import { routePageConfig } from '../routes/routePageConfig';

export const sidebarConfig = routePageConfig.map(section => ({
  section: section.section,
  items: section.items.map(item => ({
    label: item.label,
    path: item.path,
    icon: item.icon,
    ...(item.subItems
      ? {
          subItems: item.subItems.map(sub => ({
            label: sub.label,
            path: sub.path,
            icon: item.icon // inherit main item's icon
          }))
        }
      : {})
  }))
}));
