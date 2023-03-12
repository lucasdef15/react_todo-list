import { useState } from "react";

const ListPage = ({ listNames, handleClick }) => {
  const [activeId, setActiveId] = useState(null);

  const handleItemClick = (id) => {
    handleClick(id);
    id === activeId ? setActiveId(null) : setActiveId(id);
  };

  return (
    <>
      {listNames.map((item) => {
        const isActive = item.id === activeId;
        const liClassName = isActive ? "active" : null;
        return (
          <section key={item.id}>
            <a onClick={() => handleItemClick(item.id)}>
              <li className={liClassName} key={item.id}>
                <span>{item.listName}</span>
              </li>
            </a>
          </section>
        );
      })}
    </>
  );
};

export default ListPage;
