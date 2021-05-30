import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {
    
    return <div className='expense-item'>

        <ExpenseDate date={props.dateAttribute}/>
            <div className='expense-item_description'>
                <h2>{props.titleAttribute}</h2>
            <div className='expense-item_price'>{props.amountAttribute}</div>
            
        </div>  
        </div>

  
}

export default ExpenseItem;