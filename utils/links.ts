type NavLink = {
    href: string;
    label:string;
}

export const links: NavLink[] = [
    { href:'/', label:'home' },
    { href:'/about', label:'about' },
    { href:'/products', label:'products' },
    { href:'/favorites', label:'favorites' },
    { href:'/cart', label:'cart' },
    { href:'/orders', label:'orders' },
    { href:'/admin/sales', label:'dashboard' },
]

export const adminLinks : NavLink[]=[
    { href:'/admin/sales', label:'sales' },
    { href:'/admin/products', label:'admin products' },
    { href:'/admin/products/create', label:'create products' },
]