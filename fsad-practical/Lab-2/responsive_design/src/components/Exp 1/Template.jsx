import React from 'react';
import laptop from '../Exp 1/images/laptop.jpg';
import './style.css';

function Template() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-row justtify-content-start head_container">
                <div>
                    KLUniversity
                </div>
                <div className="menu">
                    <span>Home</span>
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Login</span>
                </div>
                </div>
            </div>
            <div className="content">
                <div className="plogo">
                    <img src={laptop} alt="no_image" />
                </div>
                <div className="pdetails">
                    <div className="pname">
                        Product Name
                    </div>
                    <div className="pother">
                        <p>Product Details</p>
                        <p>Rs 10000</p>
                        <p>Magf Date : 2024</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="slogo">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    );
}

export default Template;
