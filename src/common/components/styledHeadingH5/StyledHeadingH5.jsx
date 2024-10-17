import React from 'react';

const StyledHeadingH5 = ({ text, textColor, fontWeight }) => {
  return (
    <h4 className={`text-h5 font-Inter ${textColor} ${fontWeight}`}>
      {text}
    </h4>
  );
};

export default StyledHeadingH5;
