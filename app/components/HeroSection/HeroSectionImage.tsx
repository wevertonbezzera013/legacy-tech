import Image from "next/image";

export default function HeroSectionImage() {
  return (
    <section className="container flex content-center drop-shadow-button">
      <div className="flex relative md:mr-36 drop-shadow-button">
        <Image
          src="/images/SCREEN 1.png"
          alt="SCREEN 1"
          width={225}
          height={340}
          className="relative right-16 md:right-[94px] md:w-[325px] "
        />

        <Image
          src="/images/SCREEN 2.png"
          alt="SCREEN 2"
          width={325}
          height={340}
          className="absolute left-16 md:left-[159px] md:w-[325px] shadow"
        />
      </div>
      <Image
        src="/images/MACBOOK.png"
        alt="MACBOOK"
        width={270}
        height={540}
        className="absolute top-20 md:w-[425px]"
      />
    </section>
  );
}
