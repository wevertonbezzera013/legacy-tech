import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectsSectionCardProps = {
  title: string;
  image: StaticImageData;
  link: string;
};

export const ProjectsSectionCard = ({
  title,
  image,
  link,
}: ProjectsSectionCardProps) => {
  return (
    <div className="flex flex-col md:flex-row group">
      <div className="w-full h-full mr-3 flex flex-col" key={title}>
        <Link href={link} target="_blank" className="cursor-pointer">
          <Image
            width={420}
            height={304}
            src={image}
            alt="Project Thumbnail"
            unoptimized
            className="cover drop-shadow-xl cursor-pointer md:hover:scale-110 ease-in-out duration-300"
          />
        </Link>
        <h3 className="text-primary underline text-lg mt-2">{title}</h3>
      </div>
    </div>
  );
};
