import React from 'react'

const Input = ({placeholder, onChange,value}) => {
  return (
    <input type="text" onChange={(onChange)} value={value} placeholder={placeholder} />
  )
}

export default Input