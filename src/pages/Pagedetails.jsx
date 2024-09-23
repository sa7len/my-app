import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products';


const Pagedetails = () => {
    const [products,setProducts] = useState({})
    const {id}= useParams();
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
            });
    }, [id]); 
  return (
    <div>
        <ul>
            <li>{products.id}</li>
            <li>{products.title}</li>
            <li className='imgteg'><img  src={products.image} alt={products.description} />
            </li>
            <li>{products.price}AZN</li>
        </ul>
    </div>
  )
}

export default Pagedetails