import React from 'react'
import button from "../styles/Button.module.css";

function Button({text}) {
    return (
        <button
              type="button"
            //   className="btn  btn-outline-primary"
              className={button.button}
            >
              {text}
            </button>
    )
}

export default Button
