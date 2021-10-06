import React from 'react'
import Coursel from "../styles/Coursel.module.css";
function coursel(props) {
    return (
        <div className={Coursel.coursel}>
          <img src={props.image} className={Coursel.image}/>
         <p className={Coursel.title}>{props.title}</p>
        </div>
    )
}

export default coursel
