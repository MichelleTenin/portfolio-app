export type NavItem = {
    name: string;
    href: string;
  };
  
  export const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }
  ];
  
  // You can add more config values here, like site name, logo, etc.
  export const siteTitle = "YourApp";