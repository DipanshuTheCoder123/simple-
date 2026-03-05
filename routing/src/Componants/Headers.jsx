import React from 'react'
import './Headers.css';
import { Link } from 'react-router-dom';
export default function Headers() {
    return (
        <div>
            <h1 >Heders</h1>
            <ul>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact-us" >Contact</Link></li>
                <li><Link to="/" >Home</Link></li>
            </ul>
        </div>
    )
}
