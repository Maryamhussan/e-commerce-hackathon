import Link from "next/link";

export default function Pricing() {
    return (
      <>
        {/* section1 (Header) */}
        <section className="w-full bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h5 className="font-montserrat text-base font-bold text-[#737373] uppercase tracking-widest mb-4">
              PRICING
            </h5>
            <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-[#252B42] mb-6">
              Simple Pricing
            </h1>
            <nav>
              <ul className="flex items-center justify-center space-x-4">
                <li className="text-[#252B42] text-base font-bold cursor-pointer hover:text-[#23A6F0]">
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
                <li className="text-[#737373] text-base font-bold">Pricing</li>
              </ul>
            </nav>
          </div>
        </section>

        {/* section2 (Intro) */}
        <div className="w-full bg-[#FAFAFA] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#252B42] mb-4">
              Pricing
            </h2>
            <p className="font-montserrat text-sm text-[#737373] max-w-lg mx-auto leading-6">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        {/* section3 (Pricing Cards) */}
        <div className="bg-[#FAFAFA] w-full py-10 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
              <div className="flex items-center space-x-4">
                <span className="text-[#252B42] font-bold">Monthly</span>
                <div className="relative w-14 h-8 bg-white border border-[#23A6F0] rounded-full p-1 cursor-pointer">
                  <div className="w-6 h-6 bg-[#EBEBEB] border border-[#D0D0D0] rounded-full shadow-sm"></div>
                </div>
                <span className="text-[#252B42] font-bold">Yearly</span>
              </div>
              <button className="bg-[#B2E3FF] text-[#23A6F0] px-6 py-3 rounded-full font-bold text-sm">
                Save 25%
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {/* Free Plan */}
              <div className="bg-white rounded-lg border border-[#23A6F0] p-10 text-center space-y-8 h-fit shadow-sm hover:shadow-md transition">
                <h4 className="text-[#252B42] text-2xl font-bold uppercase">Free</h4>
                <p className="text-[#737373] font-bold text-sm max-w-[150px] mx-auto">Organize across all apps by hand.</p>
                <div className="flex justify-center items-baseline gap-2">
                   <span className="text-[#23A6F0] text-5xl font-bold">0</span>
                   <div className="text-left">
                      <p className="text-[#23A6F0] font-bold text-2xl">$</p>
                      <p className="text-[#8ec2f2] font-bold text-sm">Per Month</p>
                   </div>
                </div>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center gap-3 text-sm font-bold text-[#252B42]">
                    <div className="w-8 h-8 rounded-full bg-[#2DC071] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    Unlimited product updates
                  </li>
                  {/* ... more items */}
                </ul>
                <Link href="/cart">
                  <button className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold hover:bg-[#1a7bb3] transition uppercase shadow-md">Buy Now</button>
                </Link>
              </div>

              {/* Standard Plan (Highlight) */}
              <div className="bg-[#252B42] rounded-lg border border-[#23A6F0] p-12 text-center space-y-8 shadow-2xl z-10 lg:scale-110">
                <h4 className="text-white text-2xl font-bold uppercase">Standard</h4>
                <p className="text-white font-bold text-sm max-w-[150px] mx-auto">Organize across all apps by hand.</p>
                <div className="flex justify-center items-baseline gap-2">
                   <span className="text-[#23A6F0] text-5xl font-bold">9.99</span>
                   <div className="text-left">
                      <p className="text-[#23A6F0] font-bold text-2xl">$</p>
                      <p className="text-[#8ec2f2] font-bold text-sm">Per Month</p>
                   </div>
                </div>
                <ul className="space-y-4 text-left">
                   <li className="flex items-center gap-3 text-sm font-bold text-white">
                    <div className="w-8 h-8 rounded-full bg-[#2DC071] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    Unlimited product updates
                  </li>
                </ul>
                <Link href="/cart">
                  <button className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold hover:bg-[#1a7bb3] transition uppercase shadow-md">Buy Now</button>
                </Link>
              </div>

              {/* Premium Plan */}
              <div className="bg-white rounded-lg border border-[#23A6F0] p-10 text-center space-y-8 h-fit shadow-sm hover:shadow-md transition">
                <h4 className="text-[#252B42] text-2xl font-bold uppercase">Premium</h4>
                <p className="text-[#737373] font-bold text-sm max-w-[150px] mx-auto">Organize across all apps by hand.</p>
                <div className="flex justify-center items-baseline gap-2">
                   <span className="text-[#23A6F0] text-5xl font-bold">19.99</span>
                   <div className="text-left">
                      <p className="text-[#23A6F0] font-bold text-2xl">$</p>
                      <p className="text-[#8ec2f2] font-bold text-sm">Per Month</p>
                   </div>
                </div>
                <ul className="space-y-4 text-left">
                   <li className="flex items-center gap-3 text-sm font-bold text-[#252B42]">
                    <div className="w-8 h-8 rounded-full bg-[#2DC071] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    Unlimited product updates
                  </li>
                </ul>
                <Link href="/cart">
                  <button className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold hover:bg-[#1a7bb3] transition uppercase shadow-md">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* sectionfaqs */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-[#252B42] text-4xl font-bold mb-4">Pricing FAQs</h2>
              <p className="text-[#737373] text-lg max-w-xl mx-auto">
                Problems trying to resolve the conflict between the two major realms of Classical physics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="flex gap-4 items-start">
                   <img src="/pricing/pricingarrow.png" alt="arrow" className="w-2 h-4 mt-2" />
                   <div>
                      <h3 className="text-[#252B42] font-bold text-base mb-3 leading-relaxed">the quick fox jumps over the lazy dog</h3>
                      <p className="text-[#737373] text-sm leading-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                      </p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* lastsection (CTA) */}
        <section className="w-full py-24 bg-white border-t border-[#ECECEC]">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-[#252B42] text-4xl font-bold leading-tight">Start your 14 days free trial</h2>
            <p className="text-[#737373] text-sm max-w-md mx-auto leading-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
            </p>
            <Link href="/shop">
              <button className="bg-[#23A6F0] text-white px-12 py-4 rounded-md font-bold hover:bg-[#1a7bb3] transition shadow-lg uppercase text-sm">
                Try it free now
              </button>
            </Link>
            <div className="flex justify-center gap-8 pt-8">
              <Link href="https://twitter.com"><img src="/pricing/twitter.png" alt="tw" className="w-8 h-8 hover:opacity-75 transition"/></Link>
              <Link href="https://twitter.com"><img src="/pricing/faceebook.png" alt="fb" className="w-8 h-8 hover:opacity-75 transition"/></Link>
              <Link href="https://twitter.com"><img src="/pricing/instagram.png" alt="ig" className="w-8 h-8 hover:opacity-75 transition"/></Link>
              <Link href="https://twitter.com"><img src="/pricing/linkedin.png" alt="in" className="w-8 h-8 hover:opacity-75 transition"/></Link>
            </div>
          </div>
        </section>
      </>
    );
}
