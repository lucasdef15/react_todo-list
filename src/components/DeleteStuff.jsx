import "../styles/DeleteStuff.css";

const DeleteStuff = ({ listItem, handleDeleteList, handleCheckedDelete }) => {
  return (
    <div className="delete-stuff">
      <button
        className="btn-delete"
        onClick={() => handleCheckedDelete(listItem.id)}
      >
        Clear completed tasks
      </button>
      <button
        className="btn-delete"
        onClick={() => handleDeleteList(listItem.id)}
      >
        Delete list
      </button>
    </div>
  );
};

export default DeleteStuff;
