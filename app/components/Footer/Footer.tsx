import Link from "next/link";
import { FooterItem } from "./FooterItem";
import Image from "next/image";

const FOOTER_NAV_ITEMS = [
  {
    label: "WHATSAPP",
    href: "/WHATSAPP",
    icon: "BiLogoWhatsapp",
  },
  {
    label: "CONTACT",
    href: "/CONTACT",
    icon: "",
  },
  {
    label: "LINKEDIN",
    href: "/LINKEDIN",
    icon: "BiLogoLinkedinSquare",
  },
  {
    label: "PROJECTS",
    href: "/PROJECTS",
    icon: "",
  },
  {
    label: "INSTAGRAM",
    href: "/INSTAGRAM",
    icon: "BiLogoInstagram",
  },
];

export default function Footer() {
  return (
    <footer className="container w-full bg-dark-blue top-0 z-10 flex flex-col md:flex-row  items-center justify-between">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          width={204}
          height={238}
          src="/images/legacytech-logo.png"
          alt="legacytech logo"
          unoptimized
        />
        <div className="text-center md:text-start text-xl md:text-3xl px-4 md:pr-56">
          <h1 className="font-bold">
            Forem ipsum dolor sit amet, consecteturr{" "}
            <h2 className="text-green-blue">adipiscing eli.</h2>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center mt-6 gap-2 md:gap-6 text-xls">
        {FOOTER_NAV_ITEMS.map((item) => (
          <FooterItem {...item} key={item.label} />
        ))}
      </div>
    </footer>
  );
}
