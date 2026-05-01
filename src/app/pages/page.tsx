import Link from "next/link";

export default function PagesDirectory() {
  const allPages = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Product List", href: "/productlist" },
    { name: "Product View", href: "/productview" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
    { name: "Team", href: "/teams" },
    { name: "Login/Register", href: "/login" },
    { name: "Search", href: "/search" },
    { name: "Cart", href: "/cart" },
    { name: "Wishlist", href: "/wishlist" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#252B42] mb-8 text-center">Site Map</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="p-6 bg-[#FAFAFA] border border-[#ECECEC] rounded-lg hover:border-[#23A6F0] transition group"
          >
            <h2 className="text-xl font-bold text-[#252B42] group-hover:text-[#23A6F0]">{page.name}</h2>
            <p className="text-[#737373] text-sm mt-2">Go to {page.name} page</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
