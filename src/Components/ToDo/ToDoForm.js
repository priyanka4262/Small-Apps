import react, { Component, useState } from "react";
import "./ToDoForm.css";

const ToDoForm = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const onChangeHandler = (event) => {
    event.preventDefault();
    setCurrentTask(event.target.value);
  };
  const onClickHandler = (event) => {
    event.preventDefault();
    let newTask = [{ id: Math.random(), text: currentTask }];
    if (tasks && tasks.length) {
      setTasks((tasks) => [...tasks, ...newTask]);
    } else {
      setTasks(newTask);
    }
    setCurrentTask("");
  };
  const onDeleteHandler = (task) => {
    const newList = tasks.filter((item) => item.id !== task.id);
    setTasks(newList);
  };

  return (
    <div className="Container">
      <form onSubmit={onClickHandler}>
        <h1 className="Todo-list-text">To Do List </h1>
        <div className="form-container">
          <input
            className="task"
            type="text"
            value={currentTask}
            placeholder="Enter Task here"
            onChange={onChangeHandler}
          ></input>
          <button className="Add-task-btn" type="submit">
            Add Task
          </button>
        </div>
      </form>
      {tasks.map((task, index) => (
        <div key={index} className="list-container">
          <span className="task-text">{task.text}</span>
          <button className="delete" onClick={() => onDeleteHandler(task)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default ToDoForm;
