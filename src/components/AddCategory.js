import React, { useState } from "react";
import PropTypes from 'prop-types'; 
export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState(""); //valor inicial
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) { //solo strings mayores a dos se pueden publicar
      setCategories(cats => [inputValue,...cats]);
      setInputValue(''); //reseteo después de enviar
    }
    
    // console.log("El submit se ha realizado con éxito");
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired //debe ser la prop en naranja del elemento AddCategory
}
