import React from "react"

function Button({ BSClass, label, children }) {
   return (
      <>
         <button className={`btn px-4 ${BSClass}`}>
            {label} {children}
         </button>
      </>
   )
}

export default Button
