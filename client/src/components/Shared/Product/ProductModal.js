import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';
import ProductView from '../../ProductDetials/ProductView';
import ProductZoom from '../../ProductDetials/ProductZoom';
Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '95%'
    }
};

const ProductModal = ({ modalIsOpen, closeModal, product }) => {
    return (
        <div className="conatiner">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="conatiner">
                    <button className="quick-times-btn" onClick={closeModal}>
                        <span> <FaTimes /></span>
                    </button>
                    <div className="row">
                        <div className="col-md-6">
                            <ProductZoom
                                product={product}
                            />
                        </div>
                        <div className="col-md-6">
                            <ProductView
                                product={product}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProductModal;