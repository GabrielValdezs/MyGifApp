import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["The Office"]);
  // const handleAdd = () => {
  //   // setCategories([...categories, "HunterXHunter"]); //se agrega al final el nuevo elemento. si se invierte el orden de los args, se agrega al inicio

  //   setCategories(cats => [...cats, "HunterXHunter"]); //manera 2 y más conveniente
  // };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol> */}
      {/* obviamos la llave porque solo retorna un elemento */}
      {/* <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol> */}
      <ol>
        {categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))}
      </ol>
    </>
  );
};
