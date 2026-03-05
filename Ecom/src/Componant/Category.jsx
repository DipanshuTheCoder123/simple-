import React from 'react'
import './Category.css'
export default function Category({allcatagory,setsinglecategory}) {
    return (
        <div >
              <h1 className='font-[700] text-xl fs-7' >Catagory</h1>
             
             <div>
                 <ul className=' py-[10px]'> 
                {
                allcatagory.map((v,i)=>{
                    return(
                        
                            <li onClick={()=>setsinglecategory(v.slug)}
                          key={i} className='font-bold Iteam ' 
                          style={{cursor:"pointer",marginTop:"10px"}}
                          >{v.slug}</li>
                        
                    )
                })
              }             
            </ul>
             </div>
        </div>
    )
}
