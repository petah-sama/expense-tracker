import ExpenseItem from './ExpenseItem/ExpenseItem';

import './Expenses.css';

function Expenses(props) {
  const expenseItemList = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return <div className="expenses">{expenseItemList}</div>;
}

export default Expenses;
