import Tasks from "./Tasks";
import DeleteStuff from "./DeleteStuff";
import "../styles/TodoList.css";

const TodoList = ({
  selectedListId,
  listNames,
  handleTaskSubmit,
  setNewTaskName,
  newTaskName,
  handleDeleteList,
  handleCheck,
  handleCheckedDelete,
}) => {
  const selectedListItem = listNames.filter(
    (item) => item.id === selectedListId
  );

  return (
    <>
      {selectedListId &&
        selectedListItem &&
        selectedListItem.map((listItem) => {
          return (
            <div className="todo-list" key={listItem.id}>
              <div className="list-wrapper">
                <div className="todo-header">
                  <h2 className="list-title">{listItem.listName}</h2>
                  <p>
                    {listItem.tasks > 0
                      ? `Pending tasks: ${listItem.tasks}`
                      : "No pending tasks"}
                  </p>
                </div>
                <div className="todo-body">
                  <Tasks
                    listItem={listItem}
                    handleTaskSubmit={handleTaskSubmit}
                    setNewTaskName={setNewTaskName}
                    newTaskName={newTaskName}
                    handleCheck={handleCheck}
                  />
                </div>
              </div>
              <DeleteStuff
                listItem={listItem}
                handleDeleteList={handleDeleteList}
                handleCheckedDelete={handleCheckedDelete}
              />
            </div>
          );
        })}
    </>
  );
};

export default TodoList;
