import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem=(props) =>{
    
    //card bhaneyko custom wrapper component ho ,used as reusable wrapper.
    // return <Card classNameX='expense-item'>
    return (
        <Card classNameX='expense-item'>
{/* <div className='expense-item'> */}

        <ExpenseDate date={props.dateAttribute}/>
            <div className='expense-item_description'>
                <h2>{props.titleAttribute}</h2>
            <div className='expense-item_price'>{props.amountAttribute}</div>
            
                </div>
                {/* </div> */}
        </Card>
    )
  
}

export default ExpenseItem;