"use client";
import { Icon } from "../icons/icons";
import { motion } from "framer-motion";

export default function SocialMedia() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-10 absolute">
          <a className=" " href="" target="_blank">
            <Icon
              name="FaGithub"
              className="text-white bg-primary-blue hover:bg-light-blue ease-in-out duration-300 rounded-full w-12 h-12 p-2"
            />
          </a>
          <a className="" href="wa.me/" target="_blank">
            <Icon
              name="FaWhatsapp"
              className="text-white bg-primary-blue hover:bg-light-blue ease-in-out duration-300 rounded-full w-12 h-12 p-2"
            />
          </a>
          <a className="" href="" target="_blank">
            <Icon
              name="FaLinkedin"
              className="text-white bg-primary-blue hover:bg-light-blue ease-in-out duration-300 rounded-full w-12 h-12 p-2"
            />
          </a>
          <a className="" href="mailto:" target="_blank">
            <Icon
              name="MdMail"
              className="text-white bg-primary-blue hover:bg-light-blue ease-in-out duration-300 rounded-full w-12 h-12 p-2"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
