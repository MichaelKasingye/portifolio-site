import React from 'react'
import paragraph from "../styles/Paragraph.module.css";


function Paragraph({text}) {
    return (
        <div className={paragraph.paragraph}>
            <p class="text-secondary">{text}</p>
        </div>
    )
}

export default Paragraph
