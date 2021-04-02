import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: "100%",
        borderRadius: 12,
        padding: 12,
    },
    media: {
        borderRadius: 6,
    },
    
}));

export const BookCard = React.memo(function BookCardFn({book}) {
    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN04TextInfoContentStyles();
    const shadowStyles = useOverShadowStyles({ inactive: true });
    const {name, price, Name, imageURL, id} = book
    console.log(name)

    console.log(book)
    return (
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia className={cx(styles.media, mediaStyles.root)} image={imageURL} />
            <CardContent>
                <TextInfoContent classes={textCardContentStyles} /* overline={"Kesha"} heading={"Inner Varnika"} */  heading={Name|| name}  />
                <div className="text-center">
                    <Button className={cx(styles.button)} variant="contained" color="secondary">
                        <span> Buy Now</span>
                        <AddShoppingCartIcon />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
});
export default BookCard;
