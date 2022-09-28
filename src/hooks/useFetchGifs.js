import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async ()=> {
      const newImageas =  await getGifs(category);
      setImages( newImageas );
      setIsLoading( false )
    }
    useEffect( () => {
      getImages();
    }, [] )

    return {
        images,
        isLoading
    }
}

export { useFetchGifs }