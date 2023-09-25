import Image from "next/image";

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

export default function Company() {
  return (
    <section className="w-full bg-dark-blue top-0 z-10 mt-52 py-44">
      <div className="flex flex-col container">
        <h1 className="text-3xl font-bold mb-12">
          Dorem ipsum dolor sit amet, consectetur{" "}
          <b className="text-form-blue">adipiscing</b> elit
        </h1>
        <div className="flex flex-col gap-16 md:flex-row justify-between">
          {COMPANY_SECTION_ITEMS.map((item) => (
            <Image
              key={item.alt}
              src={item.src}
              alt={item.src}
              width={267}
              height={70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
