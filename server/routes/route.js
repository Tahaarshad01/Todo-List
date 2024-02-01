import express from "express";
import { addTodo, allTodos, deleteTodos, updateData,toggleTodoDone } from "../controller/controller.js";
const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", allTodos);
route.delete("/delete/:id", deleteTodos);
route.put("/update/:id", updateData);
route.put("/toggle/:id", toggleTodoDone);

export default route;
