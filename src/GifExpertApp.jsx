import { useState } from "react";
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newValue) => {

        if( categories.some( category => category.toLowerCase() === newValue.toLowerCase() )) return 
           
        setCategories([ newValue, ...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ onAddCategory }
            />
            
            {/* Listado de Gif */}
            {categories.map( category =>(
                <GifGrid key={category} category={category} />
            ))}
            {/* Gif Item */}
        </>
    )
}
