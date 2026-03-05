import React, { useState } from 'react'
import Header from '../Componants/Custom/Header'
import './Dasbord.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Dasbord() {
 
   let [show,setshow]  =useState(false);

  
  return (
    <div>
      <Header/>
      <div className='section'>
         <h3>My Resume</h3>
         <p>Start Creating AI resume to your next job role</p>
        <FontAwesomeIcon  onClick={()=>{setshow(!show)}} icon={faPlus} style={{padding:"80px",background:"rgb(243, 244, 246)",cursor:"pointer"}} />
      </div>
 
  <div className={`model ${show?"show":""}`}>
       
  </div>

    </div>
  )
}
