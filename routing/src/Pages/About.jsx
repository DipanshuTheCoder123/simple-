import React from 'react'
import Headers from '../Componants/Headers'
import  css from '../Componants/Headers.css'
import { data } from '../Data'
import { Link } from 'react-router-dom'

export default function About() {
  
       let alldata = data.map((vales ,index)=>{
            return(
                <>
                
                 <div className='box'>
                     <h3>{vales.title}</h3>
                    <p>{vales.body}</p>
                    <button> <Link to={`/ReadMore/${index}`}>click</Link></button>
                    </div>
                    </>
            )
       })
        
       

    return (
        <div>
            <Headers />

            <div style={{width:"600px", margin:"auto"}}>
                <h2 style={{textAlign:"center", marginTop:"30px"}}>  About</h2>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, quod. V
                ero repellat ullam itaque asperiores ab, id iusto labore, 
                dignissimos blanditiis excepturi sequi, quam sint. Illo eius labore odit aliquid.
            </p>
            </div>
    
             <div className='conatiner'>
                 {alldata}
             </div>
      
              
     


        </div>
    )
}

