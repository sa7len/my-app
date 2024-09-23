
import React from 'react'

export const Card = ({title,image,url,content,key}) => {
  return (
    <div className='card'>
        <img src={image} alt=""/>
        <h3>{title}</h3>
        <p>{content}</p>
        <p href={url}></p>


    </div>
  )
}

export default Card;