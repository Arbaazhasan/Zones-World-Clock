import React, { useEffect } from 'react';
import './footer.scss';
import { IoMdAdd } from "react-icons/io";

const Footer = ({ setIsClose }) => {

    return (
        <div className="footer">
            <div className="left">
                <div><p>Themes</p></div>
            </div>
            <div className="right">
                <div>
                    <p>Add City</p>
                </div>
                <button onClick={() => { setIsClose((pre) => !pre); console.log("fire") }} ><IoMdAdd /></button>
            </div>
        </div >
    );
}

export default Footer;
