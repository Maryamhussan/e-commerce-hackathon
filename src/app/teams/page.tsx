import Link from "next/link";
import { RealTeams } from "../data/realteams";

export default function Teamspage() {
    return (
      <>
        {/* section1 */}
        <section className="w-full bg-white h-[200px] mt-[100px]">
          <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#737373] mb-[20px]">
            WHAT WE DO
          </h5>
          <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center text-[#252B42]">
            Innovation tailored for you
          </h1>
          <div className="w-full h-[44px] mt-6  ">
            <ul className="flex items-center justify-center  space-x-4 ">
              <li className="text-[#252B42] text-base cursor-pointer">Home</li>
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

              <li className="text-[#737373] text-base font-bold cursor-pointer">
                Team
              </li>
            </ul>
          </div>
        </section>
        {/* section2 */}
        <section className="w-full h-[530px] bg-white flex gap-2.5 pl-[70px]">
          <img src="/teams/teams1.png" alt="" className="" />
          <div className="grid grid-cols-2 gap-2.5 ">
            <div>
              <img src="/teams/teams2.png" alt="Image 1" className="w-full" />
            </div>
            <div>
              <img src="/teams/teams3.png" alt="Image 2" className="w-full" />
            </div>
            <div>
              <img src="/teams/teams4.png" alt="Image 3" className="w-full" />
            </div>
            <div>
              <img src="/teams/teams5.png" alt="Image 4" className="w-full" />
            </div>
          </div>
        </section>
        {/* section3 */}
        <section className="w-full h-[1500px] bg-white pt-[100px] ">
          <div className="w-[1050px] h-[826px] py-[112px] gap-[112px] mx-auto ">
            <div className="w-[607px] h-[100px]  mx-auto">
              <h2 className="font-monsterrat font-bold text-[40px] text-[#252B42] text-center ">
                Meet Our Team
              </h2>
            </div>
            <div className="lg:max-w-5xl max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 max-md:justify-center mt-12">
                {RealTeams.map((team) => (
                  <div
                    key={team.id}
                    className="border rounded-lg overflow-hidden"
                  >
                    <img
                      src={team.image}
                      className="w-full h-56 object-cover"
                    />

                    <div className="p-4 flex flex-col items-center justify-center text-center">
                      <h4 className="text-gray-800 text-base font-bold">
                        {team.title}
                      </h4>
                      <p className="text-gray-800 text-xs mt-1">
                        {team.proffession}
                      </p>

                      <div className="space-x-4 mt-4 flex">
                        <button
                          type="button"
                          className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#23A6F0]"
                        >
                          <svg
                            href={team.FacebookUrl}
                            xmlns="http://www.w3.org/2000/svg"
                            width="14px"
                            fill="#fff"
                            viewBox="0 0 155.139 155.139"
                          >
                            <path
                              d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                              data-original="#010002"
                            />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]"
                        >
                          <svg
                            href={team.twitterUrl}
                            xmlns="http://www.w3.org/2000/svg"
                            width="14px"
                            fill="#fff"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                              data-original="#03a9f4"
                            />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#fff]"
                        >
                          <svg
                            href={team.instagramUrl}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="#23A6F0"
                          >
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.5-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* section4 */}
        <section className="w-full h-[582px] bg-white flex items-center justify-center ">
          <div className="flex flex-col w-[607px] h-[282px] gap-[36px]  items-center justify-center ">
            <h2 className="font-monsterrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center text-[#252B42]">
              Start your 14 days free trial
            </h2>
            <p className="font-monsterrat text-[14px] font-normal  text-center text-[#252B42]">
              Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do
              met sent. RELIT official consequent.
            </p>
            <button className="w-[186px] h-[52px] rounded-[5px] py-[15px] px-[40px] bg-[#23A6F0] font-monsterrat font-bold text-center text-[14px] text-white ">
              Try it free now
            </button>
            <div className=" flex w-[242px] h-[50px] p-[10px] gap-[34px] ">
              <Link href="/" target="_blank">
                <img
                  src="/pricing/twitter.png"
                  alt="Twitter"
                  className="w-[30px] h-[30px]"
                />
              </Link>
              <Link href="/" target="_blank">
                <img
                  src="/pricing/faceebook.png"
                  alt="Facebook"
                  className="w-[30px] h-[30px]"
                />
              </Link>
              <Link href="/" target="_blank">
                <img
                  src="/pricing/instagram.png"
                  alt="Instagram"
                  className="w-[30px] h-[30px]"
                />
              </Link>
              <Link href="/" target="_blank">
                <img
                  src="/pricing/linkedin.png"
                  alt="LinkedIn"
                  className="w-[30px] h-[30px]"
                />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
}