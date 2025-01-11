import React from 'react';
import laptop from '../Exp_1/images/laptop.jpg';
import klu from '../Exp_1/images/klef.png';
import './style.css';


function Template() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-row justify-content-start align-items-center head_container">
                    <img className="plogo mt-3 mb-3" src={klu} alt="KLU Logo" />
                    <div className="menu d-flex flex-row justify-content-start">
                        <h2 className="m-3">Home</h2>
                        <h2 className="m-3">About</h2>
                        <h2 className="m-3">Portfolio</h2>
                        <h2 className="m-3">Login</h2>
                    </div>
                </div>
            </div>
            <div className="content row">
                <div className="col-md-6">
                    <img src={laptop} alt="Laptop" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div className="pname">
                        <h3>Laptop</h3>
                    </div>
                    <div className="pother">
                        <p>Product Details</p>
                        <p>Rs 10,000</p>
                        <p>Manufacture Date: 2024</p>
                    </div>
                </div>
            </div>
            <div className="footer row">
                <div className="col-12 d-flex justify-content-center slogo">
                    <i className="fa-brands fa-facebook m-2"></i>
                    <i className="fa-brands fa-twitter m-2"></i>
                    <i className="fa-brands fa-google m-2"></i>
                    <i className="fa-brands fa-youtube m-2"></i>
                </div>
            </div>
        </div>
    );
}

export default Template;
