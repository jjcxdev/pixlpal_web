import Image from "next/image";

const Nav = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:p-24">
      <div className="flex w-full max-w-5xl items-center justify-between pb-12 font-sourcecode text-xs">
        <p className="flex w-auto justify-center p-6 text-center lg:text-lg">
          The official home of PixlPal
        </p>
        <div className="flex flex-col items-center justify-center p-6 text-center ">
          <a
            href="https://jjcx.dev"
            className="flex flex-col items-center justify-center "
          >
            <span>Created by</span>
            <span className="font-ethnocentric text-2xl">JJCX</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
