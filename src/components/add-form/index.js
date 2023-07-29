import { React, useState } from 'react';
import { catogories } from '../../constants/add-expenses.js';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { addExpense, deleteExpense } from '../../redux/actions/expenses.js'
import SuccessModal from './success-modal.js';
import './add-form.css';


const AddForm = () => {
    const cat = catogories
    const [opencategory, setOpecategory] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
            setAmount(" ");
            return;
        }
        setAmount(val);
    }

    const handleCategory = (category) => {
        setCategory(category);
        setOpecategory(false);
    }

    const handleSubmit = () => {
        if (title === "" || !category || amount === "") {
            const notify = () => toast("Please enter valid data", {
                position: "bottom-left",
                autoClose: 1500
            });
            notify();
            return;
        }
        const data = {
            title: title,
            amount: amount,
            category: category,
            createdAt: new Date()
        }
        dispatch(addExpense(data))
        setModal(true)
    }
    return (
        <div className='add-form'>
            <ToastContainer
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <ToastContainer />
            <SuccessModal modal={modal} setModal={setModal} />
            <div className='form-item'>
                <label>Title</label>
                <input placeholder='Give a name to expenditure '
                    value={title}
                    onChange={(e) => handleTitle(e)}
                />
            </div>
            <div className='form-item'>
                <label>Amount ₹ </label>
                <input value={amount} placeholder='Enter Amount' className='amount-input' onChange={(e) => handleAmount(e)} />
            </div>
            <div className='category-container-parent'>
                <div className='category'>
                    <div className='category-dropdown'
                        onClick={() => setOpecategory(!opencategory)}>
                        <label>{category ? category.title : "Category"}</label>
                        <i className="fi fi-ss-angle-down"></i>
                    </div>
                    {opencategory && <div className='category-container'>
                        {cat.map(category => (
                            <div className='category-item' style={{
                                borderRight: `5px solid ${category.color}`
                            }} key={category.id} onClick={() => handleCategory(category)}>
                                <label>{category.title}</label>
                                <img src={category.icon} alt={category.title} />
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
            <div className='form-add-button'>
                <div onClick={handleSubmit}>
                    <label>
                        Add
                    </label>
                    <i className="fi fi-br-paper-plane"></i>
                </div>
            </div>
        </div>
    );
}

export default AddForm;
