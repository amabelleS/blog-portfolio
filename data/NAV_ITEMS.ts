interface NavItem {
    name: string
    href: string
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    // {name: 'Blog', href: '/posts'},
    {name: 'Blog', href: '/blog'},
    {name: 'Projects', href: '/projects'},
    {name: 'Contact', href: '/contact'}
  ]

export default NAV_ITEMS