import React, { useEffect, useState } from 'react'
import { addStudent, getAllStudents } from './services/studentService';

export default function App1() {

    let [student, setStudent] = useState(
        {
            rollno: "",
            name: "",
            marks: "",
            university: ""
        }
    );
    let [getstudent , setgetstudent] =useState([]);

    let handleForm = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }


    let submit = async (e) => {
        e.preventDefault();

        try {
            let responce = await addStudent(student);
            console.log(responce.data);
            alert("insert successfully");


            // Reset form
            setStudent({
                rollno: "",
                name: "",
                marks: "",
                university: ""
            });

        } catch (error) {
            console.log(error);

        }
    }
    //getstudent 

     let   getallstudent =async()=>{       
            try{
                 const alldata =     await getAllStudents();
                setgetstudent(alldata.data);
            }catch(error){
                console.log(error);
                alert("not fetch")          
            }
     } 
     useEffect(()=>{
          getallstudent;
     },[])

    return (
        <div>
            <h2>Add Student</h2>
            <div style={{ padding: "30px" }} className='container d-flex  '>
                <form className='col-lg-3' onSubmit={submit} >
                    <input
                        type="number"
                        name="rollno"
                        placeholder="Roll No"
                        required
                        value={student.rollno}
                        onChange={handleForm}
                    />
                    <br /><br />

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={student.name}
                        required
                        onChange={handleForm}
                    />
                    <br /><br />

                    <input
                        type="number"
                        name="marks"
                        placeholder="Marks"
                        value={student.marks}
                        required
                        onChange={handleForm}

                    />
                    <br /><br />

                    <input
                        type="text"
                        name="university"
                        placeholder="University"
                        required
                        value={student.university}
                        onChange={handleForm}

                    />
                    <br /><br />

                    <button type="submit">Submit</button>
                </form>
                <div className='col-lg-9'>
                    <table border={2} className='table table-hover "table table-success table-striped-columns'>
                        <thead className='text-center'>
                             <tr>
                            <th>sno</th>
                            <th>rollno</th>
                            <th>name</th>
                            <th>marks</th>
                            <th>university</th>
                            <th className='text-center'>Edit</th>
                            <th className='text-center'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                              getstudent.map((v)=>{
                                return (
                                    <tr className="table-light text-center  ">
                                <td ></td>
                                <td>{v.name}</td>
                                <td>12</td>
                                <td>12</td>
                                <td>12</td>
                                <td className='text-center'><button>Edit</button></td>
                                <td className='text-center'><button>Delte</button></td>
                            </tr>
                                )
                            })
                            

                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
