import React from 'react'
import button from "../styles/Button.module.css";
import Link from "next/link";

function Button({text, link}) {
    return (
        <button
              type="button"
            //   className="btn  btn-outline-primary"
              className={button.button}
            >
              <Link href={link}>
              <a > 
              {text}
              </a></Link>
            </button>
    )
}

export default Button
