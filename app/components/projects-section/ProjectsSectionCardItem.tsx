"use client";

import { Icon } from "../icons/icons";
import Link from "next/link";

import { useRef } from "react";

type ProjectsSectionCardItemProps = {
  link: string;
};

export const ProjectsSectionCardItem = ({
  link,
}: ProjectsSectionCardItemProps) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <Link href={link}>
      <div className="flex justify-start gap-9">
        <div className="uppercase flex items-center text-white bg-button hover:bg-newBlue ease-in-out duration-300 p-2 px-8 md:p-5 md:px-12 font-bold"></div>
      </div>
    </Link>
  );
};
