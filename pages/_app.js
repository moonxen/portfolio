import React, {useEffect, useState} from 'react';
import { MuiThemeProvider, useMediaQuery, CssBaseline } from '@material-ui/core';
import {darkTheme, lightTheme} from "../themes";
import PropTypes from 'prop-types';



export default function MyApp({ Component, pageProps }) {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [theme, setTheme] = useState(
        prefersDarkMode ? darkTheme : lightTheme
    )

    useEffect(() => {
        setTheme(prefersDarkMode ? darkTheme : lightTheme)
    }, [prefersDarkMode])

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps}  setTheme={setTheme}/>
      </MuiThemeProvider>


  )
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};