import FooterAbove from "../components/footerabove";
import { Teams } from "../data/team";
import Link from "next/link";

export default function About(){
    return (
      <>
        {/* 1section (Hero) */}
        <div className="relative w-full min-h-[600px] flex items-center bg-white overflow-hidden">
          {/* Background Image Container */}
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-40 md:opacity-100">
            <img
              src="/about/none.png"
              alt="About Company"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10 py-20">
            <div className="max-w-xl text-center md:text-left space-y-6">
              <h5 className="font-montserrat text-[#23A6F0] font-bold tracking-widest uppercase">
                ABOUT COMPANY
              </h5>
              <h1 className="font-montserrat text-[#252B42] font-bold text-4xl md:text-6xl leading-tight">
                ABOUT US
              </h1>
              <p className="font-montserrat text-lg text-[#737373] max-w-sm mx-auto md:mx-0">
                We know how large objects will act, but things on a small scale
              </p>
              <Link href="/contact">
                <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold hover:bg-[#1a8ad3] transition shadow-lg uppercase text-sm">
                  Get Quote Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 2section (Intro) */}
        <div className="w-full bg-white py-20 border-b border-[#ECECEC]">
          <div className="container mx-auto px-4 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-[#E74040] text-sm font-bold mb-4 uppercase tracking-wider">
                  Problems trying
                </p>
                <h3 className="text-[#252B42] text-2xl font-bold leading-tight">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                </h3>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-[#737373] text-sm leading-7">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3section (Stats) */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <h3 className="text-[#252B42] text-5xl font-bold mb-2">15K</h3>
                <p className="text-[#737373] font-bold text-sm uppercase tracking-widest">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-[#252B42] text-5xl font-bold mb-2">150K</h3>
                <p className="text-[#737373] font-bold text-sm uppercase tracking-widest">Monthly Visitors</p>
              </div>
              <div>
                <h3 className="text-[#252B42] text-5xl font-bold mb-2">15</h3>
                <p className="text-[#737373] font-bold text-sm uppercase tracking-widest">Countries Worldwide</p>
              </div>
              <div>
                <h3 className="text-[#252B42] text-5xl font-bold mb-2">100+</h3>
                <p className="text-[#737373] font-bold text-sm uppercase tracking-widest">Top Partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* videosection */}
        <div className="w-full py-20">
          <div className="container mx-auto px-4 lg:px-24">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="/about/video.png"
                alt="Video background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#23A6F0] flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                   <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section className="w-full bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-[#252B42] font-bold text-4xl mb-4">Meet Our Team</h2>
              <p className="text-[#737373] text-sm leading-6">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Teams.map((team) => (
                <div key={team.id} className="bg-white rounded-lg overflow-hidden border border-[#ECECEC] hover:shadow-lg transition shadow-sm">
                  <div className="h-64 overflow-hidden">
                    <img src={team.image} alt={team.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-8 text-center">
                    <h4 className="text-[#252B42] font-bold text-base mb-2">{team.title}</h4>
                    <p className="text-[#737373] text-xs font-bold uppercase tracking-widest mb-6">{team.proffession}</p>
                    <div className="flex justify-center gap-5">
                       <Link href="https://facebook.com" className="text-[#23A6F0] hover:text-[#1a7bb3] transition"><img src="/facebook.png" alt="fb" className="w-6 h-6"/></Link>
                       <Link href="https://facebook.com" className="text-[#23A6F0] hover:text-[#1a7bb3] transition"><img src="/twitter.png" alt="tw" className="w-6 h-6"/></Link>
                       <Link href="https://facebook.com" className="text-[#23A6F0] hover:text-[#1a7bb3] transition"><img src="/insta.png" alt="ig" className="w-6 h-6"/></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* meetteam (Partners Header) */}
        <div className="w-full bg-[#FAFAFA] py-20 border-t border-[#ECECEC]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-[#252B42] font-bold text-4xl mb-4">Big Companies Are Here</h2>
            <p className="text-[#737373] text-sm leading-6 max-w-xl mx-auto">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        {/* last-section (Grow With Us) */}
        <div className="relative w-full bg-[#2A7CC7] overflow-hidden min-h-[500px] flex items-center">
          {/* Background Image Container */}
          <div className="absolute right-0 top-0 h-full w-full md:w-auto opacity-20 md:opacity-100">
             <img src="/about/lastimage.png" alt="bg" className="h-full w-full object-cover md:w-auto" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10 py-20">
             <div className="max-w-xl text-center md:text-left space-y-6">
                <h5 className="text-white font-bold tracking-widest uppercase">WORK WITH US</h5>
                <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight">Now Let's grow Yours</h1>
                <p className="text-white text-sm md:text-base leading-7 max-w-sm mx-auto md:mx-0">
                  The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                </p>
                <Link href="/shop">
                  <button className="border-2 border-white text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-[#2A7CC7] transition shadow-lg uppercase text-sm">
                    Button
                  </button>
                </Link>
             </div>
          </div>
        </div>
        <FooterAbove />
      </>
    );
}
