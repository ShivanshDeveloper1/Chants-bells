export type NavigationLink = {
  label: string;
  href: string;
};

export const primaryNavigation: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/videos-collection" },
  { label: "What’s Included", href: "/about" },
  { label: "FAQs", href: "/services" },

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
