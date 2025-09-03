/* eslint-disable react-refresh/only-export-components */
import { createContext, type PropsWithChildren } from "react";

export const BudgetContext = createContext(0);

const ContextProvider = (props: PropsWithChildren) => {
  const budget = 16500;

  return (
    <BudgetContext.Provider value={budget}>
      {props.children}
    </BudgetContext.Provider>
  );
};

export default ContextProvider;
