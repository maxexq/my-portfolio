import axios from "axios";
import Image from "next/image";
import React from "react";

type Props = {};

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
    return [];
  }
};

const Projects = async ({}: Props) => {
  const projects: IProjects[] = await fetchProjects();

  return (
    <ul className="w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects?.map((project, index: number) => {
        return (
          <li
            key={index}
            className="dark:text-white h-full list-none rounded-lg p-4 border border-[#2d3238] w-full"
          >
            {project?.attributes.thumbnail.data ? (
              <figure className="object-cover rounded-xl">
                <Image
                  src={`${process.env.STRAPI_BASE_URL}${project?.attributes.thumbnail.data?.attributes.url}`}
                  alt={project?.attributes.thumbnail.data?.attributes.url}
                  priority
                  width={500}
                  height={300}
                />
              </figure>
            ) : null}
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
            <p className="text-[#848d97] text-xs mt-2 mb-3 line-clamp-3">
              {project?.attributes.description}
            </p>
            <div className="flex justify-between items-center">
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

              <div className="flex justify-center gap-2 items-center">
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
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
