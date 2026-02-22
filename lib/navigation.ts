import type { LucideIcon } from "lucide-react";

export type UserRole = "admin" | "member" | "viewer";

export interface NavigationItem {
  href:       string;
  label:      string;
  icon:       LucideIcon;
  section:    "main" | "settings" | "admin";
  /** Roles that can see this item — undefined = all roles */
  roles?:     UserRole[];
  /** Badge count (optional) */
  badge?:     number;
  /** External link */
  external?:  boolean;
}

/**
 * Single source of truth for navigation.
 * Filter by role before rendering.
 */
export type NavigationItemWithIconName = Omit<NavigationItem, "icon"> & { iconName: string };

export function getNavItems(role: UserRole): NavigationItemWithIconName[] {
  return NAV_ITEMS.filter(
    (item) => !item.roles || item.roles.includes(role),
  );
}

export const NAV_ITEMS: NavigationItemWithIconName[] = [
  { href: "/app/dashboard", label: "Dashboard",  iconName: "LayoutDashboard", section: "main" },
  { href: "/app/contacts",  label: "Contacts",   iconName: "Users",           section: "main" },
  { href: "/app/settings",  label: "Paramètres", iconName: "Settings",        section: "settings" },
];
