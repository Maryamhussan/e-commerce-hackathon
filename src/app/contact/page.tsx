import Link from "next/link";
import Banner from "../components/banner";

export default function Contact() {
    return (
      <>
        {/* 1section */}

        <div className="relative flex flex-col-reverse lg:flex-row bg-white min-h-[669px]">
          {/* Image Section */}
          <div className="lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 w-full lg:w-auto">
            <img
              src="/contact/main.png"
              alt="Contact"
              className="w-full lg:w-auto max-h-[669px] object-cover lg:object-contain"
            />
          </div>

          {/* Content Section */}
          <div
            className="w-full lg:w-[599px] px-4 lg:px-0 py-12 lg:py-0 
        flex flex-col gap-6 
        lg:ml-[195px] lg:mt-[150px]
        items-start lg:items-start"
          >
            {/* Section Title */}
            <h5 className="font-montserrat text-text-white font-bold leading-6 tracking-tight text-left">
              CONTACT US
            </h5>

            {/* Main Heading */}
            <h1
              className="font-montserrat text-[#252B42] font-bold tracking-tight text-left 
          text-4xl lg:text-[58px] leading-tight"
            >
              Get in touch <br /> today!
            </h1>

            {/* Subheading */}
            <h4
              className="font-montserrat text-lg font-normal leading-[30px] 
          text-[#737373] tracking-wide text-left"
            >
              We know how large objects will act, <br /> but things on a small
              scale
            </h4>

            {/* Contact Details */}
            <div className="space-y-2">
              <h3 className="font-montserrat text-2xl font-bold text-[#252B42] text-left">
                Phone : +451 215 215
              </h3>
              <h3 className="font-montserrat text-2xl font-bold text-[#252B42] text-left">
                Fax : +451 215 215
              </h3>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6 w-full justify-start">
              <Link href="/" target="_blank">
                <img
                  src="/contact/tw.png"
                  alt="Twitter"
                  className="w-[30px] h-[30px] hover:opacity-75 transition-opacity"
                />
              </Link>
              <Link href="/" target="_blank">
                <img
                  src="/contact/fc.png"
                  alt="Facebook"
                  className="w-[30px] h-[30px] hover:opacity-75 transition-opacity"
                />
              </Link>
              <Link href="/" target="_blank">
                <img
                  src="/pricing/instagram.png"
                  alt="Instagram"
                  className="w-[30px] h-[30px] hover:opacity-75 transition-opacity"
                />
              </Link>
              <Link href="/" target="_blank">
                <img
                  src="/contact/in.png"
                  alt="LinkedIn"
                  className="w-[30px] h-[30px] hover:opacity-75 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* section2 */}

        <section className="w-full bg-white py-16">
          <p className="text-[#252B42] text-[14px] text-center font-bold font-monsterrat mb-6 mt-[150px]">
            VISIT OUR OFFICE
          </p>
          <h2 className="text-[#252B42] text-[40px] text-center font-bold font-monsterrat mb-4">
            We help small businesses <br /> with big ideas
          </h2>
          <div className="flex flex-col md:flex-row items-center my-[100px] justify-center px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-0 md:space-x-4">
            <div className="text-center bg-white w-full md:w-[329px] h-auto md:h-[327px] py-10 grid justify-center items-center">
              <img src="/contact/phone.png" alt="" className="mx-auto mb-4" />
              <Link
                href="tel:georgia.young@example.com"
                className="block text-[#252B42] text-[14px] text-center font-bold font-monsterrat mb-2"
              >
                georgia.young@example.com
                <br />
                georgia.young@ple.com
              </Link>
              <p className="text-[#252B42] text-[16px] text-center font-bold font-monsterrat mb-4">
                Get Support
              </p>
              <button className="border border-[1px] border-[#23A6F0] h-[54px] w-[189px] text-[#23A6F0] font-bold text-center text-[14px] font-monsterrat py-[15px] px-[36px] rounded-[37px] hover:bg-[#23A6F0] hover:text-white transition-colors">
                Submit Request
              </button>
            </div>

            <div className="w-full md:w-[328px] bg-[#252B42] flex items-center justify-center">
              <div className="text-center w-full md:w-[329px] h-auto md:h-[403px] py-10 grid justify-center items-center">
                <img
                  src="/contact/locatiom.png"
                  alt=""
                  className="mx-auto mb-4"
                />
                <Link
                  href="tel:georgia.young@example.com"
                  className="block text-white text-[14px] text-center font-bold font-monsterrat mb-2"
                >
                  georgia.young@example.com
                  <br />
                  georgia.young@ple.com
                </Link>
                <p className="text-white text-[16px] text-center font-bold font-monsterrat mb-4">
                  Get Support
                </p>
                <button className="border border-[1px] border-[#23A6F0] h-[54px] w-[189px] text-[#23A6F0] font-bold text-center text-[14px] font-monsterrat py-[15px] px-[36px] rounded-[37px] hover:bg-white hover:text-[#23A6F0] transition-colors">
                  Submit Request
                </button>
              </div>
            </div>

            <div className="text-center bg-white w-full md:w-[329px] h-auto md:h-[327px] py-10 grid justify-center items-center">
              <img src="/contact/email.png" alt="" className="mx-auto mb-4" />
              <Link
                href="tel:georgia.young@example.com"
                className="block text-[#252B42] text-[14px] text-center font-bold font-monsterrat mb-2"
              >
                georgia.young@example.com
                <br />
                georgia.young@ple.com
              </Link>
              <p className="text-[#252B42] text-[16px] text-center font-bold font-monsterrat mb-4">
                Get Support
              </p>
              <button className="border border-[1px] border-[#23A6F0] h-[54px] w-[189px] text-[#23A6F0] font-bold text-center text-[14px] font-monsterrat py-[15px] px-[36px] rounded-[37px] hover:bg-[#23A6F0] hover:text-white transition-colors">
                Submit Request
              </button>
            </div>
          </div>
        </section>
        {/* 3section */}
        <div className="w-full min-h-[348px] bg-white mb-12 grid items-center justify-center py-12 px-4">
          <img
            src="/contact/Arrow 2.png"
            alt="Arrow"
            className="mx-auto mb-4 max-w-[200px] md:max-w-full"
          />
          <h5 className="font-montserrat text-center text-lg md:text-2xl font-bold leading-6 tracking-wide text-[#252B42] mb-4">
            WE Can't WAIT TO MEET YOU
          </h5>
          <h1 className="font-montserrat text-center text-4xl md:text-[58px] font-bold leading-tight tracking-wide text-[#252B42] mb-6">
            Let's Talk
          </h1>
          <button className="w-full md:w-[186px] h-[52px] rounded-[5px] py-[15px] px-[40px] bg-[#23A6F0] font-monsterrat font-bold text-white text-center text-[14px] mx-auto block hover:bg-[#1E90FF] transition-colors">
            Try it free now
          </button>
        </div>
      </>
    );
}