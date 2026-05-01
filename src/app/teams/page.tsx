import Link from "next/link";
import { RealTeams } from "../data/realteams";

export default function Teamspage() {
    return (
      <>
        {/* section1 (Hero) */}
        <section className="w-full bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h5 className="font-montserrat text-sm font-bold text-[#737373] uppercase tracking-widest mb-6">
              WHAT WE DO
            </h5>
            <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-[#252B42] mb-8">
              Innovation tailored for you
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
                <li className="text-[#737373] text-base font-bold">Team</li>
              </ul>
            </nav>
          </div>
        </section>

        {/* section2 (Gallery) */}
        <section className="w-full py-10">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full h-full overflow-hidden rounded-md">
                   <img src="/teams/teams1.png" alt="team" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="/teams/teams2.png" alt="team" className="w-full h-full object-cover rounded-md" />
                  <img src="/teams/teams3.png" alt="team" className="w-full h-full object-cover rounded-md" />
                  <img src="/teams/teams4.png" alt="team" className="w-full h-full object-cover rounded-md" />
                  <img src="/teams/teams5.png" alt="team" className="w-full h-full object-cover rounded-md" />
                </div>
             </div>
          </div>
        </section>

        {/* section3 (Meet Our Team) */}
        <section className="w-full py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-4xl text-[#252B42] text-center mb-16">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {RealTeams.map((team) => (
                  <div key={team.id} className="text-center group">
                    <div className="h-64 overflow-hidden rounded-lg mb-6 shadow-sm">
                      <img src={team.image} alt={team.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h4 className="text-[#252B42] text-base font-bold mb-2">{team.title}</h4>
                    <p className="text-[#737373] text-xs font-bold uppercase tracking-widest mb-6">{team.proffession}</p>
                    <div className="flex justify-center gap-4">
                       <Link href={team.FacebookUrl} className="text-[#23A6F0] hover:text-[#1a7bb3] transition"><img src="/facebook.png" alt="fb" className="w-6 h-6"/></Link>
                       <Link href={team.twitterUrl} className="text-[#23A6F0] hover:text-[#1a7bb3] transition"><img src="/twitter.png" alt="tw" className="w-6 h-6"/></Link>
                       <Link href={team.instagramUrl} className="text-[#23A6F0] hover:text-[#1a7bb3] transition"><img src="/insta.png" alt="ig" className="w-6 h-6"/></Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* section4 (CTA) */}
        <section className="w-full py-20 text-center bg-white">
          <div className="container mx-auto px-4 space-y-6">
            <h2 className="text-[#252B42] text-4xl font-bold">Start your 14 days free trial</h2>
            <p className="text-[#737373] text-sm leading-6 max-w-sm mx-auto">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
            </p>
            <Link href="/shop">
              <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold hover:bg-[#1a7bb3] transition shadow-lg uppercase text-sm">
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
