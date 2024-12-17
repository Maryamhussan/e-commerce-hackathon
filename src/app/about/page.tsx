import FooterAbove from "../components/footerabove";
import { Teams } from "../data/team";

export default function About(){
    return (
      <>
        {/* 1section */}
        <div className="flex z-999 w-full h-[669px] bg-white">
          <div className="absolute left-[742px]">
            <img src="/about/none.png" alt="" className="" />
          </div>
          <div className="grid w-[599px] h-[321px] gap-[35px] ml-[195px] mt-[150px] ">
            <h5 className="font-montserrat text-text-white font-bold leading-6 tracking-tight text-left  ">
              ABOUT COMPANY
            </h5>
            <h1 className="font-montserrat text-[#252B42] font-bold  tracking-tight text-left text-[58px]  ">
              ABOUT US
            </h1>
            <h4 className="font-montserrat text-lg font-normal leading-[30px] text-[#737373] tracking-wide text-left ">
              We know how large objects will act,
              <br /> but things on a small scale
            </h4>
            <button className="w-[195px] h-[52px] rounded-[5px] px-[40px] py-[15px] gap-[10px] bg-[#23A6F0] ">
              <p className="font-montserrat text-[14px] font-bold items-center text-white ">
                Get Quote Now
              </p>
            </button>
          </div>
        </div>
        {/* 2section */}
        <div className="w-full h-[236px] bg-white pt-6 ">
          <div className="flex w-[1018px] h-[188px] gap-[60px]  mx-auto items-center justify-between ">
            <div className="grid w-[394px] h-[188px] py-[24px] gap-[35px] ">
              <p className="font-monsterrat text-[#E74040] text-[14px] font-normal">
                Problems trying
              </p>
              <h3 className="font-monsterrat text-[#252B42] text-[24px] font-bold">
                Met minim Mollie non desert <br /> Alamo est sit cliquey dolor
                do <br /> met sent.
              </h3>
            </div>
            <div className="w-[529px] h-[40px] ">
              <p className="font-monsterrat text-[#737373] text-[14px] font-normal">
                Problems trying to resolve the conflict between the two major
                realms of <br />
                Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>
        {/* 3secition */}
        <div className="bg-black-50 p-8 min-h-[264px] flex flex-col items-center justify-center font-monsterrat">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[30px] max-lg:gap-12 items-center justify-between w-[1049px]">
            <div className="text-center">
              <h3 className="text-[#252B42] text-[58px] font-bold">15K</h3>
              <p className="text-[#737373] font-bold ">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#252B42] text-[58px] font-bold">150K</h3>
              <p className="text-[#737373] font-bold ">Monthly Visitors</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#252B42] text-[58px] font-bold">15</h3>
              <p className="text-[#737373] font-bold ">Countries Worldwide</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#252B42] text-[58px] font-bold">100+</h3>
              <p className="text-[#737373] font-bold ">Top Partners</p>
            </div>
          </div>
        </div>
        {/* videosection */}
        <div className="w-full h-[764px] bg-white mb-[150px]">
          <div className="w-[1050px] mx-auto h-[764px] bg-whit pt-[110px]">
            <div className="relative w-full h-full">
              <img
                src="/about/video.png"
                className="rounded-[10px] object-cover w-full h-full"
              />
              <span className="w-[92.6px] h-[92.6px] rounded-full absolute inset-0 m-auto flex items-center justify-center bg-[#23A6F0]">
                <img src="/about/continue.png" alt="" className="" />
              </span>
            </div>
          </div>
        </div>
        {/* testimonial section */}
        <section className="w-full h-[826px] bg-white ">
          <div className="w-[1050px] h-[826px] py-[112px] gap-[112px] mx-auto ">
            <div className="w-[607px] h-[100px]  mx-auto">
              <h2 className="font-monsterrat font-bold text-[40px] text-[#252B42] text-center ">
                Meet Our Team
              </h2>
              <p className="font-monsterrat font-normal text-[14px] text-[#737373] text-center">
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
            <div className="lg:max-w-5xl max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 max-md:justify-center mt-12">
                {Teams.map((team) => (
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
        {/* meetteam */}
        <div className="w-full h-[200px] bg-[#FAFAFA]">
          <div className="w-[607px] h-[100px]  mx-auto pt-9">
            <h2 className="font-monsterrat font-bold text-[40px] text-[#252B42] text-center mb-3 ">
              Big Companies Are Here
            </h2>
            <p className="font-monsterrat font-normal text-[14px] text-[#737373] text-center">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </div>
        {/* last-section */}
        <div className="flex z-999 w-full h-[628px] bg-[#2A7CC7] ">
          <div className="absolute left-[1000px]">
            <img src="/about/lastimage.png" alt="" className="" />
          </div>
          <div className="grid w-[599px] h-[321px] gap-[35px] ml-[195px] mt-[150px] ">
            <h5 className="font-montserrat text-white font-bold leading-6 tracking-tight text-left  ">
              WORK WITH US
            </h5>
            <h1 className="font-montserrat text-white font-bold  tracking-tight text-left text-[58px]  ">
              Now Let’s grow Yours
            </h1>
            <h4 className="font-montserrat text-lg font-normal leading-[30px] text-white tracking-wide text-left ">
              The gradual accumulation of information about atomic and <br />
              small-scale behavior during the first quarter of the 20th
            </h4>
            <button className="w-[195px] h-[52px] rounded-[5px] px-[40px] py-[15px] gap-[10px] hover:bg-[#23A6F0] border border-white ">
              <p className="font-montserrat text-[14px] font-bold items-center text-white ">
Button
                        </p>
            </button>
          </div>
            </div>
            <FooterAbove/>
      </>
    );
}

