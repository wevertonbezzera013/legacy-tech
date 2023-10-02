"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-opacity-0 top-0 w-full z-10 h-24 flex items-center justify-center">
      <nav className="flex flex-row items-center w-[90%] px-1 md:px-5 justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            width={68}
            height={65}
            src="/images/legacytech-logo.png"
            alt="legacytech logo"
            unoptimized
          />
        </motion.div>
        <div className="px-4 md:pr-56">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <button className="bg-primary-blue text-sm md:text-base rounded-xl px-5 py-1 font-semibold hover:bg-light-blue ease-in-out duration-300">
              CONTATO
            </button>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
