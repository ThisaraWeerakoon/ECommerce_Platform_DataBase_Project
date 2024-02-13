import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const VariantDropdown = ({ options, selectedValue, onSelect }) => {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    // console.log('Selected Value:', selectedValue); // Log the selected value
    onSelect(selectedValue);
  };

  return (
    <Form.Select aria-label="Default select example" value={selectedValue} onChange={handleSelectChange} >
      <option value="" disabled hidden>Open this select menu</option>
    {/* <select value={selectedValue} onChange={handleSelectChange}> */}
      {options.map((option, optionIndex) => (
        // console.log("selected values",selectedValue),
        // console.log("option",option),
        <option key={option.Variation_Option_Id} value={option.Variation_Option_Id}>
          {/* {console.log("option.Variation_Option_Name",option.Variation_Option_Id)} */}
          {option.Variation_Option_Name}
        </option>
      ))}
    {/* </select> */}
    </Form.Select>
  );
};

export default VariantDropdown;

