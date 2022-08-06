import React from "react";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import {GiCrystalize} from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Pricing.css';

function Pricing(){
    return (
        <IconContext.Provider value={{color:"#fff", size:64}}>
        <div>
            <div className="pricing-section">
                <div className="pricing-wrapper">
                    <h1 className="pricing__heading">Services</h1>
                    <div className="pricing__container">
                    
                    {/* pricing container card one; */}
                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p >per month</p>
                                <ul className="pricing__container-features">
                                    <li>100 Transactions</li>
                                    <li>2% Cash Back</li>
                                    <li>$10,000 limit</li>
                                    <li>100 Transactions</li>
                                </ul>
                                <Button buttonStyle='btn--primary' buttonColor='primary' buttonSize='btn--wide'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        {/* Pricing Container card two;
                         */}

                         <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill />
                                </div>
                                <h3>Gold</h3>
                                <h4>$20.99</h4>
                                <p >per month</p>
                                <ul className="pricing__container-features">
                                    <li>1000 Transactions</li>
                                    <li>3.5% Cash Back</li>
                                    <li>$100,000 limit</li>
                            
                                </ul>
                                <Button buttonStyle='btn--primary' buttonColor='primary' buttonSize='btn--wide'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>

                        {/* Pricing container card three */}
                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize />
                                </div>
                                <h3>Diamond</h3>
                                <h4>$49.99</h4>
                                <p >per month</p>
                                <ul className="pricing__container-features">
                                    <li>Unlimited Transactions</li>
                                    <li>5% Cash Back</li>
                                    <li>$500,000 limit</li>
                                    
                                </ul>
                                <Button buttonStyle='btn--primary' buttonColor='primary' buttonSize='btn--wide'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    );
}
export default Pricing;