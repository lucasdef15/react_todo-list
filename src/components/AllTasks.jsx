import ListPage from "./ListPage";
import "../styles/AllTasks.css";

const AllTasks = ({
  listNames,
  handleSubmit,
  newListName,
  setNewListName,
  handleClick,
}) => {
  return (
    <div className="all-tasks">
      <h2>My lists</h2>
      <ul>
        <ListPage listNames={listNames} handleClick={handleClick} />
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="newListName">New List Name</label>
        <button type="submit">+</button>
        <input
          autoFocus
          type="text"
          placeholder="New List Name"
          id="newListName"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AllTasks;
