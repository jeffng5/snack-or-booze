import React, { useState } from 'react'
import './App.css'


const ItemForm = () =>  {
    const initialState =[]
    const [formData, setFormData] = useState(initialState)

    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
     
     }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData.food, formData.description, formData.recipe, formData.serve)
        setFormData(initialState)
    
    }


return (
<>
    <form>
        <label>Food Item:</label>

        <div>
        <input type="text" id="food" name="food" value={formData.food} placeholder= 'item' onChange={handleChange}></input>
        </div>
        <div>
        <input type="text" id="description" name= "description" value={formData.description} placeholder= 'description' onChange={handleChange}></input>
        </div>
        <div>
        <input type="text" id="recipe" name= "recipe" value={formData.recipe} placeholder = 'recipe' onChange={handleChange}></input>
        </div>
        <div>
        <input type="text" id="serve" name= "serve" value={formData.serve} placeholder ='serve' onChange={handleChange}></input>
        </div>
        <button onClick={handleSubmit}>Add Item</button>
    </form>
    </>
)

}


export default ItemForm