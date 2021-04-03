import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { blueGrey } from "@material-ui/core/colors";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import { Box, IconButton } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    table: {
        Width: "90%",
        background: blueGrey[400],
        color:"white"
    },
});

export default function ManageItem() {
    const classes = useStyles();
    const [books, setBooks] = useState([])
    const [isSpinnerShow, setIsSpinnerShow] = useState(true)

    useEffect(() => {
        axios.get("https://real-page.herokuapp.com/books").then((res) => {
            setBooks(res.data)
             setIsSpinnerShow(false);
        });
    }, []);


    const deleteItemFromDb = (id) => {
        console.log(id)
        fetch(`https://real-page.herokuapp.com/delete-book/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                axios.get("https://real-page.herokuapp.com/books").then((res) => {
                    setBooks(res.data);
                });
                
            })
            .catch((err) => console.log(err));
    }




    return (
        <>
        <Box p={2} mb={3} bgcolor={blueGrey[300]}>
            <h2 className="text-center">Mange Your Shop Product</h2>
        </Box>

            <Box p={4}> 
                {isSpinnerShow && <CircularProgress />}
                {!isSpinnerShow && (
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Books Name</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Catagory</TableCell>
                                    <TableCell align="right">Edit</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {books.map((book) => (
                                    <TableRow key={book.Name}>
                                        <TableCell component="th" scope="row">
                                            {book.Name || book.name}{" "}
                                        </TableCell>
                                        <TableCell align="right">{book.Price || book.price}</TableCell>
                                        <TableCell align="right">{book.Catagory || book.catagory}</TableCell>
                                        <TableCell align="right">
                                            {" "}
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>{" "}
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton onClick={() => deleteItemFromDb(book?._id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </>
    );
}
