import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FaCoffee } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="my-auto flex flex-col place-items-center gap-10 rounded-lg">
      <Image
        className="relative drop-shadow-lg "
        src="/pixlpal_logo_new.png"
        alt="PixlPal Logo"
        width={300}
        height={300}
        priority
      />
      <div className="bg-gradient-to-r from-[#E748C5] via-[#8350BC] to-[#71E2F1] bg-clip-text text-6xl font-bold text-transparent">
        PixlPal
      </div>
      <div className="mx-12 font-poppins text-3xl font-light">
        Select any{" "}
        <span className="bg-gradient-to-r from-[#E748C5] via-[#8350BC] to-[#71E2F1] bg-clip-text font-extrabold text-transparent">
          COLOR
        </span>{" "}
        on your screen and automatically save it to your clipboard
      </div>

      <button
        className="grid rounded-full border-2 border-gray-300 p-4 px-8 text-center text-black"
        onClick={() =>
          (window.location.href = "https://github.com/jjcxdev/PixlPal_free")
        }>
        <div className="flex gap-2 uppercase">
          <FiDownload className="text-2xl" />
          <span>Download</span>
        </div>
      </button>

      <button
        className="grid rounded-full border-2 bg-black p-4 px-8 text-center text-white"
        onClick={() =>
          (window.location.href = "https://www.buymeacoffee.com/jjcx")
        }>
        <div className="flex gap-2 uppercase">
          <FaCoffee className="text-2xl" />
          <span>Buy Me a Coffee</span>
        </div>
      </button>

      <div className="my-20 flex w-screen flex-col justify-center gap-12 px-10 py-8 font-sourcecode lg:px-80 lg:py-20">
        <div>
          <div>
            <span className="bg-gradient-to-r from-[#E748C5] via-[#8350BC] to-[#71E2F1] bg-clip-text font-poppins text-4xl font-extrabold text-transparent">
              ABOUT
            </span>
          </div>
          PixlPal is a macOS application designed to help users easily capture
          any color on their screen and automatically save it to their
          clipboard. The application offers support for various color formats,
          including HSL, RGB, and HEX. This makes it easy to use the captured
          color for various purposes such as web design, graphic design, and
          more.
        </div>
        <div>
          <div>
            <span className="bg-gradient-to-r from-[#E748C5] via-[#8350BC] to-[#71E2F1] bg-clip-text font-poppins text-4xl font-extrabold text-transparent">
              FEATURES
            </span>
          </div>
          <ul className="list-disc font-sourcecode">
            <li className="pb-1">Select any color on your screen</li>
            <li className="pb-1">
              Automatically save selected color to your clipboard
            </li>
            <li className="pb-1">
              Choose between HSL, RGB, and HEX color formats
            </li>
            <li className="pb-1">Support for Pantone and CMYK (coming soon)</li>
            <li className="pb-1">Screen measurement features (coming soon)</li>
            <li className="pb-1">Color history (coming soon)</li>
            <li className="pb-1"> Windows version (coming soon)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
