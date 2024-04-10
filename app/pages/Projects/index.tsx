import axios from "axios";
import Image from "next/image";
import React from "react";

import projectsStatic from "./projects.json";

interface IProjects {
  id: number;
  attributes: {
    title: string;
    description: string;
    detail: {
      status: string;
      stacks: string[];
      repo: string;
      demo: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const fetchProjects = async () => {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/projects?populate=*`
    );

    return response.data.data;
  } catch (error) {
    console.error(error);
    return projectsStatic?.data;
  }
};

const Projects = async () => {
  const projects: IProjects[] = await fetchProjects();

  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-6 h-auto text-center lg:items-center 
              lg:relative lg:justify-center p-4"
    >
      <h2 className="font-semibold text-2xl">Projects</h2>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects?.map((project, index: number) => {
          return (
            <li
              key={index}
              className="dark:text-white list-none h-full items-start rounded-lg p-4 flex flex-col lg:flex-row gap-4 border border-[#2d3238] w-full"
            >
              {project?.attributes.thumbnail.data ? (
                <figure className="h-full w-full lg:max-w-[192px] lg:max-h-[192px] flex justify-center items-center object-cover rounded-md overflow-hidden relative">
                  <Image
                    src={`${process.env.STRAPI_BASE_URL}${project?.attributes.thumbnail.data?.attributes.url}`}
                    alt={project?.attributes.thumbnail.data?.attributes.url}
                    priority
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>
              ) : null}

              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <a
                    href={project?.attributes.detail.repo || "#"}
                    target="_blank"
                    className="hover:underline decoration-[#2f81f7]"
                  >
                    {" "}
                    <span className="text-[#2f81f7] text-sm font-bold">
                      {project?.attributes.title}
                    </span>
                  </a>
                  <span className="rounded-full text-[#848d97] text-xs px-2 leading-[18px] border border-[#2d3238] h-5">
                    {project?.attributes.detail.status}
                  </span>
                </div>
                <p className="text-[#848d97] text-xs mt-2 mb-3 line-clamp-3 text-left">
                  {project?.attributes.description}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {project?.attributes.detail.stacks.map(
                      (stack: string, index: number) => {
                        return (
                          <p key={index} className="text-[#848d97] text-xs">
                            {stack}
                          </p>
                        );
                      }
                    )}
                  </div>

                  <div className="flex justify-start gap-2 items-center">
                    {project?.attributes.detail.repo && (
                      <a
                        href={project.attributes.detail.repo}
                        target="_blank"
                        className="hover:-rotate-6 transition-all duration-300"
                      >
                        <span className="rounded-full text-[#848d97] text-xs px-2 leading-[18px] border border-[#2d3238] h-5">
                          Code
                        </span>
                      </a>
                    )}

                    {project?.attributes.detail.demo && (
                      <a
                        href={project.attributes.detail.demo}
                        target="_blank"
                        className="hover:rotate-6 transition-all duration-300"
                      >
                        <span className="rounded-full flex items-center gap-1 text-[#848d97] text-xs px-2 leading-[18px] border border-[#2d3238] h-5">
                          <div className="bg-[#e34c26] w-2 h-2 rounded-full"></div>
                          Live Demo
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
