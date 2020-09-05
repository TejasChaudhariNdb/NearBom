
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    // maxWidth:5,
  },
  media: {
    height: 140,
  },
});


export default function catlog() {
    const classes = useStyles();


    const users = [
        {
          name: "William",
          location: "🏘️ Lagos",
        },
        {
          name: "Chris",
          location: "🏘️ Moon",
        },
        {
          name: " Rose",
          location: "🏘️ Venice",
        },
        {
          name: "😃 Mike",
          location: "🏘️ Milan",
        },
        {
          name: "😃 Liz",
          location: "🏘️ Beirut",
        }
      ];
    
    



    return (
        <>

<div className="scroll">

         <Grid item 
           container
           direction="row"
           spacing={2}
         >


{users.map((user, index) => (
          <>
           
        
<Grid item xs >

    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://bit.ly/35cbc5R"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {user.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="secondary">
          See More
        </Button>
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






