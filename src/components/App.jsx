import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Main from "./Main";
import "../styles/App.css";

function App() {
  const API_URL = "http://localhost:3500/listItems";
  const [listNames, setListNames] = useState([]);
  const [newListName, setNewListName] = useState("");
  const [selectedListId, setSelectedListId] = useState("");
  const [newTaskName, setNewTaskName] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const reponse = await fetch(API_URL);
        const listItems = await reponse.json();
        setListNames(listItems);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, []);

  const addNewListName = (listName) => {
    const myNewListName = {
      id: uuidv4(),
      listName,
      items: [],
    };
    const newListNames = [...listNames, myNewListName];
    setListNames(newListNames);
  };
  const createNewTask = (ID) => {
    const filteredItem = listNames.filter((item) => item.id === ID)[0];
    const myNewListName = {
      id: filteredItem.id,
      listName: filteredItem.listName,
      items: [
        ...filteredItem.items,

        {
          id: uuidv4(),
          item: newTaskName,
          checked: false,
        },
      ],
      tasks: filteredItem.tasks ? filteredItem.tasks + 1 : 1,
    };
    const newListNames = listNames.map((item) =>
      item.id === ID ? myNewListName : item
    );
    setListNames(newListNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newListName) return;
    addNewListName(newListName);
    setNewListName("");
  };

  const handleTaskSubmit = (ID, e) => {
    e.preventDefault();
    if (!newTaskName) return;
    createNewTask(ID);
    setNewTaskName("");
  };

  const handleClick = (ID) => {
    setSelectedListId(ID);
  };

  const handleDeleteList = (ID) => {
    const myListNames = listNames.filter((listName) => listName.id !== ID);
    setListNames(myListNames);
  };
  const handleCheckedDelete = (ID) => {
    const myFilteredItem = listNames.filter((item) => item.id === ID)[0];
    if (!myFilteredItem) return;

    const MyUpdatedTask = myFilteredItem.items.filter(
      (item) => item.checked !== true
    );
    const myUdatedListNames = { ...myFilteredItem, items: MyUpdatedTask };
    const newListNames = listNames.map((item) =>
      item.id === ID ? myUdatedListNames : item
    );
    setListNames(newListNames);
  };

  const handleCheck = (listID, ID) => {
    const filteredItem = listNames.filter((item) => item.id === ID)[0];
    const updatedTask = filteredItem.items.map((item) => {
      if (item.id === listID) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    const updatedListName = { ...filteredItem, items: updatedTask };
    const newListNames = listNames.map((item) =>
      item.id === ID ? updatedListName : item
    );
    setListNames(newListNames);
    handleCheckedTask(listID, ID);
  };

  const handleCheckedTask = (listID, ID) => {
    const filteredItem = listNames.filter((item) => item.id === ID)[0];
    const updatedTask = filteredItem.items.map((item) => {
      if (item.id === listID) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    console.log(updatedTask);
    const updatedFilteredItem = {
      ...filteredItem,
      items: updatedTask,
      tasks: updatedTask.filter((task) => !task.checked).length,
    };
    const newListNames = listNames.map((item) =>
      item.id === ID ? updatedFilteredItem : item
    );
    setListNames(newListNames);
  };

  return (
    <div className="app">
      <Header title="Stuff I Need To Do" />
      <Main
        listNames={listNames}
        setListNames={setListNames}
        handleSubmit={handleSubmit}
        newListName={newListName}
        setNewListName={setNewListName}
        handleClick={handleClick}
        selectedListId={selectedListId}
        handleTaskSubmit={handleTaskSubmit}
        newTaskName={newTaskName}
        setNewTaskName={setNewTaskName}
        handleDeleteList={handleDeleteList}
        handleCheckedDelete={handleCheckedDelete}
        handleCheck={handleCheck}
      />
    </div>
  );
}

export default App;
