import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setShowForm(false)
    }

    const [showForm, setShowForm] = useState(false)

    const displayForm = () => {
        setShowForm(true)
    }
    const hideForm = () => {
        setShowForm(false)
    }
    return(
        <div className="new-expense">
            {!showForm ? 
            (<button onClick={displayForm} >Add New Expense</button>)
            :
            (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} click={hideForm}/>)
}
        </div>
    )
}

export default NewExpense;