import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./NewExpense/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectExpenseYear = (expenseYear) => {
    setSelectedYear(expenseYear);
    console.log(expenseYear);
  };

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectExpenseYear={selectExpenseYear}
          defaultYear={selectedYear}
        />
        {/* <ExpenseChart expenses={filteredExpense}/> */}
        {filteredExpense.length === 0 ? (<p>No Expenses Found</p>) : (filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))}
        
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
}
