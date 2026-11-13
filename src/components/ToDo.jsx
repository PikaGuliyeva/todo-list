import React from "react";
import { useState } from "react";

function ToDo({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (inputValue.trim() === "") {
      console.log("Bosh metn daxil edilib");
      return;
    }

    addTask(inputValue);
    setInputValue("");
  }

  return (
    <div className="todo-container">
      <h1>To Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default ToDo;
