import React from 'react'
import paragraph from "../styles/Paragraph.module.css";


function Paragraph({text}) {
    return (
        <div className={paragraph.paragraph}>
            <p className={paragraph.text}>{text}</p>
        </div>
    )
}

export default Paragraph
