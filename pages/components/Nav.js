import React from 'react'
import IconButton from '@material-ui/core/IconButton';;
import Share from '@material-ui/icons/Share';

export default function Nav(props) {
   
   console.log(props);
    return (
        <>
                  <div className="card">
                      
                      <p className="shopName">{props.shopName}</p> 
                
        <IconButton size="small"   edge="end" color="inherit">
            <Share />
          </IconButton>

                  </div>      

        </>
    )
}
