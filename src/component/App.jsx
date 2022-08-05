import React, { useState} from "react";





function App(){
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function updateFName(event){
    setFName(event.target.value);
  }
  function updateLName(event){
    setLName(event.target.value);
  }

  return (
  <div >
    <h1 className="headings">Geodev-</h1>
    <div className="boxCard">
      <h2>Hello {fName} {lName} </h2>
        
      <input 
          onChange={updateFName} 
          type = "text" 
          value={fName} 
          placeholder ="Surname?"/>

      <input 
          onChange={updateLName} 
          type = "text" 
          value={lName} 
          placeholder ="Last Name?"/>

      <button> Submit</button>
    </div>
   
      
   
  </div>
  );
}

export default App;





