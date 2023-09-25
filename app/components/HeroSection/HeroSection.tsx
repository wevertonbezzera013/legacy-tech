import Image from "next/image";
import HeroSectionImage from "./HeroSectionImage";
import { HeroSectionItems } from "./HeroSectionItems";

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
          <h1 className="font-bold text-3xl md:text-4xl">
            Dorem ipsum dolor <br />
            sit amet, consectetur <br />
            <b className="text-form-blue">adipiscing</b> elit. Nunc <br />
            <b className="text-light-green">15% vulputate</b> libero <br />
            et velit interdum. <br />
          </h1>
          <a href="">
            <button className="mt-8 bg-primary-blue text-lg md:text-base rounded-xl px-5 py-1 md:px-6 md:py-2  font-semibold hover:bg-light-blue ease-in-out duration-300">
              ENTRE EM CONTATO
            </button>
          </a>
        </div>

        <div>
          <HeroSectionImage />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-48">
        {HERO_SECTION_ITEMS.map((item) => (
          <HeroSectionItems {...item} key={item.alt} />
        ))}
      </div>
    </section>
  );
}
