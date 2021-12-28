import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
    return ReactDOM.createPortal(
        <div className="dimmer">
            <div className="content">I am Modal</div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;