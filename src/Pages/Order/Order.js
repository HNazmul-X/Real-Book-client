import { Box, Button, Typography } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import MyNavbar from '../../Components/MyNavbar/MyNavbar';
import "./Order.css"

const Order = () => {
    const [orderdBook, setOrderdBook] = useState([])
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    console.log(orderdBook)

    useEffect(()=> {
        axios.get(`https://real-page.herokuapp.com/user-orders/get?email=${loggedInUser.email}`)
        .then(res => setOrderdBook(res.data))
    },[loggedInUser])
    return (
        <>
        <MyNavbar/>
        <div>
            {orderdBook.length > 0 ? (
                <>
                    {" "}
                    <Box p={3}>
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
                                    <th>remove</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orderdBook?.map((book) => {
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
                                            <td>Delete</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>{" "}

                    <Box alignItems="right" width="300px" ml="auto" p={5}>
                        <Button variant="contained" color="primary">Parchase Order</Button>
                    </Box>
                </>
            ) : (
                <Box mt={5} p={4} width="90%" mx="auto" bgcolor={blueGrey[300]}>
                    <h1 className="text-center">Sorry You Don't Have any order to puchase</h1>
                </Box>
            )}
        </div>
        </>
    );
};

export default Order;