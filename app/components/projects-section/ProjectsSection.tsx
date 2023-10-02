"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectsSectionCard } from "./ProjectsSectionCard";
import { Icon } from "../icons/icons";

export const ProjectsSection = () => {
  const itemsPerPage = 2;
  const [visible, setVisible] = useState(itemsPerPage);

  const showMoreItems = () => {
    setVisible((prevVisible) => prevVisible + itemsPerPage);
  };

  //TODO: Replace this with the actual number of projects
  const totalProjects = 4;

  return (
    <section className="container py-11 mt-36">
      <div className="flex flex-col gap-11 my-11">
        {/* Render the visible projects */}
        {Array.from({ length: visible }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <ProjectsSectionCard />
          </motion.div>
        ))}
        {/* Gradient Load More Button */}
        {visible < totalProjects && (
          <button
            onClick={showMoreItems}
            className="flex items-center border gap-2 justify-center font-krona text-text hover:text-secondary ease-in-out duration-300 relative mt-3 p-4 rounded-lg"
          >
            <span>Load More</span>
            <Icon name="FaAngleDown" />
          </button>
        )}
      </div>
    </section>
  );
};
