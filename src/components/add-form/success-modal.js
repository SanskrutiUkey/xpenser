import React from 'react';
import Modal from 'react-modal';
import successImage from '../../assets/success.png';
import './sucess-modal.css';
import { Link } from 'react-router-dom';
const SuccessModal = ({ modal, setModal }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#693F82',
            borderRadius: "12px"
        },
    };
    return (
        <Modal isOpen={modal} style={customStyles} ariaHideApp={false}>
            <div className='modal-inner'>
                <label>Expense Added Successfully </label>
                <img src={successImage} alt='Expense Added' className='added-image'></img>
                <Link to='/'>
                    <div className='take-home-button'>
                        <i className="fi fi-br-home"></i>Home

                    </div>
                </Link>
            </div>
        </Modal>
    );
}

export default SuccessModal;
