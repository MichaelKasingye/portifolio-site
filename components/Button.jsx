import React from 'react'
import button from "../styles/Button.module.css";
import Link from "next/link";

function Button({text, link}) {
    return (
      <Link href={link}>
        <button
              type="button"
            //   className="btn  btn-outline-primary"
              className={button.button}
            >
              <a > 
              {text}
              </a>
            </button>
            </Link>
    )
}

export default Button
