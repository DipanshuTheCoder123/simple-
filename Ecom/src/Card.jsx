import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Headers from './Componants/Headers';

export default function Card() {

    let [getsingleproduct, setgetsingleproduct] = useState({});

    const { id } = useParams();
    console.log(id);

    function SingleProductById() {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((final) => { 
                console.log(final);
                
                setgetsingleproduct(final)});
    }
 
    useEffect(()=>{
       SingleProductById();
       console.log(getsingleproduct);
       
    },[id])
     

    return (
          <>
           <Headers/>
        <div className="text-center mt-10">

      <img
        src={getsingleproduct.images?.[0]}
        alt={getsingleproduct.title}
        className="w-[400px] mx-auto"
      />

      <h1 className="text-2xl font-bold mt-4">
        {getsingleproduct.title}
      </h1>

      <p>{getsingleproduct.brand}</p>

      <p className="text-green-600 font-bold">
        ₹{getsingleproduct.price}
      </p>

    </div>
  </>
    )
}
