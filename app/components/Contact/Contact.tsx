"use client";
import { z } from "zod";
import { motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */

import SocialMedia from "../Buttons/SocialMedia";
import { Icon } from "../icons/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().refine((val) => val.length >= 3 && val.length <= 100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactSection = () => {
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section className="container md:relative py-24 pb-48 px-6 md:py-32 flex justify-center items-center">
      <div className="md:relative hidden md:block w-[794px] h-[785px] left-[-823px] bg-circle-blue rounded-full"></div>
      <div className="md:absolute hidden md:block right-0 top-1/2 transform translate-y-[-10%] w-[394px] h-[385px] rounded-full bg-circle-blue"></div>
      <div className="container md:absolute inset-0 flex justify-center items-center">
        <div className="w-full max-w-[320px] md:max-w-[420px] mx-auto">
          <div className="md:relative hidden md:block right-0 top-2 transform translate-y-[-10%] w-[94px] h-[85px] rounded-full bg-circle-blue"></div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-start items-center text-3xl font-bold">
              <h1>Entre em Contato e</h1>
              <span className=" text-light-blue">
                Veja Sua Empresa Crescer!
              </span>
            </div>
          </motion.div>
          <div className="flex flex-col z-20">
            <form
              className="mt-12 w-full flex flex-col gap-4 font-inter text-text"
              onSubmit={handleSubmit(onSubmit)}
            >
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="relative">
                  <Icon
                    name="FaUser"
                    className="absolute left-4 top-4 text-xl"
                  />
                  <input
                    placeholder="Nome"
                    className="w-full h-14 pl-12 bg-bg-blue rounded-lg p-4 focus:outline-none focus:ring-2 ring-light-blue border border-form-blue"
                    {...register("name")}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <div className="relative">
                  <Icon
                    name="BiAt"
                    className="absolute left-4 top-4 text-xl "
                  />
                  <input
                    placeholder="E-mail"
                    className="w-full h-14 pl-12 bg-bg-blue rounded-lg p-4 focus:outline-none focus:ring-2 ring-light-blue border border-form-blue"
                    {...register("email")}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.7 }}
              >
                <div className="relative">
                  <Icon
                    name="BiChat"
                    className="absolute left-4 top-4 text-xl "
                  />
                  <textarea
                    placeholder="Mensagem"
                    className="resize-none w-full pl-12 h-[138px] bg-bg-blue rounded-lg p-4 focus:outline-none focus:ring-2 ring-light-blue border border-form-blue"
                    maxLength={500}
                    {...register("message")}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <a href="/contact">
                  <button className="mt-6 bg-primary-blue uppercase hover:bg-light-blue rounded-lg ease-in-out duration-300 text-sm px-full py-4 px-24 md:text-base md:py-4 md:px-10 text-white font-bold">
                    Entre em Contato
                  </button>
                </a>
              </motion.div>
            </form>
            <div className="absolute contents">
              <div className="mt-6 flex">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
