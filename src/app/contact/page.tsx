import Link from "next/link";

export default function Contact() {
    return (
      <>
        {/* 1section (Hero) */}
        <div className="relative w-full min-h-[600px] flex items-center bg-white overflow-hidden">
          {/* Background Image Container */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full md:w-1/2 h-full opacity-30 md:opacity-100">
            <img
              src="/contact/main.png"
              alt="Contact Hero"
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10 py-20">
            <div className="max-w-xl text-center md:text-left space-y-6">
              <h5 className="font-montserrat text-[#252B42] font-bold tracking-widest uppercase">
                CONTACT US
              </h5>
              <h1 className="font-montserrat text-[#252B42] font-bold text-4xl md:text-6xl leading-tight">
                Get in touch <br className="hidden md:block" /> today!
              </h1>
              <h4 className="font-montserrat text-lg text-[#737373] max-w-sm mx-auto md:mx-0">
                We know how large objects will act, but things on a small scale
              </h4>
              <div className="space-y-2 pt-4">
                <h3 className="text-2xl font-bold text-[#252B42]">Phone : +451 215 215</h3>
                <h3 className="text-2xl font-bold text-[#252B42]">Fax : +451 215 215</h3>
              </div>
              <div className="flex justify-center md:justify-start gap-6 pt-6">
                 <Link href="https://twitter.com" className="hover:opacity-75 transition"><img src="/contact/tw.png" alt="tw" className="w-8 h-8"/></Link>
                 <Link href="https://twitter.com" className="hover:opacity-75 transition"><img src="/contact/fc.png" alt="fb" className="w-8 h-8"/></Link>
                 <Link href="https://twitter.com" className="hover:opacity-75 transition"><img src="/pricing/instagram.png" alt="ig" className="w-8 h-8"/></Link>
                 <Link href="https://twitter.com" className="hover:opacity-75 transition"><img src="/contact/in.png" alt="in" className="w-8 h-8"/></Link>
              </div>
            </div>
          </div>
        </div>

        {/* section2 (Offices) */}
        <section className="w-full bg-[#FAFAFA] py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[#252B42] text-sm font-bold uppercase tracking-widest mb-4">VISIT OUR OFFICE</p>
              <h2 className="text-[#252B42] text-4xl font-bold max-w-xl mx-auto leading-tight">
                We help small businesses with big ideas
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto items-center">
              {/* Phone Office */}
              <div className="bg-white p-12 text-center space-y-4 shadow-sm hover:shadow-md transition">
                <img src="/contact/phone.png" alt="phone" className="mx-auto" />
                <div className="text-[#252B42] text-sm font-bold">
                  georgia.young@example.com<br />
                  georgia.young@ple.com
                </div>
                <p className="text-[#252B42] text-base font-bold">Get Support</p>
                <Link href="/contact">
                  <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition uppercase text-xs">
                    Submit Request
                  </button>
                </Link>
              </div>

              {/* Location Office (Highlight) */}
              <div className="bg-[#252B42] p-16 text-center space-y-4 shadow-xl z-10 md:scale-110">
                <img src="/contact/locatiom.png" alt="location" className="mx-auto" />
                <div className="text-white text-sm font-bold">
                  georgia.young@example.com<br />
                  georgia.young@ple.com
                </div>
                <p className="text-white text-base font-bold">Get Support</p>
                <Link href="/contact">
                  <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition uppercase text-xs">
                    Submit Request
                  </button>
                </Link>
              </div>

              {/* Email Office */}
              <div className="bg-white p-12 text-center space-y-4 shadow-sm hover:shadow-md transition">
                <img src="/contact/email.png" alt="email" className="mx-auto" />
                <div className="text-[#252B42] text-sm font-bold">
                  georgia.young@example.com<br />
                  georgia.young@ple.com
                </div>
                <p className="text-[#252B42] text-base font-bold">Get Support</p>
                <Link href="/contact">
                  <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition uppercase text-xs">
                    Submit Request
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3section (CTA) */}
        <div className="w-full bg-white py-24 text-center">
          <div className="container mx-auto px-4">
            <img src="/contact/Arrow 2.png" alt="Arrow" className="mx-auto mb-8" />
            <h5 className="text-[#252B42] font-bold text-base uppercase tracking-widest mb-4">WE Can&rsquo;t WAIT TO MEET YOU</h5>
            <h1 className="text-[#252B42] font-bold text-5xl md:text-6xl mb-8">Let&rsquo;s Talk</h1>
            <Link href="/shop">
              <button className="bg-[#23A6F0] text-white px-12 py-4 rounded-md font-bold hover:bg-[#1a7bb3] transition shadow-lg uppercase text-sm">
                Try it free now
              </button>
            </Link>
          </div>
        </div>
      </>
    );
}
