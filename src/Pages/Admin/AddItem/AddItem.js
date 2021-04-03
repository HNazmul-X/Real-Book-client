import { Box, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { blueGrey, green, pink } from '@material-ui/core/colors';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./AddItem.css"

const AddItem = () => {
    const [imageURL, setImageURL] = useState()
    const [isPhotoUploaded, setIsPhotoUploaded] = useState(false)
    const [isPhotoUploadAlert, setIsPhotoUploadAlert] = useState(false)
    const [isProductUpladed, setIsProductUploaded] = useState(false)



    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) =>{
        const productData = {...data}
        productData.imageURL = imageURL

        imageURL && axios.post("https://real-page.herokuapp.com/add-books", productData)
        .then(res=> setIsProductUploaded(res.data))
        .catch(err => console.log(err))
    };

    const getImageUrl = (event) => {
        setIsPhotoUploadAlert(true)
        const imageData = new FormData()
        imageData.set('key', 'db2003832c36dc3e4775eca19ca80e26')
        imageData.append('image', event.target.files[0])
        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
               setImageURL(response.data.data.display_url);
               setIsPhotoUploaded(true)
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }






    return (
        <>
            <Box bgcolor={blueGrey[200]} p={2} width="100%" mx="auto" mb={3}>
                <h3 className="text-center">Add a Book in your store</h3>
            </Box>
            <Grid container justify="center">
                <Grid item className="add-item-area" sm={10} elevation={3}>
                    <form className="Add-itemForm" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input className="form-control" name="name" placeholder="Product Name" required ref={register({ required: true })} />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div>
                            <input className="form-control" name="catagory" placeholder="Catagory" ref={register({ required: true })} />
                            {errors.catagory && <span className="text-danger">This field is required</span>}
                        </div>
                        <div>
                            <input className="form-control" name="price" placeholder="Price" ref={register({ required: true })} />
                            {errors.price && <span className="text-danger">This field is required</span>}
                        </div>
                        <div>
                            <input className="form-control" onChange={getImageUrl} name="imageURL" type={"file"} ref={register({ required: true })} />
                            {errors.imageURL && <span className="text-danger">This field is required</span>}
                            {isPhotoUploadAlert && (
                                <Box bgcolor={blueGrey[200]} p={1} width="90%" mx="auto" my={1}>
                                    <h4 className="text-center">{isPhotoUploaded ? "your Photo has been uploaded" : " Please Wait your phto uploading..."}</h4>
                                </Box>
                            )}
                        </div>
                        <div>
                            <button type={isPhotoUploaded ? "submit" : "disabled"}>Add Book</button>
                        </div>
                    </form>
                </Grid>
            </Grid>

            {isProductUpladed && (
                <Box bgcolor={green[200]} p={2} width="90%" mx="auto" my={3}>
                    <Typography color={green[700]} variant="h6" className="text-center">
                        You Have succesfully added a Book
                    </Typography>
                </Box>
            )}
        </>
    );
};;

export default AddItem;