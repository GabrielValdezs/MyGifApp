import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

//Componente que va a renderizar todos los elementos que coincidan con esta categoría
export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="card animate__animated animate__flash animate__pulse">{category}</h3>

      {loading && <p className="card animate__animated animate__flash">Loading...</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
