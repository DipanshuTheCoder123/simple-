import React, { useState } from 'react'
import Headers from '../Componants/Headers'
import { ToastContainer, toast } from 'react-toastify';
export default function Home() {
  //form
  let [formdata, setformdata] = useState(
    {
      uname: '',
      uemail: '',
      upassword: '',
      index:''
    }
  )


  let ChangeVar = (event) => {
    let oldata = { ...formdata };

    let inpute = event.target.name;
    let values = event.target.value;
    oldata[inpute] = values;
     setformdata(oldata);


  }
  let [useform, setuseform] = useState([]);
 
   //ADD
   let handersubmitForm;
    let  currendata;
    if(formdata.index!==""){
 handersubmitForm = (event) => {
    event.preventDefault();
     currendata = {
      uname: formdata.uname,
      uemail: formdata.uemail,
      upassword: formdata.upassword
    }

    let olddata = [...useform, currendata];
     toast.success("Added Sucessfully")
     setuseform(olddata);
       
  }
}
else{
              let updatethefrom   = [...useform] ;
              updatethefrom[formdata.index]=currendata;
       setuseform(updatethefrom);
}
    // Edit
    let [status ,setstatus]=useState(false); 
      function  EditTheChanges(index)
      { 
          let getcurrentobj =  useform.filter((v,i)=>i===index);
             let obj = getcurrentobj[0];
              obj['index']=index;
             
              setformdata(obj)
               
            setstatus(true);
      }
  
   
          
    
   
     function todelete(index){
           // eslint-disable-next-line array-callback-return
           let letcollectreamaining =  useform.filter((v,i)=>i!==index);
           setuseform(letcollectreamaining);
           toast.error("delete sucessfully")
     }
  return (
    <div>
      <Headers />
      <ToastContainer />
      <div style={{ width: "600px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", marginTop: "30px" }}>  Home</h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, quod. V
          ero repellat ullam itaque asperiores ab, id iusto labore,
          dignissimos blanditiis excepturi sequi, quam sint. Illo eius labore odit aliquid.
        </p>

        <h1>Fill The Form</h1>
        {useform.length}
        <form action="" onSubmit={handersubmitForm}>
          <div className='inner'>
            <div>
              <label>Enter the Name</label><br />
              <input type="text" onChange={ChangeVar} value={formdata.uname} name='uname' />
            </div>
            <div>
              <label htmlFor="">Email</label><br />
              <input type="email" onChange={ChangeVar} value={formdata.uemail} name='uemail' />
            </div>
            <div>
              <label htmlFor="">Password</label><br />
              <input type="password" onChange={ChangeVar} value={formdata.upassword} name='upassword' />
            </div>
            <button type='submit'>{(status?"update":"submit")}</button>

          </div>
        </form>
      </div>
      <div className='table'>
        <table border={"1px"}>
          <thead>
            <th>sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          {useform.map((v, i) => {
            return (
              <tbody>
                <td>{i}</td>
                <td>{v.uname}</td>
                <td>{v.uemail}</td>
                <td>{v.upassword}</td>
                <td><button onClick={()=>{EditTheChanges(i)}}>Edit</button></td>
                <td><button onClick={()=>{todelete(i)}} >Delete</button></td>
              </tbody>
            )
          })}
        </table>
      </div>

    </div>
  )
}
