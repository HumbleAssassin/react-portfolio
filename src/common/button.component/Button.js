import React from "react"

function Button(props) {
   return (
      <>
         <button className={`btn px-4 ${props.utilityClasses}`}>{props.label}</button>
      </>
   )
}

export default Button
