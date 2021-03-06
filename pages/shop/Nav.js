import React from 'react'
import IconButton from '@material-ui/core/IconButton';;
import Share from '@material-ui/icons/Share';
import ArrowBackRounded from '@material-ui/icons/ArrowBackRounded';
import { useRouter } from 'next/router'


export default function Nav(props) {
   
    const router = useRouter()

   console.log(props);
    return (
        <>
                  <div className="card">

        <IconButton size="small"   edge="end" color="inherit" onClick={() => router.back()}>
            <ArrowBackRounded />
          </IconButton>              
                      <p className="shopName">{props.shopName}</p> 
                
        <IconButton size="small"   edge="end" color="inherit">
            <Share />
          </IconButton>

                  </div>      

        </>
    )
}
