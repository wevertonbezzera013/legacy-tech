"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const COMPANY_SECTION_ITEMS = [
  {
    alt: "SUZANO",
    src: "/images/SUZANO.png",
  },
  {
    alt: "SUZANO",
    src: "/images/SUZANO.png",
  },
  {
    alt: "SUZANO",
    src: "/images/SUZANO.png",
  },
];

export default function Company() {
  return (
    <section className="w-full bg-dark-blue top-0 z-10 mt-52 py-44">
      <div className="flex flex-col container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mb-12">
            Dorem ipsum dolor sit amet, consectetur{" "}
            <b className="text-form-blue">adipiscing</b> elit
          </h1>
        </motion.div>
        <div className="flex flex-col gap-16 md:flex-row justify-between">
          {COMPANY_SECTION_ITEMS.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: i * 0.5 }}
            >
              <Image
                key={item.alt}
                src={item.src}
                alt={item.src}
                width={267}
                height={70}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
