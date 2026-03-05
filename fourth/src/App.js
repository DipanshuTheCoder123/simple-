import './App.css';
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { useState } from 'react';

function App() {
 
   const [iteam , setiteam]= useState([]);
   
  
   let button = (event)=>{
         event.preventDefault();
 
           let values = event.target.todo.value.trim();
           

         if(!iteam.includes(values)){
            let  allprevvalues = [...iteam,values];
             setiteam(allprevvalues);
         }else{
             alert("your Data is already added");
         }
   event.target.reset();
   }
   let deleteItem = (indexToDelete) => {
  let updatedItems = iteam.filter((value, index) => index !== indexToDelete);
  setiteam(updatedItems);
}

 
  
  return (
    <>
    
       <div className='header'><h2 >TODO List</h2></div>
       <form action=""  onSubmit={button}>
         <input className='' type="text" name='todo' />
         <button >ADD</button>
       </form>

        {
 
       

          iteam.map((values , index )=>{
              
               return  (
                <ul><li>{values}</li><span onClick={()=>{deleteItem(index)}}>❌</span></ul>
               )
          })
        }
   </>
  );
   
    
 
     
}

export default App;