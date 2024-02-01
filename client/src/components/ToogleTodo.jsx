import React from "react";
import axios from "axios";
import "./Home.css";

const TodoToggle = ({ todo, setTodos }) => {
  const toggleHandler = async () => {
    try {
      await axios.put(`http://localhost:3000/toggle/${todo._id}`);
      setTodos((prevTodos) => {
        return prevTodos.map((item) =>
          item._id === todo._id ? { ...item, completed: !item.completed } : item
        );
      });
    } catch (error) {
      console.error(error);
    }
  };
  const buttonClass = todo.completed ? "btn btn-success" : "btn btn-secondary";

  return (
    <button onClick={toggleHandler} className={buttonClass}>
      {todo.completed ? "Complete" : "Pending"}
    </button>
  );
};

export default TodoToggle;
