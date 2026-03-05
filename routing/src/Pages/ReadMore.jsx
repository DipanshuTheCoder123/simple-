import React from 'react'
import { useLocation } from 'react-router-dom'
import { data } from '../Data';

export default function ReadMore() {

  let location = useLocation();

  console.log("Path:", location.pathname);

  let index = location.pathname.split('/')[2];
  let idx = parseInt(index);

  // console.log("Index:", index);
  // console.log("Parsed:", idx,typeof(idx));

  let obj = data.find((v) => v.id == idx);
 console.log(obj);
 


  // return (
  //   <div>
  //     <h2>{obj.title}</h2>
  //     <p>{obj.body}</p>
  //   </div>
  // )
}