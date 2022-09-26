import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto', 'Dragon Ball', 'Bleach']);

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            
            {/* Listado de Gif */}
            <ol>
                {categories.map( category =>(
                    <li key={category} >{category}</li>
                ))}
            </ol>
                {/* Gif Item */}
        </>
    )
}
