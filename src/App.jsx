import React, { useState } from "react";
import ToDoLists from "./ToDOLists"; // Corrected import name

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((item, index) => index !== id);
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" placeholder="Enter an item" onChange={itemEvent} value={inputList} />
          <button onClick={listOfItems}>+</button>
          <ol>
            {items.map((itemval, index) => (
              <ToDoLists key={index} id={index} text={itemval} onDelete={() => deleteItem(index)} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
