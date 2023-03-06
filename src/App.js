import { useState } from "react";
import CustomForm from "./components/CustomForm";
import EditForm from "./components/EditForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function addTask(task) {
    setTasks((prevTask) => [...prevTask, task]);
  }

  function deleteTask(id) {
    setTasks((prevTask) => prevTask.filter((t) => t.id !== id));
  }

  function toggleTask(id) {
    setTasks((prevTask) =>
      prevTask.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  }

  function updateTask(task) {
    setTasks((prevTask) =>
      prevTask.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  }

  function closeEditMode() {
    setIsEditing(false);
  }

  function enterEditMode(task) {
    setEditedTask(task);
    setIsEditing(true);
  }

  return (
    <div className="container">
      <header>
        <h1>My task List</h1>
      </header>
      {isEditing && (
        <EditForm editedTask={editedTask} updateTask={updateTask} />
      )}

      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
