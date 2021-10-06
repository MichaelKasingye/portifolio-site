import React from 'react'
import title from '../styles/Title.module.css'
function Title(props) {
    return (
        <>
           <h3 className={title.title}>{props.title}</h3> 
        </>
    )
}

export default Title
