import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import type { Task } from "../lib/type";

export default function IncomeExpense() {
  const { budget, tasks } = useContext(BudgetContext);

  const spend = (tasks ?? []).reduce(
    (acc: number, task: Task) =>
      acc +
      (typeof task.price === "number" ? task.price : Number(task.price) || 0),
    0
  );

  const remaining = budget - spend;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Spend</h4>
        <p className="money minus">${spend}</p>
      </div>
      <div>
        <h4>Remaining</h4>
        <p className="money plus">${remaining}</p>
      </div>
    </div>
  );
}
