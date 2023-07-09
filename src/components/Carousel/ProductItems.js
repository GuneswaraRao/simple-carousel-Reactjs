import { Card, CardContent, CardMedia, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel"
import StarIcon from '@mui/icons-material/Star';
import { Button, Select } from "@material-ui/core";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { FormControl, MenuItem } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import 'semantic-ui-css/semantic.min.css';
import "./carousel.css"
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import './ProductItems.css';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fff",
    },
    media: {
        height: 100,
        marginTop: 4,
        marginLeft: 11,

    },
    carding: {

        display: "flex",
        flexDirection: "column",
    },
    text: {
        textDecorationLine: 'line-through',
    }

});

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

const ProductItems = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    useEffect(() => {
		if(!data){
        fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
       // fetch("https://b342b724-988c-4aa6-b78b-564dff475f4e.mock.pstmn.io/getitems")
            .then((res) => res.json())
            .then((data) => setData(data));
		}
        // console.log(data);
    }, [data]);

    return (
        <>
            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>

                <Carousel show={4}>

                    {data.map((character) => (
                        <LightTooltip className="" title="Hello" placement="right">
                            <div style={{ padding: 8 }}>
                                <Card className={classes.card}>

                                    <CardMedia className={classes.media} image={character.item_image} style={{ width: '90%' }} />

                                    <CardContent>
                                        {/* <Typography color="textSecondary" variant="subtitle2">{character.name}</Typography> */}
                                        <Typography color="primary" variant="h6">{character.name}</Typography>

                                        <Grid container spacing={2}>
                                            <Typography color="textSecondary" variant="subtitle2">
                                                <div class="ui labeled input" label='4.3 {StarIcon}' size="small"><div class="ui label label">4.3 <span className="icons">{<StarIcon />}</span></div>9032 Ratings</div>
                                            </Typography>
                                        </Grid>

                                    </CardContent>
                                    <CardContent>
                                        <FormControl fullWidth>
                                            <Select labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}
                                                variant="outlined" >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </CardContent>

                                    <div className="sahoo">
                                        <CardContent>

                                            <Grid className="carding" container spacing={12}>
                                                <Grid item xs={6}>      <Typography className={classes.text} color="textSecondary" variant="subtitle2"> MRP.Rs 325 </Typography></Grid>
                                                <Grid item xs={6}>     <Typography color="primary" variant="h6">Rs 178</Typography></Grid>
                                            </Grid>

                                            <Grid className={classes.carding} container spacing={2}>
                                                <Typography color="textSecondary" variant="subtitle2" > {<LocalShippingIcon />} Standard Delivery: Today 6: 30 PM - 8: 30 PM </Typography>
                                            </Grid>

                                        </CardContent>

                                        <CardContent>
                                            <Grid className="carding" container spacing={12}>
                                                <Grid item xs={8}>
                                                    <div class="ui  labeled input">
                                                        <div class="ui small label">
                                                            Qty
                                                        </div>
                                                        <TextField placeholder="1" variant="outlined" small ></TextField>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={4}>
                                                    <div className={classes.carding}>
                                                        <Button color="#EFCF77" endIcon={<ShoppingBasketIcon />} variant="contained">ADD</Button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </LightTooltip>
                    ))
                    }
                </Carousel >

            </div >

            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>

                <Carousel show={4}>

                    {data.map((character) => (
                        <LightTooltip className="" title="Hello" placement="right">
                            <div style={{ padding: 8 }}>
                                <Card className={classes.card}>

                                    <CardMedia className={classes.media} image={character.img_url} style={{ width: '90%' }} />

                                    <CardContent>
                                        {/* <Typography color="textSecondary" variant="subtitle2">{character.name}</Typography> */}
                                        <Typography color="primary" variant="h6">{character.name}</Typography>

                                        <Grid container spacing={2}>
                                            <Typography color="textSecondary" variant="subtitle2">
                                                <div class="ui labeled input" label='4.3 {StarIcon}' size="small"><div class="ui label label">4.3 <span className="icons">{<StarIcon />}</span></div>9032 Ratings</div>
                                            </Typography>
                                        </Grid>

                                    </CardContent>
                                    <CardContent>
                                        <FormControl fullWidth>
                                            <Select labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}
                                                variant="outlined" >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </CardContent>

                                    <div className="sahoo">
                                        <CardContent>

                                            <Grid className="carding" container spacing={12}>
                                                <Grid item xs={6}>      <Typography className={classes.text} color="textSecondary" variant="subtitle2"> MRP.Rs 325 </Typography></Grid>
                                                <Grid item xs={6}>     <Typography color="primary" variant="h6">Rs 178</Typography></Grid>
                                            </Grid>

                                            <Grid className={classes.carding} container spacing={2}>
                                                <Typography color="textSecondary" variant="subtitle2" > {<LocalShippingIcon />} Standard Delivery: Today 6: 30 PM - 8: 30 PM </Typography>
                                            </Grid>

                                        </CardContent>

                                        <CardContent>
                                            <Grid className="carding" container spacing={12}>
                                                <Grid item xs={8}>
                                                    <div class="ui  labeled input">
                                                        <div class="ui small label">
                                                            Qty
                                                        </div>
                                                        <TextField placeholder="1" variant="outlined" small ></TextField>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={4}>
                                                    <div className={classes.carding}>
                                                        <Button color="#EFCF77" endIcon={<ShoppingBasketIcon />} variant="contained">ADD</Button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </LightTooltip>
                    ))
                    }
                </Carousel >

            </div >
        </>
    )
}
export default ProductItems;
