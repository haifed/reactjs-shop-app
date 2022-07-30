import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

const Sort = ({ sort }: { sort: any }) => {
  const [option, setOption] = useState("");

//   const handleChange = (e: any) => {
//     setOption(e.currentTarget.value);
//   };

  const handleSort = (e: any) => {
    setOption(e.currentTarget.value);
    sort(e.currentTarget.value);
  };

  return (
    <div>
      <Form.Select aria-label="Default select example"  onChange={handleSort}>
      <option>Sort by ---</option>
      <option value="all">All</option>
        <option value="price-lowest">Price (Lowest)</option>
        <option value="price-highest">Price (Highest)</option>
        <option value="name-a-z">Name (A - Z)</option>
        <option value="name-z-a">Name (Z - A)</option>
    </Form.Select>
    </div>
  );
};

export default Sort;
