import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';;
import Grid from '@material-ui/core/Grid';
import Share from '@material-ui/icons/Share';

const useStyles = makeStyles({
  
  media: {
    height: 140,
  },
});


export default function catlog() {
    const classes = useStyles();


    const users = [
        {
          name: "Samsung A20",
          price: "$7854",
        },
        {
          name: "Joke2",
          price: "$7855",
        },
        {
          name: "Laptop lenovo",
          price: "$4522",
        },
        {
          name: "Redmi",
          price: "$7899",
        },
        {
          name: "Oppo A7 64",
          price: "$9655",
        }
      ];
    
    



    return (
        <>

<div className="scroll">

         <Grid item 
           container
           direction="row"
           spacing={1}
         >


{users.map((user, index) => (
          <>
           
        
<Grid item xs >

    
    <Card className="product_card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/200/300"
          title={user.name}
        />
        
        <CardContent>
          <Typography variant="h6" component="p">
          {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {user.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>


      <Button size="small" color="secondary" className="info">
          info
        </Button>

        <IconButton size="small" color="primary">
            <Share />
          </IconButton>

      </CardActions>
    </Card>

    </Grid>

    </>

))}


    </Grid> 

    </div>
        </>
    )
}






