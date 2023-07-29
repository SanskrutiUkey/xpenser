import { React, useState } from 'react';
import './topfold.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/expenses.js';

const Topfold = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch()
    const handleQuery = (e) => {
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }
    return (
        <div className='topfold'>
            {window.location.pathname === "/" ?
                (<div className='home-topfold'>
                    <div className='search-bar'>
                        <i className="fi fi-br-search"></i>
                        <input placeholder='Search for Expenses' value={query} onChange={(e) => handleQuery(e)} />
                    </div>

                    <Link to='/add-expenses'>
                        <div className='add-button'>
                            <i className="fi fi-br-add"></i>
                            <label>Add</label>
                        </div>
                    </Link>
                </div>) :
                (<div className='add-topfold'>
                    <Link to='/'>
                        <div className='back-button'>
                            <i className="fi fi-ss-angle-left"></i> Back
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className='cancel-button'>
                            <i className="fi fi-br-circle-xmark"></i> Cancel
                        </div >
                    </Link>
                </div>)
            }
        </div >
    );

}
export default Topfold;
