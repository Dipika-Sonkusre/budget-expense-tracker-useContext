import Budget from "./Budget";
import IncomeExpense from "./IncomeExpense";
import History from "./History";
import AddNewTransation from "./AddNewTransation";

export default function Layout() {
  return (
    <div className="budget-container">
      <h1 className="budget-title">Budget Expense Tracker</h1>
      <Budget />
      <IncomeExpense />
      <History />
      <AddNewTransation />
    </div>
  );
}
