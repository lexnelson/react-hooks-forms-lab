import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit }) {
  // const [formObj, setFormObj]=useState({
  //   name : "", 
  //   id: uuid(), 
  //   category: "Produce"
  // })
  // function updateFormObj(e){
  //   let key = e.target.name
  //   let value = e.target.value
  //   setFormObj({...formObj, [key]: value})
  //   onItemFormSubmit(e, formObj)
  // }
  // console.log(formObj)
  const [name, setName] = useState('')
  const [cat, setCat]= useState('Produce')

  function handleName (e){
      setName(e.target.value)
  }
  function handleCat(e){
    setCat(e.target.value)
  }
  
  function potato(e){
    e.preventDefault()
    const newItem = {
      name : name,
      id : uuid(), 
      category : cat
    }
    onItemFormSubmit(newItem)
  }


  return (
    <form className="NewItem" onSubmit = {potato}>
      <label>
        Name:
        <input type="text" name="name" 
        onChange ={handleName} 
        value= {name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCat} value = 
        {cat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
