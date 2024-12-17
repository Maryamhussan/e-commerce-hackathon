import FooterAbove from "../components/footerabove";
import { desktoplist } from "../data/desktoplist";
import { productlist } from "../data/productlistcards";

export default function ProductList(){
    return (
      <>
        {/* shop-section */}
        <section className="w-full h-[92px] pt-[24px] pb-[24px] bg-[#FAFAFA] ">
          <div className="flex w-[1094px] h-[44px] mx-auto items-center justify-between">
            <div className="w-[510px] h-[32px] items-left">
              <h3 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px]">
                Shop
              </h3>
            </div>
            <div className="w-[509px] h-[44px] mt-5 pl-[370px]">
              <ul className="flex items-center justify-center  space-x-4 ">
                <li className="text-[#23A6F0] text-base cursor-pointer">
                  Home
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-400 w-3.5 -rotate-90"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      clip-rule="evenodd"
                      data-original="#000000"
                    ></path>
                  </svg>
                </li>

                <li className="text-gray-800 text-base font-bold cursor-pointer">
                  Shop
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* section-2 */}
        <section className="h-[271px] bg-[#FAFAFA]">
          <div className="flex flex-wrap justify-center gap-6 relative">
            {productlist.map((product, index) => (
              <div className="w-[205px] h-[223px] bg-white shadow-md relative overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm">{product.items} items</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* section-3 */}
        <section className="w-[full] h-[98px] bg-[#FFFFFF] ">
          <div className=" w-[1050px] h-[98px] py-[24px]  mx-auto ">
            <div className="flex w-[1050px] h-[50px] items-center justify-between  z-1 ">
              <h6 className="font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-left text-[#737373] ">
                Showing all 12 results
              </h6>
              <div className="flex w-[177px] h-[46px] gap-[15px] px-[1px] items-center justify-between ">
                <h6 className="text-[#737373] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px]  ">
                  Views:
                </h6>
                <div className="w-[46px] h-[46px] p-[15px] pt-[15px] gap-0 rounded-tl-[5px] border-t border-l border-opacity-0">
                  <img src="icon1.png" alt="" />
                </div>
                <div className="w-[46px] h-[46px] p-[15px] pt-[15px] gap-0 rounded-tl-[5px] border-t border-l border-opacity-0">
                  <img src="moreicon.png" alt="" />
                </div>
              </div>
              <div className="flex w-[252px] h-[50px] px-[1px] gap-[15px] items-center justify-between ">
                <div className="relative w-[141px]">
                  <button
                    type="button"
                    id="dropdownToggle"
                    aria-expanded="false"
                    className="px-5 py-2.5 border border-gray-300 text-[#737373] text-[14px] outline-none bg-[#DDDDDD] hover:bg-gray-50"
                  >
                    Popularity
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-gray-500 inline ml-3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <ul
                    id="dropdownMenu"
                    role="menu"
                    className="absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto"
                  >
                    <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                      Dropdown option
                    </li>
                    <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                      Cloth set
                    </li>
                    <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                      Sales details
                    </li>
                    <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                      Marketing
                    </li>
                  </ul>
                </div>
                <button className="w-[94px] h-full z-99 p-[10px_20px] gap-[10px] rounded-[5px]  bg-[#23A6F0] text-white">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* section-5 */}
        <section className="py-12 px-4 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {desktoplist.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="relative h-[300px] w-full">
                  <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-[#252B42]">{product.title}</h3>
                  <p className="text-sm text-[#737373]">{product.department}</p>
                  <div className="flex justify-center items-center mt-2">
                    <span className="text-[#737373] line-through mr-2">
                      ${product.originalPrice}
                    </span>
                    <span className="text-[#23856D] font-bold">
                      ${product.discountedPrice}
                    </span>
                  </div>
                  <div className="flex justify-center items-center mt-2 space-x-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`w-4 h-4 rounded-full `}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* pagination */}
        {/* <ul className="flex mx-auto border-2 divide-x-2 rounded-lg overflow-hidden w-[313px] h-[74px] ">
          <li className="flex items-center justify-center shrink-0  px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-800 mr-2"
              viewBox="0 0 55.753 55.753"
            >
              <path
                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                data-original="#000000"
              />
            </svg>
            First
          </li>
          <li className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-[#23A6F0] cursor-pointer text-base font-bold text-gray-500">
            1
          </li>
          <li className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-[#23A6F0]  cursor-pointer text-base font-bold text-gray-800">
            2
          </li>
          <li className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-[#23A6F0] cursor-pointer text-base font-bold text-gray-500">
            3
          </li>
          <li className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-[#23A6F0] cursor-pointer text-sm text-gray-800">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-800 ml-2 rotate-180"
              viewBox="0 0 55.753 55.753"
            >
              <path
                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                data-original="#000000"
              />
            </svg>
          </li>
        </ul> */}
        <ul className="flex mx-auto border-2  divide-x rounded-lg overflow-hidden w-max h-[74px] mb-[75px] mt-[25px] ">
          {/* First Button */}
          <li className="flex items-center justify-center px-6 py-3 text-sm text-[#23A6F0] font-semibold hover:bg-[#23A6F0] hover:text-white cursor-pointer">
            First
          </li>

          {/* Page Number 1 */}
          <li className="flex items-center justify-center px-6 py-3 text-base font-bold text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white cursor-pointer">
            1
          </li>

          {/* Active Page Number 2 */}
          <li className="flex items-center justify-center px-6 py-3 bg-[#23A6F0] text-white text-base font-bold cursor-pointer">
            2
          </li>

          {/* Page Number 3 */}
          <li className="flex items-center justify-center px-6 py-3 text-base font-bold text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white cursor-pointer">
            3
          </li>

          {/* Next Button */}
          <li className="flex items-center justify-center px-6  py-3 text-sm text-[#23A6F0] font-semibold hover:bg-[#23A6F0] hover:text-white cursor-pointer">
            Next
          </li>
        </ul>

        <FooterAbove />
      </>
    );
}