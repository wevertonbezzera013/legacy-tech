import Link from "next/link";
import { Icon } from "../icons/icons";
import Image from "next/image";

type FooterItemProps = {
  alt: string;
  src: string;
  title: string;
  description: string;
};

export const HeroSectionItems = ({
  alt,
  src,
  title,
  description,
}: FooterItemProps) => {
  return (
    <section className="container">
      <div className="flex flex-col gap-2 p-8 bg-gradient-to-t md:hover:pt-16 ease-in-out duration-300 from-bg-blue to-one rounded-3xl">
        <Image
          src={src}
          alt={alt}
          width={260}
          height={227}
          className="shadowBlue"
        />
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </section>
  );
};
