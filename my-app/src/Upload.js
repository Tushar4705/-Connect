import "./Upload.css";
import React, { useState } from "react";

function Upload() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [kg, setKg] = useState("");
  const [bp, setBp] = useState("");
  const [text, setText] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, [newTodo, kg, bp]]);
      setNewTodo("");
      setKg("");
      setBp("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const sp = () => {
    // setText(Math.floor(Math.random() * 30) + 10);
    setText(10);
  };
  return (
    <div>
      <div>
        <h1>Upload Products</h1>
        <ul>
          <li>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter item Name"
            />
          </li>
          <li>
            <input
              type="text"
              value={kg}
              onChange={(e) => setKg(e.target.value)}
              placeholder="Enter the weight"
            />
          </li>
          <li>
            <input
              type="text"
              value={bp}
              onChange={(e) => setBp(e.target.value)}
              placeholder="Enter a base price/kg"
            />
            <button style={{ backgroundColor: "blue" }} onClick={sp}>
              Suggested Price
            </button>
            <text>{text}</text>
          </li>
          <button onClick={handleAddTodo}>Add</button>
        </ul>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {"Item: " +
                todo[0] +
                "------>weight: " +
                todo[1] +
                "------>Base Price: " +
                todo[2] +
                "/kg"}
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Upload;
