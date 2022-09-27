import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect( () => {
    const getImages = async ()=> {
      const newImageas =  await getGifs(category);
      setImages( newImageas );
    }
    getImages();
  }, [] )

  return (
    <>
        <h3>{ category }</h3>
        <ol>
          {images.map(image=>(
            <li>{image.title}</li>
          ))}
        </ol>
    </>
  )
}
