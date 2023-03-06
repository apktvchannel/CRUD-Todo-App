import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

function EditForm({ editedTask, updateTask }) {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  function handelFormSubmit(event) {
    event.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  }

  return (
    <div role="dialog" aria-labelledby="editTask">
      <form className="todo" onSubmit={handelFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(event) => setUpdatedTaskName(event.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button className="btn" aria-label="Update Task" type="submit">
          <CheckIcon height={24} width={24} />
        </button>
      </form>
    </div>
  );
}

export default EditForm;
