"use client";
import { FooterItem } from "./FooterItem";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <footer className="w-full bg-dark-blue top-0 z-10">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              width={204}
              height={238}
              src="/images/legacytech-logo.png"
              alt="legacytech logo"
              unoptimized
            />
          </motion.div>
          <div className="text-start text-2xl md:text-4xl px-4 md:pr-56">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h1 className="font-bold">
                Forem ipsum
                <br />
                dolor sit amet,
                <br />
                consecteturr
                <br />
                <b className="text-green-blue">adipiscing eli.</b>
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center mt-6 gap-2 md:gap-6 text-xls">
          {FOOTER_NAV_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: i * 0.5 }}
            >
              <FooterItem {...item} key={item.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
