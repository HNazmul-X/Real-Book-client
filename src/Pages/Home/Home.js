import { Box, Container, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard from '../../Components/BooksCard/BookCard';
import MyNavbar from '../../Components/MyNavbar/MyNavbar';
import spinnerImg from "../../images/spinner.gif"

const Home = () => {
    const [Books, setBooks] = useState([])
    const [isSpinnerShow , setIsSpinnerShow] = useState(true)

    useEffect(()=>{
        axios.get("https://real-page.herokuapp.com/books")
        .then(res => {
            setBooks(res.data);
            res && setIsSpinnerShow(false);
        });
    },[])
    return (
        <>
        
                  <MyNavbar/>
        <div>
            {isSpinnerShow && (
                <Box width="400px" mx="auto">
                    <img src={spinnerImg} alt="" />
                </Box>
            )}

            <Container maxWidth="lg">
                <Grid container justify="center" spacing={5}>
                    {Books &&
                        Books.map((book) => {
                            return (
                                <Grid item sm={8} md={4}>
                                    <BookCard book={book} />
                                </Grid>
                            );
                        })}
                </Grid>
            </Container>
        </div>

        </>
    );
};

export default Home;