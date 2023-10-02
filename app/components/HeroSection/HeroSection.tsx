"use client";
import HeroSectionImage from "./HeroSectionImage";
import { HeroSectionItems } from "./HeroSectionItems";
import { motion } from "framer-motion";

const HERO_SECTION_ITEMS = [
  {
    alt: "ILUSTRAÇÃO",
    src: "/images/ILUSTRAÇÃO.png",
    title: "Lorem ipsum dolor sit ",
    description:
      "Lorem ipsum dolor sit amet, const adipiscing elit. Nunc vulputate libero et velit interdum, ac odio mattis. Class aptent taciti soad litora torquent per conubia noa, per inceptos himenaeos.",
  },
  {
    alt: "ILUSTRAÇÃO",
    src: "/images/ILUSTRAÇÃO.png",
    title: "Lorem ipsum dolor sit ",
    description:
      "Lorem ipsum dolor sit amet, const adipiscing elit. Nunc vulputate libero et velit interdum, ac odio mattis. Class aptent taciti soad litora torquent per conubia noa, per inceptos himenaeos.",
  },
  {
    alt: "ILUSTRAÇÃO",
    src: "/images/ILUSTRAÇÃO.png",
    title: "Lorem ipsum dolor sit ",
    description:
      "Lorem ipsum dolor sit amet, const adipiscing elit. Nunc vulputate libero et velit interdum, ac odio mattis. Class aptent taciti soad litora torquent per conubia noa, per inceptos himenaeos.",
  },
];

export default function HeroSection() {
  return (
    <section className="container">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold text-3xl md:text-4xl">
              Dorem ipsum dolor <br />
              sit amet, consectetur <br />
              <b className="text-form-blue">adipiscing</b> elit. Nunc <br />
              <b className="text-light-green">15% vulputate</b> libero <br />
              et velit interdum. <br />
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="">
              <button className="mt-8 bg-primary-blue text-lg md:text-base rounded-xl px-5 py-1 md:px-6 md:py-2  font-semibold hover:bg-light-blue ease-in-out duration-300">
                ENTRE EM CONTATO
              </button>
            </a>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <HeroSectionImage />
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-48">
        {HERO_SECTION_ITEMS.map((item, i) => (
          <motion.div
            key={item.alt}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: i * 0.5 }}
          >
            <HeroSectionItems {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
