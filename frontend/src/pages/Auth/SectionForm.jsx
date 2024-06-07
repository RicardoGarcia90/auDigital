import React from 'react';

const SectionForm = ({ children, textH3, textP }) => {
  return (
    <div className="px-36 flex flex-col justify-center">
      <h3 className="text-center md:mt-10 md:text-2xl  lg:text-3xl  font-bold mb-3">
        {textH3}
      </h3>
      <p className="text-center text-lg">{textP}</p>
      {children}
    </div>
  );
};

export default SectionForm;
