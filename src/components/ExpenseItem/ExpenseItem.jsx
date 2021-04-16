import './ExpenseItem.css';

function expenseItem() {
  return (
    <div className="expense-item">
      <div>April 16th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">294.67€</div>
      </div>
    </div>
  );
}

export default expenseItem;
