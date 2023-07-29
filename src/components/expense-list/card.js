import React from 'react';
import './card.css';
import moment from 'moment/moment.js';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/expenses.js';

const Card = ({ item, notifySuccess }) => {
    const time = moment(item.createdAt).fromNow();
    const dispatch = useDispatch();
    const handleDelete = () => {
        // console.log(item.category.icon);
        dispatch(deleteExpense(item))
        notifySuccess();
    }
    return (
        <div className='card' style={{ borderRight: `6px solid ${item.category.color}` }}>
            <div className='card-image-container'>
                <img className="card-image"
                    src={item.category.icon} alt={item.category.title} />
            </div>
            <div className='card-info'>
                <label className='card-title'>{item.title}</label>
                <label className='card-time'>{time}</label>
            </div>
            <div className='card-right'>
                <div>
                    <label className='card-amount'>₹{item.amount}</label>
                </div>
                <div className='delete-icon' onClick={handleDelete}>
                    <i className="fi fi-br-trash"></i>
                </div>
            </div>
        </div>
    );
}

export default Card;
