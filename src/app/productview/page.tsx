import FooterAbove from "../components/footerabove";
import { desktoplist } from "../data/desktoplist";
import { productview } from "../data/productviewcards";

export default function Productview() {
    return (
      <>
        {/* topsection */}
        <div className="w-full h-[92px] bg-[#FAFAFA] flex justify-center items-center">
          <div className="w-[1033px] ">
            <ul className="flex items-center space-x-4">
              <li className="text-[#252B42] text-base cursor-pointer">Home</li>
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
              <li className="text-[#BDBDBD]  font-bold cursor-pointer">Shop</li>
            </ul>
          </div>
        </div>
        {/* 2section */}
        <div className="w-full bg-[#FAFAFA] py-10">
          <div className="max-w-[1050px] mx-auto flex flex-col lg:flex-row">
            {/* Left Section - Image */}
            <div className="w-[506px]  px-4">
              <div className="relative">
                <img
                  src="/productview/productview1.jpg"
                  alt="Floating Phone"
                  className="w-[506px] h-[450px] "
                />
                {/* Image Navigation */}
                <button className="absolute top-1/2 left-2 transform  w-[23.87px] h-[44.07px]">
                  <img src="/productview/arrowleft.png" alt="" />
                </button>
                <button className="absolute top-1/2 right-2 transform  w-[23.87px] h-[44.07px]">
                  <img src="/productview/arrowright.png" alt="" />
                </button>
              </div>
              <div className="flex mt-4 space-x-2">
                <img
                  src="/productview/productview2.jpg"
                  alt="Thumbnail 1"
                  className="w-[100px] h-[75px] "
                />
                <img
                  src="/productview/productview1.jpg"
                  alt="Thumbnail 2"
                  className="w-[100px] h-[75px] "
                />
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="w-full lg:w-1/2 px-4">
              <h1 className="text-2xl font-bold mb-4">Floating Phone</h1>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <span className="text-gray-500 text-sm">(10 Reviews)</span>
              </div>
              <p className="text-3xl font-bold text-gray-800 mb-6">$1,139.33</p>
              <span className="text-[#737373] font-monsterrat mt-7">
                Availability: {""}
              </span>
              <span className="text-[#23A6F0] font-monsterrat  mt-7">
                In Stock
              </span>
              <p className="text-gray-500 mt-6">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <hr className="border-[1px] mt-6 mb-6" />
              {/* Color Options */}
              <div className="flex items-center space-x-2 mt-6 mb-[60px]">
                <span className="w-[30px] h-[30px] bg-teal-500 rounded-full cursor-pointer"></span>
                <span className="w-[30px] h-[30px] bg-orange-500 rounded-full cursor-pointer"></span>
                <span className="w-[30px] h-[30px] bg-black rounded-full cursor-pointer"></span>
                <span className="w-[30px] h-[30px] bg-gray-400 rounded-full cursor-pointer"></span>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex items-center space-x-4">
                <button className="bg-blue-500 text-white px-5 w-[148px] h-[44px] py-2 rounded-md hover:bg-blue-600">
                  Select Options
                </button>
                <div className="flex space-x-2">
                  {/* Favorite Button */}
                  <button className="p-2 border rounded-[50px] hover:bg-gray-100 transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>

                  {/* Cart Button */}
                  <button className="p-2 border rounded-[50px] hover:bg-gray-100 transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-gray-600"
                      viewBox="0 0 522 522"
                    >
                      <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM195 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm167 0c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm0 0" />
                    </svg>
                  </button>

                  {/* View Button */}
                  <button className="p-2 border rounded-[50px] hover:bg-gray-100 transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4.5c-7.35 0-10 7.5-10 7.5s2.65 7.5 10 7.5 10-7.5 10-7.5-2.65-7.5-10-7.5zm0 13c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zm0-11c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Description Section */}
        <div className="w-full h-[572px] mx-auto px-4 bg-white pt-10 ">
          <div className="flex space-x-10 w-[1049px] border-b pb-2 items-center justify-center mx-auto">
            <button className="text-black font-monsterrat font-bold  pb-2">
              Description
            </button>
            <button className="text-gray-500 font-bold  pb-2">
              Additional Information
            </button>
            <button className="text-gray-500 font-bold  pb-2">
              Reviews <span className="text-[#23856D]"> (0)</span>
            </button>
          </div>
          <div className="mt-6 flex gap-[30px] mx-auto items-center justify-between w-[1056px] h-[427px]">
            <span className="w-[325px] h-[382px] ml-[15px] rounded-[5.62px] bg-[#C4C4C433] opacity-100 ">
              <img src="/productview/description.png" alt="" />
            </span>
            <div className="pt-5 w-[332px] h-[427px]">
              <h3 className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42] text-left mb-9 ">
                the quick fox jumps over
              </h3>
              <p className="text-gray-600 text-[14px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met. <br />
                <br /> Met minim Mollie non desert Alamo est sit cliquey dolor
                do met sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met. <br />
                <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="pt-5 w-[332px] h-[427px]">
              <h3 className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42] text-left mb-9 ">
                the quick fox jumps over
              </h3>
              <p className="flex gap-[15px] text-gray-600 text-[14px] mb-3 items-center ">
                <img
                  src="/productview/arrowpara.png"
                  className="w-[8.62px] h-[15px] "
                ></img>{" "}
                the quick fox jumps over
              </p>
              <p className="flex gap-[15px] text-gray-600 text-[14px] mb-3 items-center ">
                <img
                  src="/productview/arrowpara.png"
                  className="w-[8.62px] h-[15px] "
                ></img>{" "}
                the quick fox jumps over
              </p>
              <p className="flex gap-[15px] text-gray-600 text-[14px] mb-3 items-center ">
                <img
                  src="/productview/arrowpara.png"
                  className="w-[8.62px] h-[15px] "
                ></img>{" "}
                the quick fox jumps over
              </p>
              <p className="flex gap-[15px] text-gray-600 text-[14px] mb-3 items-center ">
                <img
                  src="/productview/arrowpara.png"
                  className="w-[8.62px] h-[15px] "
                ></img>{" "}
                the quick fox jumps over
              </p>
              <h3 className="font-montserrat text-2xl font-bold leading-8 tracking-[0.1px] text-[#252B42] text-left mt-9 mb-5 ">
                the quick fox jumps over
              </h3>
              <p className="flex gap-[15px] text-gray-600 text-[14px] mb-3 items-center ">
                <img
                  src="/productview/arrowpara.png"
                  className="w-[8.62px] h-[15px] "
                ></img>{" "}
                the quick fox jumps over
              </p>
              <p className="flex gap-[15px] text-gray-600 text-[14px] mb-3 items-center ">
                <img
                  src="/productview/arrowpara.png"
                  className="w-[8.62px] h-[15px] "
                ></img>{" "}
                the quick fox jumps over
              </p>
              <p className="flex gap-[15px] text-gray-600 text-[14px] mb-3 items-center ">
                <img
                  src="/productview/arrowpara.png"
                  className="w-[8.62px] h-[15px] "
                ></img>{" "}
                the quick fox jumps over
              </p>
            </div>
          </div>
        </div>
        {/* gridsection */}
        <div className="w-full h-[1086px] bg-[#FAFAFA]">
          <div className="w-[1040px] h-[32px]  mx-auto py-9">
            <h3 className="font-montserrat text-2xl font-bold leading-8 tracking-tight text-left text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
            <hr className="mt-3 border-[1px]" />
          </div>
          <section className="py-12 px-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {productview.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-md  overflow-hidden"
                >
                  <div className="relative h-[300px] w-full">
                    <img
                      src={product.image}
                      alt={`Product ${product.id}`}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-left">
                    <h3 className="font-bold text-[#252B42] mb-3">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#737373]  mb-3">
                      {product.department}
                    </p>
                    <div className="flex justify-left items-left mt-2 mb-4">
                      <span className="text-[#737373] line-through mr-2">
                        ${product.originalPrice}
                      </span>
                      <span className="text-[#23856D] font-bold ">
                        ${product.discountedPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
            </div>
            

            <FooterAbove/>
      </>
    );
}