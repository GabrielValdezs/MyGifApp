export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=alEAPvUt8W2LhBOFbV63q1C6ny5YdiDo`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  //las primeras 3 líneas son solo petición http en js
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  // console.log(gifs);
  //solo se mutó el arreglo recibido para que sea más fácil de ver
  // setImages(gifs);
  return gifs;

}