import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Grid, makeStyles, TextField, Typography, Button } from "@material-ui/core";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        // boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fff",
        marginLeft: 100,
        marginTop: 50,
    },
    media: {
        height: 500,


    },
    carding: {

        display: "flex",
        flexDirection: "column",
    },
    text: {
        textDecorationLine: 'line-through',
    }

});

const ProductDisplay = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://b342b724-988c-4aa6-b78b-564dff475f4e.mock.pstmn.io/getitems/?limit=1")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [data]);
    return (
        <div>
            {data.map((character) => (
                <Grid container spacing={12}>

                    <Grid item xs={6}>

                        <Card className={classes.card}>

                            <CardMedia className={classes.media} image={character.img_url} style={{ width: '90%' }} />
                        </Card>

                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            {/* <Typography color="textSecondary" variant="subtitle2">{character.name}</Typography> */}
                            <Grid item xs={6}>      <Typography color="primary" variant="h6">{character.name}</Typography></Grid>
                            <Grid item xs={6}> <Typography color="primary" variant="h6">{character.species}</Typography></Grid><br />

                            <Grid container spacing={3}>
                                <Typography color="textSecondary" variant="subtitle1"> MRP <span className={classes.text} color="textSecondary" variant="subtitle2">Rs 325</span> </Typography>
                                <Typography color="primary" variant="h6">  Price: Rs 178</Typography>
                                <Typography color="error" variant="h7"> You Save:31% </Typography>
                                <Typography color="textSecondary" variant="subtitle1">  (Inclusive of all Taxes)</Typography>
                            </Grid><br />

                            <Grid container spacing={4}>
                                <Typography color="textSecondary" variant="subtitle2">
                                    <div class="ui labeled input" label='4.3 ' size="small"><div class="ui label label">4.3 <span className="icons"></span></div>9032 Ratings & Reviews</div>
                                </Typography>
                            </Grid><br />
                            <CardContent>
                                <Grid className="carding" container spacing={12}>
                                    <Grid item xs={2}>
                                        <TextField placeholder="1" variant="outlined" small ></TextField>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <div className={classes.carding}>
                                            <Button color="#EFCF77" variant="contained" small>ADD To Basket</Button>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className={classes.carding}>
                                            <Button variant="outlined" small>SAVE</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </CardContent>



                            <Grid className={classes.carding} container spacing={2}>
                                <Typography color="textSecondary" variant="subtitle2" > {<LocalShippingIcon />} Standard Delivery: Today 6: 30 PM - 8: 30 PM </Typography>
                            </Grid>

                        </CardContent>

                    </Grid>

                </Grid>
            ))
            }
        </div>
    )
}
export default ProductDisplay;