import React from "react";
import Head from "next/head";
import { IoIosArrowBack } from "react-icons/io";

type PrivacyProps = {
  onBackButtonClick: () => void;
};

const Privacy = ({ onBackButtonClick }: PrivacyProps) => {
  return (
    <>
      <Head>
        <title>Privacy Policy | PixlPal</title>
      </Head>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="px-10 py-6 sm:px-0">
          <button
            onClick={onBackButtonClick}
            className="mb-10 flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-[#E933ED] to-[#65C4FA] px-8 py-4 text-white"
          >
            <IoIosArrowBack />
            Back
          </button>
          <h1 className="bg-gradient-to-r from-[#E933ED] to-[#65C4FA] bg-clip-text pb-2 font-sans text-3xl font-extrabold text-transparent">
            Privacy Policy
          </h1>
          <p className="mb-10 font-serif">
            At this time, PixlPal does not collect any personal information from
            its users. We do not use cookies or similar technologies, and we do
            not share any information with third parties. PixlPal is committed
            to protecting the privacy of its users, and we do not retain any
            information that could be considered personal under applicable
            privacy laws in Ontario, Canada.
          </p>
          <h1 className="bg-gradient-to-r from-[#E933ED] to-[#65C4FA] bg-clip-text font-sans text-3xl font-extrabold text-transparent">
            Terms of Service
          </h1>
          <ul className="mt-4 list-disc pl-4 font-serif">
            <li>
              PixlPal is provided &ldquo;as is&rdquo;, and we are not
              responsible for any damage or harm caused by the use of our app.
            </li>
            <li>
              The scope of PixlPal is limited to sampling screen colors and
              copying that information to the clipboard.
            </li>
            <li>
              There are no restrictions on who can use PixlPal, but users must
              comply with all applicable laws and regulations in their
              jurisdiction, including in Ontario, Canada.
            </li>
            <li>
              PixlPal can be accessed and used by downloading it from the Github
              repository (https://github.com/jjcxdev/PixlPal_free), or once
              approved, from the Apple App Store.
            </li>
            <li>PixlPal is free to use and does not require any payment.</li>
            <li>
              Users are responsible for ensuring that PixlPal does not cause any
              issues on their system.
            </li>
            <li>Users are not allowed to alter the code of PixlPal.</li>
            <li>There are no prohibited uses of PixlPal at this time.</li>
            <li>We do not hold any trademarks for PixlPal.</li>
            <li>
              Any disputes with users or between users will be handled via email
              at j@jjcx.dev.
            </li>
            <li>
              These terms and conditions shall be governed by and construed in
              accordance with the laws of the province of Ontario, Canada, and
              any disputes arising out of or in connection with these terms and
              conditions shall be resolved exclusively by the courts of Ontario,
              Canada.
            </li>
            <li>
              We reserve the right to terminate a user&apos;s access to PixlPal
              if they violate any of these terms and conditions.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Privacy;
