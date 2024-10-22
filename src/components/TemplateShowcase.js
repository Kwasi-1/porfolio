import React from 'react';

const TemplateShowcase = () => {
  return (
    <div className="absolute top-16 right-16 p-4 bg-black text-white rounded-lg flex items-center space-x-4">
      <img
        src="template-image-url" 
        alt="Momento Template"
        className="w-24 h-16 object-cover rounded"
      />
      <div>
        <p className="text-sm">NEW FRAMER TEMPLATE</p>
        <h2 className="text-lg font-semibold">Momento Photography Template – $39</h2>
      </div>
    </div>
  );
};

export default TemplateShowcase;
