import Task from "./Task";
import TaskCreator from "./TaskCreator";

const Tasks = ({
  listItem,
  handleTaskSubmit,
  setNewTaskName,
  newTaskName,
  handleCheck,
}) => {
  return (
    <div className="tasks">
      <Task listItem={listItem} handleCheck={handleCheck} />
      <TaskCreator
        listItem={listItem}
        handleTaskSubmit={handleTaskSubmit}
        setNewTaskName={setNewTaskName}
        newTaskName={newTaskName}
      />
    </div>
  );
};

export default Tasks;
