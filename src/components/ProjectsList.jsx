import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
  const projects = [
    { name: 'OKALPHA', type: 'WEBFLOW DEVELOPMENT' },
    { name: 'SUPERLINK', type: 'FRAMER DEVELOPMENT', new: true },
    { name: 'KAROO', type: 'WEBFLOW DEVELOPMENT', new: true },
    { name: 'WARD', type: 'WEBFLOW DEVELOPMENT' },
  ];

  return (
    <div className="relative flex flex-col space-y-6 text-[7vw] w-[65%] ml-[100%] py-[30%] font-light font-custom leading-[1]">
      {projects.map((project, index) => (
        <Link key={index} className="justify-between items-center w-fit">
          <h2 className="hover:italic hover:translate-x-[5px] transform ease-in-out duration-300 w-fit">{project.name}</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm tracking-wider">- {project.type}</span>
            {project.new && <span className="text-xs bg-light text-primary px-2 py-1 rounded">NEW</span>}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsList;
