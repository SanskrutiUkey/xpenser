import React from 'react';
import Topfold from '../../components/topfold/index.js';
import ExpenseList from '../../components/expense-list/index.js';
import './home.css';
function Home() {
    return (
        <div className='home'>
            <Topfold />
            <ExpenseList />
        </div>

    );
}

export default Home;

