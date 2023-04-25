import Image from "next/image";
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
      <div className="mx-12 font-poppins text-2xl font-light md:py-10 md:text-4xl lg:px-20 lg:py-8">
        Select any{" "}
        <span className="bg-gradient-to-r from-[#E748C5] via-[#8350BC] to-[#71E2F1] bg-clip-text font-extrabold text-transparent">
          COLOR
        </span>{" "}
        on your screen and automatically save it to your clipboard
      </div>
      <div className="flex flex-col gap-6">
        <button
          className="w-56 "
          onClick={() =>
            (window.location.href =
              "https://apps.apple.com/ca/app/pixlpal/id6447212748?mt=12")
          }>
          <img src="/apple.png" alt="Download" />
        </button>

        <button
          className="flex w-56 justify-center rounded-lg border-4 border-black  p-5 px-2 text-center text-black"
          onClick={() =>
            (window.location.href = "https://www.buymeacoffee.com/jjcx")
          }>
          <div className="flex justify-center gap-2 text-center">
            <FaCoffee className="text-2xl" />
            <span>Buy Me a Coffee</span>
          </div>
        </button>
      </div>
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
