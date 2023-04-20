import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";

type FooterProps = {
  onPrivacyLinkClick: () => void;
};

const Footer = ({ onPrivacyLinkClick }: FooterProps) => {
  const handlePrivacyLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    onPrivacyLinkClick();
  };

  return (
    <div className="flex flex-col items-center gap-2 py-4 font-serif text-xs">
      <div>
        <Link href="#" onClick={handlePrivacyLinkClick}>
          Privacy Policy and Terms of Service
        </Link>
      </div>
      <div className="flex items-center gap-2 pt-4">
        <FaRegCopyright />
        Justin Chambers 2023
      </div>
      <a href="https://jjcx.dev">www.jjcx.dev</a>
    </div>
  );
};

export default Footer;
