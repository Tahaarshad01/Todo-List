import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Home = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
  try {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/todos", {
      data: input,
    });
     dispatch(addTodo(response.data));
    setInput("");
  } catch (error) {
    console.error(error);
  }
};


  return (
    <center>
      <div className="container mt-5">
        <h1 className="display-4">Todo-List</h1>
        <form className="form-inline">
          <input
            placeholder="Enter Todo"
            className="w-25 h-7 m-2"
            value={input}
            onChange={handleInput}
          ></input>
          <button
            type="submit"
            className="btn btn-primary mb-1"
            onClick={handleSubmit}
          >
            Add todo
          </button>
        </form>
      </div>
    </center>
  );
};

export default Home;
