"use client";

import Image from "next/image";
import { Icon } from "../icons/icons";
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

export default function About() {
  return (
    <section className="w-full bg-dark-blue top-0 z-10 mt-0 md:mt-52 py-44 ">
      <div className="container flex flex-col md:flex-row md:gap-36">
        <div className="flex relative items-center pb-24 md:mr-36 drop-shadow-button">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/about-one.png"
              alt="about-one"
              width={500}
              height={642}
              className="relative w-44 md:w-96"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/about-two.png"
              alt="about-two.png"
              width={552}
              height={400}
              className="absolute shadow w-44 md:w-96 top-44 md:top-72 left-10"
            />
          </motion.div>
        </div>

        <div className="flex flex-col container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-3xl font-bold mb-12">
              Forem ipsum dolor sit amet,
              <b className="text-primary-blue">consectetur adipiscing elit.</b>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <div className="flex flex-col gap-3">
              <div className="text-green-blue flex items-center">
                <Icon name="BiBadgeCheck" />
                <p className="ml-2">
                  Forem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
              <div className="text-light-blue flex items-center">
                <Icon name="BiBadgeCheck" />
                <p className="ml-2">
                  Forem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
              <div className="text-green-blue flex items-center">
                <Icon name="BiBadgeCheck" />
                <p className="ml-2">
                  Forem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <a href="">
              <button className="mt-8 bg-primary-blue text-lg md:text-base rounded-xl px-5 py-1 md:px-6 md:py-2  font-semibold hover:bg-light-blue ease-in-out duration-300">
                ENTRE EM CONTATO
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
