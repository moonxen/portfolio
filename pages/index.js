import React, {useCallback} from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme
} from '@material-ui/core';

import {lightTheme, darkTheme} from "../themes";
import { Brightness4, Brightness7 } from '@material-ui/icons';
import data from '../data.json';

const { name } = data




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: "none",
    backgroundColor: "transparent",
  }
}))

export default function Home({setTheme}) {

  const trigger = useScrollTrigger({ disableHysteresis: true })
  const theme = useTheme();
  const classes = useStyles()


  const toggleTheme = useCallback(() => {
    setTheme(theme => theme.palette.type === 'dark' ? lightTheme : darkTheme)
    console.log(theme.palette.type)
  }, [setTheme])


  return (
    <div className={classes.root}>
      <AppBar color={!trigger ? "transparent" : "inherit"} className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            {name}
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            {theme.palette.type === "dark" ? <Brightness7/> : <Brightness4/>}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
