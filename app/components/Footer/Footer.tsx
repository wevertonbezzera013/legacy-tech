"use client";
import { FooterItem } from "./FooterItem";
import Image from "next/image";
import { motion } from "framer-motion";

const FOOTER_NAV_ITEMS = [
  {
    label: "WHATSAPP",
    href: "https://api.whatsapp.com/send/?phone=5599982205165&text&type=phone_number&app_absent=0",
    icon: "BiLogoWhatsapp",
  },
  {
    label: "E-MAIL",
    href: "mailto:jlucasamorim@legacytech.net",
    icon: "MdMail",
  },
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/_legacytech/",
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
          <div className="text-start text-2xl md:text-2xl px-4 md:pr-56">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h1 className="font-bold">
                LegacyTech
                <br />
                transformamos o seu
                <br />
                sucesso em
                <br />
                <b className="text-green-blue">nossa meta.</b>
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
