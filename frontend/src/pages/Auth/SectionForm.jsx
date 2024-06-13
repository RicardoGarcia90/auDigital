import React from 'react';

const SectionForm = ({ children, textH3, textP }) => {
  return (
    <div className="px-36 flex flex-col justify-center">
      <h3 className="text-center mt-3 md:mt-10 text-xl md:text-xl  lg:text-2xl  font-bold mb-3">
        {textH3}
      </h3>
      <p className="text-center text-base">{textP}</p>
      {children}
    </div>
  );
};

export default SectionForm;
