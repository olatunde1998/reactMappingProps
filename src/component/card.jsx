import React from "react";



function Card(props){
    return(
        <div className="Card">
            
            <div className="box">
                <div className="titleBox">
                    <p>{props.title}</p>
                         
                </div>
                <div className="avartarContainer">

                    <div className="avatarBox">
                        <img className="avatarImg" src= {props.imgURL} alt="" />
                    </div> 
                    <div className="avatarDef">
                        <p>{props.content}</p>
                    </div>
                    


                </div>
                <button className="learnMore">{props.learnMore}</button>
                
                

            </div>


        </div>
    );
}

export default Card;