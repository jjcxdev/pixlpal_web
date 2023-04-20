import React, { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Privacy from "../components/Privacy";
import Hero from "../components/Hero";

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
      <Nav />
      {showPrivacy ? null : <Hero />}
      {showPrivacy ? (
        <Privacy onBackButtonClick={handleBackButtonClick} />
      ) : null}
      <Footer onPrivacyLinkClick={handlePrivacyLinkClick} />
    </>
  );
}
