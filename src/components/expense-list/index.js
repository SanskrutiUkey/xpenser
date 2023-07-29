import React from 'react';
import './expense-list.css';
import emptyImage from '../../assets/empty.png';
import Card from './card.js';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ExpenseList = () => {
    const { expenseList: list, query } = useSelector((state) => state.expenses)
    const filteredList = list.filter(item => item.title.includes(query));
    const notifySuccess = () => toast("Expense Deleted", {
        position: "bottom-left",
        autoClose: 1500,
        style: { backgroundColor: 'green', color: 'black' }
    });
    return (
        <div className='expense-list'>
            <ToastContainer
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <ToastContainer />
            {(filteredList.length > 0) ? (filteredList.map((item) =>
                <Card item={item} key={item} notifySuccess={notifySuccess} />
            )) : <div className='empty-state'>
                <img src={emptyImage} alt="Empty Expense List" />
                <label>Uh Oh! Your Expense List is empty.</label>
            </div>}
        </div>
    );
}

export default ExpenseList;
