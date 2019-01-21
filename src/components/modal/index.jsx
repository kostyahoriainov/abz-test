import React from 'react';

const Modal = ({toggleModal}) => 
    <div className="modal">
        <div className="modal__content">
            <div className="modal__header">
                <h3>
                    Congratulations
        </h3>
            </div>
            <div className="modal__text">
                <p>
                    You have successfully passed the registration
        </p>
            </div>
            <div className="modal__button">
                <a href="#" onClick={toggleModal}>OK</a>
            </div>
        </div>
    </div>


export default Modal