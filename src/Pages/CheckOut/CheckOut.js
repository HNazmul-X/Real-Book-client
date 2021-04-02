import { Box, Button, Grid } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {bookId} = useParams()
    const [book, setBook] = useState({})

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        const bookOrder = {...data, ...loggedInUser}
        bookOrder.date = new Date()
        bookOrder.book = {
            ...book
        }
        console.log(bookOrder)
        fetch("https://real-page.herokuapp.com/place-order/set-item", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookOrder),
        }).then(res=> res.json())
        .then(data=> console.log(data))
    };

    useEffect(()=> {
        axios.get(`https://real-page.herokuapp.com/book/${bookId}`)
        .then(res=> setBook(res.data))
    },[bookId])

    const { name, price, imageURL } = book;



    return (
        <Box bgcolor={purple[100]} width="450px" mx={"auto"} my={4} p={5} >
            <Box width="300px" height="300px" mx="auto" mb={2}>
                <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={imageURL} alt="" />
            </Box>
            <Box p={2}>
                <h2>
                    <span style={{ textDecoration: "underline" }}>Book Name:</span> {name}
                </h2>
            </Box>
            <Box p={2}>
                <h2>
                    {" "}
                    <span style={{ textDecoration: "underline" }}> Price:</span> ${price}
                </h2>
            </Box>
            <Box width="300px">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="address" placeholder="Give you Address" className="form-control" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <Button variant="contained" type="submit" value="Place Order">
                        Place Order
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default CheckOut;