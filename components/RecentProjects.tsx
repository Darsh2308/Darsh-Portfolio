"use client";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import ProjectModal from "./ProjectModal";

type Project = (typeof projects)[number];

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="Darsh's Work" href={item.link}>
              <button
                onClick={() => setSelectedProject(item)}
                className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 text-left"
              >
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt="Background Image"
                    fill
                    style={{ objectFit: "cover" }}
                    className="absolute inset-0"
                  />
                </div>
                <Image
                  src={item.img}
                  alt="Project Cover"
                  className="z-10 absolute bottom-0"
                  width={500}
                  height={300}
                />
              </button>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`Icon ${index}`}
                        className="p-2"
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(item)}
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View Details
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </button>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default RecentProjects;
