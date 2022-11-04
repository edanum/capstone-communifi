import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import useSWR from "swr";

export const DataContext = createContext();
export const DataUpdateContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function useDataUpdate() {
  return useContext(DataUpdateContext);
}

const expenseFetcher = async () => {
  const response = await fetch("/api/expenses");
  const data = await response.json();
  return data;
};

const revenueFetcher = async () => {
  const response = await fetch("/api/revenues");
  const data = await response.json();
  return data;
};

export function DataProvider({ children }) {
  //GET DATA VIA SWR
  const {
    data: expenseData,
    mutate: mutateExpenses,
    error: expenseError,
  } = useSWR("expenses", expenseFetcher);
  const { data: revenueData, mutate: mutateRevenues, error: revenueError } = useSWR(
    "revenues",
    revenueFetcher
  );
  //

  // MANAGE STATES FOR EXPENSE AND REVENUE DATA
  const [expenses, setExpenses] = useState(null);
  const [filteredExpenses, setFilteredExpenses] = useState(null);
  const [revenues, setRevenues] = useState(null);
  const [filteredRevenues, setFilteredRevenues] = useState(null);

  useEffect(() => {
    setExpenses(expenseData);
    setFilteredExpenses(expenseData);
  }, [expenseData]);

  useEffect(() => {
    setRevenues(revenueData);
    setFilteredRevenues(revenueData);
  }, [revenueData]);
  //

  return (
    <DataContext.Provider
      value={{
        expenses,
        filteredExpenses,
        mutateExpenses,
        revenues,
              filteredRevenues,
        mutateRevenues,
      }}
    >
      <DataUpdateContext.Provider
        value={{
          setExpenses,
          setFilteredExpenses,
          setRevenues,
          setFilteredRevenues,
        }}
      >
        {children}
      </DataUpdateContext.Provider>
    </DataContext.Provider>
  );
}
