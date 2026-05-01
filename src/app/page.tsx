import Link from "next/link";
import { blogPosts } from "./data/blogcard";
import { products } from "./data/productcard"
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* main-page (Hero Section) */}
        <div className="relative font-montserrat min-h-screen flex items-center">
          {/* Background Image */}
          <img
            src="main.jpg"
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Content Overlay */}
          <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10 py-20">
            <div className="max-w-xl text-center md:text-left space-y-6">
              <p className="font-bold text-base tracking-[0.1px] text-white">
                SUMMER 2020
              </p>
              <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-[58px] leading-tight tracking-[0.2px]">
                NEW COLLECTION
              </h1>
              <h4 className="font-normal text-lg md:text-xl text-white max-w-sm mx-auto md:mx-0">
                We know how large objects will act, but things on a small scale.
              </h4>
              <Link href="/shop">
                <button
                  type="button"
                  className="mt-6 px-10 py-4 rounded-md text-white text-base font-bold bg-[#2DC071] hover:bg-[#27a862] transition-all duration-300 uppercase shadow-lg"
                >
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* page2 (Editor's Pick) */}
        <div className="w-full bg-[#FAFAFA] py-20">
          <div className="container mx-auto px-4">
            {/* Title Section */}
            <div className="text-center mb-12">
              <h3 className="font-montserrat text-2xl font-bold text-[#252B42] uppercase tracking-wider">
                EDITOR&rsquo;S PICK
              </h3>
              <p className="text-sm font-medium text-[#737373] mt-2">
                Problems trying to resolve the conflict between
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-auto lg:h-[500px]">
              {/* Men Card */}
              <div className="lg:col-span-2 relative group overflow-hidden h-[300px] md:h-full">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="filter.png"
                  alt="Men"
                />
                <div className="absolute bottom-6 left-6">
                  <Link href="/productlist">
                    <button className="bg-white text-[#252B42] py-3 px-12 font-bold uppercase text-sm tracking-widest hover:bg-[#252B42] hover:text-white transition shadow-md">
                      Men
                    </button>
                  </Link>
                </div>
              </div>

              {/* Women Card */}
              <div className="relative group overflow-hidden h-[300px] md:h-full">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="filter-girl.png"
                  alt="Women"
                />
                <div className="absolute bottom-6 left-6">
                  <Link href="/productlist">
                    <button className="bg-white text-[#252B42] py-3 px-10 font-bold uppercase text-sm tracking-widest hover:bg-[#252B42] hover:text-white transition shadow-md">
                      Women
                    </button>
                  </Link>
                </div>
              </div>

              {/* Accessories & Kids Column */}
              <div className="flex flex-col gap-8 h-full">
                {/* Accessories Card */}
                <div className="relative group overflow-hidden flex-1 h-[240px]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="filt.png"
                    alt="Accessories"
                  />
                  <div className="absolute bottom-6 left-6">
                    <Link href="/productlist">
                      <button className="bg-white text-[#252B42] py-3 px-6 font-bold uppercase text-sm tracking-widest hover:bg-[#252B42] hover:text-white transition shadow-md">
                        Accessories
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Kids Card */}
                <div className="relative group overflow-hidden flex-1 h-[240px]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="filter-boy.png"
                    alt="Kids"
                  />
                  <div className="absolute bottom-6 left-6">
                    <Link href="/productlist">
                      <button className="bg-white text-[#252B42] py-3 px-10 font-bold uppercase text-sm tracking-widest hover:bg-[#252B42] hover:text-white transition shadow-md">
                        Kids
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* page-3 (Bestseller Products) */}
        <div className="w-full bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-xl font-bold text-[#737373] mb-2">Featured Products</h2>
              <h2 className="text-2xl font-bold text-[#252B42] tracking-wider uppercase">BESTSELLER PRODUCTS</h2>
              <p className="text-sm font-medium text-[#737373] mt-4">Problems trying to resolve the conflict between</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-x-8 lg:gap-y-12">
              {products.map((product) => (
                <Link key={product.id} href="/productview" className="flex flex-col group cursor-pointer">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-6 text-center flex flex-col items-center">
                    <h3 className="font-bold text-[#252B42] text-base mb-2">{product.title}</h3>
                    <p className="text-sm text-[#737373] font-bold mb-3">{product.department}</p>
                    <div className="flex gap-2 font-bold mb-4">
                      <span className="text-[#BDBDBD] line-through">${product.originalPrice}</span>
                      <span className="text-[#23856D]">${product.discountedPrice}</span>
                    </div>
                    <div className="flex gap-2">
                      {product.colors.map((color, idx) => (
                        <div key={idx} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* page-4 (Vita Classic Product) */}
        <div className="w-full bg-[#23856D] pt-20 md:pt-0 overflow-hidden">
          <div className="container mx-auto px-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between min-h-[600px] gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:py-20">
              <p className="text-white text-base font-medium">SUMMER 2020</p>
              <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight">Vita Classic Product</h1>
              <p className="text-white text-sm md:text-base leading-7 max-w-sm mx-auto md:mx-0">
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start pt-4">
                <span className="text-white text-2xl font-bold">$16.48</span>
                <Link href="/cart">
                  <button className="bg-[#2DC071] text-white font-bold px-10 py-4 rounded-md hover:bg-[#27a862] transition uppercase shadow-lg">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:self-end">
              <img
                src="page3.png"
                alt="Product"
                className="max-h-[500px] md:max-h-[600px] lg:max-h-[685px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* page5 (Neural Universe) */}
        <div className="w-full bg-white py-20">
          <div className="container mx-auto px-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img
                src="page5.png"
                alt="Neural Universe"
                className="w-full h-auto rounded-sm shadow-sm"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6 order-1 md:order-2">
              <p className="text-[#737373] text-base font-bold uppercase tracking-widest">SUMMER 2020</p>
              <h2 className="text-[#252B42] font-bold text-4xl leading-tight">Part of the Neural Universe</h2>
              <p className="text-[#737373] text-lg leading-7">
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Link href="/shop">
                  <button className="bg-[#2DC071] text-white font-bold px-10 py-4 rounded-md hover:bg-[#27a862] transition uppercase border border-transparent shadow-md">
                    Buy Now
                  </button>
                </Link>
                <Link href="/about">
                  <button className="bg-white text-[#2DC071] font-bold px-10 py-4 rounded-md hover:bg-[#2DC071] hover:text-white transition uppercase border-2 border-[#2DC071]">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* page-6 (Featured Posts) */}
        <div className="bg-[#FAFAFA] py-20" id="blog">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-[#23A6F0] font-bold text-sm uppercase tracking-widest mb-2">Practice Advice</h2>
              <h2 className="text-[#252B42] font-bold text-4xl tracking-tight mb-4">Featured Posts</h2>
              <p className="text-[#737373] text-sm md:text-base leading-6">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#E74C3C] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase">
                      New
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex gap-4 mb-3">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-xs text-[#23A6F0] hover:text-[#1a7bb3] transition cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-[#252B42] font-bold text-xl mb-3 leading-7 group-hover:text-[#23A6F0] transition">
                      {post.title}
                    </h3>
                    <p className="text-[#737373] text-sm leading-6 mb-6">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs font-medium text-[#737373]">
                      <div className="flex items-center gap-2">
                        <img src="clock.png" alt="date" className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="comment.png" alt="comments" className="w-4 h-4" />
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center gap-2 group-hover:gap-4 transition-all">
                      <Link href="/blog" className="text-[#737373] font-bold text-sm hover:text-[#23A6F0]">
                        Learn More
                      </Link>
                      <img src="icon arrow-next.png" alt="arrow" className="w-2 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
