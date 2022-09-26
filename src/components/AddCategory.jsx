import { useState } from "react";

const AddCategory = () => {

  const [inputValue, setInputValue] = useState('One Punch Man');

  const onChange = (event)=> {
    setInputValue( event.target.value );
  }

  const onSubmit = (event)=> {
    event.preventDefault();
    console.log( inputValue )
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}  
        onChange={onChange}
      />
    </form>

  )
}

export { AddCategory}
