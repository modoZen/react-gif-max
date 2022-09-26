import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto', 'Dragon Ball', 'Bleach']);

    const onAddCategory = () => {
        const newCategories = [...categories];
        newCategories.push('One Punch Man');
        setCategories( newCategories );
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory setCategories={ setCategories } />
            
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
