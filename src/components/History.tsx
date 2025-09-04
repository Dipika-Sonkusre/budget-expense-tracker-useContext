import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function History() {
  const { tasks, deleteItem } = useContext(BudgetContext);

  const handleDelete = (id: string) => {
    deleteItem(id);
  };

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {tasks.map((task) => (
          <li key={task.id} className={task.price < 0 ? "minus" : "plus"}>
            <span>{task.item}</span>
            <span>${task.price}</span>
            <button id="dbtn" onClick={() => handleDelete(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
