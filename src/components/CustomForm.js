import { PlusIcon } from "@heroicons/react/24/solid";

import React, { useState } from "react";

function CustomForm(props) {
  const [task, setTask] = useState("");

  function handelFormSubmit(event) {
    event.preventDefault();
    props.addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  }

  return (
    <form className="todo" onSubmit={handelFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(event) => setTask(event.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
}

export default CustomForm;
