import { useState } from 'react';

import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpensesFilter from './ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card/Card';

import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseItemList}
      </Card>
    </div>
  );
}

export default Expenses;
