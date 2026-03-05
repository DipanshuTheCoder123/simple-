import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import { faqData } from "./Data";
import Faq from "./Faq";
import Faq1 from "./Faq";

function App() {
  const [show, setShow] = useState(false);
  const [modelshow, setmodelshow] = useState(false);

  const [faqshow, setfaqshow] = useState(false);
  const [ansshow ,setansshow] =useState(faqData[0].id);
  return (
    <>
      <button onClick={() => { setmodelshow(!modelshow) }}>show</button>
      <div className="text-end p-3">
        <button onClick={() => setShow(!show)}>
          {show ? "✖" : "☰"}
        </button>
      </div>

      <div className={show ? "menu active" : "menu"}>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>

      {modelshow &&
        <div
          className="modelOverlay modelOverlay-active"
          onClick={() => setmodelshow(false)}
        ></div>
      }
      <div className={(modelshow) ? "model" : "model model-active"}><button onClick={() => { setmodelshow(!modelshow) }}>✖</button></div>
        <Faq1/>
      {/* <div className="header"><h2>Frequent Asked Quetion (FAQ) </h2></div>
      <div className="main">
        {faqData.map((obj ) => {
          return (
            <div className="faqitem">
              <div onClick={()=>{setansshow(obj.id)}}  className="container bg-danger py-3 text-white ">{obj.question}</div>
              <p className={`container py-4 ${ansshow == obj.id?"slider-active":"slider"}`}>
                {obj.answer}
              </p>
            </div>
          );
        })}
        

      </div> */}
    </>
  );
}

export default App;