import Image from "next/image";
import Link from "next/link";

import project3 from "../../../public/images/project-3.jpg";

const PROJECT_SECTION_CARD_ITEMS = [
  {
    description:
      "Recomendo totalmente a LegacyTech para qualquer pessoa que busque soluções tecnológicas inovadoras e confiáveis.",
    secondDescription: "ProdSistem Sistemas e Soluções Operacionais",
    title: "Diretor -  Cledmilson Ferreira de Jesus",
    secondTitle: "ProdSistem",
    link: "https://prodcontrol.prodsistem.com.br/company?returnTo=aHR0cHM6Ly9wcm9kY29udHJvbC5wcm9kc2lzdGVtLmNvbS5ici9kYXNoYm9hcmQ=",
  },
];

export const HighlightedProjectsSectionCard = () => {
  return (
    <div className="flex flex-col md:flex-row group">
      {PROJECT_SECTION_CARD_ITEMS.map((item) => (
        <div className="w-full h-full mr-3 flex flex-col" key={item.title}>
          <Link href={item.link} target="_blank">
            <Image
              width={420}
              height={304}
              src={project3}
              alt="Project Thumbnail"
              unoptimized
              className="cover drop-shadow-xl cursor-pointer md:hover:scale-105 ease-in-out duration-300"
            />
          </Link>
          <h3 className="text-primary underline text-lg mt-2">
            {item.secondTitle}
          </h3>
          <p className="text-text text-xs mt-2">{item.secondDescription}</p>
        </div>
      ))}

      {PROJECT_SECTION_CARD_ITEMS.map((item) => (
        <div
          className="flex flex-col gap-3 mt-6 md:mt-0 justify-center"
          key={item.title}
        >
          <q className="text-text text-3xl font-bold text-center shadowBlue">
            {item.description}
          </q>
          <h2 className="text-center text-baby-light shadowBlue">
            {item.title}
          </h2>
        </div>
      ))}
    </div>
  );
};
