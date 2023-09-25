import Image from "next/image";
import HeroSectionImage from "./HeroSectionImage";

export default function HeroSection() {
  return (
    <section className="container">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">
            Dorem ipsum dolor <br />
            sit amet, consectetur <br />
            <b className="text-form-blue">adipiscing</b> elit. Nunc <br />
            <b className="text-light-green">15% vulputate</b> libero <br />
            et velit interdum. <br />
          </h1>
          <a href="">
            <button className="mt-8 bg-primary-blue text-sm md:text-base rounded-xl px-5 py-1 md:px-6 md:py-2  font-semibold hover:bg-light-blue ease-in-out duration-300">
              ENTRE EM CONTATO
            </button>
          </a>
        </div>

        <div>
          <HeroSectionImage />
        </div>
      </div>
    </section>
  );
}
