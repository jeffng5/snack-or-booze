import React, { useState } from 'react'



function ItemForm() {
    const [item, setItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(e.target.value)
    
    }

    const handleChange = (e) => {
        setItem(e.target.value)
        console.log(e.target.value)
    }

return (

    <form>
        <label>Food Item:</label>
        <input type="text" id="food name" name="food name" onChange={handleChange}></input>
        <label>Description:</label>
        <input type="text" id="description" name= "description" onChange={handleChange}></input>
        <label>Recipe:</label>
        <input type="text" id="recipe" name= "recipe" onChange={handleChange}></input>
        <label>Serve:</label>
        <input type="text" id="serve" name= "serve" onChange={handleChange}></input>
        <button onClick={handleSubmit}>Add Item</button>
    </form>

)

}


export default ItemForm