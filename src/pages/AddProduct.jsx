import React, { useState } from 'react';
import Input from '../components/Input';
import axios from 'axios';
import Button from '../components/Button';

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const onHandleTitle = (event) => {
        setTitle(event.target.value);
    };

    const onHandleDescription = (event) => {
        setDescription(event.target.value);
    };

    const onHandlePrice = (event) => {
        setPrice(event.target.value);
    };
    // const anyobject = {id:"8278df9b-4ca6-482b-bf03-4b1be8d321d7" , title:`${title}`, description:`${description}`, price:`${price}`};
    // console.log("ggdhhhfhff",anyobject)

    const melumatiGonder = () => {
        console.log(title, description, price);

        axios.post("https://fakestoreapi.com/products", {
            title,
            description,
            price
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    };

    return (
        <div className='input constainer'>
            <label htmlFor="">title:</label>
            <Input className="input" value={title} onChange={onHandleTitle} /> <br />
            <label htmlFor="">description</label>
            <Input className="input" value={description} onChange={onHandleDescription} />
            <br />
            <label htmlFor="">price</label>
            <Input className="input" value={price} onChange={onHandlePrice} />
            <br />
            <Button btnText="melumatlari gonder" onClick={melumatiGonder} />
        </div>
    );
};

export default AddProduct;