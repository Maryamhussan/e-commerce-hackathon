export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-[#252B42] mb-10">My Wishlist</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="flex flex-col items-center group relative">
            <div className="w-full h-[427px] relative mb-4">
              <img src={`/pr${i+2}.png`} alt="product" className="w-full h-full object-cover" />
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-[#E74C3C] opacity-0 group-hover:opacity-100 transition">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                 </svg>
              </button>
            </div>
            <h3 className="font-bold text-[#252B42]">Graphic Design</h3>
            <p className="text-[#737373] text-sm font-bold">English Department</p>
            <div className="flex gap-2 mt-2">
              <span className="text-[#BDBDBD] font-bold line-through">$16.48</span>
              <span className="text-[#23856D] font-bold">$6.48</span>
            </div>
            <button className="mt-4 w-full border border-[#23A6F0] text-[#23A6F0] py-2 rounded font-bold hover:bg-[#23A6F0] hover:text-white transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      {/* If empty state (optional but nice) */}
      {/* <div className="text-center py-20">
          <p className="text-[#737373] text-lg mb-6">Your wishlist is empty.</p>
          <Link href="/shop" className="bg-[#23A6F0] text-white px-8 py-3 rounded font-bold">Start Shopping</Link>
      </div> */}
    </div>
  );
}
