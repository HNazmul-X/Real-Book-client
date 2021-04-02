import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard from '../../Components/BooksCard/BookCard';

const Home = () => {
    const [Books, setBooks] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/books")
        .then(res => setBooks(res.data));
    },[])
    return (
        <div>
            <Container  maxWidth="lg">
                <Grid container justify="center" spacing={5}>
                    {Books.map((book) => {
                        return (
                            <Grid item md={4}>
                                <BookCard book={book} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </div>
    );
};

export default Home;