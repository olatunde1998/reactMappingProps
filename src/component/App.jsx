import React from "react";
import notes from "../notes";
import Card from "./card";



function App(){
  return (
  <div>
    <h1 className="headings"> Keeper</h1>
    <div className="boxContainer">
      {notes.map(note =>
   
        <Card 
          key = {note.key}
          title = {note.title}
          content = {note.content}
          imgURL = {note.imgURL}
          learnMore = {note.button}
          
        />
  
      )}
      
    </div>
  </div>
  );
}

export default App;





