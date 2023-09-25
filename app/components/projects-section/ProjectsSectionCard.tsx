import Image from "next/image";
import { ProjectsSectionCardItem } from "./ProjectsSectionCardItem";
import Link from "next/link";

const PROJECT_SECTION_CARD_ITEMS = [
  {
    description:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio",
    secondDescription:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    shortText: "Dorem ipsum dolor sit amet",
    title: "Dorem ipsum dolor sit amet",
    secondTitle: "HTML PROJECT",
    link: "",
  },
];

export const ProjectsSectionCard = () => {
  return (
    <div className="flex flex-col md:flex-row group">
      {PROJECT_SECTION_CARD_ITEMS.map((item) => (
        <div className="w-full h-full mr-3 flex flex-col" key={item.title}>
          <Link href={item.link} target="_blank">
            <Image
              width={420}
              height={304}
              src="/images/project-1.png"
              alt="Project Thumbnail"
              unoptimized
              className="cover drop-shadow-xl"
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
          <p className="text-text text-3xl font-bold text-center shadowBlue">
            {item.description}
          </p>
          <h2 className="text-center text-baby-light shadowBlue">
            {item.title}
          </h2>
        </div>
      ))}
    </div>
  );
};
