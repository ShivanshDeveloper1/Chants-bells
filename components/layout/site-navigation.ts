export type NavigationLink = {
  label: string;
  href: string;
};

export const primaryNavigation: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Videos", href: "/videos-collection" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = [
  {
    title: "Discover",
    links: [
      { label: "Puja essentials", href: "/collections/puja-essentials" },
      { label: "Festival collection", href: "/collections/festivals" },
    ],
  },
  {
    title: "Chants & Bells",
    links: [
      { label: "Our story", href: "/our-story" },
      { label: "Get in touch", href: "/contact" },
    ],
  },
] satisfies { title: string; links: NavigationLink[] }[];
