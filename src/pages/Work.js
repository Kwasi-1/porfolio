import React from 'react';

const Work = () => {
  return (
    <div className="bg-dark h-screen px-8 py-12 text-accent">
      <div className="text-left">
        <h1 className="text-5xl font-custom mb-8">WORK</h1>
        <p className="text-xl mb-12">
          This is a showcase of my best work in a variety of fields including Graphic and Web Design, No-Code Development, Product Design, and Product Management.
        </p>
        <div className="space-y-6">
          {["OKALPHA", "SUPERLINK", "KAROO", "WARD"].map((item, index) => (
            <div key={index} className="flex justify-between">
              <h2 className="text-4xl">{item}</h2>
              <span className="text-xl">
                {item === "SUPERLINK" || item === "KAROO" ? "– NEW" : ""}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
