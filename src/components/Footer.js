import React from "react";
import './Footer.css'

let date = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; Copyright 
                {date}
            </p>
        </div>
    )
}

export default Footer;