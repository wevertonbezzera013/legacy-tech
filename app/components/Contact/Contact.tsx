"use client";
import { z } from "zod";
/* eslint-disable react/no-unescaped-entities */

import SocialMedia from "../Buttons/SocialMedia";
import { Icon } from "../icons/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

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
          <div className="md:absolute hidden md:block right-0 top-2 transform translate-y-[-10%] w-[94px] h-[85px] rounded-full bg-circle-blue"></div>
          <h1 className="text-center items-center text-2xl font-bold">
            Forem ipsum dolor sit amet, consectetur
            <p className="text-green-blue">adipiscing elit.</p>
          </h1>
          <div className="flex flex-col z-20">
            <form
              className="mt-12 w-full flex flex-col gap-4 font-inter text-text"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="relative">
                <Icon name="FaUser" className="absolute left-4 top-4 text-xl" />
                <input
                  placeholder="Nome"
                  className="w-full h-14 pl-12 bg-bg-blue rounded-lg p-4 focus:outline-none focus:ring-2 ring-light-blue border border-form-blue"
                  {...register("name")}
                />
              </div>
              <div className="relative">
                <Icon name="BiAt" className="absolute left-4 top-4 text-xl " />
                <input
                  placeholder="E-mail"
                  className="w-full h-14 pl-12 bg-bg-blue rounded-lg p-4 focus:outline-none focus:ring-2 ring-light-blue border border-form-blue"
                  {...register("email")}
                />
              </div>
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
              <button className="mt-6 bg-primary-blue uppercase hover:bg-light-blue rounded-lg ease-in-out duration-300 font-krona px-full py-4 px-24 text-white font-bold">
                Entre em Contato
              </button>
            </form>
            <div className="absolute contents">
              <div className="mt-6">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
