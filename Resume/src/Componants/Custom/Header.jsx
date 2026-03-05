import React from 'react'
import Logo from './logo'
import { Button } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
export default function Header() {
    return (
        <div className='d-flex  justify-content-between box px-3 p-3 '>
            <Logo />
            <div>
                <ul className='d-flex gap-4' style={{listStyle:"none"}}>
                    <li className='hederlist'>Home</li>
                    <li className='hederlist'>Pricing</li>
                    <li className='hederlist'>Contact us</li>
                </ul>
            </div>
            <div className='d-flex gap-2 '>
                <UserButton />
                <Link to="create-trip">
                    <Button variant="dark">Get Stated</Button>
                </Link>
            </div>
        </div>
    )
}