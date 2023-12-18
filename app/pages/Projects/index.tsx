import axios from "axios";
import React from "react";

type Props = {};

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

const Projects = async (props: Props) => {
  const projects: any[] = await fetchProjects();

  return (
    <section className="w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects?.map((project, index: number) => (
        <div
          key={index}
          className="dark:text-white rounded-lg p-4 border border-[#2d3238] w-full"
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-[#2f81f7] text-sm font-bold">
              {project.attributes.title}
            </span>
            <span className="rounded-full text-[#848d97] text-xs px-2 leading-[18px] border border-[#2d3238] h-5">
              {project.attributes.detail.status}
            </span>
          </div>
          <p className="text-[#848d97] text-xs mt-2 mb-3 line-clamp-3">
            {project.attributes.description}
          </p>
          <div className="flex items-center gap-2">
            {project.attributes.detail.stacks.map(
              (stack: string, index: number) => {
                return (
                  <p key={index} className="text-[#848d97] text-xs">
                    {stack}
                  </p>
                );
              }
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
