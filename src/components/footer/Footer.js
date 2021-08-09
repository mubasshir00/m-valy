import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    const [email, setEmail] = useState('')
    return (
        <>
            <div className="footerContainer">
                <div className="footerWrapper">
                    <div>
                        <p>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</p>
                    </div>
                    <div className="subscribe">
                    <input
                      type="" 
                      name=""
                      onChange={e=>setEmail(e.target.value)} value={email} placeholder="email"
                        />
                     <button className="s-btn" type="submit">Subcribe</button>
                    </div>
                    <div className="footerLists">
                        <ul>
                            <h2>Customer Services</h2>
                            <li>
                                <Link>Help Center</Link>
                            </li>
                            <li>
                                <Link>Contact Us</Link>
                            </li>
                            <li>
                                <Link>Report Abuse</Link>
                            </li>
                            <li>
                                <Link>Submit a Dispute</Link>
                            </li>
                            <li>
                                <Link>Policies & Rules</Link>
                            </li>
                            <li>
                                <Link>Get Paid for Your Feedback</Link>
                            </li>
                        </ul>

                        <ul>
                            <h2>About Us</h2>
                            <li>
                                <Link>About M-valy</Link>
                            </li>
                            <li>
                                <Link>About M Group</Link>
                            </li>
                            <li>
                                <Link>Site Map</Link>
                            </li>
                        </ul>

                        <ul>
                            <h2>Customer Services</h2>
                            <li>
                                <Link>Help Center</Link>
                            </li>
                            <li>
                                <Link>Contact Us</Link>
                            </li>
                            <li>
                                <Link>Report Abuse</Link>
                            </li>
                            <li>
                                <Link>Submit a Dispute</Link>
                            </li>
                            <li>
                                <Link>Policies & Rules</Link>
                            </li>
                            <li>
                                <Link>Get Paid for Your Feedback</Link>
                            </li>
                        </ul>

                        <ul>
                            <h2>Customer Services</h2>
                            <li>
                                <Link>Help Center</Link>
                            </li>
                            <li>
                                <Link>Contact Us</Link>
                            </li>
                            <li>
                                <Link>Report Abuse</Link>
                            </li>
                            <li>
                                <Link>Submit a Dispute</Link>
                            </li>
                            <li>
                                <Link>Policies & Rules</Link>
                            </li>
                            <li>
                                <Link>Get Paid for Your Feedback</Link>
                            </li>
                        </ul>

                        <ul>
                            <h2>Customer Services</h2>
                            <li>
                                <Link>Help Center</Link>
                            </li>
                            <li>
                                <Link>Contact Us</Link>
                            </li>
                            <li>
                                <Link>Report Abuse</Link>
                            </li>
                            <li>
                                <Link>Submit a Dispute</Link>
                            </li>
                            <li>
                                <Link>Policies & Rules</Link>
                            </li>
                            <li>
                                <Link>Get Paid for Your Feedback</Link>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
