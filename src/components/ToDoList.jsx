import React from "react";
import { useState } from "react";
import ToDo from "./ToDo";
import { FaTrashAlt } from "react-icons/fa";

function ToDoList() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const removeTask = (id) => {
    setTaskList(taskList.filter((task, index) => index !== id));
  };

  return (
    <div>
      <ToDo addTask={addTask} />
      <ol
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {taskList.map((task, id) => (
          <li
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f1f5f9",
              padding: "15px 20px",
              marginBottom: "12px",
              borderRadius: "10px",
              width: "350px",
              fontSize: "18px",
            }}
          >
            {task}

            <button
              onClick={() => removeTask(id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FaTrashAlt color="red" size={20} />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
