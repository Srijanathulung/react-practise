import './ExpenseItem.css';
function ExpenseItem() {
    let expenseDate = Date().toString();
    let expenseTitle = 'car Insurance';
    let expenseAmount = 'Rs 56000';
    return <div className='expense-item'>

        <div >{expenseDate}</div>
        
            <div className='expense-item_description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item_price'>{expenseAmount}</div>
        </div>
        
  
        </div>

  
}

export default ExpenseItem;