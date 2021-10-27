import React from "react";
import './ModalRegPro.css';

const ModalRegPro = ({ closeModal }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    {/* <button onClick={() => closeModal(false)} X </button> */}
                    <a
                        href='/registroProductos'>
                        <span>  X </span>
                    </a>
                </div>
                <div className="title">
                    <h3>¡Producto creado con éxito!</h3>
                </div>
                <div className="footer">
                    <a class='btn btn-primary'
                        href='/registroProductos'>
                        <span>Continuar</span>
                    </a>
                    {/* <button onClick={() => closeModal(false)}>Continuar</button> */}
                </div>
            </div>
        </div>
    )
};

export default ModalRegPro;
