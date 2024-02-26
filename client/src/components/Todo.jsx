import axios from "axios";
import { useEffect, useState } from "react";
import TodoToggle from "./ToogleTodo";
import "./Home.css";
import { useDispatch } from "react-redux";
import { removeTodo, updatedTodo } from "../features/todo/todoSlice";

const Todo = ({ _id }) => {
  const [todos, setTodos] = useState([]);
  const [updateTodo, setUpdateTodo] = useState({ _id: "", data: "" });
  const [newTodoText, setNewTodoText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteHandler = async (_id) => {
    try {
      await axios.delete(`http://localhost:3000/delete/${_id}`);
      const updatedTodos = todos.filter((todo) => _id !== todo._id);
      setTodos(updatedTodos);
      dispatch(removeTodo(_id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateHandler = async () => {
    try {
      await axios.put(`http://localhost:3000/update/${updateTodo._id}`, {
        data: newTodoText,
      });
      dispatch(updatedTodo({ id: updateTodo._id, data: newTodoText }));
      setUpdateTodo({ _id: "", data: "" });
      setNewTodoText("");
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <center>
      <div className="main">
        <div className="container">
          <div>
            {todos.map((todo) => (
              <div key={todo._id} className="my-3 mr-5">
                <span style={{ fontSize: "1.5em" }}>{todo.data}</span>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    setUpdateTodo({
                      _id: todo._id,
                      data: todo.data,
                    });
                    setNewTodoText(todo.data);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteHandler(todo._id);
                  }}
                >
                  Delete
                </button>
                <TodoToggle todo={todo} setTodos={setTodos} />
              </div>
            ))}
          </div>
        </div>
        {updateTodo._id && (
          <span className="form-inline">
            <input
              className="input"
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            />
            <button onClick={updateHandler} className="btn btn-info">
              Save Update
            </button>
          </span>
        )}
      </div>
    </center>
  );
};

export default Todo;
