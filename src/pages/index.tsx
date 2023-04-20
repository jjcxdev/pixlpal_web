import React, { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Privacy from "../components/Privacy";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handlePrivacyLinkClick = () => {
    setShowPrivacy(true);
  };

  const handleBackButtonClick = () => {
    setShowPrivacy(false);
  };

  return (
    <>
      <Head>
        <title>PixlPal</title>
        <meta property="og:title" content="PixlPal" key="title" />
      </Head>
      <Nav />
      {showPrivacy ? null : <Hero />}
      {showPrivacy ? (
        <Privacy onBackButtonClick={handleBackButtonClick} />
      ) : null}
      <Footer onPrivacyLinkClick={handlePrivacyLinkClick} />
    </>
  );
}
