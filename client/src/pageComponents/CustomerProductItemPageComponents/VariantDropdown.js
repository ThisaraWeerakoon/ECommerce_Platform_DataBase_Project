import React, { useState } from 'react';

const VariantDropdown = ({ options, selectedValue, onSelect }) => {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    // console.log('Selected Value:', selectedValue); // Log the selected value
    onSelect(selectedValue);
  };

  return (
    <select value={selectedValue} onChange={handleSelectChange}>
      {options.map((option, optionIndex) => (
        // console.log("selected values",selectedValue),
        // console.log("option",option),
        <option key={option.Variation_Option_Id} value={option.Variation_Option_Id}>
          {/* {console.log("option.Variation_Option_Name",option.Variation_Option_Id)} */}
          {option.Variation_Option_Name}
        </option>
      ))}
    </select>
  );
};

export default VariantDropdown;

