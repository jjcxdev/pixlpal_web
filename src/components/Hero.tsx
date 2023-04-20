import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FaCoffee } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col place-items-center gap-10 rounded-lg">
      <Image
        className="relative drop-shadow-lg "
        src="/pixlpallogo.png"
        alt="PixlPal Logo"
        width={300}
        height={300}
        priority
      />
      <div className="bg-gradient-to-r from-[#E933ED] to-[#65C4FA] bg-clip-text text-6xl font-bold text-transparent">
        PixlPal
      </div>
      <div className="mx-12 font-poppins text-3xl font-light">
        Select any{" "}
        <span className="bg-gradient-to-r from-[#E933ED] to-[#65C4FA] bg-clip-text font-extrabold text-transparent">
          COLOR
        </span>{" "}
        on your screen and automatically save it to your clipboard
      </div>

      <div className="grid rounded-full  border-2 p-4 px-8 text-center">
        <button>
          <a
            href="https://github.com/jjcxdev/PixlPal_free"
            className="flex gap-2 uppercase"
          >
            <FiDownload className="text-2xl" />
            Download
          </a>
        </button>
      </div>
      <div className="grid rounded-full  border-2 bg-black p-4 px-8 text-center text-white">
        <button>
          <a
            href="https://www.buymeacoffee.com/jjcx"
            className="flex gap-2 uppercase"
          >
            <FaCoffee className="text-2xl" />
            Buy Me a Coffee
          </a>
        </button>
      </div>

      <div className="flex w-screen flex-col justify-center gap-12 bg-[#f6fbff] px-10 py-8 font-sourcecode lg:px-80 lg:py-20">
        <div>
          <div className="bg-gradient-to-r from-[#E933ED] to-[#65C4FA] bg-clip-text pb-2 font-poppins text-3xl font-extrabold text-transparent">
            ABOUT
          </div>
          PixlPal is a macOS application designed to help users easily capture
          any color on their screen and automatically save it to their
          clipboard. The application offers support for various color formats,
          including HSL, RGB, and HEX. This makes it easy to use the captured
          color for various purposes such as web design, graphic design, and
          more.
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#E933ED] to-[#65C4FA] bg-clip-text pb-2 font-poppins text-3xl font-extrabold text-transparent">
            FEATURES
          </div>
          <ul className="list-disc font-sourcecode">
            <li>Select any color on your screen</li>
            <li>Automatically save selected color to your clipboard</li>
            <li>Choose between HSL, RGB, and HEX color formats</li>
            <li>Support for Pantone and CMYK (coming soon)</li>
            <li>Screen measurement features (coming soon)</li>
            <li>Color history (coming soon)</li>
            <li> Windows version (coming soon)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
