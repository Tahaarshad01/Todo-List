import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/todos", {
        data: input,
      });
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
