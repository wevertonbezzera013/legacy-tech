"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <Link href="/">
            <Image
              width={68}
              height={65}
              src="/images/legacytech-logo.png"
              alt="legacytech logo"
              unoptimized
            />
          </Link>
        </motion.div>
      </nav>
    </header>
  );
}
