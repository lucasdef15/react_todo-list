const Task = ({ listItem, handleCheck }) => {
  return (
    <div className="task">
      {listItem &&
        listItem.items.map((itemObj, index) => {
          const { id, item, checked } = itemObj;
          console.log(listItem.items.length);
          return (
            <div key={id}>
              <div className="task-item">
                <input
                  type="checkbox"
                  checked={checked}
                  id={`task-${index}`}
                  onChange={() => handleCheck(id, listItem.id)}
                />
                <label htmlFor={`task-${index}`}>
                  <span className="custom-checkbox"></span>
                  {item}
                </label>
              </div>
            </div>
          );
        })}
      {listItem && listItem.items.length === 0 && (
        <p>Empty list: no items to show</p>
      )}
    </div>
  );
};

export default Task;
