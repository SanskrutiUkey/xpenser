import React from 'react';
import Topfold from '../../components/topfold/index.js';
import './add-expenses.css'
import AddForm from '../../components/add-form/index.js';

const AddExpense = () => {
    return (
        <div className='add-expenses'>
            <Topfold />
            <AddForm />
        </div>
    );
}

export default AddExpense;
