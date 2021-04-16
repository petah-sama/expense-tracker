import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../UI/Card/Card';

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

  return <Card className="expenses">{expenseItemList}</Card>;
}

export default Expenses;
