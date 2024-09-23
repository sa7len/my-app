import React from 'react'

 const Button = ({btnText,className,onClick, disabled}) => {
  return (
   <button  disabled={disabled} onClick={onClick} className={className}>{btnText}</button>
  )
}


export default Button
