import React from "react";
import Button from "./Button";

const TaskDetails = () => {
  return (
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          beatae, modi at quisquam blanditiis nam.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
