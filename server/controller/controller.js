import { request, response } from "express";
import Mern_Todo from "../model/Schema.js";

export const addTodo = async (request, response) => {
  try {
    // console.log(request.body);
    const newTodo = await Mern_Todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();
    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const allTodos = async (request, response) => {
  try {
    const todos = await Mern_Todo.find({}).sort({ createdAt: -1 });
    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const deleteTodos = async (request, response) => {
  try {
    const deleteTodo = await Mern_Todo.findByIdAndDelete(request.params.id);
    return response.status(200).json(deleteTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const updateData = async (request, response) => {
  try {
    await Mern_Todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );
    const todo = await Mern_Todo.findById(request.params.id);
    return response.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const toggleTodoDone = async (request, response) => {
  try {
    const todoRef = await Mern_Todo.findById(request.params.id);
    const todo = await Mern_Todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );
    await todo.save();
    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};