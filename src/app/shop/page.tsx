import FooterAbove from "../components/footerabove";
import { productlist } from "../data/productlistcards";
import Link from "next/link";

export default function ShopPage() {
  return (
    <>
      <section className="w-full bg-[#FAFAFA] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#252B42]">Shop</h2>
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-[#252B42] font-bold">Home</Link>
              <span className="text-[#BDBDBD]">/</span>
              <span className="text-[#BDBDBD] font-bold">Shop</span>
            </nav>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productlist.slice(0, 5).map((category, index) => (
              <Link key={index} href="/productlist" className="relative h-[223px] group overflow-hidden cursor-pointer">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
                  <h3 className="text-lg font-bold uppercase">{category.title}</h3>
                  <p className="text-sm">{category.items} Items</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <span className="text-[#737373] font-bold">Showing all 12 results</span>
              <div className="flex items-center gap-4">
                <span className="text-[#737373] font-bold">Views:</span>
                <button className="p-2 border rounded hover:bg-gray-100"><img src="/icon1.png" alt="grid" className="w-4 h-4"/></button>
                <button className="p-2 border rounded hover:bg-gray-100"><img src="/moreicon.png" alt="list" className="w-4 h-4"/></button>
              </div>
              <div className="flex items-center gap-2">
                <select className="bg-[#F9F9F9] border border-[#DDDDDD] p-2 text-[#737373] rounded">
                  <option>Popularity</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <button className="bg-[#23A6F0] text-white px-6 py-2 rounded font-bold">Filter</button>
              </div>
           </div>

           {/* Placeholder for products - I'll use the ones from Home page or ProductList */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Reuse product cards style */}
              {[1,2,3,4,5,6,7,8].map((i) => (
                <Link key={i} href="/productview" className="flex flex-col items-center group cursor-pointer">
                  <div className="w-full h-[427px] relative mb-4 overflow-hidden">
                    <img src={`/pr${(i%8)+1}.png`} alt="product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-[#252B42]">Graphic Design</h3>
                  <p className="text-[#737373] text-sm font-bold">English Department</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[#BDBDBD] font-bold line-through">$16.48</span>
                    <span className="text-[#23856D] font-bold">$6.48</span>
                  </div>
                  <div className="flex gap-1 mt-3">
                    <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      <FooterAbove />
    </>
  );
}
