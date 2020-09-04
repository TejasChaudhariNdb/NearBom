import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';


import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';


import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';



export default function BottomNav() {
  
  
    return (

        <>
        
        <AppBar position="fixed" color="primary" className="appBar">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className="fabButton">
            <AddIcon />
          </Fab>
          <div className="grow"/>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>


        </>


    )
}
