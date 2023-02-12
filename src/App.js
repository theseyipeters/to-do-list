import React, {useState} from 'react';
import './App.css';

function App() {

const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([]);


function addItem() {

  if (!newItem){
    alert("Enter an Item");
    return;
  }
  
  const item = {
    id: Math.floor(Math.random() * 1000),
    value: newItem
  }
  
  setItems(oldList => [...oldList, item]);
  setNewItem("");

}

function deleteItem(id) {
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}


  return (
    <div className="App">
      {/* 1. Header */}
        <h1>To Do List App</h1>

      {/* 2. Input  */}
        <input
          type = "text"
          placeholder='Add Item...'
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />

        <button className='addbtn' onClick={() => addItem()}>Add</button>

      {/* 3. List of Items */}

      <div className='list'>
      <ol>
          {items.map(item => {
          return(
          <li key={item.id}>{item.value} <button className='dlt' onClick={() => deleteItem(item.id)}>Delete</button></li>)
        })}
        
      </ol>

      </div>   
      
    </div>
  );
}

export default App;
