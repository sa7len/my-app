import React from 'react'
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';


const Table = ({thead,data,deleteItem}) => {
  const navigate = useNavigate()
  return (
    <>
   
    <table id="customers">
    <thead>
    {
     thead.map((item)=>(
     <tr key={item.id}>
       <th>{item.title}</th>
         <th>{item.price}</th>
         <th>{item.image}</th>
         <th>{item.id}</th>
         <th>Delete</th>
         <th>View</th>
     </tr>
    ))
    }
  </thead>
  <tbody>
    {
      data.map((data)=>(
        <tr key={data.id}>
          <th>{data.title}</th>
          <th>{data.price}</th>
          <th><img src={data.image} alt={data.description}/></th>
          <th>{data.id}</th>
          <th className='delete' onClick={()=>deleteItem(data.id)}><MdDelete/></th>
          <th className='view' onClick={()=>navigate(`/products/${data.id}`)}><GrView/></th>
        </tr>
      ))
    }

  </tbody>
</table>
    </>
  )
}

export default Table