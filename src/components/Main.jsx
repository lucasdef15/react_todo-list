import AllTasks from "./AllTasks";
import TodoList from "./TodoList";
import "../styles/Main.css";

const Main = ({
  listNames,
  handleClick,
  handleSubmit,
  newListName,
  setNewListName,
  selectedListId,
  handleTaskSubmit,
  setNewTaskName,
  newTaskName,
  handleDeleteList,
  handleCheck,
  handleCheckedDelete,
}) => (
  <main className="main-content">
    <AllTasks
      listNames={listNames}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      newListName={newListName}
      setNewListName={setNewListName}
    />
    <TodoList
      selectedListId={selectedListId}
      listNames={listNames}
      handleTaskSubmit={handleTaskSubmit}
      setNewTaskName={setNewTaskName}
      newTaskName={newTaskName}
      handleDeleteList={handleDeleteList}
      handleCheck={handleCheck}
      handleCheckedDelete={handleCheckedDelete}
    />
  </main>
);

export default Main;
