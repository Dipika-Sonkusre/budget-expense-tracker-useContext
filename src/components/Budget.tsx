import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function Budget() {
  const { budget } = useContext(BudgetContext);

  return (
    <div className="balance-container mt-1">
      <div className="view-balance">
        <h4>Your Balance</h4>
        <h1>{budget}</h1>
      </div>
      <div>
        <button>Edit</button>
      </div>
    </div>
  );
}
