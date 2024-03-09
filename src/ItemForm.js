import React, { useState } from 'react'
import './App.css'
import AdditionalFood from './AdditionalFood'
import db from './db'



const ItemForm = () =>  {
  
    const initialState =[]
    const [formData, setFormData] = useState(initialState)
    const [added, setAdded] = useState([])

    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
        console.log(formData)
     }
    
    async function handleSubmit (e) {
        e.preventDefault();
        console.log(formData.food)
        const database = db
        var json = JSON.stringify(database)
        console.log(json)
        var obj = json;
        console.log(obj)
        var newItem = {"id" : formData.food, "name": formData.food, 'description': formData.description, 'recipe': formData.recipe, 'serve': formData.serve}
        obj.snacks[newItem] = {};
        console.log(obj)
        console.log(JSON.stringify(obj))
        setAdded('Item has been added')
        
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
      
        {added}
      
    </form>


    </>
    
)


}


export default ItemForm