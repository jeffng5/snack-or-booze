import React, { useState } from 'react'
import App from "./App"


function ItemForm({makeItem}) {
    const initialState =[]
    const [item, setItem] = useState({initialState})

    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setItem(item => ({...item, [name]: value}))
     
     }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        makeItem(item.food, item.description, item.recipe, item.serve)
        setItem(initialState)
    
    }


return (

    <form>
        <label>Food Item:</label>
        <input type="text" id="food" name="food" value= {item.food} onChange={handleChange}></input>
        <label>Description:</label>
        <input type="text" id="description" name= "description" value={item.description} onChange={handleChange}></input>
        <label>Recipe:</label>
        <input type="text" id="recipe" name= "recipe" value={item.recipe} onChange={handleChange}></input>
        <label>Serve:</label>
        <input type="text" id="serve" name= "serve" value={item.serve} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Add Item</button>
    </form>

)

}


export default ItemForm