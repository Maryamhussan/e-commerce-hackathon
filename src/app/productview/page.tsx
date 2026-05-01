import FooterAbove from "../components/footerabove";
import { productview } from "../data/productviewcards";
import Link from "next/link";

export default function Productview() {
    return (
      <>
        {/* topsection */}
        <div className="w-full py-6 bg-[#FAFAFA]">
          <div className="container mx-auto px-4">
            <ul className="flex items-center space-x-4">
              <li className="text-[#252B42] text-base cursor-pointer font-bold">
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
              <li className="text-[#BDBDBD] font-bold cursor-pointer">
                <Link href="/shop">Shop</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* 2section */}
        <div className="w-full bg-[#FAFAFA] py-10">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square sm:aspect-video lg:aspect-square max-h-[450px] overflow-hidden rounded-lg">
                <img
                  src="/productview/productview1.jpg"
                  alt="Floating Phone"
                  className="w-full h-full object-cover"
                />
                {/* Image Navigation */}
                <button className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <img src="/productview/arrowleft.png" alt="prev" className="w-6" />
                </button>
                <button className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <img src="/productview/arrowright.png" alt="next" className="w-6" />
                </button>
              </div>
              <div className="flex mt-4 space-x-4">
                <img
                  src="/productview/productview2.jpg"
                  alt="Thumbnail 1"
                  className="w-24 h-24 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-[#23A6F0]"
                />
                <img
                  src="/productview/productview1.jpg"
                  alt="Thumbnail 2"
                  className="w-24 h-24 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-[#23A6F0]"
                />
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl font-bold text-[#252B42] mb-4">Floating Phone</h1>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                </div>
                <span className="text-[#737373] text-sm font-bold">(10 Reviews)</span>
              </div>
              <p className="text-3xl font-bold text-[#252B42] mb-4">$1,139.33</p>
              <div className="flex items-center gap-2 mb-6">
                 <span className="text-[#737373] font-bold text-sm">Availability :</span>
                 <span className="text-[#23A6F0] font-bold text-sm">In Stock</span>
              </div>
              <p className="text-[#858585] text-sm leading-6 mb-8 max-w-md">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <hr className="border-[#ECECEC] mb-8" />
              
              {/* Color Options */}
              <div className="flex items-center space-x-3 mb-10">
                <span className="w-8 h-8 bg-[#23A6F0] rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-[#23A6F0]"></span>
                <span className="w-8 h-8 bg-[#23856D] rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-[#23856D]"></span>
                <span className="w-8 h-8 bg-[#E77C40] rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-[#E77C40]"></span>
                <span className="w-8 h-8 bg-[#252B42] rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-[#252B42]"></span>
              </div>

              {/* Buttons */}
              <div className="flex items-center flex-wrap gap-4">
                <Link href="/cart">
                  <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1a7bb3] transition shadow-md">
                    Select Options
                  </button>
                </Link>
                <div className="flex gap-2">
                  <Link href="/wishlist">
                    <button className="p-3 border border-[#ECECEC] rounded-full bg-white hover:bg-gray-50 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#252B42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </Link>
                  <Link href="/cart">
                    <button className="p-3 border border-[#ECECEC] rounded-full bg-white hover:bg-gray-50 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#252B42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </Link>
                  <button className="p-3 border border-[#ECECEC] rounded-full bg-white hover:bg-gray-50 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#252B42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex border-b border-[#ECECEC] mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <button className="px-8 py-6 text-sm font-bold text-[#737373] border-b-2 border-transparent hover:text-[#252B42]">Description</button>
              <button className="px-8 py-6 text-sm font-bold text-[#737373] border-b-2 border-transparent hover:text-[#252B42]">Additional Information</button>
              <button className="px-8 py-6 text-sm font-bold text-[#737373] border-b-2 border-transparent hover:text-[#252B42]">Reviews <span className="text-[#23856D]">(0)</span></button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img src="/productview/description.png" alt="detail" className="w-full h-full object-cover" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#252B42] mb-6">the quick fox jumps over</h3>
                <p className="text-sm text-[#737373] leading-7 mb-6">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-sm text-[#737373] leading-7 mb-6">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-sm text-[#737373] leading-7">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>

              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#252B42] mb-6">the quick fox jumps over</h3>
                  <ul className="space-y-4 text-sm text-[#737373] font-bold">
                    <li className="flex items-center gap-4">
                      <img src="/productview/arrowpara.png" alt="arrow" className="w-2 h-4" />
                      the quick fox jumps over
                    </li>
                    <li className="flex items-center gap-4">
                      <img src="/productview/arrowpara.png" alt="arrow" className="w-2 h-4" />
                      the quick fox jumps over
                    </li>
                    <li className="flex items-center gap-4">
                      <img src="/productview/arrowpara.png" alt="arrow" className="w-2 h-4" />
                      the quick fox jumps over
                    </li>
                    <li className="flex items-center gap-4">
                      <img src="/productview/arrowpara.png" alt="arrow" className="w-2 h-4" />
                      the quick fox jumps over
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#252B42] mb-6">the quick fox jumps over</h3>
                  <ul className="space-y-4 text-sm text-[#737373] font-bold">
                    <li className="flex items-center gap-4">
                      <img src="/productview/arrowpara.png" alt="arrow" className="w-2 h-4" />
                      the quick fox jumps over
                    </li>
                    <li className="flex items-center gap-4">
                      <img src="/productview/arrowpara.png" alt="arrow" className="w-2 h-4" />
                      the quick fox jumps over
                    </li>
                    <li className="flex items-center gap-4">
                      <img src="/productview/arrowpara.png" alt="arrow" className="w-2 h-4" />
                      the quick fox jumps over
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* gridsection */}
        <div className="w-full bg-[#FAFAFA] py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-[#252B42] mb-6">
              BESTSELLER PRODUCTS
            </h3>
            <hr className="border-[#ECECEC] mb-10" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {productview.map((product) => (
                <Link
                  key={product.id}
                  href="/productview"
                  className="bg-white shadow-sm hover:shadow-md transition overflow-hidden group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#252B42] text-base mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#737373] font-bold mb-4">
                      {product.department}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-[#BDBDBD] font-bold line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="text-[#23856D] font-bold">
                        ${product.discountedPrice}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <FooterAbove/>
      </>
    );
}