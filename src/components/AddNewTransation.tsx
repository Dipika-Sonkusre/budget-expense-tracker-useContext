import { useContext, useState, type FormEvent } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function AddNewTransation() {
  const { budget, addItem } = useContext(BudgetContext);
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();

    const trimmedItem = item.trim();
    const amount = Number(price);

    if (!trimmedItem) return;
    if (!Number.isFinite(amount) || amount <= 0) return;

    if (budget >= amount) {
      addItem({ item: trimmedItem, price: amount });
      setItem("");
      setPrice("");
    }
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleAdd}>
        <div className="form-control">
          <label htmlFor="">Item</label>
          <input
            type="text"
            placeholder="Enter Your Items"
            required
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Price</label>
          <input
            type="text"
            placeholder="Enter Your Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
}
