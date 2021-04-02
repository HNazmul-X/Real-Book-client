import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Box, Grid } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles({
    root: {
        width: '345px',
    },
});



export const BookCard = React.memo(function BookCardFn({ book }) {
    const classes = useStyles();
    const { name, price, Name, imageURL, _id } = book;
    const history = useHistory()

    console.log(book);
    return (
        <Box px={3} mt={3}>
            <Card elevation="5" className={classes.root}>
                <CardActionArea>
                    <CardMedia component="img" alt="Contemplative Reptile" height="200" image={imageURL} title="Contemplative Reptile" />
                    <CardContent>
                        <Typography align="center" gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid container>
                        <Grid item sm="6">
                            <Typography variant="h6" component="h5" >
                                Price:${price}
                            </Typography>
                        </Grid>
                        <Grid item sm="6">
                            <Button onClick={()=> history.push(`/check-out/${_id}`)} style={{width:"100%"}} variant="contained" size="small" color="primary">
                               <AddShoppingCartIcon/> Buy Now
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Box>
    );
});
export default BookCard;
