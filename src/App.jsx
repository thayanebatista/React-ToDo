import React, { useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      completed: false,
    },
    {
      id: 2,
      title: "Ler coisas boiolas",
      completed: true,
    },
  ]);
  return (
    <div className="conteiner">
      <AddTask/>
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
