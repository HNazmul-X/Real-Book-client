import { Box } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import "./Order.css"

const Order = () => {
    const [orderdBook, setOrderdBook] = useState([])
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)

    useEffect(()=> {
        axios.get(`https://real-page.herokuapp.com/user-orders/get?email=${loggedInUser.email}`)
        .then(res => setOrderdBook(res.data))
    },[loggedInUser])
    return (
        <div> 
            <Box p={3} >
                <h1 className="text-center">
                    hey, <span style={{ color: "purple" }}>{loggedInUser.displayName}</span>, Here Your all Order
                </h1>
            </Box>
            <div className="order-table">
                <table cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th>Book Thum</th>
                            <th>Books</th>
                            <th>Catagory</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orderdBook.map((book) => {
                            console.log(book);
                            return (
                                <tr>
                                    <td className="book-image">
                                        <img src={book.book.imageURL} width="150px" alt="" />{" "}
                                    </td>
                                    <td>{book.book.name}</td>
                                    <td>{book.book.catagory}</td>
                                    <td>{book.book.price}</td>
                                    <td>1</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;