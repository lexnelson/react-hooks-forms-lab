import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchBar, setSearchBar] = useState("")
  const [submitItems, setSubmitItems] = useState(items)
  
  
  // console.log(formObj)

 function handleSubmit(newItem){
   setSubmitItems([...items, newItem])
 }
  function handleSearch(e){
    setSearchBar(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = submitItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
    
  });
  const searchItems = itemsToDisplay.filter((item) => item.name.toLowerCase().includes(searchBar.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange= {handleSearch} search={searchBar}/>
      <ul className="Items">
        {searchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
