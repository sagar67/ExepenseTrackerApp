import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  // const [fetchedExpense,setFetchedExpense] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpense(expenses);
      } catch (error) {
        setError(`Expenses couldn't be fetched`);
      }
      setIsFetching(false);
      // setFetchedExpense(expenses)
    }
    getExpenses();
  }, []);

  function errorHandler(){
    setError(null)
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if(error && !isFetching){
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  }
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    // const recentExpenses = fetchedExpense.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
