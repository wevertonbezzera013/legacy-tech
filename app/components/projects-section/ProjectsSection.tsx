"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectsSectionCard } from "./ProjectsSectionCard";
import { Icon } from "../icons/icons";
import project1 from "../../../public/images/project-1.jpg";
import project2 from "../../../public/images/project-2.jpg";
import project5 from "../../../public/images/project-5.jpg";
import project4 from "../../../public/images/project-4.jpg";
import { HighlightedProjectsSectionCard } from "../highlighted-project-section/HighlightedProjectsSectionCard";

export const ProjectsSection = () => {
  const itemsPerPage = 3;
  const [visible, setVisible] = useState(itemsPerPage);

  const showMoreItems = () => {
    setVisible((prevVisible) =>
      Math.min(prevVisible + itemsPerPage, totalProjects.length)
    );
  };

  const totalProjects = [
    {
      title: "Clear Works",
      image: project1,
      link: "https://www.clearworks.com",
    },
    {
      title: "Egis System",
      image: project2,
      link: "https://saneaudit.egis-brasil.com.br:4000/login",
    },
    { title: "Unimed Portal", image: project5, link: "/" },
    { title: "SimpleFocus", image: project4, link: "https://simplefocus.com" },
  ];

  return (
    <section className="container py-11 mt-36">
      <HighlightedProjectsSectionCard />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-11 my-11">
        {/* Render the visible projects */}
        {totalProjects.slice(0, visible).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ProjectsSectionCard
              title={project.title}
              image={project.image}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
      {visible < totalProjects.length && (
        <button
          onClick={showMoreItems}
          className="flex items-center border gap-2 justify-center font-krona text-text hover:text-secondary ease-in-out duration-300 relative mt-3 p-4 rounded-lg md:hover:scale-110"
        >
          <span>Load More</span>
          <Icon name="FaAngleDown" />
        </button>
      )}
    </section>
  );
};
