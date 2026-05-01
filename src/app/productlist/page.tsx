import FooterAbove from "../components/footerabove";
import { desktoplist } from "../data/desktoplist";
import { productlist } from "../data/productlistcards";
import Link from "next/link";

export default function ProductList(){
    return (
      <>
        {/* shop-section */}
        <section className="w-full py-6 bg-[#FAFAFA]">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="font-montserrat text-2xl font-bold text-[#252B42]">
              Shop
            </h3>
            <nav>
              <ul className="flex items-center space-x-4">
                <li className="text-[#23A6F0] text-base cursor-pointer font-bold">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-400 w-3.5 -rotate-90"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </li>
                <li className="text-[#BDBDBD] text-base font-bold">
                  Shop
                </li>
              </ul>
            </nav>
          </div>
        </section>
        {/* section-2 */}
        <section className="py-12 bg-[#FAFAFA]">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-4">
            {productlist.map((product, index) => (
              <Link
              key={index} href="/productlist" className="w-full sm:w-[205px] h-[223px] bg-white shadow-md relative overflow-hidden group cursor-pointer">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
                  <h3 className="text-lg font-bold uppercase">{product.title}</h3>
                  <p className="text-sm">{product.items} items</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* section-3 */}
        <section className="w-full bg-white border-b border-[#ECECEC]">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <h6 className="font-montserrat text-sm font-bold text-[#737373]">
                Showing all 12 results
              </h6>
              <div className="flex items-center gap-4">
                <h6 className="text-[#737373] font-montserrat text-sm font-bold">
                  Views:
                </h6>
                <button className="p-3 border rounded hover:bg-gray-50">
                  <img src="icon1.png" alt="grid" className="w-4 h-4" />
                </button>
                <button className="p-3 border rounded hover:bg-gray-50">
                  <img src="moreicon.png" alt="list" className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:flex-none">
                  <select className="w-full px-5 py-3 border border-[#DDDDDD] text-[#737373] text-sm bg-[#F9F9F9] rounded outline-none focus:border-[#23A6F0]">
                    <option>Popularity</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
                <button className="px-8 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a7bb3] transition">
                  Filter
                </button>
              </div>
          </div>
        </section>
        {/* section-5 */}
        <section className="py-12 px-4 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
            {desktoplist.map((product) => (
              <Link
                key={product.id}
                href="/productview"
                className="bg-white flex flex-col items-center group cursor-pointer"
              >
                <div className="relative h-[300px] w-full mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-[#252B42] text-base">{product.title}</h3>
                  <p className="text-sm text-[#737373] font-bold mt-2">{product.department}</p>
                  <div className="flex justify-center items-center mt-3 gap-2">
                    <span className="text-[#BDBDBD] font-bold line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-[#23856D] font-bold">
                      ${product.discountedPrice}
                    </span>
                  </div>
                  <div className="flex justify-center items-center mt-4 space-x-2">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* pagination */}
       
        <div className="flex justify-center py-12">
          <ul className="flex border border-[#BDBDBD] rounded-lg overflow-hidden font-bold">
            <li className="px-6 py-4 text-[#BDBDBD] bg-[#F3F3F3] cursor-not-allowed">First</li>
            <li className="px-6 py-4 text-[#23A6F0] border-l border-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white cursor-pointer transition">1</li>
            <li className="px-6 py-4 text-white bg-[#23A6F0] border-l border-[#BDBDBD] cursor-pointer">2</li>
            <li className="px-6 py-4 text-[#23A6F0] border-l border-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white cursor-pointer transition">3</li>
            <li className="px-6 py-4 text-[#23A6F0] border-l border-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white cursor-pointer transition">Next</li>
          </ul>
        </div>

        <FooterAbove />
      </>
    );
}