/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import type { AddTask, Task } from "../lib/type";

type BudgetContextValue = {
  budget: number;
  addItem: (task: AddTask) => void;
  deleteItem: (id: string) => void;
  tasks: Task[];
};

// this contain state which we need to send to components
const initialValue: BudgetContextValue = {
  budget: 16500,
  addItem: () => {},
  deleteItem: () => {},
  tasks: [],
};

export const BudgetContext = createContext<BudgetContextValue>(initialValue);

const ContextProvider = (props: PropsWithChildren) => {
  const budget = 16500;
  const [tasks, setTasks] = useState<Task[]>([]);

  const addItem = useCallback((data: AddTask) => {
    const newItem: Task = {
      id: new Date().getTime().toString(),
      item: data.item,
      price: data.price,
    };
    setTasks((prev) => [...prev, newItem]);
  }, []);

  const deleteItem = useCallback((id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }, []);

  const value = useMemo(
    () => ({ budget, addItem, tasks, deleteItem }),
    [budget, addItem, tasks, deleteItem]
  );

  return (
    <BudgetContext.Provider value={value}>
      {props.children}
    </BudgetContext.Provider>
  );
};

export default ContextProvider;
