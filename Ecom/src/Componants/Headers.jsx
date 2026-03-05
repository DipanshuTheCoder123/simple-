import React, { useState } from 'react'
import './Header.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaSearch, FaSearchDollar } from "react-icons/fa";
export default function Headers() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className='container-fluid header d-flex justify-content-between' style={{alignItems:"center"}}>
    <img 
  src="data:image/webp;base64,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" 
  alt="myntra logo"
  width="60"
/>  <div className=''>
        <ul className=' box d-flex '>
          <li className='card-button1'>Women</li >
          <li className='card-button1'>Men</li >  
         
          <li className='card-button1'>Beauty</li>
          <li className='card-button1'>Studio</li >
           <li className='card-button1'>Kids</li >
          <li className='card-button1'>Beauty</li>
          <li className='card-button1'>Studio</li>
        </ul>
        </div>
        <div  className=' d-flex align-items-center gap-2'>
          <input type="text" width= "60px" height= "20px" /><FaSearchDollar className='fasearch' />
        </div> 
        <div className=' box1 '>
          <ul className='d-flex' >
          
            <li>Wishlist</li>
            <li>Bag</li>
            </ul>
        </div>
      
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>

    </div>
  )
}
