import './ExpenseItem.css';
function ExpenseItem(props) {
   
    
    return <div className='expense-item'>

        <div >{props.dateAttribute.toISOString()}</div>
        
            <div className='expense-item_description'>
                <h2>{props.titleAttribute}</h2>
            <div className='expense-item_price'>{props.amountAttribute}</div>
            
        </div>
        
  
        </div>

  
}

export default ExpenseItem;