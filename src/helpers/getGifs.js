const getGifs         = async (category) =>{
    const url           = `https://api.giphy.com/v1/gifs/search?api_key=oiL7nHdhL72N1Rj68PJDSBV8wrb4QvVS&q=${category}&limit=20`;
    const res           = await fetch( url );
    const {data = []}   = await res.json();
    
    const gifs = data.map( ({ id, title, images }) =>({
        id,
        title,
        url: images.downsized_medium.url,
    }) );
    
    console.info( gifs );
    return gifs;
}

export { getGifs }