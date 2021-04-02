import { Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./AddItem.css"

const AddItem = () => {
    const [imageURL, setImageURL] = useState()
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) =>{
        const productData = {...data}
        productData.imageURL = imageURL

        imageURL && axios.post("https://real-page.herokuapp.com/add-books", productData)
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    };

    const getImageUrl = (event) => {
        console.log(event.target.files)
        const imageData = new FormData()
        imageData.set('key', 'db2003832c36dc3e4775eca19ca80e26')
        imageData.append('image', event.target.files[0])
        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
               setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }






    return (
        <Grid container justify="center">
            <Grid item className="add-item-area" sm={10} elevation={3}>
                    <form className="Add-itemForm" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input name="name" placeholder="Product Name" defaultValue="test" ref={register} />
                        </div>
                        <div>
                            <input name="catagory" placeholder="Catagory" ref={register({ required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <input name="price" placeholder="Price" ref={register({ required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <input onChange={getImageUrl}  name="imageURL" type={"file"} ref={register({ required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </form>
            </Grid>
        </Grid>
    );
};;

export default AddItem;