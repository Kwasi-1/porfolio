import React from 'react';

const ProjectsList = () => {
  const projects = [
    { name: 'Amazon', type: 'Frontend Development', url: 'https://kwasi-1.github.io/Amazon-Project/amazon.html' },
    { name: 'SwissBik', type: 'Internationalization (i18n)', url: 'https://swissbik-save.vercel.app/en', new: true },
    { name: 'AutoChef', type: 'Frontend Development', url: 'https://autochef.onrender.com/', new: true },
    { name: 'Dept.CS', type: 'Frontend Development', url: 'https://kwasi-1.github.io/11091069_DCIT205/cs_home_page.html' },
  ];

  return (
    <div className="relative flex flex-col space-y-4 sm:space-y-6 text-[10vw] sm:text-[8vw] lg:text-[7vw] w-full lg:w-[65%] lg:ml-[45%] lg:py-[10%] px-[10%] lg:px-0 font-light font-custom leading-[1.2] lg:leading-[1] mx-auto ">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.url} // Use the external URL here
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security best practice for external links
          className="justify-between items-center w-fit hover:italic hover:translate-x-2 transform ease-in-out duration-300"
        >
          <h2 className="uppercase">{project.name}</h2>
          <div className="flex items-center space-x-2 mt-1 sm:mt-2">
            <span className="text-[10px] sm:text-xs tracking-widest uppercase font-body">
              - {project.type}
            </span>
            {project.new && (
              <span className="text-[10px] sm:text-xs bg-light text-primary px-2 py-1 rounded">
                NEW
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectsList;