import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data';

function App() {
  let [uppercase, setuppercase] = useState(false);
  let [lowercase, setlowercase] = useState(false);
  let [numbers, setnumbers] = useState(false);
  let [symbols, setsymbols] = useState(false);
  let [number,setnumber] = useState(10);
    console.log(number);
  let [generate, setgenerate] =useState() ; 
  let createPassword = (event) => {
    let charset = '';
    if (uppercase || lowercase || numbers || symbols) {

      if (uppercase) charset +=  UC;
      if (lowercase) charset +=LC;
      if (numbers) charset += NC;
      if (symbols) charset += SC;
 
         let ans='' ;
       for(let i =0;i<number;i++){
           ans += charset.charAt(Math.floor(Math.random()*charset.length));
       }

       
       setgenerate(ans);
 

    } else {
      alert("pless Select atlest one");

    }


  }


  return (
    <div className="App">

      <div className='box'>
        <h2>Password Generator</h2>
        <div
          className='password'> <input type="text" value={generate} readOnly  id="" />
          <button>click</button>
        </div>
        <div className='passwordlen'><span>Password Length</span><input type="Number" name='number' onChange={(event)=>setnumber(event.target.value)}  defaultValue={10} max={20} min={10} /></div>
        <div className='content'>
          <div className='same'> <label>Include uppercase letters</label><input type="checkbox" checked={uppercase} onClick={() => setuppercase(!uppercase)} /></div>
          <div className='same'> <label>Include lowercase letters</label><input type="checkbox" checked={lowercase} onClick={() => setlowercase(!lowercase)} /></div>
          <div className='same'> <label>Include numbers</label><input type='checkbox' checked={numbers} onClick={() => setnumbers(!numbers)} /></div>
          <div className='same'> <label>Include symbols</label><input type='checkbox' checked={symbols} onClick={() => setsymbols(!symbols)} /></div>
        </div>
        <button className='submmit' onClick={createPassword}>click</button>
      </div>
    </div>
  );
}

export default App;
