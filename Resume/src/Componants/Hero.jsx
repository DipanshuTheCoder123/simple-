import React from 'react'
import { Container } from 'react-bootstrap'
import './Hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
         <>
        <div className='container mt-5 d-flex justify-content-center ' >
            <div>
                <h1 className='content'>Hey,I'm your Personal <span className='triplplanner'>Trip Planner</span></h1>
                <p className='text-center'>Tell me what you want, and I’ll handle the rest: flights, hotels, itineraries — all in seconds.</p>
            <div className='d-flex justify-content-center button'>
            <Link to={"create-trip"}>  <button>Get Stated, Its Free</button></Link>
                 </div> 
            </div>
            
        </div>

         
        </>
    )
}
