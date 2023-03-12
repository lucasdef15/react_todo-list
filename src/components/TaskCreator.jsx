const TaskCreator = ({
  listItem,
  handleTaskSubmit,
  newTaskName,
  setNewTaskName,
}) => {
  return (
    <div className="new-task-creator">
      <form onSubmit={(e) => handleTaskSubmit(listItem.id, e)}>
        <label htmlFor="new-task"></label>
        <input
          type="text"
          className="new task"
          placeholder="new task name"
          aria-label="new task name"
          id="new-task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button className="btn create" aria-label="create new task">
          +
        </button>
      </form>
    </div>
  );
};

export default TaskCreator;
