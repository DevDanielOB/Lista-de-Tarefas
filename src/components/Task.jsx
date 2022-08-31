import React from "react";

import { CgClose } from "react-icons/cg";
import {CgInfo} from "react-icons/cg"
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory()

  const handleTaskDetails = () => {
    history.push(`/${task.title}`)
  }
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {borderLeft: "6px solid red"}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose/>
        </button>

        <button
          className="see-task-details"
          onClick={() => handleTaskDetails(task.id)}
        >
          <CgInfo/>
        </button>
       
      </div>
    </div>
  );
};
// return <div className="task-container">{task.title}</div>;
export default Task;
