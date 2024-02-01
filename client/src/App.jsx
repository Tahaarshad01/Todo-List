import "./App.css";
import Home from "./components/Home.jsx";
import Todo from "./components/Todo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <div>
      <Home />
      <Todo />
    </div>
  );
}

export default App;
