import Link from "next/link";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-[#252B42] mb-10">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="border-b border-[#ECECEC] pb-4 mb-8 hidden md:flex">
            <span className="w-1/2 text-[#737373] font-bold">Product</span>
            <span className="w-1/6 text-[#737373] font-bold text-center">Price</span>
            <span className="w-1/6 text-[#737373] font-bold text-center">Quantity</span>
            <span className="w-1/6 text-[#737373] font-bold text-center">Total</span>
          </div>
          
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center py-6 border-b border-[#ECECEC] gap-6">
            <div className="md:w-1/2 flex items-center gap-6 w-full">
              <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                <img src="/pr1.png" alt="product" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-[#252B42]">Graphic Design</h3>
                <p className="text-[#737373] text-sm">English Department</p>
                <button className="text-[#E74C3C] text-xs font-bold mt-2">Remove</button>
              </div>
            </div>
            <div className="md:w-1/6 text-[#252B42] font-bold text-center w-full flex justify-between md:block">
              <span className="md:hidden text-[#737373]">Price:</span>
              $16.48
            </div>
            <div className="md:w-1/6 text-center w-full flex justify-between md:block">
               <span className="md:hidden text-[#737373]">Quantity:</span>
               <div className="flex items-center justify-center border border-[#ECECEC] rounded w-24 mx-auto md:mx-0">
                  <button className="px-2 py-1">-</button>
                  <span className="px-4 py-1 border-x border-[#ECECEC]">1</span>
                  <button className="px-2 py-1">+</button>
               </div>
            </div>
            <div className="md:w-1/6 text-[#23A6F0] font-bold text-center w-full flex justify-between md:block">
              <span className="md:hidden text-[#737373]">Total:</span>
              $16.48
            </div>
          </div>

          <Link href="/shop" className="inline-block mt-8 text-[#23A6F0] font-bold">
            ← Continue Shopping
          </Link>
        </div>

        {/* Summary */}
        <div className="lg:w-1/3 bg-[#FAFAFA] p-8 rounded-xl h-fit">
          <h2 className="text-xl font-bold text-[#252B42] mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-[#737373]">Subtotal</span>
              <span className="text-[#252B42] font-bold">$16.48</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#737373]">Shipping</span>
              <span className="text-[#252B42] font-bold">Free</span>
            </div>
            <hr className="border-[#ECECEC]" />
            <div className="flex justify-between text-lg">
              <span className="text-[#252B42] font-bold">Total</span>
              <span className="text-[#23A6F0] font-bold">$16.48</span>
            </div>
          </div>
          <button className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold hover:bg-[#1a7bb3] transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
