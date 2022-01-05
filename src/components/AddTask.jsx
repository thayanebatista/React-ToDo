import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";
import "./Button.css";
const AddTask = () => {
  const [inputData, setInputData] = useState("");
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="task"
      />
      <div className="add-task-button-container">
        <Button> Adicionar </Button>
      </div>
    </div>
  );
};

export default AddTask;