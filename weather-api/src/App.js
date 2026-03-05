import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  let [city, setcity] = useState();
  let [temp1, settemp] = useState("");
  let  [loadingimg ,setloading] =useState(false);
  const ans = "";

  function getcitytemp() {
      if(!city)return;
      setloading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c`)
      .then((res) => res.json())
      .then((final) => {
        // let kelvin = final.main.temp;
        // let celsius = kelvin - 273.15;
       if(final.main){
         settemp((final.main.temp)- 273.15);
          setloading(false)
       }else{
        settemp("Not Found");
         setloading(false)
       }
       
      });
  }
useEffect(()=>{
           console.log("DSvsdv");
           
      })
       
  return (
    <div className="App">

      <div>
        <input type="text" name='city' onChange={(e) => setcity(e.target.value)} />
        <button onClick={getcitytemp}>Get</button>
      </div>

      <div className='boxname'>
         {loadingimg && <img   className='hidden'   width={"50px"} src="https://media.tenor.com/guhB4PpjrmUAAAAC/loading-loading-gif.gif" alt="" />
    }
         {temp1 === "" ? "Not Found" : temp1}
     </div>

    </div>
  );
}

export default App;
