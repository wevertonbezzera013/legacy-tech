import Image from "next/image";

type FooterItemProps = {
  alt: string;
  src: string;
  description: React.ReactNode;
};

export const HeroSectionItems = ({
  alt,
  src,
  description,
}: FooterItemProps) => {
  return (
    <section className="container">
      <div className="flex flex-col gap-2 p-8 bg-gradient-to-t md:hover:scale-110 ease-in-out duration-300 from-bg-blue to-one rounded-[71px]">
        <Image
          src={src}
          alt={alt}
          width={260}
          height={227}
          className="shadowBlue"
        />
        <p className="text-xl font-bold">{description}</p>
      </div>
    </section>
  );
};
