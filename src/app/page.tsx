import Link from "next/link";
import { blogPosts } from "./data/blogcard";
import { products } from "./data/productcard"
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <div className=" ">
        {/* main-page */}
        <div className="relative font-monsterrat">
          {/* Background Image */}
          <img
            src="main.jpg"
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content Overlay */}
          <div className="relative min-h-[427px] h-screen flex items-center px-4 md:px-16 lg:px-[180px]">
            <div className="max-w-full md:max-w-[1044px] text-left space-y-6 z-20">
              {/* Subheading */}
              <p className="font-bold text-base leading-[24px] tracking-[0.1px] text-white">
                SUMMER 2020
              </p>

              {/* Main Heading */}
              <h1 className="text-white font-bold text-4xl md:text-[58px] leading-tight md:leading-[80px] tracking-[0.2px] max-w-full">
                NEW COLLECTION
              </h1>

              {/* Subtext */}
              <h4 className="font-normal text-base md:text-[20px] leading-[30px] tracking-[0.2px] text-white max-w-full md:max-w-[376px]">
                We know how large objects will act, but things on a small scale.
              </h4>

              {/* Button */}
              <button
                type="button"
                className="mt-6 w-full md:w-[221px] h-[62px] rounded-[5px] text-white text-base tracking-wider font-semibold bg-[#2DC071] hover:bg-[#2DC012] border-none transition-all duration-300"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        {/* main-page */}

        {/* page2 */}
        <div className="w-full min-h-[770px] bg-[#FAFAFA] px-4 md:px-0">
          {/* Title Section */}
          <div className="pt-[60px] text-center">
            <h3 className="font-montserrat text-2xl font-bold leading-[32px] tracking-[0.1px] text-[#252B42]">
              EDITOR&rsquo;S PICK
            </h3>
            <p className="font-montserrat text-sm font-normal leading-[20px] tracking-[0.2px] text-[#737373] mt-2">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col md:flex-row justify-center mt-[40px] gap-[20px]">
            {/* Men Card */}
            <div className="w-full md:w-[510px] h-[300px] md:h-[500px] relative group">
              <img
                className="w-full h-full object-cover"
                src="filter.png"
                alt="Men"
              />
              <div className="absolute bottom-5 left-1/2 md:left-[91px] transform -translate-x-1/2 bg-white text-black py-3 px-12 font-bold uppercase text-sm tracking-wider group-hover:bg-black group-hover:text-white transition">
                Men
              </div>
            </div>

            {/* Women Card */}
            <div className="w-full lg:h-[500px] md:w-[240px] h-[200px] md:h-[242px] relative group">
              <img
                className="w-full h-full object-cover"
                src="filter-girl.png"
                alt="Women"
              />
              <div className="absolute bottom-5 left-1/2 md:left-[100px] transform -translate-x-1/2 bg-white text-black py-3 px-12 font-bold uppercase text-sm tracking-wider group-hover:bg-black group-hover:text-white transition">
                Women
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              {/* Accessories Card */}
              <div className="w-full md:w-[240px] h-[200px] md:h-[242px] relative group">
                <img
                  className="w-full h-full object-cover"
                  src="filt.png"
                  alt="Accessories"
                />
                <div className="absolute bottom-5 left-1/2 md:left-[100px] transform -translate-x-1/2 bg-white text-black py-3 px-12 font-bold uppercase text-sm tracking-wider group-hover:bg-black group-hover:text-white transition">
                  Accessories
                </div>
              </div>

              {/* Kids Card */}
              <div className="w-full md:w-[240px] h-[200px] md:h-[242px] relative group">
                <img
                  className="w-full h-full object-cover"
                  src="filter-boy.png"
                  alt="Kids"
                />
                <div className="absolute bottom-5 left-1/2 md:left-[60px] transform -translate-x-1/2 bg-white text-black py-3 px-12 font-bold uppercase text-sm tracking-wider group-hover:bg-black group-hover:text-white transition">
                  Kids
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* page2 */}

        {/* page-3 */}
        <div className="w-full bg-white py-12">
          {/* <!-- Section Title --> */}
          <div className="text-center mb-10">
            <h2 className="font-montserrat text-[20px] font-bold text-[#737373]">
              Featured Products
            </h2>
            <h2 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center mt-2">
              BESTSELLER PRODUCTS
            </h2>
            <p className="font-montserrat text-[14px] font-bold leading-[20px] tracking-[0.4px] text-center text-[#737373] mt-2">
              Problems trying to resolve the conflict between
            </p>
          </div>
          {/* Products Grid */}
          {/* <div className="ml-[195px] mr-[190px]">
            <div className="grid grid-cols-4 gap-6 mx-auto max-w-screen-xl px-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-[239px] h-[615px] bg-white overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    className="w-[239px] h-[427px] object-cover"
                  />
                  <div className="p-10">
                    <h3 className="font-bold text-base text-[#252B42] text-center">
                      Graphic Design
                    </h3>
                    <p className="text-sm text-[#737373] text-center">
                      English Department
                    </p>
                    <div className="flex mt-2 items-center justify-center ">
                      <span className="text-[#737373] line-through mr-2 ">
                        $16.48
                      </span>
                      <span className="text-[#23856D] font-bold ">$6.48</span>
                    </div>
                    <div className="flex mt-2 items-center justify-center">
                      <div className="w-4 h-4 bg-[#2D9CDB] rounded-full mr-1"></div>
                      <div className="w-4 h-4 bg-[#27AE60] rounded-full mr-1"></div>
                      <div className="w-4 h-4 bg-[#FF5A5F] rounded-full mr-1"></div>
                      <div className="w-4 h-4 bg-[#0a0a0a] rounded-full mr-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <section className="py-12 px-4 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="relative h-[427px] w-full">
                    <Image
                      src={product.image}
                      alt={`Product ${product.id}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-[#252B42]">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#737373]">
                      {product.department}
                    </p>
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
        </div>
        {/* page-3 */}

        {/* page-4 */}
        <div className="w-full min-h-[711px] bg-[#23856D]">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="w-full md:max-w-[1044px] flex flex-col items-start text-left px-4 md:p-[209px] gap-6">
              {/* Subheading */}
              <p className="font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[#fff]">
                SUMMER 2020
              </p>

              {/* Main Heading */}
              <h1 className="text-white font-bold text-4xl md:text-[58px] leading-tight md:leading-[80px] tracking-[0.2px] max-w-full md:w-[509px]">
                Vita Classic Product
              </h1>

              {/* Subtext */}
              <h4 className="font-normal text-[14px] leading-[30px] tracking-[0.2px] text-[#fff] max-w-full md:w-[341px]">
                We know how large objects will act, but things on a small scale.
              </h4>

              <div className="flex flex-col md:flex-row gap-4 md:gap-[34px] items-center">
                <h3 className="text-white font-bold text-2xl md:text-[24px] leading-[60px] tracking-[0.2px]">
                  $16.48
                </h3>

                {/* Button */}
                <button
                  type="button"
                  className="w-full md:w-[221px] sm:w-[221px] h-[62px] rounded-[5px] text-white text-base tracking-wider font-semibold bg-[#2DC071] hover:bg-[#2DC012] border-none transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="w-full md:w-auto md:mt-[100px] relative z-0">
              <img
                src="page3.png"
                alt="Product"
                className="w-full md:w-[443px] h-auto md:h-[685px] object-cover md:object-contain"
              />
            </div>
          </div>
        </div>
        {/* page-4 */}

        {/* page5 */}
        <div className="relative z-10 w-full bg-white py-12 px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
            {/* Image Container */}
            <div className="w-full md:w-[725px] max-w-full">
              <img
                src="page5.png"
                alt="Neural Universe"
                className="w-full h-auto md:h-[682px] rounded-md object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-auto text-center md:text-left md:max-w-[450px]">
              <p className="font-monsterrat text-[#737373] mb-4 text-base">
                SUMMER 2020
              </p>
              <h3 className="font-monsterrat text-[#252B42] font-bold text-3xl md:text-4xl mb-4">
                Part of the Neural Universe
              </h3>
              <p className="font-monsterrat text-[#737373] text-lg mb-6">
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button
                  type="button"
                  className="w-full sm:w-[156px] h-[52px] rounded-[5px] text-[#2DC071] text-base tracking-wider font-semibold 
              bg-white border-2 border-[#2DC071] 
              hover:bg-[#2DC071] hover:text-white 
              transition-all duration-300"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="w-full sm:w-[156px] h-[52px] rounded-[5px] text-[#2DC071] text-base tracking-wider font-semibold 
              bg-white border-2 border-[#2DC071] 
              hover:bg-[#2DC071] hover:text-white 
              transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* page5 */}

        {/* page-6 */}

        <div className="bg-white py-16 px-4" id="blog">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="font-montserrat text-xl md:text-2xl font-bold text-[#23A6F0] mb-2">
              Practice Advice
            </h2>
            <h2 className="font-montserrat text-2xl md:text-4xl font-bold leading-tight tracking-[0.1px] text-center mt-2">
              Featured Posts
            </h2>
            <p className="font-montserrat text-sm md:text-base font-bold leading-relaxed tracking-[0.4px] text-center text-[#737373] mt-4 px-4">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          {/* Blog Posts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-screen-xl mx-auto">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white overflow-hidden w-full max-w-[328px] mx-auto shadow-sm rounded-md"
              >
                {/* Image Section */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[300px] object-cover"
                />

                {/* Content Section */}
                <div className="p-4">
                  {/* Tags */}
                  <div className="flex space-x-2 mb-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-[#007BFF] font-medium uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-[#252B42] mb-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#737373] mb-4">
                    {post.description}
                  </p>

                  {/* Footer Section */}
                  <div className="flex items-center justify-between text-sm text-[#737373]">
                    {/* Date */}
                    <div className="flex items-center space-x-1">
                      <img src="clock.png" alt="Clock" className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>

                    {/* Comments */}
                    <div className="flex items-center space-x-1">
                      <img
                        src="comment.png"
                        alt="Comments"
                        className="w-4 h-4"
                      />
                      <span>{post.comments} comments</span>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      href="/"
                      className="text-sm text-[#737373] font-bold hover:underline"
                    >
                      Learn More
                    </Link>
                    <img
                      src="icon arrow-next.png"
                      alt="Arrow"
                      className="w-[6px] h-[9px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
