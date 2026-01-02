type Link = {
    id: number
    name: string
    href: string
    role?: string
  }
  
  const rawLinks: Omit<Link, "id">[] = [
    // All
    { name: "Dashboard", href: "/account" },
  ]
  
  export const links: Link[] = rawLinks.map((link, index) => ({
    id: index + 1,
    ...link,
  }))