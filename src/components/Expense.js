import ExpenseItem from './ExpenseItem';
import Expenses from './Expenses.css';

function Expense(props) {
    console.log('this is apple');
    return (
        <div className="expenses">
            <ExpenseItem
        titleAttribute={props.items[0].title}
        amountAttribute={props.items[0].amount}
        dateAttribute={props.items[0].date}/>
     
      <ExpenseItem
      titleAttribute={props.items[1].title}
      amountAttribute={props.items[1].amount}
        dateAttribute={props.items[1].date}
      />
      <ExpenseItem
      titleAttribute={props.items[2].title}
      amountAttribute={props.items[2].amount}
        dateAttribute={props.items[2].date}
      />
      <ExpenseItem
      titleAttribute={props.items[3].title}
      amountAttribute={props.items[3].amount}
        dateAttribute={props.items[3].date}
      />

        </div>
    )
}
export default Expense;