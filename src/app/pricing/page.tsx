import Link from "next/link";

export default function Pricing() {
    return (
      <>
        {/* section1 */}
        <section className="w-full bg-white h-[200px] mt-[100px]">
          <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#737373] mb-[20px]">
            PRICING
          </h5>
          <h1 className="font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center text-[#252B42]">
            Simple Pricing
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
                Pricing
              </li>
            </ul>
          </div>
        </section>
        {/* section2 */}
        <div className="w-full bg-[#FAFAFA] h-[200px] mt-6">
          <h2 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center text-[#252B42] pt-12">
            Pricing
          </h2>
          <p className="font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center text-[#737373] mt-3">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* section3-pricingcards */}
        <div className="bg-[#FAFAFA] w-full">
          <div className="max-w-5xl mx-auto font-monsterrat bg-[#FAFAFA] p-4">
            <div className="flex justify-center items-center mt-8">
              {/* Toggle Button Container */}
              <div className="flex items-center space-x-4 ">
                {/* Monthly Text */}
                <span className="text-[#252B42] font-bold text-[16px] font-monsterrat">
                  Monthly
                </span>

                {/* Toggle Button */}
                <div className="relative bg-white border border-1 border-[#23A6F0]  w-14 h-8 rounded-full flex items-center">
                  <button className="absolute w-6 h-6  bg-[#EBEBEB] border border-1 border-[#D0D0D0] rounded-full shadow-md left-1 transition-transform duration-300"></button>
                </div>

                {/* Yearly Text */}
                <span className="text-[#252B42] font-bold text-[16px] font-monsterrat">
                  Yearly
                </span>
              </div>

              {/* Save 25% Button */}
              <button className="ml-4 w-[109px] h-[44px] bg-[#B2E3FF] text-[#23A6F0] text-sm font-monsterrat rounded-full">
                Save 25%
              </button>
            </div>

            <div className="grid lg:grid-cols-3  md:grid-cols-2 max-lg:gap-8 mt-8 max-md:max-w-sm max-md:mx-auto">
              <div className="bg-white rounded-[10px] border border-1 border-[#23A6F0] mt-12  overflow-hidden w-[327px] h-[664px] p-8">
                <div className="text-center">
                  <h4 className="text-[#252B42] font-monsterrat text-[24px] mt-5 font-bold">
                    Free
                  </h4>
                  <p className="text-[#737373] font-bold text-[16px] text-sm mt-5">
                    Organize across all <br /> apps by hand.
                  </p>
                  <h3 className="text-[#23A6F0] font-monsterrat text-[40px] font-bold mt-4">
                    0
                    <sup className="text-sm font-[24px] font-bold text-[#23A6F0] ml-1">
                      $
                    </sup>
                    <sub className="text-sm font-medium text-[#23A6F0] ml-1">
                      per Month
                    </sub>
                  </h3>
                </div>

                <div className="mt-12">
                  <ul className="space-y-6">
                    <li className="flex items-center text-sm font-bold text-[#252B42]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#2DC071] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Unlimited product updates
                    </li>
                    <li className="flex items-center text-sm font-bold text-[#252B42]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#2DC071] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Unlimited product updates
                    </li>
                    <li className="flex items-center text-sm font-bold text-[#252B42]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#2DC071] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Unlimited product updates
                    </li>
                    <li className="flex items-center text-sm font-bold text-[#252B42]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#BDBDBD] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      1GB Cloud Storage
                    </li>
                    <li className="flex items-center text-sm font-bold text-[#252B42]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#BDBDBD] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Email and community support
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-[246px] h-[52px] mt-8 px-5 py-2.5 text-[14px] font-bold bg-[#23A6F0] text-white hover:bg-[#23A6F0] "
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="bg-[#252B42] rounded-[10px] border border-1 border-[#23A6F0] shadow-[0_2px_40px_-4px_rgba(93,96,127,0.2)]  overflow-hidden w-[327px] h-[664px] p-8">
                <div className="text-center">
                  <h4 className="text-white font-monsterrat text-[24px] mt-5 font-bold">
                    STANDARD
                  </h4>
                  <p className="text-white font-bold text-[16px] text-sm mt-5">
                    Organize across all <br /> apps by hand.
                  </p>
                  <h3 className="text-[#23A6F0] font-monsterrat text-[40px] font-bold mt-4">
                    9.99
                    <sup className="text-sm font-[24px] font-bold text-[#23A6F0] ml-1">
                      $
                    </sup>
                    <sub className="text-sm font-medium text-[#23A6F0] ml-1">
                      per Month
                    </sub>
                  </h3>
                </div>

                <div className="mt-12">
                  <ul className="space-y-6">
                    <li className="flex items-center text-sm font-bold text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#2DC071] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Unlimited product updates
                    </li>
                    <li className="flex items-center text-sm font-bold text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#2DC071] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Unlimited product updates
                    </li>
                    <li className="flex items-center text-sm font-bold text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#2DC071] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Unlimited product updates
                    </li>
                    <li className="flex items-center text-sm font-bold text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#BDBDBD] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      1GB Cloud Storage
                    </li>
                    <li className="flex items-center text-sm font-bold text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#BDBDBD] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Email and community support
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-[246px] h-[52px] mt-8 px-5 py-2.5 text-[14px] font-bold bg-[#23A6F0] text-white hover:bg-[#23A6F0] "
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-[10px] border border-1 border-[#23A6F0] mt-12  overflow-hidden w-[327px] h-[664px] p-8">
                <div className="text-center">
                  <h4 className="text-[#252B42] font-monsterrat text-[24px] mt-5 font-bold">
                    PREMIUM
                  </h4>
                  <p className="text-[#737373] font-bold text-[16px] text-sm mt-5">
                    Organize across all <br /> apps by hand.
                  </p>
                  <h3 className="text-[#23A6F0] font-monsterrat text-[40px] font-bold mt-4">
                    19.99
                    <sup className="text-sm font-[24px] font-bold text-[#23A6F0] ml-1">
                      $
                    </sup>
                    <sub className="text-sm font-medium text-[#23A6F0] ml-1">
                      per Month
                    </sub>
                  </h3>
                </div>

                <div className="mt-12">
                  <ul className="space-y-6">
                    <li className="flex items-center text-sm font-bold text-[#252B42]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#2DC071] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Unlimited product updates
                    </li>
                    <li className="flex items-center text-sm font-bold text-[#252B42]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#2DC071] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Unlimited product updates
                    </li>
                    <li className="flex items-center text-sm font-bold text-[#252B42]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#2DC071] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Unlimited product updates
                    </li>
                    <li className="flex items-center text-sm font-bold text-[#252B42]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#BDBDBD] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      1GB Cloud Storage
                    </li>
                    <li className="flex items-center text-sm font-bold text-[#252B42]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        className="mr-3 bg-[#BDBDBD] fill-white rounded-full p-[3px]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                          data-original="#000000"
                        />
                      </svg>
                      Email and community support
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-[246px] h-[52px] mt-8 px-5 py-2.5 text-[14px] font-bold bg-[#23A6F0] text-white hover:bg-[#23A6F0] "
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sectionfaqs */}
        <div className="h-[1037px] bg-white">
          <div className="p-4 font-monsterrat">
            <div className="max-w-6xl mx-auto font-monsterrat mt-12">
              <div>
                <h2 className="lg:text-4xl text-center text-[40px] font-bold text-[#252B42] mt-[100px]">
                  Pricing FAQs
                </h2>
                <p className="text-base text-[#737373]text-[20px] font-normal text-center mt-6">
                  Problems trying to resolve the conflict between <br /> the two
                  major realms of Classical physics
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-[90px] items-center justify-between mt-[90px] ml-[100px]">
                <div>
                  <div className="flex gap-3 items-center">
                    <img
                      src="/pricing/pricingarrow.png"
                      alt=""
                      className="w-[8.62px] h-[16px]"
                    />
                    <h3 className="text-lg font-bold text-[#252B42] text-[16px]">
                      the quick fox jumps over the lazy dog
                    </h3>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-[#737373] font-normal text-[14px]">
                      Met minim Mollie non desert Alamo est sit cliquey <br />{" "}
                      dolor do met sent. RELIT official consequent door ENIM{" "}
                      <br />
                      RELIT Mollie. Excitation venial consequent sent <br />{" "}
                      nostrum met.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-3 items-center">
                    <img
                      src="/pricing/pricingarrow.png"
                      alt=""
                      className="w-[8.62px] h-[16px]"
                    />
                    <h3 className="text-lg font-bold text-[#252B42] text-[16px]">
                      the quick fox jumps over the lazy dog
                    </h3>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-[#737373] font-normal text-[14px]">
                      Met minim Mollie non desert Alamo est sit cliquey <br />{" "}
                      dolor do met sent. RELIT official consequent door ENIM{" "}
                      <br />
                      RELIT Mollie. Excitation venial consequent sent <br />{" "}
                      nostrum met.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-3 items-center">
                    <img
                      src="/pricing/pricingarrow.png"
                      alt=""
                      className="w-[8.62px] h-[16px]"
                    />
                    <h3 className="text-lg font-bold text-[#252B42] text-[16px]">
                      the quick fox jumps over the lazy dog
                    </h3>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-[#737373] font-normal text-[14px]">
                      Met minim Mollie non desert Alamo est sit cliquey <br />{" "}
                      dolor do met sent. RELIT official consequent door ENIM{" "}
                      <br />
                      RELIT Mollie. Excitation venial consequent sent <br />{" "}
                      nostrum met.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-3 items-center">
                    <img
                      src="/pricing/pricingarrow.png"
                      alt=""
                      className="w-[8.62px] h-[16px]"
                    />
                    <h3 className="text-lg font-bold text-[#252B42] text-[16px]">
                      the quick fox jumps over the lazy dog
                    </h3>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-[#737373] font-normal text-[14px]">
                      Met minim Mollie non desert Alamo est sit cliquey <br />{" "}
                      dolor do met sent. RELIT official consequent door ENIM{" "}
                      <br />
                      RELIT Mollie. Excitation venial consequent sent <br />{" "}
                      nostrum met.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-3 items-center">
                    <img
                      src="/pricing/pricingarrow.png"
                      alt=""
                      className="w-[8.62px] h-[16px]"
                    />
                    <h3 className="text-lg font-bold text-[#252B42] text-[16px]">
                      the quick fox jumps over the lazy dog
                    </h3>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-[#737373] font-normal text-[14px]">
                      Met minim Mollie non desert Alamo est sit cliquey <br />{" "}
                      dolor do met sent. RELIT official consequent door ENIM{" "}
                      <br />
                      RELIT Mollie. Excitation venial consequent sent <br />{" "}
                      nostrum met.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-3 items-center">
                    <img
                      src="/pricing/pricingarrow.png"
                      alt=""
                      className="w-[8.62px] h-[16px]"
                    />
                    <h3 className="text-lg font-bold text-[#252B42] text-[16px]">
                      the quick fox jumps over the lazy dog
                    </h3>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-[#737373] font-normal text-[14px]">
                      Met minim Mollie non desert Alamo est sit cliquey <br />{" "}
                      dolor do met sent. RELIT official consequent door ENIM{" "}
                      <br />
                      RELIT Mollie. Excitation venial consequent sent <br />{" "}
                      nostrum met.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* lastsection */}
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