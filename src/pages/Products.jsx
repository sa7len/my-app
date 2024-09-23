import React, { useEffect, useState } from 'react';
import Table from "../components/Table";
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const navigate = useNavigate();
  const [products,setProducts]= useState([])
    const thead = [{title:"title", price:"price", image:"image", id:"ID", delete:"Delete"}]
    useEffect(()=> {
      axios("https://fakestoreapi.com/products").then((res)=>setProducts(res.data));
    },[]
  );
  const deleteItem = (id)=>{
    Swal.fire({
      title: "silmek istediyinizden eminsiniz?",
      showCancelButton: true,
      confirmButtonText: "mehsulu sil",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://fakestoreapi.com/products/${id}`).then((res)=> res.data)
        Swal.fire("Ugurlu emeliyyat!", "succes");
      }
    });
  }
  
  return (
    <div className='products'>
      <div className='container'>
      <Table thead={thead} data={products} deleteItem={{deleteItem}}/>
      <Button className="addproduct" btnText="mehsul elave et"  onClick={()=>navigate(`/products/add`)}/>
      </div>
    </div>
  )
}

export default Products
